import React from "react";
import About from "../../components/e-doctor/About";
import OtherServices from "../../components/e-doctor/OtherServices";
import PrivacyPolicy from "../../components/e-doctor/PrivacyPolicy";
import Faqs from "../../components/e-doctor/Faqs";
import Contact from "../../components/e-doctor/Contact";
import { about } from "../../utils/data";
import OurServices from "../../components/e-doctor/OurServices";

import Carousel from "../../components/share/Carousel";
import image from "../../assets/doctors/8.png";
import image2 from "../../assets/doctors/11.png";
import image3 from "../../assets/doctors/3.webp";
import image4 from "../../assets/doctors/4.webp";
import image5 from "../../assets/doctors/5.webp";
import image6 from "../../assets/doctors/6.webp";
import image7 from "../../assets/doctors/7.jpg";

const EDoctor = () => {
  const slides = [
    {
      type: "image",
      image: image,
      text: "I am your Doctor",
      desc: "I am here to help you with your health concerns.",
    },
    {
      type: "image",
      image: image2,
      text: "I am your ......",
      desc: "I am here to help you with your health concerns.",
    },
    {
      type: "image",
      image: image3,
      text: "I am your Doctor",
      desc: "I am here to help you with your health concerns.",
    },
    {
      type: "image",
      image: image4,
      text: "I am your Doctor",
      desc: "I am here to help you with your health concerns.",
    },
    {
      type: "image",
      image: image5,
      text: "I am your Doctor",
      desc: "I am here to help you with your health concerns.",
    },
    {
      type: "image",
      image: image6,
      text: "I am your Doctor",
      desc: "I am here to help you with your health concerns.",
    },
  ];
  return (
    <div className="font-poppins">
      <Carousel slides={slides} />
      <div className="relative flex w-[90%] mx-auto gap-6">
        <aside className="sticky top-20 w-52 h-screen hidden sm:block">
          <img src={image7} alt="" />
        </aside>
        <div className="w-full">
          <About services={about} />
          <OtherServices />
          <OurServices />
          <PrivacyPolicy />
          <Faqs />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default EDoctor;
