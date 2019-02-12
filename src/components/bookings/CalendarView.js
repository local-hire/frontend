import React, { Component } from 'react'

export default class CalendarView extends Component {
  render() {
    return (
      <div>
        
        this is a calendar view 

        click on a date and see any bookings 

        color coded:
        - green - for current items you have borrowed in your possession 
        - blue - upcoming 
        - orange - pending bookings 
      </div>
    )
  }
}
