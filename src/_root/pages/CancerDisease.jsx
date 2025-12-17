import React from "react";
import HeroSection from "../../components/Remedy/HeroSection";
import DiseaseCard from "../../components/Remedy/DiseaseCard";

const CancerDisease = () => {
  const images = [
    "https://5.imimg.com/data5/OI/HJ/MY-35615337/diabetes-allopathic-medicine-500x500.jpg",
    "https://5.imimg.com/data5/TY/JS/MY-35615337/fever-allopathic-medicine-500x500.jpg",
  ];

  const remedies = [
    {
      name: "Unexplained weight loss",
    },
    {
      name: "Chemical Peels",
      symptoms: "Acne, hyperpigmentation, sun damage, uneven skin tone.",
    },
    {
      name: "Laser Treatments",
      symptoms: "Hair removal, acne scars, pigmentation issues, spider veins.",
    },
    {
      name: "Microdermabrasion",
      symptoms: "Dull skin, fine lines, age spots, acne scars.",
    },
    {
      name: "Prescription Topical Treatments",
      symptoms: "Acne, rosacea, hyperpigmentation, fine lines.",
    },
  ];

  const diseaseName = "General Symptoms of Cancer:";
  const symptoms =
    "The symptoms of cancer vary widely depending on the type and location of the cancer. However, some general symptoms include:";
  const remediesTitle = "General Symptoms of Cancer:";
  // ------------------
  return (
    <div>
      <HeroSection
        bgImage="https://news.yale.edu/sites/default/files/styles/featured_media/public/ynews-cancer-healthy_137381816.jpg?itok=HN73dW20&c=a75e254fe1da31f2732f6b0d7bce1413"
        heading={"Cancer"}
        description={
          "Cancer is a broad term for a group of diseases characterized by the uncontrolled growth and spread of abnormal cells. If the spread is not controlled, it can result in death. Cancer can start almost anywhere in the human body, which is made up of trillions of cells."
        }
      />
      <DiseaseCard
        diseaseName={diseaseName}
        symptoms={symptoms}
        images={images}
        remedies={remedies}
        remediesTitle={remediesTitle}
      />
    </div>
  );
};

export default CancerDisease;
