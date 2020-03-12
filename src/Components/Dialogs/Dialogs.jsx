import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import AddMessageFormRedux from './DialogsForm/DialogsForm'

const Dialogs = props => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map(d => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    })

    let messagesElements = state.messagesData.map(m => {
        return (
            <Message message={m.message} id={m.id}/>
        )
    })

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs