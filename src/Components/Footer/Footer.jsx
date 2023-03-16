import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div id='contact' className='footer bg-dark pt-4'>
      <div className="container">
        <div className="row">
          <div className="together col-lg-7">
            <h2>Let's Work together.</h2>
            <p className='pb-4'>Let's work together to build something great.</p>
            <div className="circle_footer d-flex">
              <div className="circle_hello"></div>
              <h3 className='ps-3'>SAY HELLO</h3>
            </div>              

          </div>
          <div className="links col-lg-5">
            <ul className='links_grid ps-0 col-lg-9'>
              <li>LinkedIn</li>
              <span>/</span>
              <li>Twitter</li>
              <span>/</span>
              <li>Instagram</li>
            </ul>
            <p>a.lemouddene@gmail.com</p>
          </div>
          <div className="arrow-container"></div>
          <h8 className='mt-4 py-2 text-center'>© ANASS LEMOUDDENE 2023</h8>
          
        </div> 
      </div>
    </div>
  )
}

export default Footer