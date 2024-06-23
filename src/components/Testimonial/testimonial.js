import React from 'react';

const Testimonial = () => {
  return (
    <>
      <div className='px-4 md:px-[10%] py-20'>
        <div className="flex flex-col md:flex-row justify-between items-center pb-8">
          <h1 className='custom-heading text-4xl md:text-5xl text-white'>Testimonial</h1>
          <img src="images/quote.png" className="mt-6 md:mt-0" width={100} alt="Quote" />
        </div>
        <div className="w-full md:w-[70%]">
          <p className='text-[#949494] custom-font'>
            “Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”
          </p>
          <h6 className='custom-heading text-white pt-4'>- Martin Lee</h6>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
