import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const LymeDisease = () => {
  return (
    <div className="bg-white text-gray text-[1rem] md:text-[1.1rem]">
      <HeroSection
        heading={"Lyme Disease"}
        description={
          "Lyme disease is an infectious disease caused by the bacterium Borrelia burgdorferi. It is transmitted to humans through the bite of infected black-legged ticks, commonly known as deer ticks. If left untreated, the infection can spread to joints, the heart, and the nervous system."
        }
        bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Z1PV4X0ZfInO9pz2BaaDyhCRikJANG0E_g&s"
      />
      <div>
        <RemedyImages
          img2="https://aldf.com/wp-content/uploads/2024/01/shutterstock_1454468096-1.jpg"
          img1="https://i.natgeofe.com/n/98c5e4de-6852-4b90-b2e8-2d3a13d44bd0/77092.jpg"
        />
      </div>
      <div className="p-6">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold ">
          Symptoms
        </h2>
        <div className="mt-4">
          <h3 className=" underline font-semibold">
            1. Early Localized Stage (3-30 days post-tick bite):
          </h3>
          <ul className="list-disc  pl-5 pt-4">
            <li>
              Erythema migrans (EM) rash: Often described as a “bull’s-eye”
              rash, it can appear at the site of the tick bite and expand over
              days.
            </li>
            <li>Fever</li>
            <li>Chills</li>
            <li>Headache</li>
            <li>Fatigue</li>
            <li>Muscle and joint aches</li>
            <li>Swollen lymph nodes</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className=" underline font-semibold">
            2. Early Disseminated Stage (days to weeks post-tick bite):
          </h3>
          <ul className="list-disc pl-5 pt-4 ">
            <li>Multiple EM rashes on other parts of the body</li>
            <li>Facial or Bell’s palsy</li>
            <li>Severe headaches and neck stiffness due to meningitis</li>
            <li>Pain and swelling in large joints (e.g., knees)</li>
            <li>Heart palpitations or irregular heartbeats (Lyme carditis)</li>
            <li>Dizziness or shortness of breath</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className=" underline font-semibold">
            3. Late Disseminated Stage (months to years post-tick bite):
          </h3>
          <ul className="list-disc pl-5 pt-4 ">
            <li>
              Arthritis with severe joint pain and swelling, particularly in the
              knees
            </li>
            <li>
              Chronic neurological complaints such as shooting pains, numbness,
              or tingling in the hands or feet
            </li>
            <li>Problems with short-term memory</li>
          </ul>
        </div>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mt-8">
          Treatments
        </h2>
        <h3 className=" underline pt-4 font-semibold">
          Allopathic (Conventional) Remedies:
        </h3>
        <ul className="list-disc  pl-5 pt-4">
          <li>
            <span className="font-semibold">Antibiotics: </span> Doxycycline,
            Amoxicillin, Cefuroxime axetil, Intravenous antibiotics for severe
            cases.
          </li>
          <li>
            <span className="font-semibold">Pain Management:</span> NSAIDs like
            ibuprofen or naproxen.
          </li>
          <li>
            <span className="font-semibold">Supportive Care:</span> Rest and
            hydration, physical therapy.
          </li>
        </ul>

        <h3 className=" underline font-semibold mt-6">Herbal Remedies:</h3>
        <ul className="list-disc pt-4  pl-5">
          <li>
            <span className="font-semibold">Japanese Knotweed:</span>{" "}
            Anti-inflammatory and antimicrobial properties.
          </li>
          <li>
            <span className="font-semibold">Cat’s Claw:</span> Immune-boosting
            and anti-inflammatory effects.
          </li>
          <li>
            <span className="font-semibold">Andrographis:</span> Antibacterial
            and immune-supportive properties.
          </li>
          <li>
            <span className="font-semibold">Sarsaparilla:</span> Helps with
            detoxification.
          </li>
          <li>
            <span className="font-semibold">Garlic: </span>Antimicrobial and
            immune-enhancing properties.
          </li>
        </ul>

        <h3 className=" underline font-semibold mt-6">Chinese Remedies:</h3>
        <ul className="list-disc pt-4  pl-5">
          <li>
            <span className="font-semibold">Astragalus:</span> Immune system
            booster.
          </li>
          <li>
            <span className="font-semibold">Ginseng: </span>Provides energy and
            strengthens the immune system.
          </li>
          <li>
            <span className="font-semibold">Chinese Skullcap:</span>{" "}
            Anti-inflammatory and antimicrobial.
          </li>
          <li>
            <span className="font-semibold">Japanese Knotweed:</span> Similar
            use in Chinese medicine.
          </li>
          <li>
            <span className="font-semibold">Rehmannia: </span>Supports kidney
            and adrenal function.
          </li>
        </ul>

        <h3 className=" underline font-semibold mt-6">
          Homeopathic Treatments:
        </h3>
        <ul className="list-disc pt-4  pl-5">
          <li>
            <span className="font-semibold">Ledum palustre:</span> Pain and
            inflammation at the site of a tick bite.
          </li>
          <li>
            <span className="font-semibold">Arnica montana:</span> Muscle
            soreness and inflammation relief.
          </li>
          <li>
            <span className="font-semibold">Belladonna:</span> Reduces fever and
            acute inflammation.
          </li>
          <li>
            <span className="font-semibold">Rhus toxicodendron:</span> Joint
            pain and stiffness relief.
          </li>
          <li>
            <span className="font-semibold">Hypericum perforatum: </span>Nerve
            pain relief.
          </li>
          {/* Add other homeopathic remedies here */}
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mt-8">
          Preventive Measures
        </h2>
        <ul className="list-disc pt-4  pl-5">
          <li>
            Avoiding tick bites by wearing protective clothing and using insect
            repellent.
          </li>
          <li>Removing ticks promptly and properly.</li>
        </ul>

        <p className="mt-4 ">
          Early diagnosis and treatment are crucial for preventing serious
          complications. If you suspect you have Lyme disease, seek medical
          advice promptly.
        </p>
      </div>
    </div>
  );
};

export default LymeDisease;
