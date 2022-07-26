export const initialState = {
  user: null,
}
export const actionTypes = {
  SET_USER: 'SET_USER',
}
const reducer = (state, actiton) => {
  console.log(actiton)
  switch (actiton.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: actiton.user,
      }
    default:
      return state
  }
}
export default reducer
