import React, { Component } from 'react'

export default class ItemNavbar extends Component {
  render() {
    return (
      <div>
        share this item 
        save this item 

        description  - jump link

        availability - jump link

        how to use - jump link

        reviews - jump link 

        questions and answers - jump link 

        Notes for _Nav Bar - Item Sticky

- this is a different navbar to the normal ones.  this navbar provides jump links to the various sections on an items show page.  This is a more useful use of a navbar when someone is looking at an item
- may need to rearrange items as suitable.  to match the order on the item show page, if that is ever changed
- it is a sticky header so that as a person scrolls down the item page, it sticks to the top of the screen.
- “Share this item” - brings up a modal as shown below
- “Save this item” - saves this item (it’s link) to the logged in users account - in case they want to save the item to borrow at a later date.
- This will be wrapped up in an if statement - if on /item/ page - display.
- When the user scrolls down the logged in, logged out header will not be sticky, this will show up once they have scrolled down the 100px that the other headers take up, and will stay on the top of the screen.


        share this item modal: 
        - img facebook 
        - img twitter 
        - img messenger 
        - img link 
        - img embed 
        - img email 


      </div>
    )
  }
}
