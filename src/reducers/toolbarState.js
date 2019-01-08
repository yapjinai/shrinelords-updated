export const mouseMode = (state = 'move', action) => {
  switch (action.type) {
    case 'SET_MOUSE_MODE':
      return action.payload
    default:
      return state
  }
}
