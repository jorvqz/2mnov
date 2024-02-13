import './MainPage.css';
import './LoveMessage.css';
import Button from "./Button.js"
import { useNavigate } from 'react-router-dom';
import React from 'react'
import Wave from 'react-wavify'
import Background from './earth.jpg';
import Roses from './roses.webp';


function MainPage() {
  const navigate = useNavigate();



  const showLoveMessage = () => 
  {
    navigate('/2MNov/show')
  };

  document.body.classList.add("no-scroll")

  return (
    <div>
    <div style={{ backgroundColor: '#0D0A0B', backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '75vh', }}> 
        <div  class="item">
          <img class="img" src={Roses} alt="Logo" />
          <span class="caption">Thank you for being my valentine</span>
          <span class="caption">I <span style={{ color: 'red' }}>❤</span> U</span>
       
        </div>
      </div>
      <Wave fill='#a8aaa9' paused={false} style={{ display: 'flex' }} options={{ height: 50, amplitude: 20, speed: 0.1, points: 2 }} /> </div>
    <div style={{ width: '101%', height: '20vh', backgroundColor: '#a8aaa9' }}> </div>
  </div>
  );
}

export default MainPage;
