import React from 'react'
import '../../assets/css/homevisit.css';
import panel from '../../assets/img/Doctors-pana.svg';
import book from '../../assets/img/Pediatrician.svg';
import physian from '../../assets/img/Stem.svg'
import { FaPlus } from "react-icons/fa";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCheck, faClock, faHeart, faHourglass, faInbox, faIndianRupeeSign, faPeopleArrowsLeftRight, faSyringe } from '@fortawesome/free-solid-svg-icons';


import Slider from "react-slick";
import { colors } from '@mui/material';
import { green } from '@mui/material/colors';
import Caroselhome from './homevisit/caroselhome';

const HomeVisit = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

  };
  return (
    <>

      <div className='home-visit'>
        {/* front panel home */}
        <div className='container p-3 '>
          <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-4'>
              <h3 className='banner-doctor text-light mt-2'>Experienced doctor at home</h3>
              <h1 className='text-left banner-min text-light mt-2 ps-3'>In 60 Minutes</h1>
              <p className='text-light mt-2 banner-text'>Get a home visit by our experienced & dedicated General Physicians
                who are available 24X7. Kyno brings you the reliability of a 'family doctor'
                along with a wide range of at-home medical services.</p>
              <button className='btn banner-btn'>Call me 6383456780</button>
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-4'>
              <img src={panel} className='img-home' />
            </div>
            <div className='col-lg-2'></div>

          </div>
        </div>

      </div>
      {/* community */}
      <div className='p-3'>
        <div className='container mt-5 '>
          <div className='row'>
            <div className='col-lg-12'>
              <h4 className='text-uppercase'>--Our Community</h4>
            </div>
          </div>

        </div>
        <div className='container mt-5 mb-3'>
          <div className='row'>
            <div className='col-lg-2'>
              <h2 className='mb-2 mt-2 count-no text-center'>5,000<span ><FaPlus className='plus-icon' /></span></h2>
              <div className='line mt-2'></div>
              <h3 className='mb-2 mt-2 text-center'>Happy Patients</h3>
            </div>
            <div className='col-lg-2'>

              <h2 className='mb-2 mt-2 count-no text-center'>5,000<span ><FaPlus className='plus-icon' /></span></h2>
              <div className='line mt-2'></div>
              <h3 className='mb-2 mt-2 text-center'>Happy Patients</h3>
            </div>
            <div className='col-lg-2'>
              <h2 className='mb-2 mt-2 count-no text-center'>25<span ><FaPlus className='plus-icon' /></span></h2>
              <div className='line mt-2'></div>
              <h3 className='mb-2 mt-2 text-center'>Doctors</h3>
            </div>
            <div className='col-lg-2'>
              <h2 className='mb-2 mt-2 count-no text-center'>45<span className='plus-icon'>mins</span></h2>
              <div className='line mt-2'></div>
              <h3 className='mb-2 mt-2 text-center'>Average Response time</h3>
            </div>
            <div className='col-lg-2'>
              <h2 className='mb-2 mt-2 count-no text-center'>5<span ><FaPlus className='plus-icon' /></span></h2>
              <div className='line mt-2'></div>
              <h3 className='mb-2 mt-2 text-center'>Cities</h3>
            </div>
          </div>

        </div>
      </div>
      {/* why medcraft*/}
      <div className='mt-5 bg-meds'>
        <div className=' mt-5 mb-5'>
          <h2 className='ps-5'> Why Medcraft ?</h2>
        </div>
        <div className='container mt-5 '>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
              <div class="card" >
                <div class="card-body">
                  <div className='row mb-5 d-flex justify-content-center'>
                    <div className='col-sm-4 '><FontAwesomeIcon className='icon-round  why-icon' beatFade icon={faCheck} /> </div>
                  </div>
                  <h5 class="card-title  mb-3">Excellence Assured</h5>
                  <h6 class="card-text">Expert doctors with proven experience, best quality medical supplies</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
              <div class="card" >
                <div class="card-body">
                  <div className='row mb-5 d-flex justify-content-center'>

                    <div className='col-sm-4 '><FontAwesomeIcon className='icon-round  why-icon' beatFade icon={faSyringe} /> </div>

                  </div>
                  <h5 class="card-title  mb-3">Equipped & Ready</h5>
                  <h5 class="card-text">Expert doctors with proven experience, best quality medical supplies</h5>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
              <div class="card">
                <div class="card-body">
                  <div className='row mb-5 d-flex justify-content-center'>
                    <div className='col-sm-4 '><FontAwesomeIcon className='icon-round  why-icon' beatFade icon={faHeart} /> </div>
                  </div>
                  <h5 class="card-title  mb-3">Equipped & Ready</h5>
                  <h5 class="card-text">Expert doctors with proven experience, best quality medical supplies</h5>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
              <div class="card" >
                <div class="card-body">
                  <div className='row mb-5 d-flex justify-content-center'>
                    <div className='col-sm-4 '><FontAwesomeIcon className='icon-round  why-icon' beatFade icon={faClock} /> </div>
                  </div>
                  <h5 class="card-title  mb-3">Equipped & Ready</h5>
                  <h5 class="card-text">Expert doctors with proven experience, best quality medical supplies</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* book visit */}

      <div className='bg-book'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-4 panel-content mt-5'>
              <h5>Book your first visit for <br /><span><FontAwesomeIcon className='' icon={faIndianRupeeSign} /> </span>999</h5>
              <button className='btn banner-btn'>Call Us</button>
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-3'>
              <img src={book} className='img-home' />
            </div>
            <div className='col-lg-2'></div>
          </div>
        </div>
      </div>
      {/* Advantages */}
      {/* <div className='bg-advantage mt-5 mb-5'>
        <div className='mt-5 mb-5 container-fluid'>
          <h5 className='ps-5 advantage-head'> The Medscraft Advantages</h5>
          <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-7'>
              <h2 className='mt-3 mb-3 advan-subhead '>Compassionate Care, Redefined</h2>
              <h3 className='mt-2 mb-2'>We put yours & your family's comfort first.</h3>
            </div>
            <div className='col-lg-4'></div>
          </div>
        </div>
        <div className='container mb-3'>
          <div className='row'>
            <div className='col-lg-3'></div>
            <div className='col-lg-6'>
              <div className='container bg-dark border border-success p-3 mb-3'>
                <div className='row'>
                  <div className='col-md-3 text-light'>&nbsp;</div>
                  <div className='col-md-5 text-light'><span><FontAwesomeIcon className='text-danger icon-table ml-5' icon={faCheck} /></span>Medscraft</div>
                  <div className='col-md-4 text-light'>Clinic Visit</div>
                </div>
              </div>
            </div>
            <div className='col-lg-3'></div>
          </div>
        </div>

        <div className='container '>
          <div className='row '>
            <div className='col-lg-3'></div>
            <div className='col-lg-2 border border-success'>
              <div className='mt-4'>
                <FontAwesomeIcon className='text-danger icon-table ml-5' icon={faCar} />
                <h6>Travelling</h6>
              </div>
              <div className='mt-4'>
                <FontAwesomeIcon className='text-danger icon-table ml-5' icon={faHourglass} />
                <h6>Waiting</h6>
              </div>
              <div className='mt-4'>
                <FontAwesomeIcon className='text-danger icon-table ml-5' icon={faPeopleArrowsLeftRight} />
                <h6>Consultation</h6>
              </div>
              <div className='mt-4'>
                <FontAwesomeIcon className='text-danger icon-table ml-5' icon={faInbox} />
                <h6>Followup</h6>

              </div>

            </div>
            <div className='col-lg-2 border border-success'>
              <div className='mt-4 p-2'>
                <h6 className='text-success'>Attentive care at Home</h6>
              </div>
              <div className='mt-4 p-2'>
                <h6 className='text-success'>Attentive care at Home</h6>
              </div> <div className='mt-4 p-2'>
                <h6 className='text-success'>Attentive care at Home</h6>
              </div> <div className='mt-4 p-2'>
                <h6 className=''>Attentive care at Home</h6>
              </div>

            </div>
            <div className='col-lg-2 border border-success'>
              <div className='mt-4 '>
                <h6 className=''>Little knowledge sharing,
                  5-10 minutes consultations</h6>
              </div><div className='mt-4 '>
                <h6 className=''>Little knowledge sharing,
                  5-10 minutes consultations</h6>
              </div><div className='mt-4'>
                <h6 className=''>Little knowledge sharing,
                  5-10 minutes consultations</h6>
              </div>
              <div className='mt-4'>
                <h6 className=''>Little knowledge sharing,
                  5-10 minutes consultations</h6>
              </div>
            </div>
            <div className='col-lg-3'></div>
          </div>
        </div>
      </div> */}
      {/* our services */}
      <div className='bg-services'>
        <div className='mt-5 mb-5 p-5 container-fluid'>
          <h5 className='ps-5 advantage-head'>Our Various Services</h5>
          <div className='row mt-3'>
            <div className='col-lg-1'></div>
            <div className='col-lg-7'>
              <h2 className='mt-3 mb-3 advan-subhead '>Compassionate Care
                at Your Fingertips</h2>

            </div>
            <div className='col-lg-4'></div>
          </div>
        </div>
        {/* <div className='container'>
          <div className='row'>
            <div className='col-lg-2'></div>
            <div className='col-lg-10'>
              <div className='container'>
                <div className='row bg-phy '>
                  <div className='col-md-1'></div>
                  <div className='col-md-5'>
                    <h3 className='home-physian mt-3 mr-5'>General Physician Home visit</h3>
                    <h6 className='home-phy-para mt-3 ml-4'>For all your multiple issues, Resolve them all in just 1 visit.</h6>
                    <button className='btn banner-btn'>Call us</button>
                  </div>
                  <div className='col-md-4'>
                    <img src={physian} className='img-phy' />
                  </div>
                  <div className='col-md-2'></div>
                </div>
              </div>
            </div>
            <div className='col-lg-2'></div>
          </div>
        </div> */}
        <div className='caroselhome'>
          <Caroselhome />
        </div>


        <div className='container slider mt-5'>
          <h1 className='mt-4'>Transforming Lives -</h1>
          <h6 className='mt-3'>Words of Healing From Patients We've Serve</h6>

          <Slider {...settings} className='my-5'>
            <div >
              <div className='slide-box'>
                <img src={physian} className='img-icoon1' />
                <p> the doctor what they did well and what you'd like them to do differently. For example, instead of saying "I didn't understand," you could say "I didn't understand because you used lots of medical words that didn't mean anything to me</p>

              </div>
            </div>
            <div >

              <div className='slide-box'>
                <img src={physian} className='img-icoon1' />
                <p> the doctor what they did well and what you'd like them to do differently. For example, instead of saying "I didn't understand," you could say "I didn't understand because you used lots of medical words that didn't mean anything to me</p>
              </div>
            </div>
            <div>
              <div className='slide-box'>
                <img src={physian} className='img-icoon1' />
                <p> the doctor what they did well and what you'd like them to do differently. For example, instead of saying "I didn't understand," you could say "I didn't understand because you used lots of medical words that didn't mean anything to me</p>
              </div>
            </div>
            <div>
              <div className='slide-box'>
                <img src={physian} className='img-icoon1' />
                <p> the doctor what they did well and what you'd like them to do differently. For example, instead of saying "I didn't understand," you could say "I didn't understand because you used lots of medical words that didn't mean anything to me</p>
              </div>
            </div>
            <div>
              <div className='slide-box'>
                <img src={physian} className='img-icoon1' />
                <p> the doctor what they did well and what you'd like them to do differently. For example, instead of saying "I didn't understand," you could say "I didn't understand because you used lots of medical words that didn't mean anything to me</p>
              </div>
            </div>
            <div>
              <div className='slide-box'>
                <img src={physian} className='img-icoon1' />
                <p> the doctor what they did well and what you'd like them to do differently. For example, instead of saying "I didn't understand," you could say "I didn't understand because you used lots of medical words that didn't mean anything to me</p>
              </div>
            </div>
          </Slider>
        </div>

      </div>


    </>
  )
}

export default HomeVisit;