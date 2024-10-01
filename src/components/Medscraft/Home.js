import React from "react";
import "../../assets/css/animate.min.css";
import "../../assets/css/normalize.css";
import "../../assets/css/owl-carousel.css";
import "../../assets/css/responsive.css";
import "../../assets/css/style.css";
import "../../assets/css/whatclientsay.css";
import "../../assets/css/categories.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Container, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, TextField, Typography, Button } from '@mui/material';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "font-awesome/css/font-awesome.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import Carousel from 'react-material-ui-carousel';
// import roy from "../../assets/img/images/roy.png";
// import sectionimg from "../assets/img/images/section-img.png";
// import sumit from "../../assets/img/images/sumit.jpg";
import Categories from './Categories';
import Tabs from './Tabs';
import Diseases from './Diseases';
import Search from './Search';
import WhatClientSay from './WhatClientSay';
import Offer from './offer';
import SymptomsSpecialities from './SymptomsSpecialites';
import Accordion from './Accordion';
import Homeslider from './homeslidermobile';
import Happydoctors from "./home extra/readytohelp";
import MedsCraftapp from "./home extra/medcraftapp";
import Homecarsoel from "./home extra/homecarsoel";
import Readytohelper from "./home extra/readytohelper";
import HowItWorks from "./howitworks";
import Joinushome from "./joinushome";
import FaqNew from "./faqnew";

// import TestimonialSlider from './TestimonialSlider';
// import FAQ from './FAQ';
// import ContactUs from './ContactUs';
// import AboutUs from './AboutUs';
// import Services from './Services';


export default function Home() {

  // const testimonials = [
  //   {
  //     name: "Sneha Sharma",
  //     description: "I have been using MedsCraft Healthcare for my clinic for the past six months, and I must say it has completely transformed the way we manage patient records. The integration with AConnect is seamless, making it incredibly easy for my staff to access and update patient information in real-time. The platform's user-friendly interface has streamlined our administrative processes, allowing us to focus more on delivering quality care to our patients. Highly recommended!"
  //   },
  //   {
  //     name: "Rahul Patel",
  //     description: "As a busy physician, I rely on technology to help me efficiently manage my practice, and MedsCraft Healthcare has exceeded my expectations. With its robust features and comprehensive support for M1, M2, and M3 standards, I can confidently say that it's the most advanced digital healthcare platform I've come across. The ability to access patient records securely from anywhere has greatly improved my productivity and patient care. Thank you, MedsCraft, for revolutionizing healthcare in India!"
  //   },
  //   {
  //     name: "Priya Singh",
  //     description: "MedsCraft Healthcare has been a game-changer for our hospital. The platform's digital patient record management system has allowed us to transition seamlessly from paper-based records to a fully integrated digital solution. The AConnect plugin ensures compatibility with existing systems, making the implementation process smooth and hassle-free. Our staff loves how intuitive and user-friendly the platform is, and our patients appreciate the improved efficiency and accuracy in their healthcare experience. Kudos to the team behind MedsCraft for their innovative approach to healthcare technology!"
  //   },
  //   {
  //     name: "Amit Gupta",
  //     description: "I've been using MedsCraft Healthcare for my small clinic for the past year, and I couldn't be happier with the results. The platform's ability to integrate with various standards like M1, M2, and M3 has made it incredibly versatile and adaptable to our needs. The support team has been exceptional, always available to assist with any issues or questions we have. With MedsCraft, managing patient records has never been easier, allowing us to focus more on providing top-notch care to our patients. Highly recommend it to any healthcare provider looking to streamline their operations!"
  //   }
  // ];
  return (
    <div style={{ margin: "30px 50px 40px 50px" }} className="homediv">
      {/* <Search /> */}
      <div className="homeslider"></div>
      {/* <div>
       <Joinushome/>
      </div> */}
      <Tabs />
      <Homeslider className="mt-3"/>
      <Diseases />
      {/* <Offer /> */}

      <div className="Symptomssection">
        <SymptomsSpecialities />
      </div>
      <div className="doctorslist">
        <div className="doctorlisthead">
          <h1 className='fs-4 mt-5 font-weight-bold text-3xl text-black md:text-xl'>Schedule  a clinic consultation with experienced doctors from various specialties.</h1>
          {/* <button className="view-all-button">
            <Link to='/diseases' className="link">
              View All Specialties
            </Link>
          </button> */}
        </div>
        <Categories />

      </div>


      {/* 
      <div
        className="responsive-container-block outer-container bg-light"
        id="team"
      >
        <div className="responsive-container-block inner-container">
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-5 content-container">
            <div className="content-box">
              <p className="text-blk section-head">Meet Our Team</p>
            </div>
          </div>
          <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-8 team-cards-outer-container">
            <div className="responsive-container-block team-cards-inner-container">
              <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container">
                <div className="card" style={{ height: "240px" }}>
                  <div className="img-box">
                    <img className="person-img" src={sumit} />
                  </div>
                  <div className="card-content-box">
                    <p className="text-blk person-name">
                      Sumit Arora <br /> (CEO)
                    </p>
                    <p className="text-blk person-info">
                      Sumit is a seasoned entrepreneur and has experience in
                      health industry for more than 3 years now.
                    </p>
                  </div>
                </div>
              </div>
              <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container">
                <div className="card" style={{ height: "240px" }}>
                  <div className="img-box">
                    <img className="person-img" src={roy} />
                  </div>
                  <div className="card-content-box">
                    <p className="text-blk person-name">
                      Bikramjeet Roy <br /> (CTO)
                    </p>
                    <p className="text-blk person-info">
                      Bikram has more than 15 years of experience in deep tech
                      involving algorithms, building AI tools and in machine
                      learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="section-title" style={{ marginTop: "30px" }}>
        <h2>What Client Says</h2>
      </div>

      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Carousel
              autoPlay={true}
              animation="fade"
              indicators={true}
              timeout={500}
              navButtonsAlwaysVisible={true}
            >
              {testimonials.map((testimonial, index) => (
                <Paper key={index} style={{ padding: '20px', margin: '10px' }}>
                  <Typography variant="h5" component="h3">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body1">
                    {testimonial.description}
                  </Typography>
                </Paper>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container> */}
      <WhatClientSay />
      <div className="Howitworks">
        <HowItWorks />
      </div>
      <div className="Accordionsection"><Accordion /></div>
      {/* <div className="R2help">
        <Readytohelper />
      </div> */}
      {/* <div className="happy doctors">
        <Happydoctors /></div> */}
      {/* <div className="caresoel">
        <Homecarsoel />
      </div> */}

      {/* <div className="Accordionsection"><Accordion /></div> */}
      <div className="Medscraftapp">
        <MedsCraftapp /></div>

      <div className="FAQ mt-5">
        <FaqNew />
      </div>
      {/* <TestimonialSlider /> */}


      <script src="js/jquery-migrate-3.0.0.js"></script>

      <script src="js/easing.js"></script>

      <script src="js/jquery.nav.js"></script>

      <script src="js/jquery.scrollUp.min.js"></script>

      <script src="js/owl-carousel.js"></script>

      <script src="js/jquery.magnific-popup.min.js"></script>

      <script src="js/main.js"></script>
      <script src="js/slider.js"></script>
      <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.0.min.js"
      ></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"
      ></script>

      <script src="js/index.js"></script>
    </div>
  );
}
