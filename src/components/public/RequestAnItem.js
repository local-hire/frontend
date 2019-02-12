import React, { Component } from 'react'

export default class RequestAnItem extends Component {
  render() {
    return (
      <div>
        REQUEST AN ITEM

        Notes on Make a Request:

        There are several reasons behind this feature.  But not part of MVP.  It shows we care about what our users want, and it also gives us insight into the things that people want to borrow.  The other thing it does is provide us with potential marketing material.  I.e. in a request a signed up user would enter, the what, where when and how much for an item they want.  if not signed up, they have to sign up, then targeted ads to that suburb where along the lines of “Do you have an item you are willing to loan for amount, because we know someone that wants to borrow it”.  Then the ad links to a signup landing page for a person to list that particular item with the fields filled in.  A message is then sent to the requester to let them know?  A bit of logic i know, but also user-generated marketing campaigns - yay!

        How it would work from a business perspective: We receive the request, and confirm that it is real - i.e. price / item match and so on.  We then spend $5 on facebook ads which would be tested to make sure we are using the right copy for all ads, source an appropriate image, target the users most likely to own the item - i.e. if it is a surfboard, target people that like surfing located in the suburb that was listed by the user.  $5 on facebook is likely to reach maybe 200 people not a lot i know, but it would create a bunch of loyalty from the requester, result in a hire a new user and lender, which would be important and could result in others seeing and sharing it as well.  Another important side-affect is that we don’t have to spend too much time on creating marketing campaigns and this process can be systemised so a lower skilled person could do it in the future - yay employment!


        USER STORIES

        As a user I want to be able to request items that i need that are not currently available so that i have access to them in the future.

        As a user, if i cannot find an item I require, i would like to post a shout-out request to see if anyone might have the item I need but that’s not currently listed.


        MAILERS

        Hi user first name  you have just submitted a request for a item name on the date end  for between $ in user location/suburb.  We will do a bit of advertising in the area and try to find someone that can help you out with that request.  If you are on facebook you may see the add, or you can view it on our Facebook Page link to facebook page if so please like and share in case some of your friends can help you out with that item.

        We will message you if we find someone that can help you out!

        Have a great day, the team at local hire

      </div>
    )
  }
}
