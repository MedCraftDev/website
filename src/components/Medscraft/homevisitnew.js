import React, { useState, useEffect , useRef } from "react";
// import React, { } from 'react';
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import Swal from "sweetalert2";

import "bootstrap/dist/css/bootstrap.min.css";
import bannerimg1 from "../../assets/img/Doctors-pana.svg";
import Pregnancy from "../../assets/img/diseases-image/pregnancy.png";
import Acne from "../../assets/img/diseases-image/Acne.png";
import Depression from "../../assets/img/diseases-image/depression.png";
import Coughing from "../../assets/img/diseases-image/coughing.png";
import Pediatric from "../../assets/img/diseases-image/pediatric.png";
import Sexology from "../../assets/img/diseases-image/sexology.png";
// import doctor1 from "../../assets/img/doctor1.jpg";
// import doctor2 from "../../assets/img/doctor2.jpg";
// import doctor3 from "../../assets/img/doctor3.jpg";
import Excellence from "../Medscraft/assets/tic.svg";
// import Equipped from '../Medscraft/assets/Equipped.svg';
import Detailed from "../Medscraft/assets/consultation.svg";
import Follow from "../Medscraft/assets/follow.svg";
import { FaPlus } from "react-icons/fa";
import "./homevisitnew.css";
import "../../assets/css/homevisit.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faCheck,
  faClock,
  faHeart,
  faHourglass,
  faInbox,
  faIndianRupeeSign,
  faPeopleArrowsLeftRight,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";
import Caroselhome from "./homevisit/caroselhome";

