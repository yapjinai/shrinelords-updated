import React, { Component } from 'react'
import '../assets/css/Editbar.css'

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
        <Itembar/>
        <Toolbar/>
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

export default Editbar
