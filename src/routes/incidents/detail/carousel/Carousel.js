import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Carousel.css';
export const IncidentCarousel = (props) => {
  const PLACEHOLDER = process.env.REACT_APP_PLACEHOLDER_URL;
  if (props.images.length == 0) props.images.push(PLACEHOLDER);

  return (
    <div className="carousel-box">
      <Carousel showArrows={false}>
        {props.images.map((image, index) => {
          return (
            <img key={index} className="incident-image" src={image} alt="" />
          );
        })}
      </Carousel>
    </div>
  );
};
