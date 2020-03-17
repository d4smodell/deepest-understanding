import profileReducer, { onAddPost, deletePost } from './profileReducer'

let state = {
  postData: [
      {id: 1, post: 'PET_PROJECT'},
      {id: 2, post: 'REACT-REDUX'},
      {id: 3, post: 'POST'},
      {id: 4, post: 'POST'},
    ]
}

test('length of posts should be more', () => {
  let action = onAddPost('testing first')

  let newState = profileReducer(state, {action})

  expect(newState.postData.length).toBe(4)
});

test('after deleting length must be less', () => {
  let action = deletePost(1)
  let newState = profileReducer(state, action)
  expect(newState.postData.length).toBe(3)
})

