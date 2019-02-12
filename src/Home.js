import React from 'react'
import './Home.css'

export default class Home extends React.Component {
  state = {}

  render() {
    console.log(this.props.payment)
    return (
      <div>
        <div id="home" className="home">
          This is the home page
        </div>
      </div>
    )
  }
  }
  
