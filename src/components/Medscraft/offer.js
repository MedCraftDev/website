import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../assets/css/offer.css';
import Offer1 from '../../assets/img/Offer1.png';
import Offer2 from '../../assets/img/Offer2.png';

const ConsultationCard = ({ img, alt }) => {
    return (
        <Link to="#" className="cardd1 offer">
            <img className='cardd1-img offer' src={img} alt={alt} />
        </Link>
    );
};

ConsultationCard.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string
};

ConsultationCard.defaultProps = {
    alt: 'Consultation Image'
};

function App() {
    const consultations = [
        { img: Offer1, alt: 'Offer 1' },
        { img: Offer2, alt: 'Offer 2' },
    ];

    return (
        <div className="diseasesoffer" style={{marginTop:"0px"}}>
            <div className="cardds1-container offer">
                {consultations.map((consultation, index) => (
                    <ConsultationCard key={index} img={consultation.img} alt={consultation.alt} />
                ))}
            </div>
        </div>
    );
}

export default App;
