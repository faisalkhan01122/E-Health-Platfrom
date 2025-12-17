import React from 'react'

const HeaderHsa = ({ bgImage, heading, description }) => {
  return (
    <>
    <div>
    {/* Hero Section with Background Image */}
    <div
      className="relative w-full h-80 bg-cover font-poppins bg-center rounded-t-lg shadow-md overflow-hidden"
      style={{
        backgroundImage: `url('${bgImage}')`, // Corrected syntax for the background image
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[2rem] md:text-[4rem] font-bold text-primary-2 text-center">
        
        </h1>
      </div>
    </div>
    <div className="shadow-lg rounded-b-lg overflow-hidden p-6 text-gray bg-graylight">
      <h2 className="text-[1rem] md:text-[1.3rem] font-bold mb-4">
        {heading}
      </h2>
      <p className="text-[1rem] md:text-[1.2rem]">{description}</p>
    </div>
  </div>
  </>
  )
}

export default HeaderHsa
