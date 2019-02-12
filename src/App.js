import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//Public Components
import Navbar from './components/Navbar'
import Home from './components/public/Home'
import Faqs from './components/public/Faqs'
import Fees from './components/public/Fees'
import Footer from './components/public/Footer'
import InfoCCA from './components/public/InfoCCA'
import InfoLend from './components/public/InfoLend'
import InfoBorrow from './components/public/InfoBorrow'
import HowItWorks from './components/public/HowItWorks'
import FeedBackForm from './components/public/FeedBackForm'
import RequestAnItem from './components/public/RequestAnItem'
import CookiesPolicy from './components/public/CookiesPolicy'
import TermsOfService from './components/public/TermsOfService'
import InfoBusinesses from './components/public/InfoBusinesses'
import KnowledgeCenter from './components/public/KnowledgeCenter'
import PrivacyStatement from './components/public/PrivacyStatement'
import SuggestAnImprovement from './components/public/SuggestAnImprovement'

//User Components
import UserProfile from './components/users/UserProfile'

//Admin Components
import AdminProfile from './components/admin/AdminProfile'


import { Route , Switch } from 'react-router-dom'
import axios from 'axios'

import Cookies from 'js-cookie';
require('dotenv').config()
// import Cocktail from './components/protected/Cocktail.js'

class App extends React.Component {
state = {
  loggedIn: false
}

componentDidMount = () => {
  const token = Cookies.get('token')
  const url = `${process.env.REACT_APP_DOMAIN}/me`
    
    if (token) { 
      axios.get(url, {
        headers: {
            'Authorization': `bearer ${token}`
          }
        })
        .then ( resp => {
            const { admin, stripeId } = resp.data
            // console.log(resp.data)
            this.setState({token, admin, loggedIn: true, stripeId: stripeId})
          })
        .catch( err => console.log(err) )
    }
}

setToken = (token) => {
  this.setState({token: token, loggedIn: true})
  // console.log("This is from App " + this.state.token)
} 

clearToken = () => {
  this.setState({token: null, loggedIn: false, admin: false, stripeId:false})
} 

setAdmin = (isAdmin) =>{
  this.setState({admin: isAdmin})
}

  // setPayment = () => {
  //   return this.setState({stripeId: true})
  // }

  render() {
    return (
      <div className="App">
        THIS IS THE THING
        <div className="Main">
        {!this.state.admin && <Navbar token={this.state.token} clearToken={this.clearToken} adminStatus={this.state.admin}/>}

          <Navbar token={this.state.token} clearToken={this.clearToken} adminStatus={this.state.admin}/>
          <Switch>
            <Route
              exact path="/"
              render={(props) => <Home {...props} setToken={this.setToken} clearToken={this.clearToken} token={this.state.token} setAdmin={this.setAdmin} setPayment={this.setPayment} payment={this.state.stripeId}/> }
            />

            {this.state.token && !this.state.admin && (
            <Route
              exact path="/UserProfile"
              render={(props) => <UserProfile {...props} loggedIn={this.state.loggedIn} Token={this.setToken} token={this.state.token}  clearToken={this.clearToken} setAdmin={this.setAdmin} admin={this.state.admin}/>}
            />)}

            <Route
              exact path="/AdminProfile"
              render={(props) => <AdminProfile {...props} setToken={this.setToken} token={this.state.token}  clearToken={this.clearToken} setAdmin={this.setAdmin} admin={this.state.admin}/>}
            />
           
            {/* <Route exact path="/admin/cocktail/:title" component={Cocktail}
            /> */}
            
            <Route path="/home" component={Home} exact/>
            <Route path="/faqs" component={Faqs} exact/>
            <Route path="/fees" component={Fees} exact/>
            <Route path="/faqs" component={Faqs} exact/>
            <Route path="/footer" component={Footer} exact/>
            <Route path="/lend" component={InfoLend} exact/>
            <Route path="/borrow" component={InfoBorrow} exact/>
            <Route path="/cookies" component={CookiesPolicy} exact/>
            <Route path="/feedback" component={FeedBackForm} exact/>
            <Route path="/how_it_works" component={HowItWorks} exact/>
            <Route path="/businesses" component={InfoBusinesses} exact/>
            <Route path="/request_an_item" component={RequestAnItem} exact/>
            <Route path="/terms_of_service" component={TermsOfService} exact/>
            <Route path="/knowledge_center" component={KnowledgeCenter} exact/>
            <Route path="/privacy_statement" component={PrivacyStatement} exact/>
            <Route path="/clubs_charities_and_associations" component={InfoCCA} exact/>
            <Route path="/suggest_an_improvement" component={SuggestAnImprovement} exact/>

          </Switch>
        </div>

        {!this.state.admin && <Footer />}
      </div>
  )}  
}


