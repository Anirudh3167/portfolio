// Module Imports
import React, { useState } from 'react'

// CSS Imports
// Rule :- className='Nav<name>'
import './Navbar.css'

function Navbar() {
  const [menuClicked,setMenuClicked] = useState(false);
  return (
    <div className='NavWrapper'>
        {/* Fixed NavBar on Top of the page */}
        <div className="NavFixedContainer">
          <div className="NavFixedLogoSpace"> ANIRUDH </div>
          <div className="NavFixedMenuBtn" onClick={() => {setMenuClicked(true)}}> Menu </div>
          <div className="NavFixedMenuContainer">
            <div className="NavFixedMenuItem"> Home </div>
            <div className="NavFixedMenuItem"> Projects </div>
            <div className="NavFixedMenuItem"> Contact </div>
          </div>
        </div>

        {/* Side NavBar on page right side */}
        <div className={`NavSideBarHamburger ${menuClicked ? "activeSideBar" : ""}`}
        onClick={() => {setMenuClicked(!menuClicked)}}>
            <div className="NavSideBarLine TopLine"></div>
            <div className="NavSideBarLine BottomLine"></div>
        </div>
        <div className="NavSideBarContainer" style={menuClicked ? {display:"flex"} : {display:"none"}}>
            SideBar
        </div>
    </div>
  )
}

export default Navbar