import React, { Component } from 'react'
import '../assets/css/Editbar.css'
//
// // React-redux
// import { connect } from 'react-redux'
// import {
//   setMouseMode,
//   setQuery,
//   setOriginalItems,
//   setFilteredItems
// } from '../actions'

import Itembar from './Itembar'
import Toolbar from './Toolbar'


class Editbar extends Component {
  render() {

    return (
      <div className="Editbar" onClick={this.toggle}>
        <div>
          <input
            name='filter'
            placeholder='search'
            value={this.props.query}
            onChange={this.handleChange}
          />
        </div>
        <Itembar
          items={this.props.filteredItems}
          createOffering={this.props.createOffering}
        />
        <Toolbar
          updateMouseMode={this.props.updateMouseMode}
        />
      </div>
    )
  }

///////////////////////////////////////


  // for filter query
  handleChange = (e) => {
    const newFilteredItems = this.props.originalItems.filter(i => {
      const nameWithSpaces = i.name.split('-').join(' ').toLowerCase()

      return (
        nameWithSpaces.includes(e.target.value.toLowerCase()) ||
        i.tags.includes(e.target.value.toLowerCase())
      )
    })

    this.props.setQuery(e.target.value)
    this.props.setFilteredItems(newFilteredItems)
  }
} // end component

// ///////////////////////
// // redux
// ///////////////////////
//
// const mapStateToProps = (state) => ({
//   query: state.query,
//   originalItems: state.originalItems,
//   filteredItems: state.filteredItems,
// })
//
// const mapDispatchToProps = (dispatch) => ({
//   setMouseMode: (mouseMode) => dispatch(setMouseMode(mouseMode)),
//   setQuery: (query) => dispatch(setQuery(query)),
//   setOriginalItems: (originalItems) => dispatch(setOriginalItems(originalItems)),
//   setFilteredItems: (filteredItems) => dispatch(setFilteredItems(filteredItems)),
// })
//
// const connectedEditbar = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Editbar)
//
//
// export default connectedEditbar;

export default Editbar
