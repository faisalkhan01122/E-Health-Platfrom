import React from "react";
import IHRCDoctorCard from "../../components/IHRC/IHRCDoctorCard";
import DoctorCard from "../../components/Cards/DoctorCard";

const doctors = [
  {
    image: "https://ehealth.com.pk/images/dr.anila-munawar-khan--2404.png",
    name: "Dr.Anila Khan",
    position: "DHMS, MA Education",
    desc: "Experienced in homeopathy and education.",
    twitter: "https://twitter.com/dranilakhan",
    facebook: "https://facebook.com/dranilakhan",
    linkedin: "https://linkedin.com/in/dranilakhan",
  },
  {
    image: "https://ehealth.com.pk/images/dr.farah-malik-2.png",
    name: "Dr.Farah Khan",
    position: "DHMS,MA.LLB",
    desc: "Expert in homeopathy and law.",
    twitter: "https://twitter.com/drfarahkhan",
    facebook: "https://facebook.com/drfarahkhan",
    linkedin: "https://linkedin.com/in/drfarahkhan",
  },
  {
    image: "https://ehealth.com.pk/images/dr.afshan-husnain--271.png",
    name: "Dr.Afshan Khan",
    position: "DHMS,Msc.Botony",
    desc: "Specialist in homeopathy and botany.",
    twitter: "https://twitter.com/drafshankhan",
    facebook: "https://facebook.com/drafshankhan",
    linkedin: "https://linkedin.com/in/drafshankhan",
  },
  {
    image: "https://ehealth.com.pk/images/dr.qudsia-bhoon-3.png",
    name: "Dr.Qudsia Malik",
    position: "DHMS, MA Mass Com.",
    desc: "Expert in homeopathy and mass communication.",
    twitter: "https://twitter.com/drqudsiamalik",
    facebook: "https://facebook.com/drqudsiamalik",
    linkedin: "https://linkedin.com/in/drqudsiamalik",
  },
  {
    image: "https://ehealth.com.pk/images/dr.maryam-khataq-5218.png",
    name: "Dr.Maryam Khataq",
    position: "Clinical Psychologist",
    desc: "Specialist in clinical psychology.",
    twitter: "https://twitter.com/drmaryamkhataq",
    facebook: "https://facebook.com/drmaryamkhataq",
    linkedin: "https://linkedin.com/in/drmaryamkhataq",
  },
  {
    image: "https://ehealth.com.pk/images/dr.-ayesha-mukhtar--4.png",
    name: "Dr. Ayesha Mukhtar",
    position: "Classified Gynaecologist",
    desc: "MBBS, FCPS in Gynaecology.",
    twitter: "https://twitter.com/drayeshmukhtar",
    facebook: "https://facebook.com/drayeshmukhtar",
    linkedin: "https://linkedin.com/in/drayeshmukhtar",
  },
];

const DoctorPanel = () => {
  return (
<div className="w-[80%] mx-auto p-6">
      <h1 className="text-xl font-poppins mb-4">Panel of Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} data={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorPanel;
