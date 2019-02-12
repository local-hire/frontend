import React, { Component } from 'react'

export default class UserBorrowedItems extends Component {
  render() {
    return (
      <div>
        You have the following items in your possession at the moment:

        Item name   Image   Description     Lent From Retunr Date   button 
                                                                    mark as returned to lender 
                                                                    pending confirmation from lender





        You have borrowed these items in the past: 

        item name   image   description     lent from       button  
                                                            request item again 
        
                                                            Notes on User - Borrowed Items

- “Mark as Returned to lender” is a button that the user presses to indicate they have returned the item.
- “Pending confirmation from lender” is when the user has already pressed the ‘mark as returned to lender”, but the lender is yet to press their “item returned” button.
- The “Request Item Again” links to the item show page realted to that entry




      </div>
    )
  }
}
