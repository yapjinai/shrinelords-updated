const shrineName = (state = '', action) => {
  switch (action.type) {
    case 'SET_SHRINE_NAME':
      return action.payload
    default:
      return state
  }
}

const backgroundId = (state = 0, action) => {
  switch (action.type) {
    case 'SET_BACKGROUND_ID':
      return action.payload
    default:
      return state
  }
}

export {
  shrineName,
  backgroundId
}
