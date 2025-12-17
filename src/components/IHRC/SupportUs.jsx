import React from 'react';
import Banner from '../share/Banner';

const SupportUs = () => {
  return (
    <div className="container mx-auto text-gray p-4">
      <Banner title="IHRC Support Us" imageUrl={"https://idreamcareer.com/wp-content/uploads/2023/04/careers-in-the-healthcare-support-services.webp"}/> 
      <div className="p-2">
        <h1 className="text-3xl font-bold mb-4">Support Us</h1>
        <p className="text-gray-700 mb-4">
          At the International Homeopathic Research Centre (IHRC), we are dedicated to advancing the field of homeopathy and improving health outcomes for all. Your support is crucial in helping us achieve our mission. There are several ways you can support us:
        </p>
        <h2 className="text-2xl font-semibold mb-2">Donate</h2>
        <p className="text-gray-700 mb-4">
          Your generous donations help us fund our research initiatives, educational programs, and community health projects. Every contribution, no matter the size, makes a difference.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Volunteer</h2>
        <p className="text-gray-700 mb-4">
          Join our team of dedicated volunteers and contribute your time and skills to support our various programs and initiatives. Whether you are a healthcare professional, student, or simply passionate about homeopathy, we welcome your involvement.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Partner with Us</h2>
        <p className="text-gray-700 mb-4">
          We believe in the power of collaboration. Partner with us to advance research, develop innovative treatments, and promote the benefits of homeopathy. Together, we can make a greater impact.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Spread the Word</h2>
        <p className="text-gray-700 mb-4">
          Help us raise awareness about the importance of homeopathy and the work we do at IHRC. Share our mission and achievements with your network and encourage others to support our cause.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          For more information on how you can support us, please contact us at support@ihrc.org. We appreciate your interest and look forward to working together to advance the field of homeopathy.
        </p>
      </div>
    </div>
  );
};

export default SupportUs;