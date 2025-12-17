import React from "react";
import logo from "../../assets/logo/logo.png";
import {
  FaAddressBook,
  FaBook,
  FaDownload,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuestionCircle,
  FaShieldAlt,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterMain = () => {
  return (
    <div className="bg-primary-2 text-gray font-poppins">
      <div className="w-[90%] mx-auto p-6 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Logo and Social Icons Section */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <img src={logo} alt="Logo" className="w-24 h-auto" />
          <p className="md:w-3/4">
            eHealth offers a variety of services to its clients.
          </p>
          <div className="flex gap-4 text-primary justify-center md:justify-start">
            <span className="text-xl">
              <FaFacebook />
            </span>
            <span className="text-xl">
              <FaInstagram />
            </span>
            <span className="text-xl">
              <FaTwitter />
            </span>
            <span className="text-xl">
              <FaLinkedin />
            </span>
          </div>
        </div>

        {/* User Links Section */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-primary text-xl">User Links</h1>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <FaBook className="text-primary mr-2" />
              <Link to="" className="text-gray-700 hover:text-primary">
                Literature
              </Link>
            </li>
            <li className="flex items-center">
              <FaDownload className="text-primary mr-2" />
              <Link to="" className="text-gray-700 hover:text-primary">
                Downloads
              </Link>
            </li>
            <li className="flex items-center">
              <FaShieldAlt className="text-primary mr-2" />
              <Link to="" className="text-gray-700 hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li className="flex items-center">
              <FaQuestionCircle className="text-primary mr-2" />
              <Link to="" className="text-gray-700 hover:text-primary">
                FAQs
              </Link>
            </li>
            <li className="flex items-center">
              <FaAddressBook className="text-primary mr-2" />
              <Link to="" className="text-gray-700 hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacts Section */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-primary text-xl">Contacts</h1>
          <div className="flex items-center mt-4">
            <FaEnvelope className="text-primary text-xl mr-2" />
            <p>info@ehealth.com.pk</p>
          </div>
          <div className="flex items-center mt-4">
            <FaMapMarkerAlt className="text-primary text-xl mr-2" />
            <p className="text-center md:text-left">
              E-Health, Business Incubation Center, Health Services Academy,
              Prime Ministers National Health Complex, NIH Park Road, Chak
              Shahzad, Islamabad-44000
            </p>
          </div>
          <div className="flex items-center mt-4">
            <FaPhoneAlt className="text-primary text-xl mr-2" />
            <p>0092518485870</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
