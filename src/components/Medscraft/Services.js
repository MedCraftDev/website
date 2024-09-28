import React from 'react'
import sectionimg from "../../assets/img/images/section-img.png";
// import "../assets/css/responsive.css";
import "../../assets/css/style.css";

const Services = () => {
  return (
    <>
      <section className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Offer Different Key Features</h2>
                <img src={sectionimg} alt="#" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">

              <div className="single-service">
                <i className="icofont icofont-prescription"></i>
                <h4>
                  <a href="#">Link Policy</a>
                </h4>
                <p style={{ fontSize: "16px" }}>
                  Using the ABHA number, you can link your health policies for a
                  seamless cashless experience.
                </p>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">

              <div className="single-service">
                <i className="icofont-recycle"></i>
                <h4>
                  <a href="#">Seamless Cashless Experience</a>
                </h4>
                <p style={{ fontSize: "16px" }}>
                  With our platform, all health policy holders will be able to
                  avail cashless claims at any hospital across India using just
                  the ABHA number.
                </p>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">

              <div className="single-service">
                <i className="icofont-brainstorming"></i>
                <h4>
                  <a href="#">Intelligent Eligibility</a>
                </h4>
                <p style={{ fontSize: "16px" }}>
                  Check whether your policy covers the disease at any point in
                  time using our platform.
                </p>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">

              <div className="single-service">
                <i className="icofont-support"></i>
                <h4>
                  <a href="#">Instant Support</a>
                </h4>
                <p style={{ fontSize: "16px" }}>
                  Access to immediate support for prompt assistance and issue
                  resolution.
                </p>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">

              <div className="single-service">
                <i className="icofont-ui-user"></i>
                <h4>
                  <a href="#">Tenant-Based</a>
                </h4>
                <p style={{ fontSize: "16px" }}>
                  Supports multi-tenancy for streamlined management across
                  entities.
                </p>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">

              <div className="single-service">
                <i className="icofont-ssl-security"></i>
                <h4>
                  <a href="#">ABDM Compliance</a>
                </h4>
                <p style={{ fontSize: "16px" }}>
                  Fully ABDM compliant for utmost data security and
                  interoperability.
                </p>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">

              <div className="single-service">
                <i className="icofont-certificate"></i>
                <h4>
                  <a href="#">M1, M2 & M3 Certified</a>
                </h4>
                <p style={{ fontSize: "16px" }}>
                  Certified across multiple levels to meet and exceed industry
                  standards and regulations.
                </p>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">

              <div className="single-service">
                <i className="icofont-users"></i>
                <h4>
                  <a href="#">Analytics</a>
                </h4>
                <p style={{ fontSize: "16px" }}>
                  Hospitals can leverage our dashboards powered by AI to
                  understand claims, their status, and much more.
                </p>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">

              <div className="single-service">
                <i className="icofont-ui-edit"></i>
                <h4>
                  <a href="#">Customizable</a>
                </h4>
                <p style={{ fontSize: "16px" }}>
                  Tailor the system to suit your unique requirements, enhancing
                  versatility and functionality.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="why-choose section" id="work">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 reveal fade-left">
              <div className="choose-right">
                <div className="video-image">
                  <a href="img/working.jpg"></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 reveal fade-right">
              <div className="choose-left">
                <h3>How We Work</h3>
                <p style={{ fontSize: "16px" }}>
                  Medscraft Healthcare seamlessly integrates into the ABDM
                  Digital Healthcare ecosystem through AConnect, guaranteeing
                  adherence to ABDM standards while optimizing digital
                  operations for healthcare professionals and facilities.
                </p>
                <p style={{ fontSize: "16px" }}>
                  For entities lacking HMIS, Medscraft offers an ABDM-certified
                  solution to simplify registration and digital operational
                  management. Alternatively, for facilities already utilizing
                  HMIS, AConnect serves as the ABDM connector, facilitating
                  effortless compliance integration.
                </p>
                <p style={{ fontSize: "16px" }}>
                  Discover the enhanced efficiency and convenience brought by
                  Medscraft and AConnect in transforming healthcare operations
                  with Medscraft Healthcare.
                </p>
                <p style={{ fontSize: "16px" }} >
                  The platform can be easily integrated with payer systems,
                  allowing payers and providers to communicate and transact data
                  in a secure environment. From simple tasks such as locating
                  eligible members for payers to complex analytics related to
                  clinical data, the platform serves as a one-stop solution for
                  cashless transactions.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12 reveal fade-right">
              <div className="choose-right">
                <div className="video-image">
                  <a href="img/signup-bg.jpg"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services