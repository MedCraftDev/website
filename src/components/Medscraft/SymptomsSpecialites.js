import React, { useState, useRef } from "react";
import { Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "../../assets/css/SymptomsSpecialities.css";
import "../../assets/css/diseases.css";
import Banner4 from '../../assets/img/Banner4.png';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Symptoms section images
import Pregnancy from "../../assets/img/diseases-image/pregnancy.png";
import Acne from "../../assets/img/diseases-image/Acne.png";
import Depression from "../../assets/img/diseases-image/depression.png";
import Coughing from "../../assets/img/diseases-image/coughing.png";
import Pediatric from "../../assets/img/diseases-image/pediatric.png";
import Sexology from "../../assets/img/diseases-image/sexology.png";

// Specialities section images
import Dentist from "../../assets/img/images/Dentist.jpg";
import Orthopedist from "../../assets/img/images/orthopedist.jpg";
import Pediatrician from "../../assets/img/images/pediatrician.jpg";
import GeneralPhysician from "../../assets/img/images/general-physician.jpg";
import Gastroenterologist from "../../assets/img/images/Gastroenterologist.jpg";
import Gynecologist from "../../assets/img/images/Gynecologist.jpg";
import Dietician from "../../assets/img/images/Dietitian.jpg";
import Physiotherapist from "../../assets/img/images/Physiotherapist.jpg";
import GeneralSurgeon from "../../assets/img/images/General Surgeon.jpg";

const categories = [
  {
    img: Orthopedist,
    title: "Orthopedics",
    description: "For Bone and Joint issues, spinal injuries and more.",
  },
  {
    img: GeneralPhysician,
    title: "General physician",
    description: "Find the right family doctor in your neighborhood.",
  },
  {
    img: Pediatrician,
    title: "Pediatrics",
    description: "Child Specialists and Doctors for Infant.",
  },
  {
    img: Dentist,
    title: "Dentist",
    description: "Child Specialists and Doctors for Infant.",
  },
  {
    img: Gastroenterologist,
    title: "Gastroenterologist",
    description:
      "Explore for issues related to digestive system, liver and pancreas.",
  },
  {
    img: Dietician,
    title: "Dietician/Nutritionist",
    description: "Expert advice on diet and nutrition for a healthy lifestyle.",
  },
  {
    img: GeneralSurgeon,
    title: "General Surgeon",
    description: "Surgical specialists for a wide range of conditions.",
  },
  {
    img: Gynecologist,
    title: "Gynecologist",
    description: "Specialized care for women’s health and pregnancy.",
  },
  {
    img: Physiotherapist,
    title: "Physiotherapist",
    description: "Rehabilitation and physical therapy for various conditions.",
  },
];

const DoctorCategory = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="container1">
      <Button
        onClick={() => scroll("left")}
        className="arrow-button arrow-left"
      >
        <ArrowBackIos />
      </Button>
      <div className="scrollable-container" ref={scrollRef}>
        {categories.map((category, index) => (
          <div key={index} className="card-item">
            <img src={category.img} alt={category.title} />
            <div className="card-body1">
              <h5 className="card-title">{category.title}</h5>
              <p className="card-text">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Button
        onClick={() => scroll("right")}
        className="arrow-button arrow-right"
      >
        <ArrowForwardIos />
      </Button>
    </div>
  );
};

const ConsultationCard = ({ img, title, link }) => (
  <Link to={link} className="cardd">
    <img className="cardd-img" src={img} alt={title} />
    <h3 className="title">{title}</h3>
    <button className="consult-button">CONSULT NOW</button>
  </Link>
);

ConsultationCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const SymptomsSpecialities = () => {
  const [activeTab, setActiveTab] = useState("Symptoms");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const consultations = [
    { img: Pregnancy, title: 'Pregnancy Scare', link: "/Clinic Consultation" },
    { img: Acne, title: 'Skin troubles', link: "/Clinic Consultation" },
    { img: Sexology, title: 'Intimacy issues', link: "/Clinic Consultation" },
    { img: Coughing, title: 'Viral symptoms', link: "/Clinic Consultation" },
    { img: Pediatric, title: 'Unwell', link: "/Clinic Consultation" },
    { img: Depression, title: 'Mental distress', link: "/Clinic Consultation" },
  ];
  
  return (
    
    <div className="wrapper">
      <div className="tabs_wrap">
        <ul>
          <li
            data-tabs="Symptoms"
            className={activeTab === "Symptoms" ? "active" : ""}
            onClick={() => handleTabClick("Symptoms")}
          >
            Symptoms
          </li>
          <li
            data-tabs="Specialities"
            className={activeTab === "Specialities" ? "active" : ""}
            onClick={() => handleTabClick("Specialities")}
          >
            Specialities
          </li>
        </ul>
      </div>
      <div className="container" style={{ paddingLeft: "0px" }}>
        <ul>
          {[
            {
              id: 1,
              gender: "Symptoms",
              content: (
                <div className="cardds-container">
                  {consultations.map((consultation, index) => (
                    <ConsultationCard
                      key={index}
                      img={consultation.img}
                      title={consultation.title}
                    />
                  ))}
                </div>
              ),
            },
            { id: 2, gender: "Specialities", content: <DoctorCategory /> },
          ]
            .filter((item) => item.gender === activeTab)
            .map((item) => (
              <li key={item.id} className={`item_wrap ${item.gender}`}>
                {item.content}
              </li>
            ))}
        </ul>
        <img style={{borderRadius:"16px",marginBottom:"20px"}}  src={Banner4} />
      </div>
    </div>
     
  );
};
export default SymptomsSpecialities;
