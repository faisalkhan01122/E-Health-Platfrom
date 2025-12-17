import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo/ihrc-logo.png'; // Example logo import
import logo2 from '../../assets/logo/HMRC-logo.png'; // Example logo import
import logo3 from '../../assets/logo/hsa-logo.png'; // Example logo import

const FooterPartnerSection = () => {
  const partners = [
    { name: 'IHRC', logo: logo1, to: '/ihrc' },
    { name: 'HMRC', logo: logo2, to: '/hmrc' },
    { name: 'Health Services Academy', logo: logo3, to: '/hsa' },
    // Add more partners as needed
  ];

  return (
    <div className="bg-graylight py-2 font-poppins">
      <div className="mx-auto text-center">
        <h2 className="text-2xl text-primary mb-4">Our Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto">
          {partners.map((partner, index) => (
            <Link key={index} to={partner.to} className='flex flex-col items-center justify-center font-poppins gap-2'>
              <div className="w-20 h-20 flex justify-center items-center p-2 bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
                <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full" />
              </div>
              <p className='text-lg text-gray'>{partner.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterPartnerSection;