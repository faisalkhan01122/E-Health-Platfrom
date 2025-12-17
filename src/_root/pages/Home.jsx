import React from "react";
// import HeroSlider from "../../components/Slider/HeroSlider";

const Home = () => {
  const slidesData = [
    {
      image:
        "https://lirp.cdn-website.com/f1443787/dms3rep/multi/opt/Cancer+Referral-640w.jpg",
      title: "Hi- I am your Doctor",
      description: "Available 24/7",
      description2: "Describe your health issue and get solution online",
    },
    {
      image:
        "https://img.freepik.com/free-vector/doctor-injecting-vaccine-patient_23-2148847935.jpg?t=st=1726817113~exp=1726820713~hmac=b9aa447aa4747a1641489403cf532069b419a6bd6601168f7b0a434791a95eb7&w=740",
      title: "Hi- I am your Doctor for Second Opinion",
      description2:
        "Double-Check Your Health: Professional Second Opinion Anytime,Anywhere",
      // description2: "Additional Text 2",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/ptsd-psychology-trauma-counsellor-patient-office-hospital-grief-loss-pain-depression-stress-ptsd-323610552.jpg",
      title: "Hi- I am your Psycologist",
      description: "Here to serve you at your Door-Step",
      // description2: "Additional Text 3",
    },
  ];

  return (
    <>
      <div className="overflow-hidden rounded-lg pt-0">
        {/* salam Pakistan */}
        {/* <HeroSlider slides={slidesData} whatsappNumber="1234567890" /> */}
      </div>
    </>
  );
};

export default Home;
