import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo/ihrc-logo.png";
import { MdCategory } from "react-icons/md";
import {  FaTimes, FaHome, FaInfo, FaServicestack, FaHandshake, FaUserMd, FaBook, FaDownload, FaGraduationCap, FaCheckCircle, FaNewspaper, FaHandsHelping, FaEnvelope } from 'react-icons/fa';

const items = [
  { name: "Home", link: "/", icon: <FaHome /> },
  { name: "About IHRC", link: "/ihrc/about", icon: <FaInfo /> },
  { name: "IHRC Services", link: "/ihrc/services", icon: <FaServicestack /> },
  { name: "IHRC Collaborations", link: "/ihrc/collaborations", icon: <FaHandshake /> },
  { name: "Panel of Doctors", link: "/ihrc/panel-of-doctors", icon: <FaUserMd /> },
  { name: "Literature", link: "/ihrc/literature", icon: <FaBook /> },
  { name: "Downloads", link: "/ihrc/downloads", icon: <FaDownload /> },
  { name: "Research & Education", link: "/ihrc/research-education", icon: <FaGraduationCap /> },
  { name: "Quality & Standards", link: "/ihrc/quality-standards", icon: <FaCheckCircle /> },
  { name: "News & Events", link: "/ihrc/news-events", icon: <FaNewspaper /> },
  { name: "Support Us", link: "/ihrc/support-us", icon: <FaHandsHelping /> },
  { name: "Contact Us", link: "/ihrc/contact", icon: <FaEnvelope /> },
];

const IHRCPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-[90%] mx-auto p-4 gap-4">
      {/* Toggle button for small screens */}
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
      <div className="w-full sm:w-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default IHRCPage;
