import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='flex justify-between px-4 md:px-[53px] pt-[20px] items-center'>
                <div className="logo">
                    <img src="images/Brand-logo.svg" width={100} alt="brand logo" />
                </div>
                <div className="hidden md:flex links">
                    <ul className='custom-font flex flex-row gap-10 text-xl text-white items-center'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="#about">About</Link>
                        </li>
                        <li>
                            <Link to="#services">Services</Link>
                        </li>
                        <button className='bg-black text-white border-2 border-[#FF9142] px-10 py-3 rounded-[50px]'>Contact</button>
                    </ul>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className='text-white'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center bg-black px-4 py-5">
                    <ul className='custom-font flex flex-col gap-4 text-xl text-white items-center'>
                        <li>
                            <Link to="/" onClick={toggleMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="#about" onClick={toggleMenu}>About</Link>
                        </li>
                        <li>
                            <Link to="#services" onClick={toggleMenu}>Services</Link>
                        </li>
                        <button className='bg-black text-white border-2 border-[#FF9142] px-10 py-3 rounded-[50px]'>Contact</button>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Header;
