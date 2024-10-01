import React, { useState, useEffect } from "react";
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
import f1 from "../../assets/img/images/f1.png";
import f2 from "../../assets/img/images/f2.png";
import f3 from "../../assets/img/images/f3.png";
import f4 from "../../assets/img/images/f4.png";

import "./familymanager.css";

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

  return (
    <>
      <div className="container-fluid p-1 mb-5 family-banner">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 ">
            <div className="mt-4 p-3 text-start">
              <h2 className="text-dark f-h2">Healthcare that</h2>
              <h4 className="text-dark mt-3 f-h4">treats you right</h4>
              <div className="col-lg-7 col-md-10 col-12 col-sm-12  mt-5">
                {/* <a className="" href="tel:8088435500">
                  Reach out to Us On <span> 8088435500</span>
                </a> */}
                <button className="btn btn-primary f-but" href="tel:8088435500">
                  {" "}
                  Reach out to Us On <span> 8088435500</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex justify-content-center">
            <img src={bannerimg1} className="banner-img" alt="Banner" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-4 mb-4 ">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <h2 className="text-primary">OUR SERVICES FOR MEMBERS :</h2>
            <div className="col-lg-12 row mt-3">
              <div className="col-lg-4 ">
                <div className="card f-card">
                  <div className="card-title">
                    <img src={f1} className="family-img" />
                  </div>
                  <div className="card-body">
                    <h6>Free Clinic Consultation</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card f-card">
                  <div className="card-title">
                    <img src={f2} className="family-img" />
                  </div>
                  <div className="card-body">
                    <h6>Free On Call Doctor Support</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card f-card">
                  <div className="card-title">
                    <img src={f3} className="family-img" />
                  </div>
                  <div className="card-body">
                    <h6>Free Manage your Health Record by Doctor</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 row">
              <div className="col-lg-4">
                <div className="card f-card">
                  <div className="card-title">
                    <img src={f4} className="family-img" />
                  </div>
                  <div className="card-body">
                    <h6>
                      ⁠Provide Doctor Home Consultation 1500/- Rs (50% Discount
                      For Members)
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card f-card">
                  <div className="card-title">
                    <img src={f1} className="family-img" />
                  </div>
                  <div className="card-body">
                    <h6>
                      Provide Specialists Doctor for Consultation on Cost Basis
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card f-card">
                  <div className="card-title">
                    <img src={f3} className="family-img" />
                  </div>
                  <div className="card-body">
                    <h6>Manage your Health Insurance Claims</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 row">
              <div className="col-lg-4">
                <div className="card f-card">
                  <div className="card-title">
                    <img src={f4} className="family-img" />
                  </div>
                  <h6>Ambulance Assistance </h6>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card f-card">
                  <div className="card-title">
                    <img src={f1} className="family-img" />
                  </div>
                  <div className="card-body">
                    <h6>50% to 80% off on Lab Test Package</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card f-card">
                  <div className="card-title">
                    <img src={f3} className="family-img" />
                  </div>
                  <div className="card-body">
                    <h6>Manage your Hospitalisation 24/7</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* use of medscraft */}
            <div className="col-lg-12 row use-meds ">
              <div className="col-lg-4">
                <h4 className="mt-5 use-h4">What do I use MedsCraft for?</h4>
              </div>

              <div className="col-lg-4">
                <h5 className="mt-4">
                  {" "}
                  <span>
                    {" "}
                    <img src={f4} className="family-img1" />{" "}
                  </span>{" "}
                  Ask for health advice
                </h5>
                <h5 className="mt-4">
                  <span>
                    {" "}
                    <img src={f2} className="family-img1" />{" "}
                  </span>{" "}
                  Get a diet plan based on your lifestyle and medical history
                </h5>
                <h5 className="mt-4">
                  {" "}
                  <span>
                    {" "}
                    <img src={f1} className="family-img1" />{" "}
                  </span>
                  Learn more about Even
                </h5>
              </div>

              <div className="col-lg-4">
                <h5 className="mt-4">
                  {" "}
                  <span>
                    {" "}
                    <img src={f3} className="family-img1" />{" "}
                  </span>
                  Read and explain your reports
                </h5>
                <h5 className="mt-4">
                  {" "}
                  <span>
                    {" "}
                    <img src={f2} className="family-img1" />{" "}
                  </span>
                  Book e-consultations with Even doctors (members only)
                </h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 col-12 main-containerdiv mb-5">
            <div className="find-containerdiv ">
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
                    placeholder="Enter Your Mobile No"
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
                    type="number"
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
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`form-select mt-3 ${
                      errors.location ? "is-invalid" : ""
                    }`}
                  >
                    <option value="">Location</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Gurugram">Gurugram</option>
                  </select>
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
                    placeholder="Your Area"
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
