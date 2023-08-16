// Module Imports
import React, { useEffect, useState } from 'react'

// CSS Imports
// Rule :- className='Nav<name>'
import './Navbar.css'

function Navbar() {
  const [menuClicked,setMenuClicked] = useState(false);
  const [displayHambureger,setDisplayHamburger] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll',onscroll,setDisplayHamburger(window.scrollY > 50))
  })
  
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
        {
          displayHambureger ?
          <div className={`NavSideBarHamburger ${menuClicked ? "activeSideBar" : ""}`}
          onClick={() => {setMenuClicked(!menuClicked)}}>
            <div className="NavSideBarLine TopLine"></div>
            <div className="NavSideBarLine BottomLine"></div>
          </div>
          : ""
        }
        <div className="NavSideBarContainer" style={menuClicked ? {transform:"translateX(0%)",display:"flex"} : {transform:"translateX(100%)",display:"none"}}>
            <div className="NavSideBarHead"> NAVIGATION </div>
            <div className="NavSideBarItemsContainer">
              <div className="NavSideBarItem">Home</div>
              <div className="NavSideBarItem">Projects</div>
              <div className="NavSideBarItem">Contact</div>
            </div>
            <div className="NavSideBarHead"> SOCIAL LINKS </div>
            <div className="NavSideBarSocial">
              <div className="NavSideBarSocialItem"> Facebook </div>
              <div className="NavSideBarSocialItem"> Instagram </div>
              <div className="NavSideBarSocialItem"> LinkedIn </div>
              <div className="NavSideBarSocialItem"> GitHub </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar