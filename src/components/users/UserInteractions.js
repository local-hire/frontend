import React, { Component } from 'react'

export default class UserInteractions extends Component {
  render() {
    return (
      <div>
        This is where you are able to see all interactions with other members:
        - see all messages
        - see all loans - borrowed from the user 
        - see all loans - lent to user
        - see amount of money garnered or paid to the user 
      </div>
    )
  }
}
