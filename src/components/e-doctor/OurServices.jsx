import React from "react";
import {
  FaUserMd,
  FaHeartbeat,
  FaStethoscope,
  FaHandHoldingMedical,
} from "react-icons/fa"; 
import ServiceCard from "../Cards/ServiceCard";
import { SiRoamresearch } from "react-icons/si";
import {
  MdLocalPharmacy,
  MdOutlineBrightnessMedium,
  MdOutlinePhonelink,
} from "react-icons/md";
import { GiMedicalDrip } from "react-icons/gi";

const servicesData = [
  {
    icon: <FaUserMd className="text-4xl" />, 
    title: "Online Doctors",
    bgColor: "bg-blue-100", 
  },
  {
    icon: <FaHeartbeat className="text-4xl" />, 
    title: "Homeopethic Services",
    bgColor: "bg-red-100",
  },
  {
    icon: <FaStethoscope className="text-4xl" />,
    title: "Allopathic Services",
    bgColor: "bg-green-100",
  },
  {
    icon: <SiRoamresearch className="text-4xl" />,
    title: "Research Centre",
    bgColor: "bg-green-100",
  },
  {
    icon: <MdOutlinePhonelink className="text-4xl" />, 
    title: "Teleconsultations",
    bgColor: "bg-red-100",
  },
  {
    icon: <MdLocalPharmacy className="text-4xl" />,
    title: "Online Pharmacy",
    bgColor: "bg-blue-100",
  },
  {
    icon: <FaHandHoldingMedical className="text-4xl" />,
    title: "Follow-up Care",
    bgColor: "bg-green-100",
  },
  {
    icon: <MdOutlineBrightnessMedium className="text-4xl" />, 
    title: "Second Opinions",
    bgColor: "bg-red-100",
  },
  {
    icon: <GiMedicalDrip className="text-4xl" />, 
    title: "Patient Care",
    bgColor: "bg-blue-100", 
  },
];

const OurServices = () => {
  return (
    <>
      <div className="font-bold font-poppins text-gray p-5 sm:p-3">
        <h1 className="text-2xl sm:text-xl">Our Services</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            bgColor={service.bgColor}
          />
        ))}
      </div>
    </>
  );
};

export default OurServices;
