import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../../utils/validators/validators'

let maxLength = maxLengthCreator(100)

const AddNewMessageForm = props => {
    return (
     <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={'newMessageBody'} placeholder={'New Message'} validate={[required, maxLength]}/>
        <div><button>Send Message</button></div>
     </form>   
    )
}

const AddMessageFormRedux = reduxForm({form: 'addMessageform'})(AddNewMessageForm)

export default AddMessageFormRedux