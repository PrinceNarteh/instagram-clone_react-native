interface IAction {
  currentUser: object
}

const initialState = {
  currentUser:null
}

export const user = (state = initialState, action: IAction) => {
  return {
    ...state,
    currentUser: action.currentUser
  }
}