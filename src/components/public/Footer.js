import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <footer className="footer">

        <ul id="how-it-works-footer">
          <h4 >How it Works</h4>
            <li><Link to='/hire'>Hire</Link></li>
            <li><Link to='/lend'>Lend</Link></li>
            <li><Link to='/fees'>Fees</Link></li>
        </ul>

        <ul id="legal-stuff-footer">
          <h4 >Legal Stuff</h4>
            <li><Link to='/terms'>Terms</Link></li>
            <li><Link to='/privacy'>Privacy</Link></li>
            <li><Link to='/cookies'>Cookies</Link></li>
        </ul>

        <ul id="connect-with-us-footer">
          <h4 >Connect with Us</h4>
            <li><Link to='/facebook'>Facebook</Link></li>
            <li><Link to='/twitter'>Twitter</Link></li>
            <li><Link to='/youtube'>Youtube</Link></li>
        </ul>

        <ul id="learn-and-improve-footer">
          <h4 >Learn and Improve</h4>
            <li><Link to='/request_an_item'>Request an item</Link></li>
            <li><Link to='/suggest_an_improvement'>Suggest an Improvement</Link></li>
            <li><Link to='/knowledge_center'>Knowledge Center</Link></li>
        </ul>

      </footer>
    </div>
  )
}
