import React, { Component } from 'react'
import '../assets/css/Itembar.css'

// React-redux
import { connect } from 'react-redux'
import {
  setQuery,
  setOriginalItems,
  setFilteredItems
} from '../actions'

import ItembarItem from './ItembarItem'

const apiURL = 'http://localhost:3000'
class Itembar extends Component {
  render() {
    return(
      <div className="Itembar">
        {this.displayItems()}
      </div>
    )
  }

  componentDidMount() {
    this.loadItems()
  }

  ////////////////////

  loadItems = () => {
    fetch(`${apiURL}/api/v1/items`)
    .then(res => res.json())
    .then(items => {
      this.props.setOriginalItems(items)
      this.props.setFilteredItems(items)
    })
  }

  displayItems = () => {
    return this.props.filteredItems.map(item => {
      return (
        <ItembarItem
          createOffering={this.props.createOffering}
          key={item.id}
          item={item} />
      )
    })
  }

} // end component

///////////////////////
// redux
///////////////////////

const mapStateToProps = (state) => ({
  query: state.query,
  originalItems: state.originalItems,
  filteredItems: state.filteredItems,
})

const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => dispatch(setQuery(query)),
  setOriginalItems: (originalItems) => dispatch(setOriginalItems(originalItems)),
  setFilteredItems: (filteredItems) => dispatch(setFilteredItems(filteredItems)),
})

const connectedItembar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Itembar)


export default connectedItembar;
