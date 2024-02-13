import './MainPage.css';
import './LoveMessage.css';
import Button from "./Button.js"
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Wave from 'react-wavify'
import Background from './earth.jpg';
import Roses from './roses.webp';
import useSound from 'use-sound';
import condemnedSound from './memeSong.mp3';


function MainPage() {
  let warningList = ["(don't touch the cat)", "pls, don't", "Last warning, don't do it"];
  let warningSizeList = [7, 18, 28];

  const navigate = useNavigate();
  const [textSize, setTextSize] = useState(warningSizeList[0]); // Text size
  const [warningIndex, setWarningIndex] = useState(1); // Text size
  const [warningText, setWarningText] = useState(warningList[0]); // Text size
  const [play] = useSound(condemnedSound);


  const showLoveMessage = () => 
  {
    if(warningIndex < warningList.length)
    {
      setTextSize(warningSizeList[warningIndex]);
      setWarningText(warningList[warningIndex]);
      setWarningIndex(warningIndex+1)
    }
    else
    {
      navigate('/2MNov/show')
      play()
    }

  };

  document.body.classList.add("no-scroll")

  return (
    <div>
    <div style={{ backgroundColor: '#0D0A0B', backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '75vh', }}> 
        <div  class="item">
          <img class="img" src={Roses} alt="Logo" onClick={showLoveMessage} />
          <span class="caption">Thank you for being my valentine</span>
          <span class="caption">I <span style={{ color: 'red' }}>❤</span> U</span>
          <span class="captionWarning" style={{  fontSize: `${textSize}px`}}>{warningText}</span>

       
        </div>
      </div>
      <Wave fill='#a8aaa9' paused={false} style={{ display: 'flex' }} options={{ height: 50, amplitude: 20, speed: 0.1, points: 2 }} /> </div>
    <div style={{ width: '101%', height: '20vh', backgroundColor: '#a8aaa9' }}> </div>
  </div>
  );
}

export default MainPage;
