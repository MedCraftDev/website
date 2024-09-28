import React from "react";
import section from '../../../assets/img/section-img.png';
import './happydoctor.css';
import { FaAmbulance } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faTruckMedical, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

export default function Happydoctors() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>We Are Always Ready to Help You & Your Family</h2>
                            <img src={section} alt="Section" />
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-3 col-12 col-md-12 col-sm- justify-content-center">
                        {/* Start Single features */}
                        <div className="single-features">
                            <div className="single-icon" >
                            <FontAwesomeIcon icon={faTruckMedical} />
                            </div>
                            <h3>Emergency Help</h3>
                            <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi<br/> quam vulputate.</p>
                        </div>
                        {/* End Single features */}
                    </div>
                    <div className="col-lg-4 col-12 col-md-12 col-sm-4">
                        {/* Start Single features */}
                        <div className="single-features justify-content-center">
                            <div className="single-icon">
                            <FontAwesomeIcon icon={faUserDoctor} />
                            </div>
                            <h3>Enriched Pharmacy</h3>
                            <p>Lorem ipsum sit, consectetur <br/>adipiscing elit. Maecenas mi <br/>quam vulputate.</p>
                        </div>
                        {/* End Single features */}
                    </div>
                    <div className="col-lg-4 col-12 col-md-6 col-sm-4">
                        {/* Start Single features */}
                        <div className="single-features last">
                            <div className="single-icon">
                            <FontAwesomeIcon icon={faStethoscope} />
                            </div>
                            <h3>Medical Treatment</h3>
                            <p>Lorem ipsum sit, consectetur<br/> adipiscing elit. Maecenas mi<br/> quam vulputate.</p>
                        </div>
                        {/* End Single features */}
                    </div>
                </div>
            </div>
        </>
    );
}
