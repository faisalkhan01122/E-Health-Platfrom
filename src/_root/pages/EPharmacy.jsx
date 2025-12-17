import React from "react";
import Carousel from "../../components/Share/Carousel";
import image from "../../assets/doctors/1.webp";
// import PharmacyProducts from '../../components/Pharmacy/PharmacyProducts'
import PharmacyCard from "../../components/Cards/PharmacyCard";
import { Link } from "react-router-dom";

const slides = [
  {
    type: "image",
    image: image,
    text: "Pharmacies are here!!!",
    desc: "Providing quality medicines and health products.",
  },
];

const pharmacies = [
  {
    title: "City Pharmacy",
    image:
      "https://thumbs.dreamstime.com/b/pharmacy-building-isolated-white-background-d-illustration-150691554.jpg",
    description: "Your trusted pharmacy for all your health needs.",
    bgColor: "bg-blue-100",
  },
  {
    title: "HealthPlus Pharmacy",
    image:
      "https://media.istockphoto.com/id/1223842708/photo/pharmacy-store-or-drugstore-exterior-design.jpg?s=612x612&w=0&k=20&c=UCkyI4toMcOD9AFofXValHqg0grRRPp6ztV8ROt-_pw=",
    description: "Providing quality medicines and health products.",
    bgColor: "bg-green-100",
  },
  {
    title: "Wellness Pharmacy",
    image:
      "https://media.istockphoto.com/id/1449832348/vector/rx-pharmaceutical-capsule-medicine-logo-vector-drug-choice-drugstore-vector-logo-template.jpg?s=612x612&w=0&k=20&c=jk6Mc_KPIfNTyc2gdbnCaPD8HzyyOvT64op2AEEbMTI=",
    description: "Your partner in health and wellness.",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Care Pharmacy",
    image:
      "https://static.vecteezy.com/system/resources/previews/008/923/894/non_2x/pharmacy-building-isolated-on-white-background-vector.jpg",
    description: "Committed to your health and well-being.",
    bgColor: "bg-red-100",
  },
  {
    title: "Mediplus Pharmacy",
    image:
      "https://media.istockphoto.com/id/1223842708/photo/pharmacy-store-or-drugstore-exterior-design.jpg?s=612x612&w=0&k=20&c=UCkyI4toMcOD9AFofXValHqg0grRRPp6ztV8ROt-_pw=",
    description: "Your one-stop shop for all your health needs.",
    bgColor: "bg-purple-100",
  },
  {
    title: "PharmaCare Pharmacy",
    image:
      "https://media.istockphoto.com/id/1449832348/vector/rx-pharmaceutical-capsule-medicine-logo-vector-drug-choice-drugstore-vector-logo-template.jpg?s=612x612&w=0&k=20&c=jk6Mc_KPIfNTyc2gdbnCaPD8HzyyOvT64op2AEEbMTI=",
    description: "Your trusted partner in health and wellness.",
    bgColor: "bg-pink-100",
  },
  {
    title: "MediLife Pharmacy",
    image:
      "https://static.vecteezy.com/system/resources/previews/008/923/894/non_2x/pharmacy-building-isolated-on-white-background-vector.jpg",
    description: "Providing quality medicines and health products.",
    bgColor: "bg-blue-100",
  },
  {
    title: "HealthFirst Pharmacy",
    image:
      "https://media.istockphoto.com/id/1223842708/photo/pharmacy-store-or-drugstore-exterior-design.jpg?s=612x612&w=0&k=20&c=UCkyI4toMcOD9AFofXValHqg0grRRPp6ztV8ROt-_pw=",
    description: "Committed to your health and well-being.",
    bgColor: "bg-green-100",
  },
  {
    title: "MediCare Pharmacy",
    image:
      "https://media.istockphoto.com/id/1449832348/vector/rx-pharmaceutical-capsule-medicine-logo-vector-drug-choice-drugstore-vector-logo-template.jpg?s=612x612&w=0&k=20&c=jk6Mc_KPIfNTyc2gdbnCaPD8HzyyOvT64op2AEEbMTI=",
    description: "Your trusted partner in health and wellness.",
    bgColor: "bg-yellow-100",
  },
  {
    title: "PharmaPlus Pharmacy",
    image:
      "https://static.vecteezy.com/system/resources/previews/008/923/894/non_2x/pharmacy-building-isolated-on-white-background-vector.jpg",
    description: "Your one-stop shop for all your health needs.",
    bgColor: "bg-red-100",
  },
  // Add more pharmacy data as needed
];
const EPharmacy = () => {
  return (
    <div>
      {/* <h1>E-Pharmacy</h1> */}
      <Carousel slides={slides} />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {pharmacies.map((pharmacy, index) => (
          <Link to="/e-pharmacy/products" key={index}>
            <PharmacyCard pharmacies={pharmacy} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EPharmacy;
