import React, { Component } from 'react';
import axios from 'axios';
// import Logout from './Logout'
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../public/Form.css'   

export default class Login extends Component {

  state = { message: ''}

  componentDidMount(){
    const token = Cookies.get('token')
    if (token) {
      this.setState({token})
    }
  }

  handleInputChange = (e) => {
    const { value, id } = e.currentTarget;
    this.setState({ [id]: value})
  }

  submitForm = (e) => {
    e.preventDefault()
    // console.log(this.state)
    const { email, password } = this.state
    
    const url =  `${process.env.REACT_APP_DOMAIN}/login`
    const data = { email, password }
    axios.post(url, data)
      .then(resp => {
        console.log(resp)
        const { user, token } = resp.data
        const { admin } = user
        // console.log(admin)
        Cookies.set('token', token)
        this.setState({  admin:admin, message: 'well done buddy you just LOGGED IN for a cocktail subscription', error: null, email: email, loggedIn: true})
        this.props.setToken(token)
        this.props.setAdmin(admin)
        this.props.setPayment()
        // console.log("props from login " + this.props.setAdmin)
      })
      .catch(err => {
        this.setState({ error: 'Invalid Details!', message: "Please try again"})
      })
    }

    render() {
      // console.log(this.state)
      const { error, message} = this.state

      if (this.state.admin) {
        return <Redirect to="/admin" />
      } 
      else if (this.state.admin === false) {
        return <Redirect to="/userprofile"/>
      }
      else {
        if(!this.props.token){
          return (
            <>
              <div className="site-form login">
                  <h2>SIGN IN</h2>
                  <form >
                    <div>
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" onChange={this.handleInputChange}/>
                    </div>
                    <div>
                      <label htmlFor="password">Password: </label>
                      <input type="password" id="password" onChange={this.handleInputChange}/>
                    </div>
                    <button onClick={this.submitForm}>Login</button>
                  </form>
                  { error && <p style={{color: '#ed4337'}}>{ error }</p> }
                  { message && <p style={{color: '#ed4337'}}>{ message }</p>}
             
             
             
             
        Sign in with:

Email 
Password 
Forgot password?

Before signing in with one of the following accounts, we ask that you sign up in the normal way - so that we are able to authenticate who you are
Facebook - oauth
Twitter - oauth
Google - oauth

Notes: Notes for User Log In:

- we could figure out 2 step authorisation if we wanted to - i.e. an automated txt sent out upon sign in.  it’s annoying but it is also secure.  perhaps this would be a better option for those people that are also lenders.
- 2 step authorisation can be done with the following gem - it actually seems really easy to figure out: https://github.com/tinfoil/devise-two-factor.  






             
             
             
             
             
             
             
              </div>
            </>
          )
        } else {   
            return (
              <p>You're currently Logged in</p>
            ) 
        }
      }
    }
}

