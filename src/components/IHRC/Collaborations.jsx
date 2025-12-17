import React from 'react';
import Banner from '../share/Banner';

const Collaborations = () => {
  return (
    <div className="container text-gray mx-auto p-4">
      <Banner title="IHRC Collaborations" imageUrl={"https://www.dimins.com/wp-content/uploads/2021/11/collaboration-in-heatlcare-ftrd.jpg"}/>
      <div className=" p-2">
        <h1 className="text-3xl font-bold mb-4">IHRC Collaborations</h1>
        <p className="text-gray-700 mb-4">
          "IHRC" believes in the power of collaboration to drive innovation and deliver exceptional results. Our diverse network is working in collaboration with "Health Services Academy", bringing together unique expertise and perspectives to tackle challenges and create health solutions. By working hand-in-hand with leaders, innovators, and visionaries, we are committed to achieving excellence and making a positive impact. Explore how our strategic collaborations can benefit you and join us in shaping the future.
        </p>
      </div>
    </div>
  );
};

export default Collaborations;