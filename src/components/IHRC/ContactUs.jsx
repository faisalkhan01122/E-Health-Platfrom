import React from 'react';
import Banner from '../share/Banner';

const ContactUs = () => {
  return (
    <div className="container mx-auto text-gray p-4">
      <Banner title="IHRC Contact" imageUrl={"https://clinecthealthcare.com/wp-content/uploads/2021/05/Contact-Us.png"} />
      <div className="flex p-2">
        
        <div className='w-1/2'>
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-700 mb-4">
            We would love to hear from you! Whether you have a question, need assistance, or want to provide feedback, please feel free to reach out to us. Our team is here to help.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            <strong>Address:</strong> eHealth, Business Incubation Center, Health Services Academy, Prime Ministers National Health Complex, Park Road, Chak Shahzad, Islamabad.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong> contact@ihrc.org
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Phone:</strong> +92 123 456 7890
          </p>
        </div>

        <form className="space-y-4 w-1/2">
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>

          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-md" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;