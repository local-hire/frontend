import React, { Component } from 'react'

export default class BookingConfirmation extends Component {
  render() {
    return (
      <div>
        You're almost done 
        please make sure that your information is correct before proceeding - submitting your request 

        Name: user name 
        Email: email 
        Item Booked: item name 
        Item Description: item description 
        Lender: lender profile link - and first name 
        booked period: date range - start date / time - end date/ time 

        button - book now 
        botton - take me back 
        button - edit booking 


        Notes on Charge:

- This is essentially what we went through with scott the other day, any troubles, check out his video in slack
- There will be a difference though, we want to use the Stripe Connect thing - which is the payments for the marketplace product that Stripe has - we will have to read the docs on that, they are available here: https://stripe.com/connect

      </div>
    )
  }
}
