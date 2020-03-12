import {onAddPost} from './../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}

let mapDispatchToProps = {
  onAddPost
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer