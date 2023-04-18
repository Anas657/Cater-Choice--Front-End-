import React, { useState, useEffect } from 'react';

function ImageSlider() {
// Create state variables for the index and image array
const [index, setIndex] = useState(0);
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

// Use useEffect to increment the index and update the image every 5 seconds
useEffect(() => {
const intervalId = setInterval(() => {
setIndex(prevIndex => (prevIndex + 1) % images.length);
}, 5000);

return () => clearInterval(intervalId);
}, []);

// Render the current image
return (
<img src={images[index]} alt="Slider"/>
);
}

export default ImageSlider;