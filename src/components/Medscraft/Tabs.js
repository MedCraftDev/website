import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "../../assets/css/tabs.css";
import HomeVisitImage from '../../assets/img/images/home-visit.jpg';
import FamilyCoverage from '../../assets/img/familycover.jpg';
import FindDoctorNearByImage from '../../assets/img/images/find-doctors-nearby.jpg';
import ClinincOnBoarding from '../../assets/img/images/clinic-on-boarding.jpg';
import labtest from '../../assets/img/lab1.webp'
import ABDM from '../../assets/img/images/abdm.jpg';

const SmallCard = ({ title, img, description, link }) => {
  return (
    <Link to={link} className="small-card service-card">
      <div>
        <img className='small-card-img p-3 ps-1 pe-1' src={img} alt={title} />
        <h4 className='mt-1' >{title}</h4>
        <p className='mt-1'style={{ fontSize: "15px" }}>{description}</p>
      </div>
    </Link>
  );
};

SmallCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

const isMobile = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

const Tabs = () => {
  const cardData = [
    {
      name: "Home Consulation",
      title: "Home Consulation",
      img: HomeVisitImage,
      description: "Healthcare at home.",
      link: "/homevisit"
    },
    {
      name: "Clinic Consulation",
      title: "Clinic Consulation",
      img: ClinincOnBoarding,
      description: "Book doctors easily.",
      link: "/Clinic Consultation"
    },
    {
      name: "Lab Test",
      title: "Lab Test",
      img: labtest,
      description: "Diagnostic, Analytical",
      link: "/labTest"
    },
    {
      name: "Family Health Manager",
      title: "Family Health Manager",
      img: FamilyCoverage,
      description: "Family doctor consultations.",
      link: "/"
    },
    // {
    //   name: "ABDM",
    //   title: "ABDM",
    //   img: ABDM,
    //   description: "Ayushman Bharat Digital Mission",
    //   link: "/abdm"
    // },
    // {
    //   name: "Consultation",
    //   title: "Consultation",
    //   img: ABDM,
    //   description: "Ayushman Bharat Digital Mission",
    //   link: "/abdm"
    // }
  ];

  // Filter out the "ABDM" tab if not on mobile
  const filteredCardData = isMobile() ? cardData : cardData.filter(card => card.name !== "Consultation");

  return (
    <div className="tabs justify-content-space-between">
      {filteredCardData.map((card) => (
        <SmallCard
          key={card.name}
          title={card.title}
          img={card.img}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default Tabs;
