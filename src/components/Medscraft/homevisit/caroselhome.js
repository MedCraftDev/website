import React from 'react';
import Nurse from '../../../assets/img/nursecare.jpg';
import Ambulance from '../../../assets/img/amb108.webp';
import Physiotherapy from '../../../assets/img/physio.jpeg';
import Diagnostics from '../../../assets/img/dijang.webp';
import hrs24 from '../../../assets/img/hrs24.jpg';
import xray from '../../../assets/img/homxray.jpg';
import './caroselhome.css';

const categories = [
  {
    img: Nurse,
    title: 'Nursing Care',
  },
  {
    img: Diagnostics,
    title: 'Diagnostics support at home',
  },
  {
    img: xray,
    title: 'ECG / X- Ray at home',
  },
  {
    img: Ambulance,
    title: 'Ambulance Assistance',
  },
  {
    img: Physiotherapy,
    title: 'Physiotherapy at Home',
  },
  {
    img: hrs24,
    title: '24-Hour Caregivers',
  }
];

export default function Caroselhome() {
  return (
    <div className="grid-container">
      {categories.map((category, index) => (
        <div key={index} className="card-item">
          <img src={category.img} alt={category.title} />
          <div className="card-body2">
            <h5 className="card-title">{category.title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};
