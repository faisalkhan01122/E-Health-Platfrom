import React from "react";
import Banner from "../Share/Banner";

const Research = () => {
  return (
    <div className="container mx-auto p-4">
      <Banner
        title={"Research at HMRC"}
        imageUrl={
          "https://www.dimins.com/wp-content/uploads/2021/11/collaboration-in-heatlcare-ftrd.jpg"
        }
      />
      <div className="p-2">
        <h1 className="text-3xl font-bold mb-4">Research at HMRC</h1>
        <p className="text-gray-700 mb-4">Research Conducted at the HMRC</p>
        <p className="text-gray-700 mb-4">
          Here’s an overview of the key areas of research we focus on:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Pharmacology and Drug Development</li>
          <li>Clinical Trials and Studies</li>
          <li>Disease Mechanisms and Pathophysiology</li>
          <li>Translational Medicine</li>
          <li>Healthcare Practices and Outcomes</li>
          <li>Preventive Medicine and Public Health</li>
          <li>Chronic Disease Management</li>
          <li>Novel Therapeutic Approaches</li>
          <li>Pharmacovigilance and Safety Research</li>
        </ul>
      </div>
    </div>
  );
};

export default Research;
