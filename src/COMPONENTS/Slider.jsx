import React from 'react';
import { Slide } from 'react-slideshow-image';

import '../Styles/layout1.css'

import slide1 from '../DATA/IMAGES/Biber.jpg';
import slide2 from '../DATA/IMAGES/Domates.jpg';
import slide3 from '../DATA/IMAGES/Hıyar.jpg';


const slideImages = [
  slide1,
  slide2,
  slide3
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div>
                <img src= {slide1}></img>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;