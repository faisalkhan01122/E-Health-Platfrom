import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DoctorCard = ({ data }) => {
  const { image, name, position, desc, twitter, facebook, linkedin } = data;
  return (
      <div className="bg-graylight border border-blue-300 h-96 w-full rounded-lg shadow-sm shadow-primary text-center">
        {/* Profile Image */}
        <div className=''>
          <img
            className="w-full h-48 object-cover bg-white rounded-t-lg transition-transform duration-300 hover:scale-105 transition-transform duration-300"
            src={image}
            alt="Profile"
          />
        </div>
        <div className='text-gray hover:bg-primarylight hover:text-white h-48 rounded-b-lg p-4'>
          {/* Name */}
          <h2 className="text-xl font-bold ">{name}</h2>

          {/* Title */}
          <p className="font-medium">{position}</p>

          {/* Description */}
          <p className=" mt-4">{desc}</p>

          {/* Social Media Icons */}
          <div className="px-6 pt-4 pb-2 flex justify-around">
            <Link to={twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 border p-1 rounded transition-transform duration-300 hover:scale-125">
              <FaTwitter className="h-6 w-6" />
            </Link>
            <Link to={facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 border p-1 rounded transition-transform duration-300 hover:scale-125">
              <FaFacebook className="h-6 w-6" />
            </Link>
            <Link to={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 border p-1 rounded transition-transform duration-300 hover:scale-125">
              <FaLinkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
    </div>
  );
};

DoctorCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorCard;
