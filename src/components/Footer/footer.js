import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="bg-black px-4 md:px-[10%] py-20">
        <div className="text-center">
          <h4 className='custom-font text-[#FF9142] text-xl pb-2'>Get in Touch With Us</h4>
          <h1 className='custom-heading text-white text-3xl md:text-5xl underline'>info@aaronn.com</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start pt-16 md:pt-36 w-full">
          <img src="images/Brand-logo.svg" className="mx-auto md:mx-0" width={150} alt="Brand Logo" />
          <div className='text-white custom-heading w-full md:w-[20%] text-center md:text-left mt-10 md:mt-0'>
            <p>Street Avenue 21, CA</p>
            <p>0-8-00-888-000</p>
          </div>
          <div className='text-white custom-heading w-full md:w-[20%] text-center md:text-left mt-10 md:mt-0'>
            <p>+9 0283353</p>
          </div>
        </div>
        
        <hr className='text-white mt-10 mb-6' />
        
        <h1 className='text-center text-white custom-heading'>© 2023. Ideapeel. All rights reserved.</h1>
      </div>
    </>
  );
}

export default Footer;
