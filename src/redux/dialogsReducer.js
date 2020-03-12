const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
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


