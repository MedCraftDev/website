import React from 'react';
import { FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import '../../assets/css/new-footer.css';
import './footer.css';
import { Link } from "react-router-dom";
import gplay from '../../assets/img/gplay.png'
import iplay from '../../assets/img/iplay.png'
import footerlogo from '../../assets/img/logo_header1.png'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import CallButton from './callusbutton';


export default function FooterBar() {
  return (
    <div className="foot-bg mt-5 p-3">
      <div className='container '>
        <div className='row'>
          <div className='col-lg-4 col-md-12 col-sm-12 mt-1'>
            <Link to="/">
              <img src={footerlogo} className='foot-logo' />
            </Link>
            <ul>
              <li className='foot-head mt-3  pe-3'>MEDSCRAFT HEALTHCARE</li>
              <li className='foot-addres1 pe-3'>
                Plot No.38, NTI Layout, AMCO Colony, Kodigehalli,<br />
                Banglore - 560092
              </li>
              <li className='foot-addres1 pe-3'>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: '6px', marginRight: '6px', fontSize: "15px" }} className='mt-3' />
                <a href="mailto:info@medscraft.com">info@medscraft.com</a>
              </li>
              <li className='foot-addres1 pe-3'>
                <FontAwesomeIcon icon={faPhone} style={{ marginLeft: '6px', marginRight: '6px', fontSize: "15px" }} className='mt-3' />
                <a href="tel:8088435500">8088435500</a>
              </li>
              <li className='foot-addres1 pe-3 mt-2'>
                <FontAwesomeIcon icon={faWhatsapp} style={{ marginLeft: '6px', marginRight: '6px', fontSize: "20px", color: "white" }} className='mt-2' />
                <FontAwesomeIcon icon={faTwitter} style={{ marginLeft: '6px', marginRight: '6px', fontSize: "25x", color: "white" }} className='mt-' />
                <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: '6px', marginRight: '6px', fontSize: "20px", color: "white" }} className='mt-' />
                <FontAwesomeIcon icon={faLinkedinIn} style={{ marginLeft: '6px', marginRight: '6px', fontSize: "20px", color: "white" }} className='mt-' />
              </li>
            </ul>





          </div>
          <div className='col-lg-4 mt-5 p-3 col-md-12 col-sm-12'>
            <ul>
              <Link to="/homevisit"><li class="element">Home Consultation</li></Link>
              <Link to="Clinic Consultation"><li class="element">Clinic Consultation</li></Link>
              <Link to="/labTest"><li class="element">Lab Test</li></Link>
              <Link to="/"><li class="element">Create ABHA card</li></Link>
              <Link to="/"><li class="element">Family Coverage</li></Link>
            </ul>


          </div>
          <div className='col-lg-4 mt-5 col-md-12 col-sm-12'>
          <ul>
              <Link to="/"><li class="element">Pregnancy Scare</li></Link>
              <Link to=""><li class="element">Skin troubles</li></Link>
              <Link to="/"><li class="element">
              Intimacy issues</li></Link>
              <Link to="/"><li class="element">Viral symptoms</li></Link>
              <Link to="/"><li class="element">Unwell</li></Link>
            </ul>


            {/* <input type='email' placeholder='Enter Your Messages...' className='foot-input form-control' /> */}
            <div className=" justify-content-between mt-4 ">
              <img src={gplay} className="imnplay " /> <img src={iplay} className="imnplay" />
            </div>
          </div>
        </div>
      </div>
      <CallButton />
    </div>

    // <>
    //   <div className='foot-bg mt-5'>
    //     <div className='container '>
    //       <div className='row'>
    //         <div className='col-lg-4 mt-4'>
    //           <Link to="/">
    //             <img src={footerlogo} className='foot-logo' /></Link>
    // {/* <h4 className='foot-head text-center'>MEDSCRAFT HEALTHCARE</h4> */}
    //           <h5 className=' foot-head text-light'>Plot No.38, NTI Layout, AMCO Colony, Kodigehalli,<br />Banglore - 560092</h5>


    //         </div>
    //         <div className='col-lg-4 mt-4'>
    //           {/* <h5 className='foot-head2'>Twitter Live Feed</h5>
    //           <div className='tweets mt-5'>
    //             <p className='text-primary mt-3 p-4 tweet-para'>Sorry! No tweets found</p>
    //           </div> */}
    //           <div className=''>
    //           <h5>Home</h5>

    //           <p className="mt-3">About Us</p>
    //           <p>Our Service</p>
    //           <p>privacy policy</p>




    //           </div>

    //         </div>
    //         <div className='col-lg-4 mt-4'>
    //           {/* <h5 className='foot-head-3'>Newsletter</h5>
    //           <p className='head3-para mt-2'>A dipisicing elit sed dotem eiusmou tempor incididunt ut labore sed dotem.</p> */}
    //           <input type='email' placeholder='Enter your email' className='foot-input form-control' />
    //           <div className=" justify-content-between mt-4 ">
    //             <img src={gplay} className="imnplay " /> <img src={iplay} className="imnplay" />
    //           </div>


    //         </div>
    //       </div>
    //     </div>
    //     <div className='container-fluid'>
    //       <div className='row'>
    //         <div className='col-lg-12'>
    //           <div className='mt-5' style={{ background: "#373D57" }}>
    //             <h6 className='copyright'>Copyrights © 2024 by <span className='text-primary'>MEDSCRAFT HEALTHCARE.</span> All Rights Reserved.</h6>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //   </div>

    // </>
    // <footer id="footer" className="footer">
    //   <div className="footer-top">
    //     <div className="footer-container">
    //       <div className="single-footer">
    //         <div>
    //           <Link to="/">
    //             <h1 className="footer-logo">MEDSCRAFT</h1>
    //           </Link>
    //         </div>
    //         <p>
    //           MedsCraft Healthcare, a cutting-edge digital platform set to
    //           transform India&apos;s healthcare landscape. We firmly believe in
    //           the power of technology to tackle the core issues in the
    //           country&apos;s healthcare system.
    //         </p>
    //         <ul className="social">
    //           <li>
    //             <a href="#" aria-label="Facebook">
    //               <FontAwesomeIcon icon={faFacebookF} />
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" aria-label="Instagram">
    //               <FontAwesomeIcon icon={faInstagram} />
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" aria-label="LinkedIn">
    //               <FontAwesomeIcon icon={faLinkedinIn} />
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="single-footer f-link">
    //         <h2>Quick Links</h2>
    //         <div className="row">
    //           <div className="col-lg-6 col-md-6 col-12">
    //             <ul>
    //               <li>
    //                 <Link to="/aboutus">
    //                   <i className="fa fa-caret-right" aria-hidden="true"></i>
    //                   About Us
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to="/contactus">
    //                   <i className="fa fa-caret-right" aria-hidden="true"></i>
    //                   Contact Us
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to="/faq">
    //                   <i className="fa fa-caret-right" aria-hidden="true"></i>
    //                   FAQs
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to="/gallery">
    //                   <i className="fa fa-caret-right" aria-hidden="true"></i>
    //                   Gallery
    //                 </Link>
    //               </li>
    //             </ul>
    //           </div>
    //           <div className="col-lg-6 col-md-6 col-12">
    //             <ul>
    //               <li>
    //                 <Link to="/homevisit">
    //                   <i className="fa fa-caret-right" aria-hidden="true"></i>
    //                   Home visit
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to="/finddoctor">
    //                   <i className="fa fa-caret-right" aria-hidden="true"></i>
    //                   Find Doctor
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to="/cliniconboarding">
    //                   <i className="fa fa-caret-right" aria-hidden="true"></i>
    //                   Clinic On-Boarding
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to="/virtualvisit">
    //                   <i className="fa fa-caret-right" aria-hidden="true"></i>
    //                   Virtual Visit
    //                 </Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="single-footer f-link">
    //         <h2>Open Office</h2>
    //         <div className="row">
    //           <ul className="footer-address">
    //             <li>
    //               <a href="#">
    //                 <i className="fa fa-map-marker" aria-hidden="true"></i>
    //                 Plot No.38, NTI Layout, Rajeev Gandhi Nagar, Kodigehalli, Banglore-560092
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#">
    //                 <i className="fa fa-phone" aria-hidden="true"></i>
    //                 9871046004
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#">
    //                 <i className="fa fa-envelope" aria-hidden="true"></i>
    //                 admin@medscraft.com
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="copyright">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-12 col-md-12 col-12">
    //           <div className="copyright-content">
    //             <p>
    //             2024 © Medscraft Pvt Ltd. Copyright and all rights reserved.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};


