import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Carousel.css';
export const IncidentCarousel = (props) => {
  const numberOfImages = props.images.length;
  const PLACEHOLDER = process.env.REACT_APP_PLACEHOLDER_URL;
  let images = props.images;
  for (let i = numberOfImages; i < 5; ++i) images.push(PLACEHOLDER);

  return (
    <div className="carousel-box">
      <Carousel showArrows={false}>
        {images.map((image, index) => {
          return (
            <img key={index} className="incident-image" src={image} alt="" />
          );
        })}
      </Carousel>
    </div>
  );
};
