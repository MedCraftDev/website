import React from 'react';
import './CallButton.css';

const CallButton = () => {
    return (
      <section className="call-buton">
      <a className="cc-calto-action-ripple" href="tel:8088435500">
        <i className="fa fa-phone"></i>
        <span className="num">8088435500</span>
      </a>
    </section>

    );
};

export default CallButton;
