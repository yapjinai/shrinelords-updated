import { combineReducers } from 'redux'

import { allShrines, allBacks } from './indexState'
import { shrineName, backgroundId } from './createState'
import { shrine } from './showState'

import { mouseMode } from './toolbarState'
import { query, originalItems, filteredItems } from './itembarState'
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
