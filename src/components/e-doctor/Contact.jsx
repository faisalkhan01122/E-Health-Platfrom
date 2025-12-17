import React, { useState } from "react";
import ContactCard from "./ContactCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <>
      <div className="font-poppins font-bold mt-5 sm:p-3">
        <h1 className="text-2xl sm:text-xl">Contact</h1>
      </div>

      {/* Parent container to control layout on small and large screens */}
      <div className="flex lg:space-x-8 space-y-8 lg:space-y-0 p-5 lg:p-10">
        {/* Contact cards on the left */}
        <div className="w-full ">
          <ContactCard />
        </div>

        {/* Contact form on the right */}
        <div className="w-full lg:w-1/2">
          <div className="max-w-md mx-auto p-5 rounded-lg shadow-lg bg-white">
            {/* Form Container */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-3 rounded font-poppins text-gray-700 border border-slate-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded font-poppins text-gray-700 border border-slate-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-3 rounded font-poppins text-gray-700 border border-slate-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 h-32 rounded font-poppins text-gray-700 border border-slate-500"
              />
              <button
                type="submit"
                className="w-full bg-primarylight text-black p-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
