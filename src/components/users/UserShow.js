import React, { Component } from 'react'

export default class UserShow extends Component {
  render() {
    return (
      <div>
        Users Avatar 

        Users First Name 

        ratings - in stars 
        by - number of reviews 

        from # of lenders 

        Message 

        Users Description 

        Reviews 
        review by (lender) reviewed on (date) review (text) rating (star)

        Supports the following CCA's 
        - avatar / org name 

        Users items 

        Search users name items 


        average response time 
        # minutes

        average response rate 
        % of messages replied to

        User has items available in these categories:
        - audio / visual 
        - books 
        - furniture 
        - outdoor furniture 
        - gardening tools 
        - power tools 


        Notes on User Show:

- this is the page that a person is directed to when they click upon a users avatar
 this is needed for lenders to check out the profile of potential people they want to lend
- shared items
- saved items
- Reviews from lenders
- User avatar
- User intro (self-created
      </div>
    )
  }
}
