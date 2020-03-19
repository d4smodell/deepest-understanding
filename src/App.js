import React, { Suspense } from 'react';
import HeaderContainer from './Components/Header/HeaderContainer'
import Navbar from './Components/Navbar/Navbar'
import store from './redux/redux-store'
import s from './Components/Users/Users.module.css'
import Music from './Components/Music/Music'
import News from './Components/News/News'
import Settings from './Components/Settings/Settings'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import './App.css';
import { withRouter } from 'react-router-dom'
import { getData } from './redux/authReducer'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer'

const Login = React.lazy(() => import('./Components/Login/Login'))
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer')) 
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
}
  render() {
    if(!this.props.initialized) {
      return <img className={s.toggleLoader} src='https://брайтфит.рф/style/images/i-loader.png' alt='load' />
    }
    return (
      <BrowserRouter>
        <div className='appWrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='appWrapperContent'>
        <Suspense fallback={<img className={s.toggleLoader} src='https://брайтфит.рф/style/images/i-loader.png' alt='load' />}>
        <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
        <Route path='/dialogs' render={() => <DialogsContainer />}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
        <Route path='/login' render={() => <Login/>}/>
        </Suspense>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = state => {
  return {
    initialized: state.app.initialized
  }
}

let mapDispatchToProps = {
  getData,
  initializeApp
}




let AppContainer = compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(App)

let MainApp = props => {
  return <BrowserRouter>
  <Provider store={store}>
  <AppContainer />
  </Provider>
  </BrowserRouter>
}

export default MainApp