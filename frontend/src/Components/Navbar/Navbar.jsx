// Module Imports
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

// CSS Imports
// Rule :- className='Nav<name>'
import './Navbar.css'

function Navbar() {
  const [menuClicked,setMenuClicked] = useState(false);
  const [displayHambureger,setDisplayHamburger] = useState(window.scrollY > 50);
  const location = useLocation();
  const router = useNavigate();
  const [loadingScreen,setLoadingScreen] = useState(false);
  const [path,setPath] = useState("dummy");
  
  const onscroll = () => {
    setDisplayHamburger(window.scrollY > 50);
  };

  const handleLink = (event,path) => {
      event.preventDefault();
      if (path !== "") {
        setPath(path);
        setLoadingScreen(true);
        setTimeout(() => {
          router("/" + path);
        }, 2000);
      } else {
        router("/");
      }
  }

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', onscroll);
    return () => {
      window.removeEventListener('scroll', onscroll);
    };
  }, []);

  return (
    <div className='NavWrapper'>
        {/* Fixed NavBar on Top of the page */}
        <div className="NavFixedContainer">
          <Link to="/" onClick={(e) => {handleLink(e,"");}} className="NavFixedLogoSpace"> ANIRUDH </Link>
          <div className="NavFixedMenuBtn" onClick={() => {setMenuClicked(true)}}> Menu </div>
          <div className="NavFixedMenuContainer">
            <Link to="/" onClick={(e) => {handleLink(e,"");}} className={`NavFixedMenuItem ${location.pathname === "/" ? "activeLink" : ""}`}> Home </Link>
            <Link to="/projects" onClick={(e) => {handleLink(e,"projects");}} className={`NavFixedMenuItem ${location.pathname === "/projects" ? "activeLink" : ""}`}> Projects </Link>
            <Link to="/contact" onClick={(e) => {handleLink(e,"contact");}} className={`NavFixedMenuItem ${location.pathname === "/contact" ? "activeLink" : ""}`}> Contact </Link>
          </div>
        </div>

        {/* Side NavBar on page right side */}
        {
          displayHambureger || menuClicked ?
          <div className={`NavSideBarHamburger ${menuClicked ? "activeSideBar" : ""}`}
          onClick={() => {setMenuClicked(!menuClicked)}}>
            <div className="NavSideBarLine TopLine"></div>
            <div className="NavSideBarLine BottomLine"></div>
          </div>
          : ""
        }
        {menuClicked ? <div className="NavBackOevrlay"></div> : ""}
        <div className="NavSideBarContainer" 
        style={menuClicked ? {transform:"translateX(0%)"} : {transform:"translateX(100%)"}}>
            <div className="NavSideBarHead"> NAVIGATION </div>
            <div className="NavSideBarItemsContainer">
              <Link to="/" onClick={(e) => {handleLink(e,"");}} className='NavSideItemContainer'> 
                <div className="NavSideBarCircle" style={location.pathname === "/" ? {backgroundColor:"var(--fg-clr)"} : {backgroundColor:"transparent"}}></div> 
                <div className="NavSideBarItem"> Home </div></Link>
              <Link to="/projects" onClick={(e) => {handleLink(e,"projects");}} className='NavSideItemContainer'> 
              <div className="NavSideBarCircle" style={location.pathname === "/projects" ? {backgroundColor:"var(--fg-clr)"} : {backgroundColor:"transparent"}}></div> 
                <div className="NavSideBarItem"> Projects </div>
              </Link>
              <Link to="/contact" onClick={(e) => {handleLink(e,"contact");}} className='NavSideItemContainer'> 
              <div className="NavSideBarCircle" style={location.pathname === "/contact" ? {backgroundColor:"var(--fg-clr)"} : {backgroundColor:"transparent"}}></div> 
                <div className="NavSideBarItem"> Contact </div>
              </Link>
            </div>
            <div className="NavSideBarHead"> SOCIAL LINKS </div>
            <div className="NavSideBarSocial">
              <div className="NavSideBarSocialItem"> Facebook </div>
              <div className="NavSideBarSocialItem"> Instagram </div>
              <div className="NavSideBarSocialItem"> LinkedIn </div>
              <div className="NavSideBarSocialItem"> GitHub </div>
            </div>
        </div>
        <div className="NavToContainer" style={loadingScreen ? {animation:"navToAnimate 0.7s ease-out",top:"0"} : {top:"-100vh"}}>
          <div className="LoadingContainerDot"></div>
          {path.charAt(0).toUpperCase() + path.slice(1)}
        </div>
    </div>
  )
}

export default Navbar