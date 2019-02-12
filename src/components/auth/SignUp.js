import React from 'react';
import axios from 'axios';
import Payment from './Payment';
import Cookies from 'js-cookie';
import './Form.css'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      isSubmitted: false,
      frequencyOptions: [],
      passwordMsg: ''
    }
  }
  // componentDidMount = () => {
  //   // const url = 'https://cocktail-app.now.sh/me' //PROD
  //   const url = 'http://localhost:5000/me' // DEV
  //     axios.get(url)
  //     .then(res => res.json())
	// 		.then(data => {
	// 			this.setState({
	// 				selectedFrequency: data.frequencyOptions	
	// 			});
  //     });
  //   }

  componentDidMount = () => {
    const url = `${process.env.REACT_APP_DOMAIN}/me`
    const token = Cookies.get('token')
    // console.log("this is token " + token)

    if(token){
      axios.get(url, {
        headers: {
          'Authorization': `bearer ${token}`
        }
      })
      .then(resp => {
        // const {token} = resp.data
        this.setState({
          selectedFrequency: resp.data.frequencyOptions
        });
      });
    }
  }

  handleFrequencyChange = (e) => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  handleInputChange = (e) => {
    const { value, id } = e.currentTarget;
    this.setState({ [id]: value})

  }

  submitForm = (e) => {
    e.preventDefault()

    const {  firstName, lastName, email, password, session, phone, streetAddress, suburb, postcode, ausState, dateJoined, numberOfOrders, stripeId, active, admin, selectedOption, passwordConfirm} = this.state
    const url = `${process.env.REACT_APP_DOMAIN}/register`

    if(password === passwordConfirm){
      this.setState({passwordMsg: "passwords match!"})

      const data = { firstName, lastName, email, password, session, phone, streetAddress, suburb, postcode, ausState, dateJoined, numberOfOrders, stripeId, active, admin, selectedOption }
    
      axios.post(url, data)
      .then(resp => {
        this.setState({ message: 'well done buddy you just registered for a cocktail subscription', error: null, isSubmitted: true })
        const {token} = resp.data
        Cookies.set('token', token)
        this.props.setToken(token)
        // console.log(resp)
      })
      .catch(err => {
          console.log(err.response)
          if (err.response === 403) {
            this.setState({ error: 'Nope!', message: null})
          }
      })
    } else {
      this.setState({passwordMsg: "passwords do not match!"})
    }
    // // const url = "https://cocktail-app.now.sh/register" // PROD
    
  }

  
  render() {
    const { error, message, email, selectedOption } = this.state
    return (
      <div id="register" className="site-form">
        <h2>SIGN UP FOR A COCKTAIL SUBSCRIPTION</h2>
        <form>
          <strong>You must be over 18 in order to sign up.</strong><br/>
          {/* make a checkbox that is required for this */}

          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" onChange={this.handleInputChange}/><br/>
          
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" onChange={this.handleInputChange}/><br/>
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={this.handleInputChange}/><br/>
          
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" onChange={this.handleInputChange}/><br/>

          <label htmlFor="passwordConfirm">Password: </label>
          <input type="password" id="passwordConfirm" onChange={this.handleInputChange}/><br/>
          
          {this.state.passwordMsg && <p>{this.state.passwordMsg}</p>}

          <h4>Where would you like your cocktails delivered?</h4>

          <label htmlFor="streetAddress">Street Address:</label>
          <input type="text" id="streetAddress" onChange={this.handleInputChange}/><br/>

          <label htmlFor="suburb">Suburb:</label>
          <input type="text" id="suburb" onChange={this.handleInputChange}/><br/>

          <label htmlFor="postcode">Postcode:</label>
          <input type="number" id="postcode" onChange={this.handleInputChange}/><br/>

          <label htmlFor="ausState">State:</label>
          <input type="text" id="ausState" onChange={this.handleInputChange}/><br/>



          <div className="form-check">
            <label htmlFor="frequency">Monthly Frequency</label>
            <input type="radio" id="frequency1" value="monthlyFrequency" name="frequency" checked={this.state.selectedOption === "monthlyFrequency"} onChange={this.handleFrequencyChange}/>
          </div>

          <div className="form-check">
            <label htmlFor="frequency">Quarterly Frequency</label>
            <input type="radio" id="frequency2" value="quarterlyFrequency" name="frequency" checked={this.state.selectedOption === "quarterlyFrequency"} onChange={this.handleFrequencyChange}/>
          </div>
            <button onClick={this.submitForm}>JOIN UP</button>
          </form>
            {this.state.isSubmitted && email && <Payment {...this.props} email={email} selectedOption={selectedOption} />}
            { error && <p>{ error }</p> }
            { message && <p>{ message }</p>}

            {/* { user.stripeId && <Link to = /admin/>} */}
          
            Local Hire - a place to hire anything

            User Sign Up 

            firstName 

            lastName 

            email  

            password 

            password2

            phone number 
            <p>we ask for you phone number as it adds a layer of protection for those people lending you items.  </p>

          
          </div>
        
  )
}
}

