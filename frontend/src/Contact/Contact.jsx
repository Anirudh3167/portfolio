import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

import './Contact.css'

function Contact() {
  return (
    <div className='ContactmainWrapper'>
      <div className="LoadingContainer">
        <div className="LoadingContainerDot"></div>
        Contact
      </div>
        <Navbar />
        <div className="ContactMainContainer">
            This is Contact Page
        </div>
    </div>
  )
}

export default Contact