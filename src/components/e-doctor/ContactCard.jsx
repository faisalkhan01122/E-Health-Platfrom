import React from "react";
import { FaInfo, FaPhoneAlt } from "react-icons/fa";
import { SiPowerpages } from "react-icons/si";

const ContactCard = () => {
  return (
    <>
      <div className="flex flex-col gap-6 text-gray ">
        <div className="flex  items-center sm:items-start gap-3">
          <div className="w-16 h-16 bg-primary-2 rounded shadow-lg flex items-center justify-center transition-all transform hover:scale-105 hover:shadow-xl">
            <FaInfo className="text-2xl" />
          </div>
          <div className="font-poppins text-center sm:text-left">
            <p className="text-sm">info@ehealth.com.pk</p>
          </div>
        </div>

        <div className="flex  items-center sm:items-start gap-3">
          <div className="w-16 h-16  bg-primary-2 rounded shadow-lg flex items-center justify-center transition-all transform hover:scale-105 hover:shadow-xl">
            <SiPowerpages className="text-4xl" />
          </div>
          <div className="font-poppins text-center sm:text-left">
            <p className="text-sm">
              E-Health, Business Incubation <br />
              Center, Health Services Academy,
              <br />
              Prime Ministers National Health <br />
              Complex, NIH Park Road, Chak <br />
              Shahzad, Islamabad-44000
            </p>
          </div>
        </div>

        <div className="flex  items-center sm:items-start gap-3">
          <div className="w-16 h-16 bg-primary-2 rounded shadow-lg flex items-center justify-center transition-all transform hover:scale-105 hover:shadow-xl">
            <FaPhoneAlt className="text-2xl" />
          </div>
          <div className="font-poppins text-center sm:text-left">
            <p className="text-sm">0092518485870</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
