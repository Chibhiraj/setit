import React from 'react';
import Button from 'react-bootstrap/Button'; // Import Button component from react-bootstrap

function Offers() {
  return (
    <div className='offers' style={{ padding: 50, fontSize: 22, textAlign: 'center' }}>
      <p className="blinking-text">
        <strong>
          RSETI திருப்பூரின் இலவச பயிற்சி விவரங்கள் மற்றும் முன்பதிவு செய்ய கீழே உள்ள லிங்கை கிளிக் செய்யவும்....
        </strong>
      </p>
      <Button href='https://docs.google.com/forms/d/e/1FAIpQLScWEie-77JOjm9ORpTUP1XfhLufQ-H3rJCZXKdos1q1FNrzVA/viewform?usp=sf_link'>Apply here</Button>
    </div>
  );
}

export default Offers;
