import {profileAPI} from './../api/api'

const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET-USERS-PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
        postData: [
            {id: 1, post: 'PET_PROJECT'},
            {id: 2, post: 'REACT-REDUX'},
            {id: 3, post: 'POST'},
            {id: 4, post: 'POST'},
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

        case DELETE_POST:
          return {...state, postData: state.postData.filter(p => p.id !== action.id)}

        default:
            return state
    }
}

export const onAddPost = (newPostText) => ({type: ADD_POST, newPostText})

export const getProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
      dispatch(setUsersProfile(data))
}

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
      dispatch(setStatus(data))
  }

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
      if(data.resultCode === 0) {
        dispatch(setStatus(status))
      }
  }

export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = postId => ({type: DELETE_POST, postId})
export default profileReducer
