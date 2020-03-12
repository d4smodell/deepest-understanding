import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import AddNewPostFormRedux from './MyPostsForm'

const MyPosts = props => {
  let state = props.profilePage

  let postsElements = state.postData.map(p => {
    return (
      <Post message={p.post} id={p.id}/>
    )
  })

  let addNewPost = (value) => {
    props.onAddPost(value.newPostText)
  }

    return (
        <div className={s.postsArea}>
          My Posts
          <AddNewPostFormRedux onSubmit={addNewPost}/>
          <div className={s.posts}>
          {postsElements}
          </div>
        </div>
    )
}



export default MyPosts