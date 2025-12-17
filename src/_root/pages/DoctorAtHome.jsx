import React from "react";
import Carousel from "../../components/Share/Carousel";
import image from "../../assets/doctors/10.png";

const DoctorAtHome = () => {
  const slides = [
    {
      type: "image",
      image: image,
      text: "Doctor at Home",
      desc: "We bring healthcare to your doorstep.",
    },
  ];
  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
};

export default DoctorAtHome;
