import React, { Component } from 'react'
import axios from 'axios'

export default class UserShow extends Component {

state = {}

componentDidMount = () => {
  
  const url = `${process.env.REACT_APP_DOMAIN}/me`
  axios.get(url)
    .then((resp) => {
      const {email, firstName, lastName, phone, deliveryAddress, admin} = resp.data
      // console.log(resp.data)
      this.setState({email,firstName, lastName, phone, deliveryAddress, admin})
    }).catch((err) => {
      console.log(err)
    });
}


  render() {
    return (
      <div>
        {/* <img src=""/> */}

        <h5>{this.firstName} {this.lastName}</h5>

        <div>
          <h1>Hello {this.state.firstName}</h1>
          <p>First Name: {this.state.firstName}</p>
          <p>Last Name:  {this.state.lastName} </p>
          <p>Phone: {this.state.phone}</p>
          <p>Delivery Address: {this.state.deliveryAddress}</p>
          <p>Email: {this.state.email}</p>
        </div> 

        
        {/* <img src="stars"/><p id="star-rating">${averageRating} stars from ${userNumber} users</p> */}
       

        <button>Message</button>
        

        <p>{user.personalDescription}</p>

        {!this.state.userRatings && <p>There are no reviews for {user.firstName} yet</p>}
        {this.state.userRatings && 
                <>
                  <h4>{user.firstName}'s' Reviews:</h4>
                    <table className="user-review-table">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Date</th>
                          <th>Rating</th> 
                          <th>Review</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.userRatings.map(order => 
                            { return (
                            <tr>
                              <td>{userRatings.userWhoReviewed}</td>
                              <td>{userRatings.date}</td>  
                              <td>{userRatings.rating}</td>
                              <td>{userRatings.review}</td>
                            </tr>)
                          }
                          )}
                          </tbody>
                    </table>
        }


        <h4>Charities, Clubs and Associations that {user.firstName} supports:</h4>
                    <table className="user-review-table">
                      <thead>
                        <tr>
                          <th>Organisation</th>
                          <th>Description</th>
                          <th>{user.firstName}'s items</th> 
                          
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.userRatings.map(order => 
                            { return (
                            <tr>
                              <td>{organisation.name}
                              {organisation.logo}</td>

                              <td>{organisation.description}</td>  
                              <td>link to pop up or modal for each item that user has that supports this CCA - </td>
                            </tr>)
                          }
                          )}
                          </tbody>
                    </table>


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
