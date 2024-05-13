import { green } from '@mui/material/colors'
import React from 'react'

const socialHandles = () => {
  return (
    <section className="pt-3 text-center">
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor:'#17B169' }}
        href="https://api.whatsapp.com/send/?phone=%2B919489043923&text&type=phone_number&app_absent=0"
        role="button"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#ac2bac' }}
        href="https://www.instagram.com/tiruppur_rseti?igsh=MXQ1aGQxZ2pleDFpMw=="
        role="button"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#3b5998' }}
        href="https://www.facebook.com/cbrseti.tirupur"
        role="button"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#7AA2E3' }}
        href="https://t.me/rseti0"
        role="button"
      >
        <i className="fab fa-telegram"></i>
      </a>
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#FF0000' }}
        href="https://www.youtube.com/channel/UCsY121Q6JHe3UrkEPWviJOQ"
        role="button"
      >
        <i className="fab fa-youtube"></i>
      </a>
      <div>
        <p>
          
        </p>
      </div>
      </section>
  )
}

export default socialHandles