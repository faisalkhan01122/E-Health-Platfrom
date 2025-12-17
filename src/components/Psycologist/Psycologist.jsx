import React from "react";
import Carousel from "../share/Carousel";

const Psycologist = () => {
  const slides = [
    {
      type: "image",
      image: "src/assets/doctors/6.webp",
      text: "I am your Psycologist",
      desc: "Here to serve you at your Door-Step",
    },
    {
      type: "image",
      image: "src/assets/doctors/2.webp",
      text: "I am your Psycologist",
      desc: "Here to serve you at your Door-Step",
    },
    {
      type: "image",
      image: "src/assets/doctors/5.webp",
      text: "I am your Psycologist",
      desc: "Here to serve you at your Door-Step",
    },
  ];

  return (
    <div>
      <Carousel slides={slides} autoSlideInterval={4000} />
    </div>
  );
};

export default Psycologist;
