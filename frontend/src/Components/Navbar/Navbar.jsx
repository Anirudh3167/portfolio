// #####################################
// There is a problem in clicking the link of same page
// #####################################

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

  // ####################################
  // MAGNETIC EFFECT
  // ####################################
  const [x1,setX1] = useState(0);
  const [x2,setX2] = useState(0);
  const [y1,setY1] = useState(0);
  const [y2,setY2] = useState(0);
  const handleMouseMove = (event) => {
    event.preventDefault();
    // Center point of the container.
    let xCenter = event.target.offsetWidth/2;
    let yCenter = event.target.offsetHeight/2;

    // relative mouse cordinates.
    let x = event.clientX - (event.target.offsetLeft + xCenter);
    let y = event.clientY - (event.target.offsetTop + yCenter);

    // Translating the object.
      event.target.style.transition = "0.1s";
    if (event.clientX >= x1 && event.clientY >= y1
      && event.clientX <= x2 && event.clientY <= y2) {
      event.target.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
  }

  const handleMouseLeave = (event) => {
    event.preventDefault();
    // Getting back to initial position
    event.target.style.transform = ``;
    event.target.style.transition = "0.7s";
    setX1(0);
    setX2(0);
    setY1(0);
    setY2(0);
  }

  const handleMouseEnter = (event) => {
    event.preventDefault();
    // Setting the boundaries.
    let target = event.target;
    setX1(target.offsetLeft);
    setX2(target.offsetLeft + target.offsetWidth);
    setY1(target.offsetTop);
    setY2(target.offsetTop + target.offsetHeight);
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
          <Link to="/" 
          onClick={(e) => {handleLink(e,"");}} 
          onMouseMove={(e) => {handleMouseMove(e)}}
          onMouseLeave={(e) => {handleMouseLeave(e)}}
          onMouseEnter={(e) => {handleMouseEnter(e)}}
          className="NavFixedLogoSpace"> ANIRUDH </Link>
          <div className="NavFixedMenuBtn" onClick={() => {setMenuClicked(true)}}> Menu </div>

          <div className="NavFixedMenuContainer">
            <Link to="/" onClick={(e) => {handleLink(e,"");}}
            onMouseMove={(e) => {handleMouseMove(e)}}
            onMouseLeave={(e) => {handleMouseLeave(e)}}
            onMouseEnter={(e) => {handleMouseEnter(e)}}
            className={`NavFixedMenuItem ${location.pathname === "/" ? "activeLink" : ""}`}
            > Home </Link>
            <Link to="/projects" onClick={(e) => {handleLink(e,"projects");}}
            onMouseMove={(e) => {handleMouseMove(e)}}
            onMouseLeave={(e) => {handleMouseLeave(e)}}
            onMouseEnter={(e) => {handleMouseEnter(e)}}
            className={`NavFixedMenuItem ${location.pathname === "/projects" ? "activeLink" : ""}`}
            > Projects </Link>
            <Link to="/contact" onClick={(e) => {handleLink(e,"contact");}}
            onMouseMove={(e) => {handleMouseMove(e)}}
            onMouseLeave={(e) => {handleMouseLeave(e)}}
            onMouseEnter={(e) => {handleMouseEnter(e)}}
            className={`NavFixedMenuItem ${location.pathname === "/contact" ? "activeLink" : ""}`}
            > Contact </Link>
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
              <Link to="/" onClick={(e) => {handleLink(e,"");}}
              onMouseMove={(e) => {handleMouseMove(e)}}
              onMouseLeave={(e) => {handleMouseLeave(e)}}
              onMouseEnter={(e) => {handleMouseEnter(e)}}
              className='NavSideItemContainer'> 
                <div className="NavSideBarCircle" style={location.pathname === "/" ? {backgroundColor:"var(--fg-clr)"} : {backgroundColor:"transparent"}}></div> 
                <div className="NavSideBarItem"> Home </div></Link>
              <Link to="/projects" onClick={(e) => {handleLink(e,"projects");}}
              onMouseMove={(e) => {handleMouseMove(e)}}
              onMouseLeave={(e) => {handleMouseLeave(e)}}
              onMouseEnter={(e) => {handleMouseEnter(e)}}
              className='NavSideItemContainer'> 
              <div className="NavSideBarCircle" style={location.pathname === "/projects" ? {backgroundColor:"var(--fg-clr)"} : {backgroundColor:"transparent"}}></div> 
                <div className="NavSideBarItem"> Projects </div>
              </Link>
              <Link to="/contact" onClick={(e) => {handleLink(e,"contact");}}
              onMouseMove={(e) => {handleMouseMove(e)}}
              onMouseLeave={(e) => {handleMouseLeave(e)}}
              onMouseEnter={(e) => {handleMouseEnter(e)}}
              className='NavSideItemContainer'> 
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
        <div className="NavToContainer" style={loadingScreen ? {animation:"navToAnimate 0.7s forwards",top:"0vh"} : {top:"-100vh"}}>
          <div className="NavLoadingContainerCurve" style={loadingScreen ? {animation:"loadingCurveReverse 0.6s forwards"} : {}}></div>
          <div className="LoadingContainerDot"></div>
          {path.charAt(0).toUpperCase() + path.slice(1)}
        </div>
    </div>
  )
}

export default Navbar