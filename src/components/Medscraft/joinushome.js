import React from 'react';
import joinus from '../../assets/img/joinushome.png';
import './joinus.css';
export default function Joinushome() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6 'style={{background:"#13A7E7"}}>
                        {/* <div class="card" style={{width:"35rem"}}>
                            <div class="card-body"> */}
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <img src={joinus} className='' />
                                </div>
                                <div className='col-lg-6 justify-content-center mt-5 contentj '>
                                    <h5 className='are-h'>Are You A Doctor?</h5>
                                    <h3 className='mt-2 tem'>Join Our Team</h3>
                                    <button className='join-btn mt-3'>Join As Doctor</button>
                                </div>
                                {/* </div>
                               </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
            </div>
        </>
    )
}
