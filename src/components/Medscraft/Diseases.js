import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/diseases.css';
import { Link } from 'react-router-dom';
import Pregnancy from '../../assets/img/diseases-image/pregnancy.png';
import Acne from '../../assets/img/diseases-image/Acne.png';
import Depression from '../../assets/img/diseases-image/depression.png';
import Coughing from '../../assets/img/diseases-image/coughing.png';
import Pediatric from '../../assets/img/diseases-image/pediatric.png';
import Sexology from '../../assets/img/diseases-image/sexology.png';


const ConsultationCard = ({ img, title, link }) => {
    return (
        <Link to={link} className="cardd">
            <img className='cardd-img' src={img} alt={title} />
            <h3 className="title">{title}</h3>
            <button className="consult-button">CONSULT NOW</button>
        </Link>
    );
};

ConsultationCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

function App() {
    const consultations = [
        { img: Pregnancy, title: 'Pregnancy Scare', link: "/diseases" },
        { img: Acne, title: 'Skin troubles', link: "/diseases" },
        { img: Sexology, title: 'Intimacy issues', link: "/diseases" },
        { img: Coughing, title: 'Viral symptoms', link: "/diseases" },
        { img: Pediatric, title: 'Unwell', link: "/diseases" },
        { img: Depression, title: 'Mental distress', link: "/diseases" },
    ];

    return (
        <div className="diseases">
            <div className='diseases-header'>
                <h1>Book Appointment with doctor related to different healthcare issues</h1>
                {/* <button className="view-all-button">
                    <Link to='/diseases' className="link">
                        View All Specialties
                    </Link>
                </button> */}
            </div>
            <div className="cardds-container">
                {consultations.map((consultation, index) => (
                    <ConsultationCard key={index} img={consultation.img} title={consultation.title} />
                ))}
            </div>

        </div>
    );
}

export default App;
