import React from "react";
import IHRC_Card from "./IHRC_Card";

const cardData = [
  {
    image: "https://ehealth.com.pk/images/research-2702.png",
    title: "Research",
    content:
      "HOMEOPATHIC EFFECTS ON CANCER   Globally, cancer is the second leading cause of death...",
    link: "/ihrc/research",
  },
  {
    image: "https://ehealth.com.pk/images/sickness-1979.png",
    title: "Sickness",
    content:
      "Studying MBBS in Belarus can offer several benefits for Pakistani students.  Affordable.",
    link: "/ihrc/sickness",
  },
  {
    image: "https://ehealth.com.pk/images/skin-problems-1888.png",
    title: "Skin Problems",
    content:
      "The Executive Board meeting held on 11 Jan 2024. All Executives of the organization attended the me..",
    link: "/ihrc/skinproblem",
  },
];

const Literature = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {" "}
      {cardData.map((data, index) => (
        <IHRC_Card
          key={index}
          data={data}
          //     image={data.image}
          //   title={data.title}
          //   content={data.content}
          //   link={data.link}
        />
      ))}
    </div>
  );
};

export default Literature;
