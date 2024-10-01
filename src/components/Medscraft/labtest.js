import { useEffect, useState,useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Swal from "sweetalert2";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import "./labtest.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerimg1 from "../../assets/img/images/Laboratory-bro.png";
import Pregnancy from "../../assets/img/diseases-image/pregnancy.png";
import himg from "../../assets/img/images/h-img.png";
import himg1 from "../../assets/img/images/h-img1.png";
import himg2 from "../../assets/img/images/h-img2.png";
import q1 from "../../assets/img/images/q7.png";
import q2 from "../../assets/img/images/q8.png";
import q3 from "../../assets/img/images/q9.png";
import s1 from "../../assets/img/images/s1.png";
import s2 from "../../assets/img/images/s2.png";
import s3 from "../../assets/img/images/s3.png";
import s4 from "../../assets/img/images/s6.png";
import s5 from "../../assets/img/images/s8.png";
import s6 from "../../assets/img/images/s9.png";

export default function Labtest() {
  const appointmentRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    age: "",
    location: "",
    area: "",
    labTest: "",
    description: "",
  });
  const [errors, setErrors] = useState({}); // For validation errors

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required.";
    if (!formData.age) newErrors.age = "Age is required.";
    if (!formData.location) newErrors.location = "Location is required.";
    if (!formData.area) newErrors.area = "Area is required.";
    if (!formData.labTest) newErrors.labTest = "Lab test is required.";
    return newErrors;
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
        "https://medscraft-medscraftserver.fcxl63.easypanel.host/api/labtests",
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
        Swal.fire({
          icon: "success",
          title: "Appointment Booked!",
          text: "Your lab test appointment has been successfully booked.",
          confirmButtonText: "OK",
        });
        setFormData({
          name: "",
          mobile: "",
          email: "",
          age: "",
          location: "",
          area: "",
          labTest: "",
          description: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Booking Failed",
          text: result.error || "Something went wrong. Please try again.",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error booking appointment. Please try again later.",
        confirmButtonText: "OK",
      });
    }
  };

  const scrollToAppointment = () => {
    if (appointmentRef.current) {
      appointmentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="container-fluid p-5">
        <div className="row lab-banner">
          <div className="col-lg-7 col-md-6 col-sm-12 mt-2">
            <h2 className="text-light mt-3">
              End to end care from Top Surgeons at our MedsCraft Clinic
            </h2>
            <h4 className="text-light mt-4">
              Talk to our care expert today to book your consultation. All
              insurance accepted
            </h4>
            <div className="mt-5">
              <a className="insideboxtxt1"  onClick={scrollToAppointment}>
              Book Your Appointment
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 d-flex justify-content-center mt-2">
            <img
              src={bannerimg1}
              className="banner-img1 img-fluid"
              alt="Banner"
            />
          </div>
        </div>
      </div>

      {/* how its work */}

      <div className="container-fluid mb-4">
        <div className="row mt-4 ">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12 order-last order-md-first">
            <div className="how-banner">
              <h4 className="h4-h">We Made Simple</h4>
              <h1>How It Works</h1>
              <p>
                Lorem ipsum dolor amet consectetur adipisicing eliteiuim sete
                eiusmod tempor incididunt ut labore etnalom dolore magna aliqua
                udiminimate veniam quis norud.
              </p>{" "}
              <div class="steps">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12 mt-3">
                    <div class="step mt-2">
                      <img src={himg} alt="Search Best Online Professional" />
                      <h4>Search Best Online Professional</h4>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mt-3">
                    <div class="step">
                      <img src={himg1} alt="Get Instant Appointment" />
                      <h4>Get Instant Appointment</h4>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mt-3">
                    <div class="step">
                      <img src={himg2} alt="Leave Your Feedback" />
                      <h4>Leave Your Feedback</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality */}

            <div className="card-container mt-4">
              <h4>Quality :</h4>
              <div className="col-lg-12 row mt-4">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="card text-center">
                    <img src={q1} className="q-img" />
                    <h3>600+</h3>
                    <h5>Instruments used for real time QC monitoring</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card text-center">
                    <img src={q2} className="q-img" />
                    <h3>50+</h3>
                    <h5>Quality Checks & Processes on Every Sampleg</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="card text-center">
                    <img src={q3} className="q-img" />
                    <h3>15+</h3>
                    <h5>Quality indicator monitored on daily basis</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* special program */}

            <div className="swiper-contene mt-5">
              <h2 style={{ color: " #dd6f8c" }}>Search Test and Packages :</h2>
              <Swiper
                className="mt-4"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                navigation
              >
                <SwiperSlide>
                  <div
                    style={{ height: "200px" }}
                    className="card-swipe text-center"
                  >
                    <img src={s1} className="swiper-img" />
                    <h5>Runny, stuffy nose</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{ height: "200px" }}
                    className="card-swipe text-center"
                  >
                    <img src={s2} className="swiper-img" />{" "}
                    <h5>
                      Cough, chest tightness, wheezing or shortness of breath
                      etc.
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{ height: "200px" }}
                    className="card-swipe text-center"
                  >
                    <img src={s3} className="swiper-img" />{" "}
                    <h5>Tingling in the mouth</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{ height: "200px" }}
                    className="card-swipe text-center"
                  >
                    <img src={s4} className="swiper-img" />{" "}
                    <h5>Hives all over the body</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{ height: "200px" }}
                    className="card-swipe text-center"
                  >
                    <img src={s5} className="swiper-img" />{" "}
                    <h5>Runny, stuffy nose</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{ height: "200px" }}
                    className="card-swipe text-center"
                  >
                    <img src={s6} className="swiper-img" />{" "}
                    <h5>Hives all over the body</h5>
                  </div>
                </SwiperSlide>
                {/* Add more slides as needed */}
              </Swiper>
            </div>
          </div>

          {/* Book you consultation */}

          <div className="col-lg-4 col-md-12 col-sm-12 col-12 main-containerdiv13 order-lg-first order-md-last mt-5"  ref={appointmentRef}>
            <div className="find-containerdiv13">
              <h3 className="text-center">Book your consultation today</h3>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Your Name"
                    className={`mt-3 form-control ${
                      errors.name && "is-invalid"
                    }`}
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter Your Mobile No"
                    className={`mt-3 form-control ${
                      errors.mobile && "is-invalid"
                    }`}
                  />
                  {errors.mobile && (
                    <small className="text-danger">{errors.mobile}</small>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email"
                    className="mt-3 form-control"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter Your Age"
                    className={`mt-3 form-control ${
                      errors.age && "is-invalid"
                    }`}
                  />
                  {errors.age && (
                    <small className="text-danger">{errors.age}</small>
                  )}
                </div>
                <div>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`form-select mt-3 ${
                      errors.location && "is-invalid"
                    }`}
                  >
                    <option value="">Location</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Gurugram">Gurugram</option>
                  </select>
                  {errors.location && (
                    <small className="text-danger">{errors.location}</small>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="Your Area"
                    className={`mt-3 form-control ${
                      errors.area && "is-invalid"
                    }`}
                  />
                  {errors.area && (
                    <small className="text-danger">{errors.area}</small>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="labTest"
                    value={formData.labTest}
                    onChange={handleInputChange}
                    placeholder="Enter Lab Test"
                    className={`mt-3 form-control ${
                      errors.labTest && "is-invalid"
                    }`}
                  />
                  {errors.labTest && (
                    <small className="text-danger">{errors.labTest}</small>
                  )}
                </div>
                <div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Additional Information (Optional)"
                    className="mt-3 form-control"
                  ></textarea>
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
              {/* <form>
                <div>
                  <input
                    type="text"
                    className="mt-3 form-control"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="mt-3 form-control"
                    placeholder="Enter Your Mobile No"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="mt-3 form-control"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="mt-3 form-control"
                    placeholder="Enter Your Age"
                  />
                </div>
                <div>
                  <select
                    className="form-select mt-3"
                    aria-label="Default select example"
                  >
                    <option value="">Location</option>
                    <option value="1">Bangalore</option>
                    <option value="2">Gurugram</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    className="mt-3 form-control"
                    placeholder="Your Area"
                  />
                </div>
                <div>
                  <button type="button" className="Appoinmentbtn mt-3">
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
}
