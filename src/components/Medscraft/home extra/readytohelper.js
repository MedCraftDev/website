import React from "react";
import section from '../../../assets/img/section-img.png';
import './readytohelp.css';
import { FaAmbulance } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faTruckMedical, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

export default function Readytohelper() {
    return (
        <div>
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
            </div>

            <div className="container " data-aos="fade-down">
                <div className="row">
                    <div className="col-lg-4  col-md-6 col-sm-4 col-12 card-content1">
                        <div className="d-flex justify-content-center  mt-1">
                            <FontAwesomeIcon icon={faTruckMedical} className="truck-icon" />
                        </div>
                        <div className="content-help  justify-content-center   mt-1">
                            <h4 className="help-Title text-center mt-3">Emergency Help</h4>
                            <p className="help-para text-center mt-3">Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-4 col-12">
                        <div className="d-flex justify-content-center  mt-1 ">
                            <FontAwesomeIcon icon={faUserDoctor} className="truck-icon" />
                        </div>
                        <div className="content-help  justify-content-center mt-1">
                            <h4 className="help-Title text-center mt-3">Enriched Pharmacy</h4>
                            <p className="help-para text-center mt-3">Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-4 col-12">
                        <div className="d-flex justify-content-center  mt-1 ">
                            <FontAwesomeIcon icon={faStethoscope} className="truck-icon" />
                        </div>
                        <div className="content-help  justify-content-center mt-1">
                            <h4 className="help-Title text-center mt-3">Medical Treatment</h4>
                            <p className="help-para text-center mt-3">Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                        </div>

                    </div>



                </div>
            </div>


        </div>
    )
}
