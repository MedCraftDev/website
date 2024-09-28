import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import images
import Banner1 from '../../assets/img/Banner1.png';
import Banner2 from '../../assets/img/Banner2.png'; // Add more images if needed
import Banner3 from '../../assets/img/Banner3.png'; // Add more images if needed

const AutoSlideImageCarousel = () => {
  const images = [
    { name: 'Banner1', url: Banner1 },
    { name: 'Banner2', url: Banner2 },
    { name: 'Banner3', url: Banner3 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings} className='mt-5'>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={image.name} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoSlideImageCarousel;
