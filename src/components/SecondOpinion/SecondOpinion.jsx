import React from "react";
import Carousel from "../Share/Carousel";

const SecondOpinion = () => {
  // Define the slides data for the carousel
  const slides = [
    {
      type: "image",
      image: "src/assets/doctors/6.webp",
      text: "I am your Doctor for Second Opinion",
      desc: "Double-Check Your Health: Professional Second Opinion Anytime,Anywhere",
    },
    {
      type: "image",
      image: "src/assets/doctors/2.webp",
      text: "I am your Doctor for Second Opinion",
      desc: "Double-Check Your Health: Professional Second Opinion Anytime,Anywhere",
    },
    {
      type: "image",
      image: "src/assets/doctors/5.webp",
      text: "I am your Doctor for Second Opinion",
      desc: "Double-Check Your Health: Professional Second Opinion Anytime,Anywhere",
    },
  ];

  return (
    <div>
      {/* Call the Carousel component and pass the slides */}
      <Carousel slides={slides} autoSlideInterval={4000} />
    </div>
  );
};

export default SecondOpinion;
