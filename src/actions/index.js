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
// editbar
export const setMouseMode = (payload) => ({
  type: 'SET_MOUSE_MODE',
  payload: payload
})
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

// function createAction(reducerName) {
//   let type
//   switch (reducerName) {
//     case 'allShrines':
//       type = 'SET_ALL_SHRINES'
//     break;
//     case 'allBacks':
//       type = 'SET_ALL_BACKS'
//     break;
//     case 'shrineName':
//       type = 'SET_SHRINE_NAME'
//     break;
//     case 'backgroundId':
//       type = 'SET_BACKGROUND_ID'
//     break;
//     case 'shrine':
//       type = 'SET_SHRINE'
//     break;
//     case 'mouseMode':
//       type = 'SET_MOUSE_MODE'
//     break;
//     case 'query':
//       type = 'SET_QUERY'
//     break;
//     case 'originalItems':
//       type = 'SET_ORIGINAL_ITEMS'
//     break;
//     case 'filteredItems':
//       type = 'SET_FILTERED_ITEMS'
//     break;
//     default:
//     break;
//   }
//   return (const reducerName (payload) => ({
//     type: type,
//     payload: payload
//   }))
// }

//////////////////////
// navbar
export const toggleExpanded = () => ({
  type: 'TOGGLE_NAVBAR'
})
