import './MainPage.css';
import Hearth from './Hearth.js';
import React, { useEffect } from 'react';

function clickMe()
{
  alert('Tou clicked me!')
}

function ShowLoveMessage() {
    useEffect(() => {
        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';
    
        // Re-enable scrolling on unmount
        return () => {
          document.body.style.overflow = 'visible';
        };
      }, []);


  return (
    <div  style={{ 
        overflow: 'hidden',
        height: '800px',
        width: '600px'
        }}>
        <header className="MainPage-header">
            TQM
        </header>

    </div>
  );
}

export default ShowLoveMessage;
