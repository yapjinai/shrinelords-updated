import React, { Component } from 'react'
import '../assets/css/Creation.css'

// React-redux
import { connect } from 'react-redux'
import {
  setShrineName,
  setBackgroundId
} from '../actions'

/////////////

const backsURL = "http://localhost:3000/api/v1/backs"
const shrinesURL = "http://localhost:3000/api/v1/shrines"

class Create extends Component {

  render(){
    return(
      <div className="Create">
        <h1>Create</h1>

        <form id='createForm'>
          <label
            value='Shrine name'
            htmlFor="shrineName"
          />
          <input
            type="text"
            name="shrineName"
            value={this.props.shrineName}
          />
          <input
            type="submit"
            value='Create'
          />
        </form>
      </div>
    )
  }

  componentDidMount() {
    fetch(backsURL)
    .then(r => r.json())
    .then(res => {
      this.props.setAllBacks(res)
    })
  }
}

///////////////////////
// redux
///////////////////////

const mapStateToProps = (state) => ({
  shrineName: state.shrineName,
  backgroundId: state.backgroundId,
})

const mapDispatchToProps = (dispatch) => ({
  setShrineName: (shrineName) => dispatch(setShrineName(shrineName)),
  setBackgroundId: (backgroundId) => dispatch(setBackgroundId(backgroundId)),
})

const connectedCreate = connect(
  mapStateToProps,
  mapDispatchToProps
)(Create)


export default connectedCreate;
