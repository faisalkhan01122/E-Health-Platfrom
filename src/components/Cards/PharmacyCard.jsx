import PropTypes from 'prop-types';
import { motion } from 'framer-motion'; // Import framer-motion for animations


const PharmacyCard = ({ pharmacies }) => {
  const { title, description, bgColor, image } = pharmacies;
  return (
    <motion.div
      className={`flex flex-col items-center ${bgColor} font-poppins h-96  rounded-lg shadow-sm shadow-primary transition-shadow duration-300`}
      whileTap={{ scale: 0.95 }} // Scale down slightly on tap
      
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-48  object-cover rounded-t-lg mb-4"
        initial={{ opacity: 0, y: -20 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Animate to final state
        transition={{ duration: 0.5 }} // Transition duration
      />
      <div className='p-6'>
      <motion.h3
        className="text-lg text-gray-800 font-bold mb-2"
        initial={{ opacity: 0, y: -20 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Animate to final state
        transition={{ duration: 0.5 }} // Transition duration
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0, y: 20 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Animate to final state
        transition={{ duration: 0.5 }} // Transition duration
      >
        {description}
      </motion.p>
      </div>
      
    </motion.div>
  );
};

PharmacyCard.propTypes = {
  pharmacies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

PharmacyCard.defaultProps = {
  bgColor: 'bg-white', // Default background color
};

export default PharmacyCard;