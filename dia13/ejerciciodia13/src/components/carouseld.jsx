import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const images = [
  'https://www.dismoer.com/6539-home_default/revell-maqueta-coche-mclaren-570s-1-24.jpg',
  'https://files.idyllic.app/files/static/2435232?width=256&optimizer=image',
  'https://images.stockcake.com/public/a/b/1/ab13e6d6-1db0-41c5-8724-835ec2267b28_medium/elegant-blue-mercedes-stockcake.jpg',
  'https://files.idyllic.app/files/static/2251720?width=256&optimizer=image',
];

const CarouselComponent = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
