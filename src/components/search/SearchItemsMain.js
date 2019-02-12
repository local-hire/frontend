import React, { Component } from 'react'

export default class SearchItemsMain extends Component {
  render() {
    return (
      <div>
        What are you looking for?

        Item Name 

        Category 

        When would you like it?
        - pop up for calendar - date range picker

        price range free - $500

        search button 

        Notes:
        Notes for Homepage:

- The square next to “When would you like it” will pop up a calendar
- The underlined “10 km” is a clickable option which will bring up a selection option
- The underlined “Heathmont, AU” is a clickable option which will bring up a selection option as well.  In order for this to work we will need to find an api that allows for geolocation.  Some plugin with google maps should do it.  Will have to research this though.  Will also require suggested names as well for geolocation.
- Creating a search form - https://guides.rubyonrails.org/form_helpers.html#a-generic-search-form
- Not one hundred percent sure on how to do the range thing, just yet
- Because we may be sifting through a lot of entries via this page (i.e. thousands or more) it is best to use the find_each or find_in_batches helper methods should be used when itearting over data sets with more than 1000 entries.  These methods retrieve 1000 records at a time by default and will not overwhelm memory.  The all method puts all the records in memory and can be inefficient or cause the computer to crash if there is not enough room in memory.
- this tutorial will help developing the advanced search that makes up this page: https://www.youtube.com/watch?v=eUtUquKc2qQ


        Models to be used:
        - item.name 
        - item.availability
        - item.price 
        - item.location 

      </div>
    )
  }
}
