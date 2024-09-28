import React from 'react'
import himg from "../../assets/img/images/h-img.png";
import himg1 from "../../assets/img/images/h-img1.png";
import himg2 from "../../assets/img/images/h-img2.png";
import './howitwork.css'

export default function HowItWorks() {
    return (
        <div className='bg-how'>
        <div className='container'>
            <div className="row mt-4">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="how-banner">
                        <h2 className="hwork-h2">We Made Simple</h2>
                        <h1 className="hwork-h1"> How It <span className='span-work'>Works ?</span></h1>
                        <p style={{color:"#13A7E7"}}>
                            Lorem ipsum dolor amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                        <div className="steps">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12 mt-3">
                                    <div className="step mt-2">
                                        <div className='img-hiw'>
                                        <img src={himg} alt="Search Best Online Professional" className='hiw-img' />
                                        </div>
                                        <h4 style={{color:"#13A7E7"}}>Search Best Online Professional</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 mt-3">
                                    <div className="step">
                                        <img src={himg1} alt="Get Instant Appointment" className='hiw-img' />
                                        <h4 style={{color:"#13A7E7"}}>Get Instant Appointment</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 mt-3">
                                    <div className="step">
                                        <img src={himg2} alt="Leave Your Feedback"className='hiw-img' />
                                        <h4 style={{color:"#13A7E7"}}>Leave Your Feedback</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}