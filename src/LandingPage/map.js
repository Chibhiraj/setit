import React from 'react';

const Map = () => {
  return (
    <div className='text-center'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.6237321860644!2d77.31580037556921!3d11.141375552355052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907a7a56402af%3A0x2deaaf8daf2a725c!2sRSETI%20Tiruppur!5e0!3m2!1sen!2sin!4v1715758459426!5m2!1sen!2sin"
        width="400"
        height="250"
        style={{ border: 2 ,paddingRight:4}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
