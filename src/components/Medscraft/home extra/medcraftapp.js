import React from "react";
import appicon from '../../../assets/img/medsappicon.png';
import './medsapp.css';
import gplay from '../../../assets/img/gplay.png'
import iplay from '../../../assets/img/iplay.png'

export default function MedsCraftapp() {
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <img src={appicon} className="w-100" />

                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-5 mt-5">
                        <div className="">
                            <h2 className="medsh1">Medscraft App</h2>
                            <h2 className="medsh2">Coming Soon</h2>
                            <p className="medspara">Lorem ipsum dolor amet consectetur adipisicing eliteiuim<br /> sete eiusmod tempor incididunt ut labore etnalom dolore <br />magna aliqua.</p>
                            <div className=" justify-content-between mt-2 ">
                                <img src={gplay} className="implay " /> <img src={iplay} className="implay" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}