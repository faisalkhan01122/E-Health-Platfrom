import React from "react";

const Banner = ({ title, imageUrl }) => {
  return (
    <div
      className="w-full h-64 bg-cover bg-center mb-6"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
