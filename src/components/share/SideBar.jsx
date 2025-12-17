import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdCategory } from 'react-icons/md';

const SideBar = ({ items }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* Toggle button for small screens */}
      <button
        className="sm:hidden fixed top-6 right-12 p-2 bg-primary-2 rounded-lg z-50 shadow-sm text-primary"
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
        className={`fixed top-0 left-0 h-screen w-64 bg-primary-2 text-primary transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:relative sm:top-20 sm:w-64 sm:mx-4 sm:sticky z-50 lg:z-10`}
      >
        <ul className="h-full overflow-y-auto hide-scrollbar">
          {items.map((item, index) => (
            <li
              key={index}
              className={`p-3 flex items-center space-x-2  cursor-pointer transition-colors duration-400 hover:bg-graylight hover:text-primary ${
                currentPath === item.link ? 'bg-graylight text-primary border-b' : 'hover:bg-graylight hover:border-b'
              }`}
            >
              <Link to={item.link} className="flex items-center space-x-2">
                <span>{item.icon}</span> {/* Display icon */}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    })
  ).isRequired,
};

export default SideBar;