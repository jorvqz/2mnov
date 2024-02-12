import React, { useState, useEffect } from "react";
import "./Hearth.css"; // Import CSS for styling
import logo from './gato en nave espacial2.png';

const Hearth = () => {
  const [positionX, setPositionY] = useState(0); // Initial position of the image
  const [positionY, setPositionX] = useState(0); // Initial position of the image

  const [directionX, setDirectionX] = useState(1); // Initial direction of movement
  const [directionY, setDirectionY] = useState(1); // Initial direction of movement
  const [height, setHeight] = useState(getRandomSize()); // Initial height of the image
  const [width, setWidth] = useState(getRandomSize()); // Initial height of the image

  // Function to generate random height for the image
  function getRandomSize() {
    return Math.floor(Math.random() * 200) + 50; // Adjust the range as per your requirement
  }


  // Function to handle movement of the image
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPositionX(positionX + 3 * directionX);
      setPositionY(positionY + 3 * directionY);
      console.log(window.innerHeight-100)
      console.log(directionY)
      console.log(positionY)

      // Change direction when image reaches the edges
      if (positionX >= 400) {
        setDirectionX(-1);
      } else if (positionX <= -100) {
        setDirectionX(1);
      }

      if (positionY >= 600) {
        setDirectionY(-1);
      } else if (positionY <= 0) {
        setDirectionY(1);
      }
    }, 30); // Adjust the interval as per your requirement

    // Clear interval on component unmount
    return () => clearInterval(moveInterval);
  }, [positionX, positionY, height, width]);

  return (
    <div
      className="moving-image"
      style={{
        left: `${positionX}px`,
        position: 'absolute'
      }}
    >
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default Hearth;
