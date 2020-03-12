import {profileAPI} from './../api/api'

const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET-USERS-PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
        postData: [
            {id: 1, post: 'Design is great!'},
            {id: 2, post: 'Project is made by Teacher'},
            {id: 3, post: 'Stylish Onizuka'},
          ],
        profile: null,
        status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_POST: {
        let newPost = {
            id: 9, post: action.newPostText
        }
        return {
            ...state, 
            postData: [...state.postData, newPost],
        }
    }
        case SET_USERS_PROFILE:
          return {...state, profile: action.profile}

        case SET_STATUS:
          return {...state, status: action.status}

        default:
            return state
    }
}

export const onAddPost = (newPostText) => ({type: ADD_POST, newPostText})

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId)
    .then(data => {
      dispatch(setUsersProfile(data))
  })
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
    .then(data => {
      dispatch(setStatus(data))
    })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
    .then(data => {
      if(data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
  }
}

export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export default profileReducer
