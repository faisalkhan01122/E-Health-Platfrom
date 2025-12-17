import React from "react";
import Banner from "../Share/Banner";

const Resources = () => {
  return (
    <div className="container mx-auto p-4">
      <Banner
        title={"Resources HMRC"}
        imageUrl={
          "https://www.dimins.com/wp-content/uploads/2021/11/collaboration-in-heatlcare-ftrd.jpg"
        }
      />
      <div className="p-2">
        <h1 className="text-3xl font-bold mb-4">Resources</h1>
        <p className="text-gray-700 mb-4">
          Welcome to the HMRC Resources page. Here you will find a collection of
          valuable resources to support your research, education, and practice
          in the field of allopathic medicine.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Research Publications</li>
          <li>Clinical Guidelines</li>
          <li>Educational Materials</li>
          <li>Patient Information</li>
          <li>Webinars and Seminars</li>
          <li>Collaborative Projects</li>
          <li>Funding Opportunities</li>
          <li>Regulatory Guidelines</li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
