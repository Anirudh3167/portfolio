import React from 'react'
import BackgroundAnimation from '../../Components/BgAnimation/BgAnimation'
import LoadingContainer from '../../lib/ui/LoadingContainer'
import Navbar from '../../Components/Navbar/Navbar'

function AboutMe() {
  return (
    <>
    <LoadingContainer name="About Me" />
    <Navbar />
    <div style={{background: "black"}}>
        <BackgroundAnimation />
        <div style={{position:"absolute", top:'100px', left:'100px',color:"white", fontSize:"30px", fontWeight:"700"}}>
            About Me
        </div>
    </div>
    </>
  )
}

export default AboutMe