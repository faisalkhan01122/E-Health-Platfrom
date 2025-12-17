import React from "react";
import LiteratureHeroCard from "../../components/IHRC/LiteratureHeroCard";

const SkinProblemPage = () => {
  return (
    <div className="text-gray bg-graylight md:text-xl">
      <LiteratureHeroCard
        bgImage="https://ehealth.com.pk/images/skin-problems-1888.png"
        heading={"Skin Problems"}
      />
      <p className="p-4">
        The Executive Board meeting held on 11 Jan 2024. All Executives of the
        organization attended the meeting to discuss and make decisions on
        important matters pertaining to the organization's operations,
        strategies, finances, and overall direction.
      </p>
    </div>
  );
};

export default SkinProblemPage;
