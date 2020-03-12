import React from 'react'
import Profile from './Profile'
import {getProfile, getStatus, updateStatus} from './../../redux/profileReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { WithAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
    componentDidMount() {
      let userId = this.props.match.params.userId
      if(!userId) {
        userId = this.props.authorisedUserId
        if(!userId) {
          this.props.history.push('/login')
        }
      }
      this.props.getProfile(userId)
      this.props.getStatus(userId)
    }

    render () {
      return (
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
    }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.id,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = {
  getProfile,
  getStatus,
  updateStatus
}



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect,
  withRouter
)(ProfileContainer)