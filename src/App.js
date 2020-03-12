import React from 'react';
import HeaderContainer from './Components/Header/HeaderContainer'
import Navbar from './Components/Navbar/Navbar'
import ProfileContainer from './Components/Profile/ProfileContainer'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import s from './Components/Users/Users.module.css'
import Music from './Components/Music/Music'
import News from './Components/News/News'
import Settings from './Components/Settings/Settings'
import UsersContainer from './Components/Users/UsersContainer'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import './App.css';
import { withRouter } from 'react-router-dom'
import { getData } from './redux/authReducer'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer'

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
        <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
        <Route path='/dialogs' render={() => <DialogsContainer />}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
        <Route path='/login' render={() => <Login/>}/>
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




export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(App)
