import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Carousel.css';
export const IncidentCarousel = (props) => {
  const numberOfImages = props.images.length;
  const placeHolder =
    'https://filestore.community.support.microsoft.com/api/images/b6b5d107-4e0b-41e5-a619-22cc52c251a7?upload=true';

  let images = props.images;
  for (let i = numberOfImages; i < 5; ++i) images.push(placeHolder);
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
