import PropTypes from 'prop-types';
import { motion } from 'framer-motion'; // Import framer-motion for animations

const ServiceCard = ({ icon, title, bgColor }) => {
  return (
    <motion.div
      className={`flex flex-col items-center ${bgColor} rounded-lg p-6 transition-shadow duration-300`}
      whileTap={{ scale: 1.05 }} // Scale down slightly on tap
    >
      <motion.div
        className="text-primary mb-4"
        initial={{ opacity: 0, y: -40 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Animate to final state
        transition={{ duration: 1 }} // Transition duration
        whileHover={{ scale: 1.2 }} // Up and down animation on hover
      >
        {icon}
      </motion.div>
      <motion.h3
        className="text-lg font-semibold text-gray"
        initial={{ opacity: 0, x: -20 }} // Initial state
        animate={{ opacity: 1, x: 0 }} // Animate to final state
        transition={{ duration: 0.5 }} // Transition duration
      >
        {title}
      </motion.h3>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string, // Add bgColor prop type
};

ServiceCard.defaultProps = {
  bgColor: 'bg-white', // Default background color
};

export default ServiceCard;