export default App;

// import React from 'react';

// class App extends React.Component {

//   state = {
//     loggedIn: false
//   }

//   componentDidMount() {
//     const token = Cookies.get('token')
//     const url = `${process.env.REACT_APP_DOMAIN}/me`

//     if (token) { 
//       axios.get(url, {
//         headers: {
//           'Authorization': `bearer ${token}`
//         }
//       })
//       .then ( resp => {
//         const { admin, stripeId } = resp.data
//         // console.log(resp.data)
//         this.setState({token, admin, loggedIn: true, stripeId: stripeId})
//       })
//       .catch( err => console.log(err) )
//     }
//   }

//   setToken = (token) => {
//     this.setState({token: token, loggedIn: true})
//     // console.log("This is from App " + this.state.token)
//   }

//   clearToken = () => {
//     this.setState({token: null, loggedIn: false, admin: false, stripeId:false})
//   }

//   setAdmin = (isAdmin) =>{
//     this.setState({admin: isAdmin})
//   }

//   setPayment = () => {
//     return this.setState({stripeId: true})
//   }

//   render() {
//     console.log(this.state)
//     return (
//         <div className="App">
//           <div className="Main">
//           {/* {!this.state.admin && <Navbar token={this.state.token} clearToken={this.clearToken} adminStatus={this.state.admin}/>} */}

//             <Navbar token={this.state.token} clearToken={this.clearToken} adminStatus={this.state.admin}/>
//             <Switch>
//               <Route
//                 exact path="/"
//                 render={(props) => <Home {...props} setToken={this.setToken} clearToken={this.clearToken} token={this.state.token} setAdmin={this.setAdmin} setPayment={this.setPayment} payment={this.state.stripeId}/> }
//               />

//               {this.state.token && !this.state.admin && (<Route
//                 exact path="/UserProfile"
//                 render={(props) => <UserProfile {...props} loggedIn={this.state.loggedIn} Token={this.setToken} token={this.state.token}  clearToken={this.clearToken} setAdmin={this.setAdmin} admin={this.state.admin}/>}
//               />)}

//              <Route
//                 exact path="/Admin"
//                 render={(props) => <Admin {...props} setToken={this.setToken} token={this.state.token}  clearToken={this.clearToken} setAdmin={this.setAdmin} admin={this.state.admin}/>}
//               />
//               <Route
//                 exact path="/admin/cocktails"
//                 render={(props) => <CreateCocktail {...props} setToken={this.setToken} token={this.state.token}  clearToken={this.clearToken} setAdmin={this.setAdmin} admin={this.state.admin}/>}
//               />
//               <Route exact path="/admin/cocktail/:title" component={Cocktail}
//               />
//               <Route
//                 exact path="/admin/user-manual"
//                 render={(props) => <UserManual {...props} setToken={this.setToken} token={this.state.token}  clearToken={this.clearToken} setAdmin={this.setAdmin} admin={this.state.admin}/>}
//               />
//               <Route path="/who_we_are" component={WhoWeAre} exact/>
//               <Route path="/terms" component={Terms} exact/>
//               <Route path="/privacy" component={Privacy} exact/>
//               <Route path="/liquor_licence" component={LiquorLicence} exact/>
//               <Route path="/faqs" component={Faqs} exact/>
//               <Route path="/contact_us" component={ContactUs} exact/>
              
//             </Switch>
//           </div>

//           {!this.state.admin && <Footer />}
//         </div>
//     )}
    
//   }


// export default App;






//COMMENTED OUT ON THE IMPORT

