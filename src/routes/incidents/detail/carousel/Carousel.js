import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Carousel.css';
export const IncidentCarousel = (props) => {
  return (
    <div className="carousel-box">
      <Carousel showArrows={false}>
        <img
          className="incident-image"
          src="https://www.tecsaqro.com.mx/wp-content/uploads/2019/03/causas-fallas-subestaciones-electricas.jpg"
          alt=""
        />
        <img
          className="incident-image"
          src="https://images.clarin.com/2019/07/10/el-fuego-fue-controlado-por____jLZHsqEp_1256x620__1.jpg"
          alt=""
        />
        <img
          className="incident-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTarlVlzb5tQWR9sqGBewWvW7hxyNQ7YCdwEQ&usqp=CAU"
          alt=""
        />
      </Carousel>
    </div>
  );
};
