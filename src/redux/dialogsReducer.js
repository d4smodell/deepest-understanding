const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: 'User 1'},
        {id: 2, name: 'User 2'},
        {id: 3, name: 'User 3'},
        {id: 4, name: 'User 4'},
        {id: 5, name: 'User 5'},
    ],
    
    messagesData: [
      {id: 1, message: 'Fight Club'},
      {id: 2, message: 'Shutter 2004'},
      {id: 3, message: 'GTO'},
      {id: 4, message: 'Rasen 1998'},
      {id: 5, message: 'Black Lagoon'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 9, message: action.newMessageBody}]
            }

        default: 
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer


