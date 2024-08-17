import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'

import './Contact.css'
import LoadingContainer from '../../lib/ui/LoadingContainer';

function Contact() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [organisation,setOrganisation] = useState("");
  const [services,setServices] = useState("");
  const [message,setMessage] = useState("");

  const handleSend = (event) => {
    event.preventDefault();

    const alert_content = name === "" ? "Name is empty" : email === "" ? "Email is empty"
          : organisation === "" ? "Specify your organisation" 
          : message === "" ? "Specify your message" 
          : services === "" ? "Specify the service you would like to persue" : "";
    if (alert_content !== "") {alert(alert_content)}
    else {
      const data = {name,email,organisation,services,message}
      console.log("Sending the data");
      console.log(data);
    }
  }
  return (
    <div className='ContactmainWrapper'>
        <LoadingContainer name="Contact" />
        <Navbar />
        
        <div className="ContactMainContainer">
            <div className="ContactLeftContainer">
              <div className="ContactMailerTopLine"></div>
                <div className="ContactMailerItem">
                      <div className="ContactMailerHeading">
                        <div className="ContactMailerNumbering"> 01 </div> 
                        <div className="ContactMailerHeadingContent">
                          What's your name? 
                        </div>
                      </div>
                      <input type="text" className='ContactMailerInputBox'
                      placeholder='Anirudh' onChange={(e) => {setName(e.target.value)}} />  
                </div>  
                <div className="ContactMailerItem">
                      <div className="ContactMailerHeading"> 
                        <div className="ContactMailerNumbering"> 02 </div> 
                        <div className="ContactMailerHeadingContent">
                          whats's your email? 
                        </div>
                      </div>
                      <input type="text" className='ContactMailerInputBox'
                      placeholder='anirudhmukkamala@gmail.com' 
                      onChange={(e) => {setEmail(e.target.value)}} />  
                </div>  
                <div className="ContactMailerItem">
                      <div className="ContactMailerHeading"> 
                        <div className="ContactMailerNumbering"> 03 </div>
                        <div className="ContactMailerHeadingContent">
                          what's the name of your organization? 
                        </div> 
                      </div>
                      <input type="text" className='ContactMailerInputBox'
                      placeholder='example company' 
                      onChange={(e) => {setOrganisation(e.target.value)}} />  
                </div>  
                <div className="ContactMailerItem">
                      <div className="ContactMailerHeading"> 
                        <div className="ContactMailerNumbering"> 04 </div> 
                        <div className="ContactMailerHeadingContent">
                          what services are you looking for? 
                        </div>
                      </div>
                      <input type="text" className='ContactMailerInputBox'
                      placeholder='web development, openCV, ...' 
                      onChange={(e) => {setServices(e.target.value)}} />  
                </div>  
                <div className="ContactMailerItem">
                      <div className="ContactMailerHeading"> 
                        <div className="ContactMailerNumbering"> 05 </div> 
                        <div className="ContactMailerHeadingContent">
                          Your message 
                        </div>
                      </div>
                      <textarea className='ContactMailerInputBox ContactMailerTextAreaBox'
                      placeholder='Hello Anirudh, Can you help me with...'
                      onChange={(e) => {setMessage(e.target.value)}} />  
                </div>  
                <div className="ContactMailerSend"
                onClick={(e) => {handleSend(e)}}> Send </div>
            </div>
            <div className="ContactRightContainer"> Presonal Details here </div>
        </div>
    </div>
  )
}

export default Contact