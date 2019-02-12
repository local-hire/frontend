import React, { Component } from 'react'

export default class ItemShow extends Component {
  render() {
    return (
      <div>
        GUY - THESE BE BROKEN OUT INTO COMPONENTS AND REQUIRED IN:

        Images of items - in a slide show - or arrow left and right 

        Item Name     - viewed # times this month 

        Item Image/s 

        Save this item to your saved items list 

        Item amount for duration $ and time 

        choose a start date 

        choose an end date 

        item rating in stars by # of users 

        lender avatar - lend from user name 

        message user - first before borrowing 


        Availability of item 

        this month - calendar 
        next month - calendar 

        how to use this item 
        this area will contain usage information - we could allow for links to youtube, image uploads or videos as well
        read more ... 


        item reviews 
        user name   text    user rating         month/year          report / flag 


        questions and answers           search Q and A's 
        Q how big is the item 
        A pretty big 

        Q what color is it 
        A hot pink 

        Ask a question about the item 

        if there are no questions yet show - "no questions have been asked about this item yet"


        Notes on Item - Show:

- this is most likely going to be the most important view of the site.
- may add another area in here - Questions and Answers about this Item
- the right hand side bar from $ amount per timeframe down to message user will all be part of a sticky sidebar, that will have a margin-top of say 60px from the bottom of the sticky item.nav
- we should restrict the item’s description to say 255 - 300 words, so that they only put in the useful information into the description 
- Reviews - sort by dropdown - this will sort by Date / Ratings / User

MODELS
Item
- @item.name
- @item.image
-@item.location
- @item.description
- @item.price
- @item.duration
- @item.availability
- @item.instructions

LenderRatings

-@LR.average
-@LR.number

Lender

-@lender.firstname
-@lender.avatar

ItemRatings

-@user.avatar
-@user.name
-@IR.rating
-@IR.review
-@IR.date

Q and A

-@qanda.question
-@qanda.answer
-@user.id
-@user.avatar
-@user.firstname
-@lender.firstname
-@lender.id
-@lender.avatar






MAILERS - When a Question is posted

Hi user  thanks for posting your question about lenders first name we will send you an email when they respond.

Have a great day
The team at business name 


      </div>
    )
  }
}
