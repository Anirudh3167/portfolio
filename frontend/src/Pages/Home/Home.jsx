// Module Imports
import React, { useEffect, useRef , useState } from 'react'
import { Link } from 'react-router-dom';
// CSS Imports
// Rule :- className = 'Home<name>'
import './Home.css'

// Component Imports
import Navbar from '../../Components/Navbar/Navbar'

// Constants
import { Texts, skills, homePageProjects, frameworks } from '../../lib/constants';

function Home() {
  const [loading,setLoading] = useState(true);
  const [loadingText,setLoadingText] = useState("Hello");

  useEffect(() => {
    let index = 0;
  
    const animationTimeout = setTimeout(() => {
      const changeLoadingText = setInterval(() => {
        setLoadingText(Texts[index++ % Texts.length]);
      }, 100);
  
      setTimeout(() => {
        clearInterval(changeLoadingText);
        setLoading(false);
      }, 2000); // Stop changing the loading text after 2000ms
      
    }, 100); // Start loading animation after 2000ms
  
    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);
  
  const [slideActive,setSlideActive] = useState("slide1");
  const HomeStyle = useRef();
  
  const handleScrollSlide = () => {
    if (window.scrollY > window.innerHeight*(160/100)) {setSlideActive("slide3")} 
    else if (window.scrollY > window.innerHeight*(60/100)) {setSlideActive("slide2")}
    else if (window.scrollY > 0) {setSlideActive("slide1")}
  }

  useEffect(()=>{
    const ActiveSlideColor = {"slide1": "grey", "slide2": "#D32F2F", "slide3": "black"}
    HomeStyle.current.style.backgroundColor =
      (slideActive in ActiveSlideColor) ? ActiveSlideColor[slideActive] : "black";
  },[slideActive])

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScrollSlide);
    return () => {
      window.removeEventListener('scroll', handleScrollSlide);
    };
  }, []);

  return (
    <div className='HomeWrapper'>
        <div className="HomeLoadingContainer"
        style={loading ? {} : {animation: 'HomeloadingAnimation 1s ease-out',top:'-100%'}}>
          { loadingText}
        </div>
        <Navbar />
        <div className="HomeMainContainer" ref={HomeStyle}>
          {/* The two circles in display */}
          <div className="HomeSectionBackground" style={{top:'20%', right:'5%', height: '300px', width: '400px'}}></div>
          <div className="HomeSectionBackground" style={{top:'30%', right:'20%', height: '400px', width: '350px'}}></div>
          <div className="HomeMainSlide" style={{background:'rgba(170,170,170,0.35)'}}>
            <div className="HomeSectionLeft">
              <div className="HomeSectionHead" style={{fontSize:'40px'}}> Hi there, </div>
              <div className="HomeSectionHead"> I am <div className='HomeSectionName'>Anirudh</div> </div>
              <div className="HomeSectionRole"> A Software Developer </div>
            </div>
          </div>
          <div className="HomeMainSlide">
            <div className="HomeProjectsSliderWrapper">
              <div className="HomeSectionHead" style={{fontSize:'40px', paddingLeft:'10px'}}> Skills : </div>
              <div className="HomeProjectsSlider">
                {skills.map((skill,idx) => 
                    <div className="HomeProjectsSliderItem" key={idx}> {skill} </div>
                )}
              </div>
            </div>
            <div className="HomeProjectsSliderWrapper">
              <div className="HomeSectionHead" style={{fontSize:'40px', paddingLeft:'10px'}}> Frameworks : </div>
              <div className="HomeProjectsSlider">
                {frameworks.map((framework,idx) => 
                    <div className="HomeProjectsSliderItem" key={idx}> {framework.icon} {framework.name} </div>
                )}
            </div>
          </div>
          <div className="HomeMainSlide">
            <div className="HomeProjectsSliderWrapper">
              <div className="HomeSectionHead" style={{fontSize:'40px', paddingLeft:'10px'}}> Projects </div>
              <div className="HomeProjectsSlider">
                {homePageProjects.map((project,idx) => 
                    <div className="HomeProjectsSliderItem" key={idx}> {project} </div>
                )}
                <div className="HomeProjectsSliderItem"> <Link to='./projects'> View More </Link> </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home