import React from "react";
import { privacyPolicyData } from "../../utils/data";

const PrivacyPolicy = () => {
  return (
    <div className="text-[1rem] font-poppins">
      <div className="font-poppins font-bold p-4 sm:p-2">
        <h1 className="text-2xl sm:text-xl">Privacy Policy</h1>
      </div>
      <div className="font-poppins p-3 ml-4 text-gray  sm:text-base sm:p-2 sm:ml-2 lg:leading-8">
        <p>
          “eHealth” is committed to protecting the privacy and confidentiality
          of personal information obtained through our clinic services. <br />
          This Privacy Policy outlines how we collect, use, disclose,and protect
          your information.
        </p>
      </div>

      {privacyPolicyData.map((section, index) => (
        <div
          key={index}
          className="font-poppins  p-3 ml-4  sm:text-base sm:p-2 sm:ml-2 leading-relaxed"
        >
          <h2 className=" text-black">{section.title}</h2>
          {section.content.map((item, subIndex) => (
            <p className="text-gray  ml-6" key={subIndex}>
              {item}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
