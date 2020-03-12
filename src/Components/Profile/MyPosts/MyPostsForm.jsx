import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from './../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

let maxLength = maxLengthCreator(20)

const AddNewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
    <Field component={Textarea} name={'newPostText'} placeholder={'Add Post'} validate={[required, maxLength]}/>
    <div><button>Add Post</button></div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: 'addNewPost'})(AddNewPostForm)

export default AddNewPostFormRedux