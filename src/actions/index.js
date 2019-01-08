//////////////////////
// index
export const setAllShrines = (payload) => ({
  type: 'SET_ALL_SHRINES',
  payload: payload
})
export const setAllBacks = (payload) => ({
  type: 'SET_ALL_BACKS',
  payload: payload
})

//////////////////////
// create
export const setShrineName = (payload) => ({
  type: 'SET_SHRINE_NAME',
  payload: payload
})
export const setBackgroundId = (payload) => ({
  type: 'SET_BACKGROUND_ID',
  payload: payload
})

//////////////////////
// show
export const setShrine = (payload) => ({
  type: 'SET_SHRINE',
  payload: payload
})

//////////////////////
// toolbar
export const setMouseMode = (payload) => ({
  type: 'SET_MOUSE_MODE',
  payload: payload
})

//////////////////////
// itembar
export const setQuery = (payload) => ({
  type: 'SET_QUERY',
  payload: payload
})
export const setOriginalItems = (payload) => ({
  type: 'SET_ORIGINAL_ITEMS',
  payload: payload
})
export const setFilteredItems = (payload) => ({
  type: 'SET_FILTERED_ITEMS',
  payload: payload
})

//////////////////////
// navbar
export const toggleExpanded = () => ({
  type: 'TOGGLE_NAVBAR'
})
