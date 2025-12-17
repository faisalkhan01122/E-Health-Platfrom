import React from 'react'
import Carousel from '../share/Carousel';

const Physiotherapist = () => {
  
    const slides = [
        {
          type: 'image',
          image: 'src/assets/doctors/6.webp',
          text: 'I am your Physiotherapist',
          desc: 'Healing Hands, Digital Touch:Physiotherapy Services at Your Fingertips',
        },
        {
            type: 'image',
            image: 'src/assets/doctors/2.webp',
            text: 'I am your Physiotherapist',
            desc: 'Healing Hands, Digital Touch:Physiotherapy Services at Your Fingertips',
          },
        {
          type: 'image',
          image: 'src/assets/doctors/5.webp',
          text: 'I am your Physiotherapist',
          desc: 'Healing Hands, Digital Touch:Physiotherapy Services at Your Fingertips',
        },
      ];
    
      return (
        <div>
          {/* Call the Carousel component and pass the slides */}
          <Carousel slides={slides} autoSlideInterval={4000} />
        </div>
      );
    };
  


export default Physiotherapist
