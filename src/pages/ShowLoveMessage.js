import './MainPage.css';
import './ShowLoveMessage.css';
import Button from "./Button.js"
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Wave from 'react-wavify'
import Background from './earth.jpg';
import condemned from './condemned.png';


function ShowLoveMessage() {
    const [showImage, setShowImage] = React.useState(false)
    const [runOneTime, setRunOneTime] = React.useState(true)
    const [showMessage2, setShowMessage2] = React.useState(false)
    const [showMessage1, setShowMessage1] = React.useState(false)
    

    React.useEffect(() => {
      const timeout = setTimeout(() => {
        setShowImage(true)
      }, 5900)
  
      return () => clearTimeout(timeout)
  
    }, [showImage])

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setShowMessage1(true)
        }, 100)
    
        return () => clearTimeout(timeout)
    
      }, [showMessage1
    ])

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setShowMessage2(true)
        }, 2000)
    
        return () => clearTimeout(timeout)
    
      }, [showMessage2])

  return (
    <div>
    
    <div style={{ backgroundColor: 'white', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '20vh', }}> 
        <div  class="item2">
          <span class="caption2">I said don't touch it.</span>
        </div>
    </div>
    
    {showMessage2 &&
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5vh', }}> 
        <div  class="item2">
          <span class="caption2">Now,</span>
        </div>
  
    </div>}
    {showImage && 
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40vh', }}> 
       
       <div  class="item2">
          <span class="caption2">you are condemned.</span>
           <img class="img" src={condemned} alt="Logo" />
           </div>
        
        
    </div> 
    }

    
    </div>
  </div>
  );
}

export default ShowLoveMessage;
