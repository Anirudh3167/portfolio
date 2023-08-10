import React from 'react'
import Navbar from '../components/NavBar/Navbar'

// Keyword for className --> Home<your-component>
import './Home.css'

function Home() {
  return (
    <div>
        <Navbar />
        <div className="HomemainContainer">
            This is a Home Page.
        </div>
    </div>
  )
}

export default Home