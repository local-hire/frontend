import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      FOOTER

      How it works:
      - hire 
      - lend 
      - fees 

      Legal Stuff:
      - Terms 
      - Privacy 
      - Cookie Policy 

      Connect with Us:
      - Facebook 
      - Twitter 
      - Youtube 

      Learn and Improve 
      - Request an item 
      - Suggest an Improvement 
      - Knowledge Center


      Have a question for us, just type it in this box and send it .  we will get back to you as soon as possible
      button - send message 


      Notes for Footer Partial:

How it works:
- These three pages just outline how the site works.

Legal Stuff:
- Terms / Privacy / Cookie Policies.  These are kinda required for legal reasons.  Fortunately we can get them for free by going to any shopify powered site and then just updating to our names and so on

Connect with Us:
- We could consider adding in the logos for each of the socials instead of the names.  It would also be advisable to set up the socials, so that they link through to the correct area

Learn and Improve:
- probably rename this section
- this is more of an area to develop once we have managed to create the MVP

Contact Form:
- once a user sends the message to us, we will simply display a modal that says “thanks for messaging us”


  
      <footer className="footer">
        <ul>
          <li><Link to='/contact_us'>Contact Us</Link></li>
          <li><Link to='/faqs'>FAQs</Link></li>
          <li><Link to='/liquor_licence'>Liquor Licence</Link></li>
          <li><Link to='/privacy'>Privacy</Link></li>
          <li><Link to='/terms'>Terms</Link></li>
          <li><Link to='/who_we_are'>Who we are</Link></li>
        </ul>
      </footer>
     

    </div>
  )
}
