import React from 'react'
import faq from "../../assets/img/images/FAQ.png";
// import "../assets/css/responsive.css";
import "../../assets/css/style.css";

const FAQ = () => {
  return (
    <section className="bg-light py-3 py-md-5" id="faq">
    <div className="container">
      <div className="row gy-5 gy-lg-0 align-items-lg-center">
        <div className="col-12 col-lg-6 reveal fade-left">
          <img
            className="img-fluid rounded"
            loading="lazy"
            src={faq}
            style={{ width: "84%" }}
            alt="How can we help you?"
          />
        </div>
        <div className="col-12 col-lg-6 reveal fade-right">
          <div className="row justify-content-xl-end">
            <div className="col-12 col-xl-11">
              <h2 className="h1 mb-3">How can we help you?</h2>
              <p className="lead fs-4 text-secondary mb-5">
                We hope you have found an answer to your question. If you
                need any help, please{" "}
                <span
                  style={{
                    cursor: "pointer",
                    color: "#3974cb",
                    fontWeight: "600",
                  }}
                  onClick="location.href='#contact';"
                >
                  contact us
                </span>
                .
              </p>
              <div
                className="accordion accordion-flush"
                id="accordionExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is ABDM?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body" style={{ fontSize: "16px" }}>
                      The Ayushman Bharat Digital Mission (ABDM) is an
                      Indian government initiative to digitize healthcare
                      records and create a digital infrastructure for better
                      healthcare delivery under the Ayushman Bharat scheme.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What is Medscraft Healthcare?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body" style={{ fontSize: "16px" }}>
                      ABDM-certified micro HMIS with patient engagement,
                      powered by AConnect plugin, streamlining healthcare
                      operations.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What is ABHA Number?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body" style={{ fontSize: "16px" }}>
                      The ABHA (Ayushman Bharat Health Account) Number is a
                      unique identifier used to authenticate individuals and
                      connect their health records across different systems
                      and stakeholders. It ensures accurate issuance and
                      access to medical records, enhancing healthcare
                      coordination and delivery.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FAQ
