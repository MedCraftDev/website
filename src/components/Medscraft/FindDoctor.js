import React, { useState, useEffect ,useRef} from "react";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import Swal from "sweetalert2";
import "../../assets/css/doctorconsult.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerimg1 from "../../assets/img/Doctors-pana.svg";
import Pregnancy from "../../assets/img/diseases-image/pregnancy.png";
import Acne from "../../assets/img/diseases-image/Acne.png";
import Depression from "../../assets/img/diseases-image/depression.png";
import Coughing from "../../assets/img/diseases-image/coughing.png";
import Pediatric from "../../assets/img/diseases-image/pediatric.png";
import Sexology from "../../assets/img/diseases-image/sexology.png";
import doctor1 from "../../assets/img/doctor1.jpg";
import doctor2 from "../../assets/img/doctor2.jpg";
import doctor3 from "../../assets/img/doctor3.jpg";
import doctor11 from "../../assets/img/images/big1.webp";

const FindDoctor = () => {
  
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
        "https://medscraft-medscraftserver.fcxl63.easypanel.host/api/clinicvisits",
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
          text: "Thanks for Booking, our Team will contact you soon",
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
      <div className="container-fluid">
        <div className="row banner-body">
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 ">
            <div className="mt-4 p-3">
              {/* <h2 className="text-light">
                End to end care from Top Surgeons at our MedsCraft Clinic
              </h2> */}
              <h2 className="text-light mt-3">
                End to end care from Top Surgeons at our MedsCraft Clinic
              </h2>
              <div className="col-lg-7 col-md-10 col-12 col-sm-12  mt-5">
                <a className="insideboxtxt" onClick={scrollToAppointment}>
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <img
              src={bannerimg1}
              className="banner-img w-100 "
              height="100px"
              alt="Banner"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-4 mb-4">
          <div className="col-lg-8 col-md-8 col-sm-12 order-last order-md-first">
            <h3>We are experts in Surgical solutions for 50+ ailments.</h3>
            <div className="card inser-content mt-4">
              <div className="card-body">
                <div className="consultation-container">
                  {consultations.map((consultation, index) => (
                    <div className="consultation-item" key={index}>
                      <img
                        src={consultation.img}
                        alt={consultation.title}
                        className="clinic-img"
                      />
                      <h5>{consultation.title}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="second-content p-3">
              <div>
                <div>
                  <h4>
                    Our new-age clinics with the latest high-tech equipment
                  </h4>
                  <div className="div-carousel">
                    <div
                      id="sliderSyncingNav"
                      className="js-slick-carousel slick mb-2"
                    >
                      <div className="js-slide">
                        <img
                          className="img-fluid slider-imag"
                          src={doctor11}
                          alt="Doctor 1"
                        />
                      </div>
                      <div className="js-slide">
                        <img
                          className="img-fluid slider-imag"
                          src={doctor2}
                          alt="Doctor 2"
                        />
                      </div>
                      <div className="js-slide">
                        <img
                          className="img-fluid slider-imag"
                          src={doctor3}
                          alt="Doctor 3"
                        />
                      </div>
                    </div>

                    <div
                      id="sliderSyncingThumb"
                      className="js-slick-carousel slick slick-gutters-1 slick-transform-off"
                    >
                      <div className="js-slide">
                        <img
                          className="img-fluid slider-imag1"
                          src={doctor1}
                          alt="Doctor 1"
                        />
                      </div>
                      <div className="js-slide">
                        <img
                          className="img-fluid slider-imag1"
                          src={doctor2}
                          alt="Doctor 2"
                        />
                      </div>
                      <div className="js-slide">
                        <img
                          className="img-fluid slider-imag1"
                          src={doctor3}
                          alt="Doctor 3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="slider-container">
            <h2>Consult with a specialiat Doctors</h2>
             <div className="first-box">
             
              <img src={doctor4} className="img-slider"/>
              <img src={doctor5} className="img-slider"/>

             </div>

            </div> */}
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12 order-lg-first order-md-last main-containerdiv12 mb-5"  ref={appointmentRef}>
            <div className="find-containerdiv12">
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
              {/* <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Your Name"
                    className={`mt-3 form-control ${errors.name && "is-invalid"}`}
                  />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>

                <div>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter Your Mobile No"
                    className={`mt-3 form-control ${errors.mobile && "is-invalid"}`}
                  />
                  {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email"
                    className={`mt-3 form-control ${errors.email && "is-invalid"}`}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                <div>
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter Your Age"
                    className={`mt-3 form-control ${errors.age && "is-invalid"}`}
                  />
                  {errors.age && <small className="text-danger">{errors.age}</small>}
                </div>

                <div>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`form-select mt-3 ${errors.location && "is-invalid"}`}
                  >
                    <option value="">Location</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Gurugram">Gurugram</option>
                  </select>
                  {errors.location && <small className="text-danger">{errors.location}</small>}
                </div>

                <div>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="Your Area"
                    className={`mt-3 form-control ${errors.area && "is-invalid"}`}
                  />
                  {errors.area && <small className="text-danger">{errors.area}</small>}
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
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindDoctor;
