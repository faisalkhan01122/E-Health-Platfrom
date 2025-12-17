import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo/HMRC-logo.png';
import { FaHome, FaInfoCircle, FaServicestack, FaResearchgate, FaBook, FaQuestionCircle, FaEnvelope, FaTimes } from 'react-icons/fa';
import { MdCategory } from 'react-icons/md';

const items = [
  { name: 'Home', link: '', icon: <FaHome /> },
  { name: 'About HMRC', link: '/hmrc/about', icon: <FaInfoCircle /> },
  { name: 'HMRC Services', link: '/hmrc/services', icon: <FaServicestack /> },
  { name: 'Research At HMRC', link: '/hmrc/research', icon: <FaResearchgate /> },
  { name: 'Resources', link: '/hmrc/resources', icon: <FaBook /> },
  { name: 'FAQs', link: '/hmrc/faqs', icon: <FaQuestionCircle /> },
  { name: 'Contact Us', link: '/hmrc/contact', icon: <FaEnvelope /> }
];


const HMRCPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex w-[90%] mx-auto p-4 gap-4">
      {/* Sidebar */}
      <button
        className="sm:hidden fixed top-6 right-16 z-50 text-primary"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={24} /> : <MdCategory size={24} />}
      </button>

      {/* Backdrop for modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-graylight transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:relative sm:min-h-screen sm:w-1/5 z-50 sm:z-auto`}
      >
        <div className="flex items-center p-4 justify-center">
          <img src={logo} alt="" className="object-cover" />
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="mb-2">
              <Link
                to={item.link}
                className="flex items-center p-2 rounded text-primary hover:bg-gray-300"
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default HMRCPage;