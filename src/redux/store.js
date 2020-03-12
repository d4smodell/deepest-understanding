import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'

let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Eva'},
                {id: 2, name: 'Alice'},
                {id: 3, name: 'Vasilisa'},
                {id: 4, name: 'Melissa'},
                {id: 5, name: 'Alexander'},
            ],
            
            messagesData: [
              {id: 1, message: 'Design decision completes that room very well.'},
              {id: 2, message: 'Shutter 2004'},
              {id: 3, message: 'GTO'},
              {id: 4, message: 'Rasen 1998'},
              {id: 5, message: 'Black Lagoon'},
            ],
    
            newPostMessage: ''
        },
        
        profilePage: {
            postData: [
                {id: 1, post: 'Design is great!'},
                {id: 2, post: 'Project is made by Teacher'},
                {id: 3, post: 'Stylish Onizuka'},
              ],
              newPostText: ''
        }
    },

    _changeStore () {
        console.log('state')
    },

    getState() {
        return this._state
    },

    subscribe (observer) {
        this._changeStore = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._changeStore(this._state)
    }
}

window.state = store

export default store