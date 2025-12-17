import React from "react";
import HeroSectionHsa from "./HeroSectionHsa";

const AboutHsa = () => {
  return (
    <>
      <div>
        <HeroSectionHsa
          bgImage="https://ehealth.com.pk/images/about-hsa-3418.png"
          heading="About HSA"
          description="Health Services Academy (HSA)."
        />
      </div>
      <div className="shadow-lg rounded-b-lg overflow-hidden p-4 md:p-6 text-gray bg-graylight">
        <h2 className="text-[1rem] md:text-[1.3rem]  mb-4  inline-block pb-2">
          The HSA was established in 1988 to provide short training courses to
          in-service public health practitioners & professionals. The
          promulgation of HSA Ordinance, 2002 gave it an autonomous status. Over
          the years, it has established itself as the premier research &
          teaching institution of public health. Today, it is the only
          institution that offers PhD in Public Health in Pakistan. It also
          offers FCPS, MS in Public Health, & MEDVC, M.Sc in Health Economics &
          Management & a PG Cert Human Resource in Health. The Academy remains
          committed to strengthen the capacity of public health professionals by
          excellence in teaching, research, and policy advice.
        </h2>
      </div>
    </>
  );
};

export default AboutHsa;
