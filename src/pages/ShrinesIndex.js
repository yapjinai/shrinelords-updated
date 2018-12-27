// React
import React, { Component } from 'react'
// React Router
import { Link } from 'react-router-dom'
import '../assets/css/ShrinesIndex.css'
// React-redux
import { connect } from 'react-redux'
import {
  setAllShrines,
  setAllBacks
} from '../actions'

////////////////////
const backsURL = "http://localhost:3000/api/v1/backs"
const shrinesURL = 'http://localhost:3000/api/v1/shrines'

class ShrinesIndex extends Component {
  // state = {
  //   shrines: [],
  // }

  render(){
    return(
      <div className="container">
        {this.toAbout()}
        <div className="ShrinesIndex">
            <ul>
              {this.props.allShrines.map(s => {
                return (
                  <li>
                    <Link to={`/shrines/${s.id}`}>
                      {s.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        {this.toCreation()}
      </div>
    )
  }

  componentDidMount(){
    fetch(shrinesURL)
    .then(r => r.json())
    .then(res => {
      this.props.setAllShrines(res)
      console.log(this.props.allShrines);
    })
  }

////////////////////////////////

  toAbout = () => {
    return(
      <div className="to-about">
        <Link to="/about">
          About
        </Link>
      </div>
    )
  }

  toCreation = () => {
    return(
      <div className="to-creation">
        <Link to="/creation">
          Create
        </Link>
      </div>
    )
  }
} // end component

///////////////////////
// redux
///////////////////////

const mapStateToProps = (state) => ({
  allShrines: state.allShrines,
  allBacks: state.allBacks,
})

const mapDispatchToProps = (dispatch) => ({
  setAllShrines: (shrines) => dispatch(setAllShrines(shrines)),
  setAllBacks: (backs) => dispatch(setAllBacks(backs)),
})

const connectedShrinesIndex = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShrinesIndex)


export default connectedShrinesIndex;
