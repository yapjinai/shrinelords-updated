import React, { Component } from 'react'
import '../assets/css/Itembar.css'

import ItembarItem from './ItembarItem'

class Itembar extends Component {
  render() {
    return(
      <div className="Itembar">
        {this.displayItems()}
      </div>
    )
  }

  displayItems = () => {
    return this.props.items.map(item => {
      return (
        <ItembarItem
          createOffering={this.props.createOffering}
          key={item.id}
          item={item} />
      )
    })
  }

}

export default Itembar
