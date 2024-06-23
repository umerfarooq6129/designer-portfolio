import React from 'react';

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full justify-between px-4 md:px-[10%] items-center py-20" id='#about'>
        <div className="flex flex-col w-full lg:w-1/2 gap-4 items-start">
          <h1 className="custom-heading text-white text-4xl md:text-5xl w-full md:w-[400px]">
            Let’s get know about me closer
          </h1>
          <p className="custom-font text-[#A8A8A8]">
            Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases her wide range of work, spanning books, posters, and web design.
          </p>
          <button className="custom-font text-white bg-[#FF9142] px-6 md:px-8 py-3 mt-8 rounded-[50px]">
            Discover More About Me
          </button>
        </div>
        <div className="mt-10 lg:mt-0 lg:ml-8 flex justify-center w-full lg:w-auto">
          <img src="images/about-img.png" className="w-60 md:w-80" alt="About Me" />
        </div>
      </div>
    </>
  );
}

export default About;
