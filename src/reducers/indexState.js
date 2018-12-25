const allShrines = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_SHRINES':
      return action.allShrines
    default:
      return state
  }
}

const allBacks = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_BACKS':
      return action.allBacks
    default:
      return state
  }
}

export { allShrines, allBacks }
