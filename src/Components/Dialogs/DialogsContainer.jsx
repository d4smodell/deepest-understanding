import Dialogs from './Dialogs'
import {sendMessageCreator} from '../../redux/dialogsReducer'
import { connect } from 'react-redux'
import { WithAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)
