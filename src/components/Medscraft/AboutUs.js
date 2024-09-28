import React from "react";
import "../../assets/css/about.css";
import "../../assets/css/style.css";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <base href="https://shreyascyber.com/test/Medilab/" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/animate.css/animate.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link
          href="assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link href="assets/css/style.css" rel="stylesheet" />
      </Helmet>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Welcome to Medscraft</h1>
          <h2>We offer a variety of services to meet your health needs</h2>
        </div>
      </section>

      <main id="main">
        <section id="why-us" className="why-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Why Choose Medscraft?</h3>
                  <p>
                    Medscraft HMIS Solution can be easily integrated with payer
                    systems, allowing payers and providers to communicate and
                    transact data in a secure environment. From simple tasks
                    such as locating eligible members for payers to complex
                    analytics related to clinical data, the platform serves as a
                    one-stop solution for cashless transactions.
                  </p>
                </div>
              </div>
              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row aboutrow">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-receipt"></i>
                        <h4>Exceptional Service</h4>
                        <p>
                          Our friendly staff offers personalized care and expert
                          advice to meet your health needs.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-cube-alt"></i>
                        <h4>Trusted Quality</h4>
                        <p>
                          We ensure safe and effective products through strict
                          quality control measures.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-images"></i>
                        <h4>Convenient Options</h4>
                        <p>
                          Automatic refills, Offline and online ordering for a
                          hassle-free experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                <a
                  // href="https://www.youtube.com/watch?v=c1eWgR5V83k"
                  className="glightbox play-btn mb-4"
                ></a>
              </div>
              <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h3>Welcome to Medscraft</h3>
                <p>
                  At Medscraft, we are dedicated to providing our community with
                  a wide range of quality healthcare products and services. Our
                  mission is to enhance the well-being of our customers by
                  offering exceptional service, expert advice, and a
                  comprehensive selection of pharmaceutical and health-related
                  products.
                </p>
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-fingerprint"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Prescription Services</a>
                  </h4>
                  <p className="description">
                    Fast and accurate prescription filling, with options for
                    automatic refills and home delivery.
                  </p>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-gift"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Immunizations</a>
                  </h4>
                  <p className="description">
                    Convenient and safe vaccination services for flu, shingles,
                    and other preventable diseases.
                  </p>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-atom"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Health Screenings</a>
                  </h4>
                  <p className="description">
                    Blood pressure checks, cholesterol testing, and diabetes
                    management support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                Discover the comprehensive services offered at Medscraft to meet
                all your healthcare needs.
              </p>
            </div>
            <div className="row servicerow">
              <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-md-0">
                  <div className="icon">
                    <i className="bx bx-receipt"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Medication Management</a>
                  </h4>
                  <p className="description">
                    Expert guidance on medication management to optimize
                    treatment outcomes.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-md-0">
                  <div className="icon">
                    <i className="bx bx-cube-alt"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Home Delivery</a>
                  </h4>
                  <p className="description">
                    Reliable and convenient home delivery services for all your
                    pharmacy needs.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-md-0">
                  <div className="icon">
                    <i className="bx bx-images"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Online Consultation</a>
                  </h4>
                  <p className="description">
                    Access professional advice and consultations from the
                    comfort of your home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
