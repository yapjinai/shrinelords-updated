const allShrines = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_SHRINES':
      return action.payload
    default:
      return state
  }
}

const allBacks = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_BACKS':
      return action.payload
    default:
      return state
  }
}

export { allShrines, allBacks }
