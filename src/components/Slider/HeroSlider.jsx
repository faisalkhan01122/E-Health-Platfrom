// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaWhatsapp } from "react-icons/fa";

// const HeroSlider = ({ slides, whatsappNumber }) => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     centerMode: true,
//     centerPadding: "80px",
//     slidesToShow: 1,
//     speed: 500,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   // WhatsApp functionality
//   const handleWhatsAppClick = () => {
//     window.open(`https://wa.me/${whatsappNumber}`, "_blank");
//   };

//   return (
//     <div className="relative">
//       <Slider {...sliderSettings}>
//         {slides.map((slide, index) => (
//           <div key={index}>
//             <div
//               className="h-screen bg-center border-2 border-primary rounded-md m-2 bg-cover flex items-center justify-center"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               {/* Overlay text */}
//               <div className="h-80 w-90 opacity-80 text-black font-mono flex flex-col justify-center items-center gap-4 bg-opacity-20 rounded-lg">
//                 <h1 className="text-[3rem] font-bold text-primary">
//                   {slide.title}
//                 </h1>
//                 <p className="text-[2rem] text-center text-gray">
//                   {slide.description}
//                 </p>
//                 <p className="text-[1.8rem] text-gray">{slide.description2}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       {/* Chat and WhatsApp buttons */}
//       <div className="absolute bottom-16 left-1/4  flex  justify-center items-center gap-5">
//         <h1 className="text-[1.2rem] font-bold rounded-md">Chat Now</h1>
//         <button
//           className="bg-green-500 text-white py-3 px-4 rounded-md flex items-center text-[1.2rem] gap-2"
//           onClick={handleWhatsAppClick}
//         >
//           <FaWhatsapp /> WhatsApp
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSlider;
