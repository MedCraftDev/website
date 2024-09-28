import React, { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 0px;
  padding-right: 16px;
`;

const AccordionItem = styled.div`
  margin-bottom: 1rem;
`;

const AccordionTitle = styled.div`
  background: #3974cb;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;
  height: 46px;
  padding: 0px 10px 0px 10px;
  &:hover {
    background: #2980b9;
  }
`;

const AccordionContent = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "600px" : "0")};
  padding: 4px 20px 0px 20px;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: aliceblue;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
`;

const Arrow = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0deg)")};
`;

const Content = styled.div`
  // max-height: 200px;
  // overflow-y: auto;
`;

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Specialities",
      content: (
        <div className="acc-hidden">
        <ul className="footer-links">
          <li><a className="footer-link" href="#">Orthopedics</a></li>
          <li><a className="footer-link" href="#">General Physician</a></li>
          <li><a className="footer-link" href="#">Pediatrics</a></li>
          <li><a className="footer-link" href="#">Dentist</a></li>
          <li><a className="footer-link" href="#">Gastroenterologist</a></li>
          <li><a className="footer-link" href="#">Dietician/Nutritionist</a></li>
          <li><a className="footer-link" href="#">General Surgeon</a></li>
          <li><a className="footer-link" href="#">Gynecologist</a></li>
          <li><a className="footer-link" href="#">Physiotherapist</a></li>
        </ul>
      </div>
      ),
    },
    // {
    //   title: "More Specialities",
    //   content: (
    //     <div className="acc-hidden">
    //       <a className="footer-link">Best Dermatologist in Bangalore</a>
    //       <a className="footer-link">Best Psychiatrist in Delhi</a>
    //       <a className="footer-link">Best Gynecologist in Bangalore</a>
    //       <a className="footer-link">Best Dermatologist in Mumbai</a>
    //       <a className="footer-link">Best Dentist in Bangalore</a>
    //       <a className="footer-link">Best Gynecologist in Hyderabad</a>
    //       <a className="footer-link">Best ENT Specialist in Bangalore</a>
    //       <a className="footer-link">Best General Physician in Delhi</a>
    //       <a className="footer-link">Best Neurologist in Bangalore</a>
    //       <a className="footer-link">Best Orthopedist in Delhi</a>
    //       <a className="footer-link">Best Dermatologist in Hyderabad</a>
    //       <a className="footer-link">Best Psychiatrist in Hyderabad</a>
    //       <a className="footer-link">Best Gynecologist in Hyderabad</a>
    //       <a className="footer-link">Best Pediatrician in Hyderabad</a>
    //       <a className="footer-link">Best Orthopedist in Hyderabad</a>
    //       <a className="footer-link">Best General Physician in Hyderabad</a>
    //       <a className="footer-link">Best Andrologist in Hyderabad</a>
    //       <a className="footer-link">Best Urologist in Hyderabad</a>
    //       <a className="footer-link">Best Gastroentrologist in Hyderabad</a>
    //       <a className="footer-link">Best Dietitian in Hyderabad</a>
    //     </div>
    //   ),
    // },
    {
      title: "Health Packages",
      content: (
        <div className="acc-hidden">
        <ul className="footer-links">
          <li><a className="footer-link" href="#">Basic Health Checkup Package</a></li>
          <li><a className="footer-link" href="#">Comprehensive Health Checkup Package</a></li>
          <li><a className="footer-link" href="#">Heart Health Package</a></li>
          <li><a className="footer-link" href="#">Diabetes Care Package</a></li>
          <li><a className="footer-link" href="#">Cancer Screening Package</a></li>
          <li><a className="footer-link" href="#">Executive Health Package</a></li>
          <li><a className="footer-link" href="#">Pre-employment Health Package</a></li>
          <li><a className="footer-link" href="#">Prenatal Health Package</a></li>
        </ul>
      </div>
      ),
    },
    {
      title: "Lab Tests",
      content: (
        <div className="acc-hidden">
        <ul className="footer-links">
          <li><a className="footer-link" href="#">Complete Blood Count (CBC)</a></li>
          <li><a className="footer-link" href="#">Basic Metabolic Panel (BMP)</a></li>
          <li><a className="footer-link" href="#">Comprehensive Metabolic Panel (CMP)</a></li>
          <li><a className="footer-link" href="#">Lipid Panel</a></li>
          <li><a className="footer-link" href="#">Thyroid Function Tests</a></li>
          <li><a className="footer-link" href="#">Liver Function Tests (LFTs)</a></li>
          <li><a className="footer-link" href="#">Urinalysis</a></li>
          <li><a className="footer-link" href="#">Hemoglobin A1c (HbA1c)</a></li>
          <li><a className="footer-link" href="#">C-Reactive Protein (CRP)</a></li>
        </ul>
      </div>
      ),
    },
    {
      title: "Scans",
      content: (
        <div className="acc-hidden">
        <ul className="footer-links">
          <li><a className="footer-link" href="#">X-ray</a></li>
          <li><a className="footer-link" href="#">Computed Tomography (CT) Scan</a></li>
          <li><a className="footer-link" href="#">Magnetic Resonance Imaging (MRI)</a></li>
          <li><a className="footer-link" href="#">Ultrasound</a></li>
          <li><a className="footer-link" href="#">Mammogram</a></li>
          <li><a className="footer-link" href="#">Positron Emission Tomography (PET) Scan</a></li>
          <li><a className="footer-link" href="#">Bone Scan</a></li>
          <li><a className="footer-link" href="#">Echocardiogram</a></li>
          <li><a className="footer-link" href="#">Fluoroscopy</a></li>
        </ul>
      </div>
      ),
    },
  ];

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionTitle onClick={() => toggleAccordion(index)}>
            {item.title}
            <Arrow isOpen={openIndex === index}>➤</Arrow>
          </AccordionTitle>
          <AccordionContent isOpen={openIndex === index}>
            <Content>{item.content}</Content>
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
