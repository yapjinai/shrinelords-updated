import { combineReducers } from 'redux'

import { allShrines, allBacks } from './indexState'
import { shrineName, backgroundId } from './createState'
import { shrine } from './showState'

import { mouseMode, query, originalItems, filteredItems } from './editbarState'
import { expanded } from './navbarState'

export default combineReducers({
  allShrines,
  allBacks,
  shrineName,
  backgroundId,
  shrine,
  mouseMode,
  query,
  originalItems,
  filteredItems,
  expanded
})
