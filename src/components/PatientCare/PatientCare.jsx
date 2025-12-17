import React from 'react'
import Carousel from '../share/Carousel';

const PatientCare = () => {
  
    const slides = [
        {
          type: 'image',
          image: 'src/assets/doctors/6.webp',
          text: 'Its Patient Care Hospital',
          desc: '"Providing Hospital services with Quality Care, Right at your Home"',
        },
        {
            type: 'image',
            image: 'src/assets/doctors/2.webp',
            text: 'Its Patient Care Hospital',
            desc: '"Providing Hospital services with Quality Care, Right at your Home"',
          },
        {
          type: 'image',
          image: 'src/assets/doctors/5.webp',
          text: 'Its Patient Care Hospital',
          desc: '"Providing Hospital services with Quality Care, Right at your Home"',
        },
      ];
    
      return (
        <div>
          {/* Call the Carousel component and pass the slides */}
          <Carousel slides={slides} autoSlideInterval={4000} />
        </div>
      );
    };

export default PatientCare
