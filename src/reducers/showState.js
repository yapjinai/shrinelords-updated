const shrine = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SHRINE':
      return action.payload
    default:
      return state
  }
}

export { shrine }
