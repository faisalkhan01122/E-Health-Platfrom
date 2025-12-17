
import React from "react";

const About = ({ services }) => {
  return (
    <div className="text-[1rem]">
      <div className="font-bold font-poppins text-gray p-4 sm:p-2">
        <h1 className="text-2xl sm:text-xl">About Us</h1>
      </div>

      <div className="p-2 font-poppins  sm:text-base sm:p-2 sm:ml-2">
        <p>
          eHealth offers a variety of services to its clients, that include but
          are not limited to:
        </p>
      </div>

      <div className=" p-4 ml-6  text-gray">
        {services.map((service, index) => (
          <div key={index} className="mb-4 font-poppins">
            <h2 className="font-bold ">
              <span>{index + 1}. </span>
              {service.title}
            </h2>
            <p className=" lg:pl-6 sm:pl-2  text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-gray p-3 ml-4  sm:text-base sm:p-2 sm:ml-2">
        <h1 className="font-poppins">
          These services make healthcare more accessible and convenient,
          especially for those who may have
          <br />
          <span className="block">difficulty visiting a doctor in person.</span>
        </h1>
      </div>
    </div>
  );
};

export default About;
