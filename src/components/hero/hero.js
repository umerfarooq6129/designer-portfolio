import React from 'react';

const Hero = () => {
    return (
        <>
            <div className='relative w-full flex items-center justify-center py-36'>
                <div className='flex flex-col items-center gap-12 w-full max-w-[800px] px-4 md:px-8 justify-center'>
                    <h1 className='custom-heading text-white text-4xl md:text-6xl text-center relative'>
                        Adaptive Logo Design for Your Brand
                        <div 
                            className="absolute w-[450px] h-[300px] top-[10%] right-0 translate-x-[20%] translate-y-[-50%] bg-cover bg-no-repeat"
                            style={{ backgroundImage: "url('/public/images/vector 8.png')" }}
                        ></div>
                    </h1>
                    <button className='custom-font flex gap-3 items-center text-white bg-[#FF9142] px-6 md:px-8 py-3 rounded-[50px]'>
                        Explore works <img src="images/arrow.svg" width={20} alt="arrow-icon" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Hero;
