import React from "react";
import Banner from "../Share/Banner";

const FAQs = () => {
  return (
    <div className="container mx-auto p-4">
      <Banner
        title={"Frequantly Ask Qustions"}
        imageUrl={
          "https://www.dimins.com/wp-content/uploads/2021/11/collaboration-in-heatlcare-ftrd.jpg"
        }
      />
      <div className="p-2">
        <h1 className="text-3xl font-bold mb-4">FAQs</h1>
        <div className="text-gray-700 mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="mb-2">
            <strong>Q1: What is the mission of HMRC?</strong>
            <br />
            A1: Our mission is to advance the field of allopathic medicine
            through cutting-edge research, innovation, and education.
          </p>
          <p className="mb-2">
            <strong>Q2: What services does HMRC offer?</strong>
            <br />
            A2: We offer a comprehensive range of services including clinical
            trials, drug development, disease research, translational medicine,
            healthcare practices, educational programs, consultancy, and patient
            support.
          </p>
          <p className="mb-2">
            <strong>Q3: How can I participate in a clinical trial?</strong>
            <br />
            A3: You can participate in a clinical trial by contacting us through
            our website or visiting our "Contact Us" page for more information.
          </p>
          <p className="mb-2">
            <strong>Q4: What resources are available at HMRC?</strong>
            <br />
            A4: We provide research publications, clinical guidelines,
            educational materials, patient information, webinars, collaborative
            projects, funding opportunities, and regulatory guidelines.
          </p>
          <p className="mb-2">
            <strong>
              Q5: How can I collaborate with HMRC on research projects?
            </strong>
            <br />
            A5: You can collaborate with us by reaching out through our "Contact
            Us" page. We partner with academic institutions, pharmaceutical
            companies, and healthcare organizations on joint research projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
