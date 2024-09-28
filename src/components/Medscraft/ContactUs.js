import React from 'react';
import contactus from "../../assets/img/images/ContactUs.png";
import sectionimg from "../../assets/img/images/section-img.png";
import Header from './Header';
// import "../assets/css/responsive.css";
import "../../assets/css/style.css";

const ContactUs = () => {
  return (
    <>
      <Header />
      <section className="appointment" style={{ paddingTop: '50px' }} id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 reveal fade-top">
              <div className="section-title">
                <h2>ABDM Registration Ready? Request a Demo Now!</h2>
                <img src={sectionimg} alt="Section Image" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 reveal fade-left ">
              <form className="form" action="#">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <input name="name" type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <input name="email" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <input name="phone" type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <input name="health" type="text" placeholder="Health Facility Name" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <textarea name="message" placeholder="Write Your Message Here....."></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-md-4 col-12">
                    <div className="form-group">
                      <div className="button">
                        <button type="submit" className="btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-12 reveal fade-right ">
              <div className="appointment-image">
                <img src={contactus} alt="Contact Us" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
