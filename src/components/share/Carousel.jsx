import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import './Carousel.css'; // Import the CSS file for animations

const Carousel = ({ slides, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      goToNext();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoSlideInterval]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const { type, image, video, text, desc } = slides[currentIndex];

  return (
    <div className="relative flex items-center font-poppins justify-center bg-gradient-to-r from-primary to-primarylight">
      <button onClick={goToPrevious} className="w-8 h-8 absolute left-4 text-gray rounded-full font-bold cursor-pointer">
        <FaChevronLeft />
      </button>
      <div className="w-[80%] mx-auto  h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden ">
        <TransitionGroup className="w-full h-full relative flex items-center justify-center">
          <CSSTransition key={currentIndex} timeout={500} classNames="slide">
            <div data-aos="fade-up" className="w-full h-full absolute flex items-center justify-center">
              <div className="absolute left-0 w-1/2 h-full flex flex-col gap-6 items-center justify-center text-white font-poppins p-4">
                {/* <h1 className="text-4xl">Hi, <span className='text-gray font-bold'>{text}</span></h1>
                <p>{desc}</p> */}
                <h1 className="text-2xl sm:text-xl md:text-4xl">
                  Hi, <span className="text-gray font-bold">{text}</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg">{desc}</p>
                <Link to="" className="bg-white text-primary px-4 py-2 mt-4 rounded-full">Chat Now</Link>
              </div>
              <div className="absolute w-1/2 h-full right-0 text-gray">
                {type === 'image' ? (
                  <img src={image} alt="" className="object-cover w-full h-full" />
                ) : (
                  <video src={video} controls className="object-cover w-full h-full bg-black" />
                )}
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <button onClick={goToNext} className="w-8 h-8 absolute right-4 text-gray rounded-full font-bold cursor-pointer">
        <FaChevronRight />
      </button>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['image', 'video']).isRequired,
      image: PropTypes.string,
      video: PropTypes.string,
      text: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
  autoSlideInterval: PropTypes.number,
};

export default Carousel;