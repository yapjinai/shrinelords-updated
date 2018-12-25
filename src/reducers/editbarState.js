const mouseMode = (state = 'move', action) => {
  switch (action.type) {
    case 'SET_MOUSE_MODE':
      return action.payload
    default:
      return state
  }
}

//////////////////////////
// itembar state

const query = (state = '', action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return action.payload
    default:
      return state
  }
}

const originalItems = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORIGINAL_ITEMS':
      return action.payload
    default:
      return state
  }
}

const filteredItems = (state = [], action) => {
  switch (action.type) {
    case 'SET_FILTERED_ITEMS':
      return action.payload
    default:
      return state
  }
}

export { mouseMode, query, originalItems, filteredItems }
