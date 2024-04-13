
import '../style/contact.css';
import React, { forwardRef } from 'react';
const Contact = forwardRef((props, ref) => {
  return (
    <><div ref={ref} className="contact-container">

      <div className="contact-container-flex">

        <div className="contact-card-contact">Contact</div>
        <div className="contact-card-contact2">Reach me down below</div>

        <div className="contact-card-container">

          <div className="contact-card-outer">
            <img src='map.png' className="icon" />
            <div className="contact-card-inner">
              <div className="contact-title-text">Location</div>
              <div className="contact-information-text">Haugesund, Norway</div>
            </div>
          </div>
          <div className="contact-card-outer">
            <img src='mail.png' className="icon" />
            <div className="contact-card-inner">
              <div className="contact-title-text">Mail</div>
              <div className="contact-information-text">danield@live.no</div>
            </div>
          </div>



        </div>



      </div>



    </div><div className='contact-end'><p>copyright © 2024. All rights are reserved</p></div></>
    

  );
})

export default Contact;
