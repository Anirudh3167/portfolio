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
            <div className="ContactLeftContainer"> Input boxes here for mailer </div>
            <div className="ContactRightContainer"> Presonal Details here </div>
        </div>
    </div>
  )
}

export default Contact