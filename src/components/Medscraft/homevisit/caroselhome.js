import React, { useRef } from 'react';
import { Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Nurse from '../../../assets/img/nursecare.jpg';
import Ambulance from '../../../assets/img/amb108.webp';
import Physiotherapy from '../../../assets/img/physio.jpeg';
import Diagnostics from '../../../assets/img/dijang.webp';
import hrs24 from '../../../assets/img/hrs24.jpg';
import xray from '../../../assets/img/homxray.jpg';


const categories = [
  {
    img: Nurse,
    title: 'Nursing Care',
    // description: 'For Bone and Joint issues, spinal injuries and more.',
  },
  {
    img: Diagnostics,
    title: 'Diagnostics support at home',
    // description: 'Explore for issues related to digestive system, liver and pancreas.',
  },
  {
    img: xray,
    title: 'ECG / X- Ray at home',
    // description: 'Find the right family doctor in your neighborhood.',
  },
  {
    img: Ambulance,
    title: 'Ambulance Assistance',
    // description: 'Child Specialists and Doctors for Infant.',
  },
  {
    img: Physiotherapy,
    title: 'Physiotherapy at Home',
    // description: 'Child Specialists and Doctors for Infant.',
  },
  {
    img: hrs24,
    title: '24-Hour Caregivers',
    // description: 'Explore for issues related to digestive system, liver and pancreas.',
  }
];

export default function Caroselhome(){
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="container1">
      <Button onClick={() => scroll('left')} className="arrow-button arrow-left">
        <ArrowBackIos />
      </Button>
      <div
        className="scrollable-container"
        ref={scrollRef}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="card-item"
          >
            <img
              src={category.img}
              alt={category.title}
            />
            <div className="card-body1">
              <h5 className="card-title">{category.title}</h5>
              {/* <p className="card-text">{category.description}</p> */}
            </div>
          </div>
        ))}
      </div>
      <Button onClick={() => scroll('right')} className="arrow-button arrow-right">
        <ArrowForwardIos />
      </Button>
    </div>
  );
};


