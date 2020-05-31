import React from 'react';
import { Fade } from 'react-slideshow-image';
import image1 from '../Images/background.jpeg'
import image2 from '../Images/background2.jpg'
import image4 from '../Images/background4.jpg'
import image5 from '../Images/background5.jpg'
import '../Slide.css';
 

 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    //console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const SlideShow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={image1} />
          </div>
          <h2>Feed The Hungry</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={image2} />
          </div>
          <h2>Prevent Food Waste</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={image4} />
          </div>
          <h2>Support Local Charities</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={image5} />
          </div>
          <h2>Pay It Forward</h2>
        </div>
      </Fade>
    </div>
  );
}
export default SlideShow;