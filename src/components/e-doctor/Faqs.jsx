import React from 'react';
import AccordionComponent from './AccordionComponent'; // Adjusted to match new name
import { accordion } from '../../utils/data'; // Assuming accordion data is in data.js or similar

const Faqs = () => {
  return (
    <>
      <div className="font-poppins font-bold mt-5 sm:p-3">
        <h1 className="text-2xl text-gray  sm:text-xl">Frequently Asked Questions</h1>
      </div>
      <div className='p-4  '>
        <AccordionComponent data={accordion} />
      </div>
    </>
  );
};

export default Faqs;