export default function HomevisitNew() {


  const appointmentRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    age: "",
    location: "",
    area: "",
  });

  const [errors, setErrors] = useState({}); // Error state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(
        "https://medscraft-medscraftserver.fcxl63.easypanel.host/api/homevisits",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        // Show success SweetAlert
        await Swal.fire({
          icon: "success",
          title: "Appointment Booked!",
          text: "Thanks for Booking our Team will contact you soon",
          confirmButtonText: "OK",
        });
        // Reset form and errors
        setFormData({
          name: "",
          mobile: "",
          email: "",
          age: "",
          location: "",
          area: "",
        });
        setErrors({});
      } else {
        // Show error SweetAlert
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.error || "Something went wrong. Please try again.",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      // Show error SweetAlert
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error booking appointment. Please try again later.",
        confirmButtonText: "OK",
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.age) newErrors.age = "Age is required.";
    if (!formData.location) newErrors.location = "Location is required.";
    if (!formData.area) newErrors.area = "Area is required.";
    return newErrors;
  };
  useEffect(() => {
    $("#sliderSyncingNav").slick({
      prevArrow:
        '<span class="fas fa-arrow-left slick-arrow slick-arrow-soft-white slick-arrow-left slick-arrow-centered-y rounded-circle ml-sm-2 ml-xl-4"></span>',
      nextArrow:
        '<span class="fas fa-arrow-right slick-arrow slick-arrow-soft-white slick-arrow-right slick-arrow-centered-y rounded-circle mr-sm-2 mr-xl-4"></span>',
      infinite: true,
      asNavFor: "#sliderSyncingThumb",
    });

    $("#sliderSyncingThumb").slick({
      infinite: true,
      slidesToShow: 3,
      asNavFor: "#sliderSyncingNav",
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 992,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 },
        },
      ],
    });

    $(".slider-container").slick({
      prevArrow:
        '<span class="fas fa-arrow-left slick-arrow slick-arrow-soft-white slick-arrow-left slick-arrow-centered-y rounded-circle ml-sm-2 ml-xl-4"></span>',
      nextArrow:
        '<span class="fas fa-arrow-right slick-arrow slick-arrow-soft-white slick-arrow-right slick-arrow-centered-y rounded-circle mr-sm-2 mr-xl-4"></span>',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    });
  }, []);

  const consultations = [
    { img: Pregnancy, title: "Pregnancy Scare", link: "/diseases" },
    { img: Acne, title: "Skin troubles", link: "/diseases" },
    { img: Sexology, title: "Intimacy issues", link: "/diseases" },
    { img: Coughing, title: "Viral symptoms", link: "/diseases" },
    { img: Pediatric, title: "Unwell", link: "/diseases" },
    { img: Depression, title: "Mental distress", link: "/diseases" },
  ];


  const scrollToAppointment = () => {
    if (appointmentRef.current) {
      appointmentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <div className="container-fluid p-1 mb-5">
        <div className="row banner-body1 ">
          <div className="col-lg-7 col-md-7 col-sm-12 col-12">
            <div className="mt-4 p-3">
              <h2 className="text-light mt-3">
                End to end care from Top Surgeons at our MedsCraft Clinic
              </h2>
              <div className="col-lg-7 col-md-10 col-12 col-sm-12  mt-5">
                <a className="insideboxtxt" href="tel:8088435500" onClick={scrollToAppointment}>
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex justify-content-center">
            <img src={bannerimg1} className="banner-img" alt="Banner" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-2 mb-4">
          <div className="col-lg-8 col-md-12 col-sm-12 order-last order-md-first">
            {/* our community */}
            {/* <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h4 className="text-uppercase">
                    Our Community
                    <span className="visithh mt-5">
                      <br />
                      ———
                    </span>
                  </h4>
                </div>
              </div>
            </div> */}
            {/* <div className="container">
              <div className="row  mt-3">
                <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
                  <h2 className="mb-2 mt-2 count-no text-center">
                    5,000
                    <span>
                      <FaPlus className="plus-icon" />
                    </span>
                  </h2>
                  <div className="line mt-2"></div>
                  <h3 className="mb-2 mt-2 text-center">Happy Patients</h3>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
                  <h2 className="mb-2 mt-2 count-no text-center">
                    25
                    <span>
                      <FaPlus className="plus-icon" />
                    </span>
                  </h2>
                  <div className="line mt-2"></div>
                  <h3 className="mb-2 mt-2 text-center">Doctors</h3>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
                  <h2 className="mb-2 mt-2 count-no text-center">
                    45<span className="plus-icon">mins</span>
                  </h2>
                  <div className="line mt-2"></div>
                  <h3 className="mb-2 mt-2 text-center">
                    Average Response time
                  </h3>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
                  <h2 className="mb-2 mt-2 count-no text-center">
                    5
                    <span>
                      <FaPlus className="plus-icon" />
                    </span>
                  </h2>
                  <div className="line mt-2"></div>
                  <h3 className="mb-2 mt-2 text-center">Cities</h3>
                </div>
              </div>
            </div> */}

            {/* why meds */}
            <div className="bgmeds">
              <div className="container mt-3">
                <div className="row mt-3">
                  <div className="col-lg-12 mt-4">
                    <h4 className="text-uppercase">
                      Why MedsCraft
                      <span className="visithh mt-5">
                        <br />
                        ———
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row mt-5">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                    <div className="card card-bdr">
                      <div className="d-flex justify-content-center mt-1">
                        <img
                          src={Excellence}
                          className="crdicon"
                          alt="ticicon"
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-center card-titl">
                          Excellence Assured
                        </h5>
                        <p className="card-text crd-para">
                          Expert doctors with proven experience, best quality
                          medical supplies
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                    <div className="card card-bdr">
                      <div className="d-flex justify-content-center mt-1">
                        <img
                          src={Excellence}
                          className="crdicon"
                          alt="ticicon"
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-center card-titl">
                          Equipped & Ready
                        </h5>
                        <p className="card-text crd-para">
                          Expert doctors with proven experience, best quality
                          medical supplies
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                    <div className="card card-bdr">
                      <div className="d-flex justify-content-center mt-1">
                        <img src={Detailed} className="crdicon" alt="ticicon" />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-center card-titl">
                          Detailed Consultation
                        </h5>
                        <p className="card-text crd-para">
                          Expert doctors with proven experience, best quality
                          medical supplies
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                    <div className="card card-bdr">
                      <div className="d-flex justify-content-center mt-1">
                        <img src={Follow} className="crdicon" alt="ticicon" />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-center card-titl">
                          Follow-up Assistance
                        </h5>
                        <p className="card-text crd-para">
                          Expert doctors with proven experience, best quality
                          medical supplies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* our sevices */}

            <div className="container mt-5">
              <div className="row mt-3">
                <div className="col-lg-12 mt-4">
                  <h4 className="text-uppercase">
                    Our Various Services
                    <span className="visithh mt-5">
                      <br />
                      ———
                    </span>
                  </h4>
                  <h2 className="mt-3 mb-3 service-title ">
                    Compassionate Care at Your Fingertips
                  </h2>
                </div>
              </div>
            </div>
            {/* <div className="container-fluid p-2 mt-3">
              <div className="row service-body">
                <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                  <div className="mt-4 p-3">
                    <h2 className="text-light">Book your first visit for</h2>
                    <h2 className="text-light mt-3">
                      <FontAwesomeIcon className="" icon={faIndianRupeeSign} />
                      849
                    </h2>
                    <div className="col-lg-7 col-md-10 col-12 col-sm-12  mt-5">
                      <a className="insideboxtxt" href="tel:8088435500">
                        Call us <span>|| 8088435500</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                  <img src={bannerimg1} className="banner-img" alt="Banner" />
                </div>
              </div>
            </div> */}
            <div className="caroselhome mt-5">
              <Caroselhome />
            </div>
          </div>

          {/* Book Appointment Column */}
          <div className="col-lg-4 col-md-12 col-sm-12 col-12  mb-5 order-lg-first order-md-last main-containerdivh1"  ref={appointmentRef}>
            <div className="find-containerdiv1">
              <h3 className="text-center">Book your consultation today</h3>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`mt-3 form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Your Name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className={`mt-3 form-control ${
                      errors.mobile ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Your Mobile"
                  />
                  {errors.mobile && (
                    <div className="invalid-feedback">{errors.mobile}</div>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`mt-3 form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Your Email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className={`mt-3 form-control ${
                      errors.age ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Your Age"
                  />
                  {errors.age && (
                    <div className="invalid-feedback">{errors.age}</div>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`mt-3 form-control ${
                      errors.location ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Your Location"
                  />
                  {errors.location && (
                    <div className="invalid-feedback">{errors.location}</div>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    className={`mt-3 form-control ${
                      errors.area ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Your Area"
                  />
                  {errors.area && (
                    <div className="invalid-feedback">{errors.area}</div>
                  )}
                </div>
                <div>
                  <button type="submit" className="Appoinmentbtn mt-3">
                    Book Appointment
                  </button>
                  <p className="Appoinmentparatxt">
                    By submitting the form, you agree MedsCraft{" "}
                    <span className="paraspantxt">T&C</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
