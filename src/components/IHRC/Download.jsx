import React from "react";
import { FaDownload } from "react-icons/fa";

const Download = () => {
  return (
    <div className="">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-80 bg-cover font-poppins bg-center rounded-t-lg shadow-md overflow-hidden"
        style={{
          backgroundImage: `url('https://rockwellautomation.scene7.com/is/image/rockwellautomation/aem_shutterstock_1420922999.1280.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[2rem] md:text-[4rem] font-bold text-primary-2 text-center">
            Downloads
          </h1>
        </div>
      </div>

      <div className=" flex flex-col gap-4  rounded-b-lg overflow-hidden p-6 text-gray bg-graylight">
        <div className="flex  items-center gap-2 text-green-400">
          <FaDownload className="text-xl" />
          <a
            href="https://ehealth.com.pk/images/2d3.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-[1rem] md:text-[1.3rem] font-semibold">
              Research Article
            </h1>
          </a>
        </div>

        <div className="flex  items-center gap-2 text-green-400">
          <FaDownload className="text-xl" />
          <a
            href="https://ehealth.com.pk/images/2d3.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-[1rem] md:text-[1.3rem] font-semibold ">
              Research Homeopathy Vs Allopathy
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
