

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const DiseaseCard = ({ title, description, bgColor, image }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll); // Optional: Remove listener after visibility is set
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col h-80 items-center ${bgColor} font-poppins  transition-shadow duration-300`}
      whileTap={{ scale: 0.95 }} // Scale down slightly on tap
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 40 }, // Start hidden
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Animate to visible
      }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover mb-4"
      />
      <div className='p-4'>
        <motion.h3
          className="text-lg font-bold text-center mb-2"
        >
          {title}
        </motion.h3>
        <motion.p className="">
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

DiseaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string, // Add bgColor prop type
  image: PropTypes.string.isRequired, // Add image prop type
};

DiseaseCard.defaultProps = {
  bgColor: 'bg-white', // Default background color
};

export default DiseaseCard;
