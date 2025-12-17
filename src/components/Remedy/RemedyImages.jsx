import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RemedyImages = ({ img1, img2 }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="grid w-full grid-cols-1 my-4 md:grid-cols-2 gap-4 justify-center items-center ">
      <img
        src={img1}
        alt="img1"
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="h-64 md:h-64 w-full object-cover rounded-md border-2 border-gray"
      />
      <img
        src={img2}
        alt="img2"
        data-aos="fade-up"
        data-aos-duration="1500"
        className="h-64 md:h-64 w-full object-cover rounded-md border-2 border-gray"
      />
    </div>
  );
};

export default RemedyImages;
