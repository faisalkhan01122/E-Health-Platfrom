import React from 'react'
import HeroSectionHsa from './HeroSectionHsa'

const Bmc = () => {
  return (
    <>
      <div>
        <HeroSectionHsa
          bgImage="https://ehealth.com.pk/images/business-incubation-center-3192.png"
          heading="Business Incubation Center"
          description=""


        />
      </div>
      <div className="shadow-lg rounded-b-lg overflow-hidden p-4 md:p-6 text-gray bg-graylight">
        <h2 className="text-[1rem] md:text-[1.3rem]  mb-4  inline-block pb-2">
        At our Business Incubation Center, we are deeply committed to fostering technology and innovation within the
        healthcare sector. Our mission is to serve as the premier incubator for health-focused entrepreneurs and startups, providing them with the state-of-the-art tools, mentorship, and resources needed to transform groundbreaking ideas into viable, impactful solutions. By bridging the gap between medical knowledge and technological advancement, we aim to create an ecosystem that not only propels the health industry forward but also plays a pivotal role in improving patient care and health outcomes in Pakistan and beyond. Our dedication to nurturing the potential of healthcare graduates ensures that they receive the best support to become change-makers in a rapidly evolving healthcare landscape.
        </h2>
      </div>
    </>
  )
}

export default Bmc
