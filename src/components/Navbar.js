import React, { Component } from 'react'
import './Navbar.css'
// import { HashLink as Link } from "react-router-hash-link"
// import Logout from './Logout'
// import logonav from '../../images/logo.bare.svg';


export default class Navbar extends Component {
    constructor(props) {
      super(props)
      this.state = {}
      this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll() {
        this.setState({scroll: window.scrollY})
    }

    componentDidMount = () => {
      const el = document.querySelector('nav')
      this.setState({top: el.offsetTop, height: el.offsetHeight})
      window.addEventListener('scroll', this.handleScroll)
    }

    componentDidUpdate() {
        this.state.scroll > this.state.top ?
        document.body.style.paddingTop = 0:
        document.body.style.paddingTop = 0
    }
    
  render() {
    // console.log(this.props)
    return (
      <div>
        {/* <div>We can also put a message up here if we want to</div> */}
        <nav id="nav" className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
          <ul>
              {/* <li><Link to='/#home'><img className="navlogo" src={logonav} alt="Bottle Batched Logo"/></Link></li> */}
              {/* <li><Link to='/#home'>Logo where i will put an image</Link></li> */}
             
              {/* {!this.props.adminStatus && <li><Link to='/#about'>About</Link></li>} */}
              {/* {!this.props.adminStatus && <li><Link to='/#how-it-works'>How it Works</Link></li>} */}
              {/* {this.props.token && !this.props.adminStatus && <li><Link to='/userprofile'>Your Profile</Link></li>} */}
              {/* {!this.props.token && <li><Link to='/#register' >Register/ Login</Link></li>} */}
              {/* {this.props.adminStatus && <li><Link to='/admin/#customers'>Dashboard</Link></li>} */}
              {/* {this.props.adminStatus && <li><Link to="/admin/cocktails">Cocktails</Link></li>}  */}
              {/* {this.props.adminStatus && <li><Link to="/admin/user-manual">User Manual</Link></li>} */}
              {/* {this.props.token && <li><Logout {...this.props}/></li>} */}
            <li>Item 1 i guess</li>
          </ul>


            {/* NAVBAR - LOGGED IN USER 

            logo 
            categories
            become a lender - if not lender 
            welcome back - name - avatar 


            Notes for Nav Bar:

- may want to have our logo link back to the homepage - here is how to do that: Turning an image into a link in Rails - https://stackoverflow.com/questions/5386318/how-do-i-turn-an-image-into-a-link-in-rails
- devise can handle the log in log out system
- The become a lender link will only show if the user is not a lender.
- The circle in the top left corner will be a picture of the user - their avatar.  If they have not uploaded one it will show a default image of a users silohuette
- This is not a sticky nav bar - as a user scroll’s down it disappears


            NAVBAR LOGGED out

            logo 
            categories 
            become a lender 
            log in  
            sign up 

            Notes on navbar logged out:

- Devise can handle this functionality
- The Become a Lender link will link through to the Lender sign up page
- This is not a sticky header - as the user scolls down it disappears.
 */}




        </nav>
      </div>
    )
  }
}



