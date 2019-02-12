import React, { Component } from 'react'

export default class UserLenderSettings extends Component {
  render() {
    return (
      <div>
        Notes on Lender Settings:

- The Calendar / Booking system will be a big part of this system.  I have checkout out a few tutorials, and the one at www.driftingruby.com/episodes/fullcalendar-events-and-scheduling seems to give us the info that we want.  The lender will have an overall calendar that shows them all items they are lending out - with potentially multiple entries on a single day.  Then each item will have it’s own calendar/booking system as well.  The overall calendar will draw in the information from all of their item calendars.  another option is to look at this tutorial (two part i think) - https://medium.com/@TressaSanders/how-to-build-a-booking-system-with-ruby-on-rails-part-1-d9d57ed94d32
- The location will be the other big part of this project.  We could get around it by just listing locations, however providing people with a map is a lot more user friendly and visually more appealing - a tutorial i found which provides partial help with this is at:  https://medium.com/launch-school/building-a-location-finder-app-powered-by-the-google-maps-javascript-api-bb6a37563de
I still need to figure out how to blur out in a 500m or 1km radius - so exact addresses are not given - because thievery - perhaps give this as an option.  

      </div>
    )
  }
}
