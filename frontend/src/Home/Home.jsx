// Module Imports
import React, { useEffect, useState } from 'react'

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
  
  return (
    <div className='HomeWrapper'>
        <div className="HomeLoadingContainer"
        style={loading ? {} : {animation: 'HomeloadingAnimation 1s ease-out',top:'-100%'}}>
          { loadingText}
        </div>
        <Navbar />
        <div className="HomeMainContainer">
            Comming soon
        </div>
    </div>
  )
}

export default Home