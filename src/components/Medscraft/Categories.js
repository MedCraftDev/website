import React, { useRef } from 'react';
import { Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Dentist from '../../assets/img/images/Dentist.jpg';
import Orthopedist from '../../assets/img/images/orthopedist.jpg';
import Pediatrician from '../../assets/img/images/pediatrician.jpg';
import GeneralPhysician from '../../assets/img/images/general-physician.jpg';
import Gastroenterologist from '../../assets/img/images/Gastroenterologist.jpg';
import Gynecologist from '../../assets/img/images/Gynecologist.jpg';
import Dietician from '../../assets/img/images/Dietitian.jpg';
import Physiotherapist from '../../assets/img/images/Physiotherapist.jpg';
import GeneralSurgeon from '../../assets/img/images/General Surgeon.jpg';

const categories = [
  {
    img: Orthopedist,
    title: 'Orthopedics',
    description: 'For Bone and Joint issues, spinal injuries and more.',
  },
  {
    img: GeneralPhysician,
    title: 'General physician',
    description: 'Find the right family doctor in your neighborhood.',
  },
  {
    img: Pediatrician,
    title: 'Pediatrics',
    description: 'Child Specialists and Doctors for Infant.',
  },
  {
    img: Dentist,
    title: 'Dentist',
    description: 'Child Specialists and Doctors for Infant.',
  },
  {
    img: Gastroenterologist,
    title: 'Gastroenterologist',
    description: 'Explore for issues related to digestive system, liver and pancreas.',
  },
  {
    img: Dietician,
    title: 'Dietician/Nutritionist',
    description: 'Expert advice on diet and nutrition for a healthy lifestyle.'
  },
  {
    img: GeneralSurgeon,
    title: 'General Surgeon',
    description: 'Surgical specialists for a wide range of conditions.'
  },
  {
    img: Gynecologist,
    title: 'Gynecologist',
    description: 'Specialized care for women’s health and pregnancy.'
  },
  {
    img: Physiotherapist,
    title: 'Physiotherapist',
    description: 'Rehabilitation and physical therapy for various conditions.'
  }
];

const DoctorCategory = () => {
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
              <p className="card-text">{category.description}</p>
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

export default DoctorCategory;
