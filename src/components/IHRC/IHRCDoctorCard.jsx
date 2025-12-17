import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const IHRCDoctorCard = ({ image, title, content, content2, content3 }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div
      className=" bg-graylight shadow-md cursor-pointer border-2 border-b-4 border-b-green-400 rounded-md border-gray"
      data-aos="flip-right"
    >
      <div className="border border-graylight rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full object-contain border-b border-b-gray rounded-t-lg"
        />
        <div className=" p-4 text-sm md:text-xl flex flex-col justify-center items-center bg-graylight rounded-b-lg ">
          <h1 className="font-bold mb-2">{title}</h1>
          <p>{content}</p>
          <p>{content2}</p>
          <p>{content3}</p>
        </div>
      </div>
    </div>
  );
};

export default IHRCDoctorCard;
