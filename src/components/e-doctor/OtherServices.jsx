import React from "react";

const OtherServices = () => {
  return (
    <div className="text-[1rem]">
      <div className="font-poppins font-bold text-gray p-5 sm:p-3">
        <h1 className="text-2xl sm:text-xl">OTHER SERVICE</h1>
      </div>
      <div className="font-poppins  p-2 text-gray sm:text-base sm:p-2 sm:ml-2 lg:leading-8">
        <p>
          This portal "eHealth" also provides different other services to our
          valuable clients. These include <br /> Research Centers related to
          "Homeopathy" and "Allopathy". Further, the Portal is offering an
          online Pharmacy.
        </p>
      </div>
      <div className="font-poppins  p-3 lg:ml-6 text-gray sm:text-base sm:p-2 sm:ml-2 leading-relaxed">
        <p>
          <span className="font-bold">
            - Health and Medicinal Research Center (HMRC)
          </span>{" "}
          related to Allopathic Services.
        </p>
      </div>
      <div className="font-poppins  p-3 lg:ml-6 text-gray sm:text-base sm:p-2 sm:ml-2 leading-relaxed">
        <p>
          <span className="font-bold">
            - International Homeopathic Research Center (IHRC)
          </span>{" "}
          related to Homeopathic Services.
        </p>
      </div>
      <div className="font-poppins  p-3 lg:ml-6 text-gray sm:text-base sm:p-2 sm:ml-2 leading-relaxed">
        <p>
          <span className="font-bold">- Online Pharmacy</span> Providing home
          delivery services for both prescription and OTC medications, <br />
          making it easier for patients to receive their medications without
          needing to visit a physical pharmacy.
        </p>
      </div>


      <div className="rounded-lg p-4 text-primary font-poppins w-full ">
        <div className="flex items-center justify-center text-xl  py-10 sm:py-6">
          <p className="animate-blink text-center break-words max-w-4xl mx-auto">
            "Expert Care, Anytime, Anywhere, Access your health care from Home"
          </p>
        </div>
      </div>

    </div>
  );
};

export default OtherServices;
