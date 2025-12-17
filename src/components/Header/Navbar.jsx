import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import img from '../../assets/logo/logo.png';

const navLinks = [
  { path: '/', label: 'E-Doctors' },
  { path: '/doctor-at-home', label: 'Doctor at Home' },
  { path: '/second-opinion', label: 'Second Opinion' },
  { path: '/e-psychologist', label: 'E-Psychologist' },
  { path: '/e-physiotherapist', label: 'E-Physiotherapist' },
  { path: '/e-patient-care', label: 'E-Patient Care' },
  { path: '/e-pharmacy', label: 'E-Pharmacy' },
  { path: '/doctor-panel', label: 'Panel Of Doctors' },
  { path: '/remedy', label: 'Remedy' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 mx-4">
      <nav className="mx-auto p-4 flex px-20 justify-between items-center">
        <div>
          <NavLink to="/">
            <img src={img} alt="logo" className="w-16" />
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-gray hover:text-primary uppercase font-semibold text-sm ${
                  isActive ? 'border-b-2 border-primary text-primary' : ''
                }`
              }
            >
              {link.label}
              {/* <span className="absolute bottom-0 left-0 w-full w-4 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span> */}
            </NavLink>
          ))}
        </div>
        {/* <div>
          <button className="hidden md:flex items-center gap-2 border border-green-500 p-2 rounded-lg text-green-500 focus:outline-none font-bold hover:text-white hover:bg-green-500">
            <FaWhatsapp className="text-xl" />
          </button>
        </div> */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-gray hover:text-primary uppercase font-poppins text-base ${
                    isActive ? 'text-primary border-b-2 border-primary' : ''
                  }`
                }
                onClick={toggleMobileMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;