// import React from 'react';
// import './App.css';
// import Footer from './components/public/Footer'
// import Admin from './components/protected/Admin/Admin'
// import UserProfile from './components/protected/Users/UserProfile'
// import Home from './components/public/Home'
// import ContactUs from './components/public/ContactUs'
// import Faqs from './components/public/Faqs'
// import LiquorLicence from './components/public/LiquorLicence'
// import Privacy from './components/public/Privacy'
// import Terms from './components/public/Terms'
// import WhoWeAre from './components/public/WhoWeAre'
// import { Route , Switch } from 'react-router-dom'
// import Cookies from 'js-cookie';
// import Navbar from './components/public/Navbar'
// import axios from 'axios'
// require('dotenv').config()

// class App extends React.Component {


//   state = {}


//   componentDidMount(){
//     const token = Cookies.get('token')
//     this.setState({token})
//     console.log("App.js component mounted "+ token)
//   }

//   componentDidMount(){
//     const token = Cookies.get('token')
//     this.setState({token})
//     // console.log("App.js component mounted "+ token)
//     // if(token)

//   state = {
//     loggedIn: false
//   }

//   componentDidMount() {
//     const token = Cookies.get('token')
//     const url = 'http://localhost:5000/me'

//     if (token) { 
//       axios.get(url, {
//         headers: {
//           'Authorization': `bearer ${token}`
//         }
//       })
//       .then ( resp => {
//         const { admin } = resp.data
//         this.setState({token, admin, loggedIn: true})
//       })
//       .catch( err => console.log(err) )
//     }
//   }

//   setToken = (token) => {
//     this.setState({token: token})
//     // console.log("This is from App " + this.state.token)
//   }

//   clearToken = () => {
//     this.setState({token: null})
//   }

//   setToken = (token) => {
//     this.setState({token: token, loggedIn: true})
//     // console.log("This is from App " + this.state.token)
//   }

//   clearToken = () => {
//     this.setState({token: null, loggedIn: false})
//   }


//   setAdmin = (isAdmin) =>{
//     this.setState({admin: isAdmin})
//   }
//   }

//   render() {
//     return (
//         <div className="App">
//           <div className="Main">

//             <Navbar token={this.state.token} clearToken={this.clearToken}/>
//             <Switch>
//               <Route
//                 exact path="/" component={Home}
//                 render={(props) => <Home {...props} setToken={this.setToken} clearToken={this.clearToken} token={this.state.token}/>}
//               />
//               <Route
//                 exact path="/UserProfile" component={UserProfile}
//                 render={(props) => <UserProfile {...props} setToken={this.setToken} token={this.state.token}  clearToken={this.clearToken} />}
//               /> 
//               {/* <Switch/> */}
//               {/* I added the above closing tags here - is this right? */}
//           {!this.state.admin && <Navbar token={this.state.token} clearToken={this.clearToken} adminStatus={this.state.admin}/>} 

//             <Navbar token={this.state.token} clearToken={this.clearToken} adminStatus={this.state.admin}/>
//             {/* <Switch> */}
//               <Route
//                 exact path="/"
//                 render={(props) => <Home {...props} setToken={this.setToken} clearToken={this.clearToken} token={this.state.token} setAdmin={this.setAdmin}/> }
//               />)

//               {this.state.token && !this.state.admin && (<Route
//                 exact path="/UserProfile"
//                 render={(props) => <UserProfile {...props} loggedIn={this.state.loggedIn} Token={this.setToken} token={this.state.token}  clearToken={this.clearToken} setAdmin={this.setAdmin} admin={this.state.admin}/>}
//               />)}

//              <Route
//                 exact path="/Admin"
//                 render={(props) => <Admin {...props} setToken={this.setToken} token={this.state.token}  clearToken={this.clearToken} setAdmin={this.setAdmin} admin={this.state.admin}/>}

//               />

//               <Route path="/who_we_are" component={WhoWeAre} exact/>
//               <Route path="/terms" component={Terms} exact/>
//               <Route path="/privacy" component={Privacy} exact/>
//               <Route path="/liquor_licence" component={LiquorLicence} exact/>
//               <Route path="/faqs" component={Faqs} exact/>
//               <Route path="/contact_us" component={ContactUs} exact/>
//             </Switch>
//           </div>

//           {!this.state.admin && <Footer />}
//         </div>
        
      
//     );
//   }
// }
