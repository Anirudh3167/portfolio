// Module Imports
import React, { useEffect, useRef , useState } from 'react'

// CSS Imports
// Rule :- className = 'Home<name>'
import './Home.css'

// Component Imports
import Navbar from '../Components/Navbar/Navbar'

function Home() {
  const [loading,setLoading] = useState(true);
  const [loadingText,setLoadingText] = useState("Hello");
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
  

  useEffect(() => {
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
      HomeStyle.current.style.color = "white"
    } else if (slideActive === "slide2") {
      HomeStyle.current.style.backgroundColor = "black"
      HomeStyle.current.style.color = "white"
    } else if (slideActive === "slide3") {
      HomeStyle.current.style.backgroundColor = "red"
      HomeStyle.current.style.color = "black"
    } else {
      HomeStyle.current.style.backgroundColor = "red"
      HomeStyle.current.style.color = "white"
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
          <div className="HomeMainSlide">
            Comming soon
          </div>
          <div className="HomeMainSlide">
            Skills will be displayed here.
          </div>
          <div className="HomeMainSlide">
            Best three projects will be displayed here.
          </div>
        </div>
    </div>
  )
}

export default Home