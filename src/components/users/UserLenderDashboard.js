import React, { Component } from 'react'

export default class UserLenderDashboard extends Component {
  render() {
    return (
      <div>
        total bookings # - this month, past 7 days, all time 
        total views for all items 
        your conversion rate 
        total monthly revenue for - last 30 days, this month
        
        bookings, reviews, conversion rates, date range - this will all be a chart/s that users can toggle

        upcoming bookings 

        your most popular items  
        rank    title   views(last 30 days) bookings    $

        add item + 


        Notes on Lender Dashboard:
- we can probably use the Adminlte bootstrap code on this one to make it more appealing
- basic info to begin with, but eventually more detailed analytics would be beneficial for lenders
- Conversion rate is simply Bookings / Views
with the analytics we should allow lenders to choose a date range for the information
- the view/screen that the lender is on, will be shaded a different color, to help them know where they are - in the above - it is white.
- most popular will just be a table that returns queries from tables related ot a user, it can be ordered by Views, Bookings or Revenue
- to create the chart we can use the gem ‘chartkick’ - there is a tutorial here - https://www.youtube.com/watch?v=g1EOHvzljwY


      </div>
    )
  }
}
