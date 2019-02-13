import React, { Component } from 'react'

export default class ItemNew extends Component {
  render() {
    return (
      <div>
        Add a new item 

        Item Name 

        Item description 

        Upload images 
        - show avatars - like what anhar did - have a remove button underneath  

        Usage instructions for the item - if applicable 

        amount per day / hour / week 

        duartion 

        location of item 

        Availability 


        Notes for Add Item:

- THIS PAGE WILL HAVE THE LENDER SIDEBAR ON THE LEFT HAND SIDE AS WELL
- When it comes to entering the location, the person will input an address for the item.  Which ideally we will change to a location (potentially blurred a bit - or give it a radius to mask the exact location precisely - generate a rand distance from between 1 - 500 metres, then create a circle on the map.  make sure the map contains the original location still though.  
- There is a geocoder gem that could help us with this, however the build is currently failing with recent updates to google maps and rails 5.2 - https://github.com/alexreisner/geocoder
- another 
- We will probably want to create a category list (that we hardcode?) that people assign the item to (so potentially allow them to create a category (could cause problems though).  A tutorial to help with this “making a category system for rails” is here: - https://www.youtube.com/watch?v=_xKglx3ox0Q
Building a location finder app powered by the google maps api (this is for finding - hard coded, so just figure out how to make user input) - https://medium.com/launch-school/building-a-location-finder-app-powered-by-the-google-maps-javascript-api-bb6a37563de
Creating an airbnb map with react - https://www.nopio.com/blog/airbnb-map-tutorial-react-rails/
- it would be cool if we could make the images draggable - to allow the user to order the images differently.

MAILERS

Congrats, you have just uploaded a new item.  If you want to help spread the word, you can share your item on facebook (link to do that automatically).

You can view the item page here(link).  This is what visitors to the site will see

You can edit the item page here(link).  


Next step - share this item with your friends on facebook / this is how it will look
- share this item on twitter / this is how it will look
- share this on instagram / this is how it will look 
- share this on 

go back to profile 
go to search 

the above next steps could be their own component that only show up once a new item is submitted.

      </div>
    )
  }
}
