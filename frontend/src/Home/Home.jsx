// Module Imports
import React from 'react'

// CSS Imports
// Rule :- className = 'Home<name>'
import './Home.css'

// Component Imports
import Navbar from '../Components/Navbar/Navbar'

function Home() {
  return (
    <div className='HomeWrapper'>
        <Navbar />
        <div className="HomeMainContainer">
            Comming soon
        </div>
    </div>
  )
}

export default Home