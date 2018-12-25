export const expanded = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_NAVBAR':
      return !state
    default:
      return state
  }
}

// export { expanded }
