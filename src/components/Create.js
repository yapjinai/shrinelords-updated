import React, { Component } from 'react'
import '../assets/css/Creation.css'

const backsURL = "http://localhost:3000/api/v1/backs"
const shrinesURL = "http://localhost:3000/api/v1/shrines"

export default class Create extends Component {

  render(){
    return(
      <div className="Create">
        <h1>Create</h1>
      </div>
    )
  }
}
