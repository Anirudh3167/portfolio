// Module Imports
import React, { useEffect, useRef , useState } from 'react'
import { Link } from 'react-router-dom';
// CSS Imports
// Rule :- className = 'Home<name>'
import './Home.css'

// Component Imports
import Navbar from '../Components/Navbar/Navbar'

function Home() {
  const [loading,setLoading] = useState(true);
  const [loadingText,setLoadingText] = useState("Hello");
  

  useEffect(() => {
    const Texts = [
      "Hello",            // English
      "Bonjour",          // French
      "नमस्ते",             // Hindi
      "வணக்கம்",         // Tamil (Vanakkam)
      "Hola",             // Spanish
      "Hallo",            // German
      "你好",               // Chinese (Mandarin) (Nǐ hǎo)
      "مرحباً",            // Arabic (Marhaba)
      "Привет",           // Russian (Privet)
      "Ciao",             // Italian
      "こんにちは",           // Japanese (Konnichiwa)
      "안녕하세요",          // Korean (Annyeonghaseyo)
      "Olá",              // Portuguese
      "Hallo",            // Dutch
      "Merhaba",          // Turkish
      "Γειά σας",          // Greek (Yia sas)
      "Hej",              // Swedish, Danish
      "Cześć",            // Polish
      "Hei",              // Norwegian, Finnish
    ];
    let index = 0;
  
    const animationTimeout = setTimeout(() => {
      const changeLoadingText = setInterval(() => {
        setLoadingText(Texts[index % Texts.length]);
        index++;
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
    if (slideActive === "slide1") {
      HomeStyle.current.style.backgroundColor = "grey"
      // HomeStyle.current.style.color = "white"
    } else if (slideActive === "slide2") {
      HomeStyle.current.style.backgroundColor = "#D32F2F"
      // HomeStyle.current.style.color = "white"
    } else if (slideActive === "slide3") {
      HomeStyle.current.style.backgroundColor = "black"
      // HomeStyle.current.style.color = "#D32F2F"
    } else {
      HomeStyle.current.style.backgroundColor = "black"
      // HomeStyle.current.style.color = "white"
    }
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
          <div className="HomeMainSlide">
            <div className="HomeSectionLeft">
              <div className="HomeSectionHead" style={{fontSize:'40px'}}> Hi there, </div>
              <div className="HomeSectionHead"> I am <div className='HomeSectionName'>Anirudh</div> </div>
              <div className="HomeSectionRole"> A Software Developer </div>
            </div>
          </div>
          <div className="HomeMainSlide">
            <div className="HomeProjectsSliderWrapper" style={{backgroundColor:'rgba(10,10,10,0.9)'}}>
              <div className="HomeSectionHead" style={{fontSize:'40px', paddingLeft:'10px'}}> Skills : </div>
              <div className="HomeProjectsSlider">
                <div className="HomeProjectsSliderItem"> Web Dev </div>
                <div className="HomeProjectsSliderItem"> AI </div>
                <div className="HomeProjectsSliderItem"> DSA </div>
              </div>
            </div>
            <div className="HomeProjectsSliderWrapper" style={{backgroundColor:'rgba(10,10,10,0.9)'}}>
              <div className="HomeSectionHead" style={{fontSize:'40px', paddingLeft:'10px'}}> Frameworks : </div>
              <div className="HomeProjectsSlider">
                <div className="HomeProjectsSliderItem"> React </div>
                <div className="HomeProjectsSliderItem"> PyTorch </div>
                <div className="HomeProjectsSliderItem"> Spyder </div>
                <div className="HomeProjectsSliderItem"> NextJs </div>
                <div className="HomeProjectsSliderItem"> Django </div>
                <div className="HomeProjectsSliderItem"> FastAPI </div>
              </div>
            </div>
          </div>
          <div className="HomeMainSlide">
            <div className="HomeProjectsSliderWrapper" style={{backgroundColor:'rgb(40 38 38 / 80%)'}}>
              <div className="HomeSectionHead" style={{fontSize:'40px', paddingLeft:'10px'}}> Projects </div>
              <div className="HomeProjectsSlider">
                <div className="HomeProjectsSliderItem"> Threads Clone </div>
                <div className="HomeProjectsSliderItem"> Blog Site </div>
                <div className="HomeProjectsSliderItem"> Eco In </div>
                <div className="HomeProjectsSliderItem"> <Link to='./projects'> View More </Link> </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home