import React from 'react';

import HeaderHsa from './HeaderHsa';
import PharmacyCard from '../Cards/PharmacyCard';

const Hsa = () => {
  // Sample data for pharmacies
  const pharmacies = [
    {
      title: 'About HSA',
      description: 'Health Services Academy (HSA) The HSA was established in 1988 to provide short training courses ..',
      bgColor: 'bg-blue-200',
      image: 'https://ehealth.com.pk/images/about-hsa-3418.png', // Sample image URL
    },
    {
      title: 'Business Incubation Center',
      description: 'At our Business Incubation Center, we are deeply committed to fostering technology and innovation w..',
      bgColor: 'bg-green-200',
      image: 'https://ehealth.com.pk/images/business-incubation-center-3192.png', // Sample image URL
    },
    {
      title: 'Research & Education',
      description: '.....',
      bgColor: 'bg-red-200',
      image: 'https://ehealth.com.pk/images/research-education-4189.png', // Sample image URL
    },
  ];

  return (
    <>
      {/* <div>
        <HeaderHsa
          bgImage="src/assets/logo/hsa-logo.png"
          heading="Health Services Academy (HSA)"
          description=""
        />
      </div> */}
      
      <div className="shadow-lg rounded-b-lg overflow-hidden p-4 md:p-6 text-gray bg-graylight">
        <h2 className="text-[1rem] md:text-[1.3rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
        
        </h2>
        {/* Display the cards in a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pharmacies.map((pharmacy, index) => (
            <PharmacyCard key={index} pharmacies={pharmacy} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hsa;
