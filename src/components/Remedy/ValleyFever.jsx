import React from "react";
import HeroSection from "./HeroSection";

const ValleyFever = () => {
  return (
    <>
      <div>
        <HeroSection
          bgImage="https://ehealth.com.pk/images/whooping-cough-1204.png"
          heading="Valley fever (coccidioidomycosis)"
          description="Valley Fever, also known as coccidioidomycosis, is an infection caused by inhaling spores of the Coccidioides fungus. The disease is prevalent in certain arid regions of the Southwestern United States, Central and South America. Symptoms can range from mild, flu-like symptoms to severe pulmonary or disseminated disease."
        />
      </div>

      <div className="text-[1rem] md:text-[1.1rem]overflow-hidden p-4 md:p-6 text-gray bg-white">
        <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Allopathic Treatments:
        </h2>
        <ul>
          <li>Antifungal Medications:</li>
          <ul>
            <li>
              Fluconazole: Commonly used for treating mild to moderate
              coccidioidomycosis.
            </li>
            <li>
              Itraconazole: An alternative to fluconazole, used for similar
              cases.
            </li>
            <li>
              Voriconazole: Often used for severe or disseminated infections.
            </li>
            <li>
              Posaconazole: Used for patients who do not respond to other
              treatments.
            </li>
            <li>
              Amphotericin B: Reserved for severe cases due to its potential
              toxicity.
            </li>
          </ul>
          <li>Supportive Care:</li>
          <ul>
            <li>Pain relievers (e.g., acetaminophen, ibuprofen)</li>
            <li>Rest and hydration</li>
          </ul>
        </ul>

        <h2 className="text-[1rem] lg:mt-4 md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Herbal Remedies:
        </h2>
        <ul>
          <li>Echinacea: Believed to boost the immune system.</li>
          <li>Garlic: Known for its antifungal properties.</li>
          <li>
            Goldenseal: Used for its immune-boosting and antimicrobial effects.
          </li>
          <li>
            Oregano Oil: Contains carvacrol, which has antifungal properties.
          </li>
        </ul>

        <h2 className="text-[1rem] lg:mt-4 md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Chinese Remedies:
        </h2>
        <ul>
          <li>Lung Supportive Herbs:</li>
          <ul>
            <li>Cordyceps: Used for respiratory health and immune support.</li>
            <li>Astragalus: Enhances immune function.</li>
            <li>Ginseng: Strengthens the body’s resistance to illness.</li>
          </ul>
          <li>Traditional Chinese Medicine (TCM) Formulas:</li>
          <ul>
            <li>Yin Chiao: Used at the onset of respiratory infections.</li>
            <li>Gan Mao Ling: Commonly used for flu-like symptoms.</li>
          </ul>
        </ul>

        <h2 className="text-[1rem] lg:mt-4 md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Homeopathic Remedies:
        </h2>
        <p>
          Homeopathic remedies are chosen based on the totality of symptoms,
          including physical, emotional, and mental characteristics. Below are
          some commonly recommended remedies for coccidioidomycosis:
        </p>
        <ul className="py-4">
          <li>
            <strong className="border-b-2 border-gray-300  ">
              1: Calcarea Carbonica:
            </strong>
            <div className="">
              <strong>Symptoms:</strong> Fatigue, night sweats, anxiety, and
              difficulty breathing.
            </div>
            <div>
              <strong>Potency:</strong> 30C to 200C, once or twice daily.
            </div>
          </li>
          <li>
            <strong className="border-b-2 border-gray-300 ">2: Silicea:</strong>
            <div>
              <strong>Symptoms:</strong> Chronic infections, weakness, and
              fatigue.
            </div>
            <div>
              <strong>Potency:</strong> 6X to 30C, once daily.
            </div>
          </li>
          <li>
            <strong className="border-b-2 border-gray-300 ">
              3: Tuberculinum:
            </strong>
            <div>
              <strong>Symptoms:</strong> Chronic cough, night sweats, and
              respiratory infections.
            </div>
            <div>
              <strong>Potency:</strong> 30C to 1M, once a week.
            </div>
          </li>
          <li>
            <strong className="border-b-2 border-gray-300 ">
              4: Pulsatilla:
            </strong>
            <div>
              <strong>Symptoms:</strong> Cough, fever, and chills.
            </div>
            <div>
              <strong>Potency:</strong> 30C, once daily or as needed.
            </div>
          </li>
          <li>
            <strong className="border-b-2 border-gray-300 ">5: Bryonia:</strong>
            <div>
              <strong>Symptoms:</strong> Dry, painful cough and chest pain.
            </div>
            <div>
              <strong>Potency:</strong> 30C, once or twice daily.
            </div>
          </li>
          <li>
            <strong className="border-b-2 border-gray-300 ">
              6: Arsenicum Album:
            </strong>
            <div>
              <strong>Symptoms:</strong> Burning pains, restlessness, and
              anxiety.
            </div>
            <div>
              <strong>Potency:</strong> 30C, every few hours initially, then
              reduced as symptoms improve.
            </div>
          </li>
          <li>
            <strong className="border-b-2 border-gray-300 ">7: Sulphur:</strong>
            <div>
              <strong>Symptoms:</strong> Burning sensation in the chest and
              frequent relapses.
            </div>
            <div>
              <strong>Potency:</strong> 30C, once daily.
            </div>
          </li>
        </ul>

        <h2 className="text-[1rem] lg:mt-4 md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Usage and Potency Guidelines:
        </h2>
        <ul>
          <li>
            Acute Phase: Higher potencies (200C or 1M) may be used under
            guidance.
          </li>
          <li>
            Chronic Phase: Lower potencies (6X to 30C) are often used for
            chronic conditions, repeated less frequently.
          </li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] lg:mt-4 font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          General Homeopathic Principles:
        </h2>
        <ul>
          <li>
            Remedies are chosen based on individual symptoms and overall
            constitution.
          </li>
          <li>
            Potencies and frequency of doses can vary; start with a lower
            potency and observe the response.
          </li>
          <li>
            Homeopathic treatment should ideally be supervised by a qualified
            practitioner, especially in serious conditions like
            coccidioidomycosis.
          </li>
        </ul>
        <div className="mt-8">
          <p>
            This comprehensive approach covers allopathic, herbal, Chinese, and
            homeopathic remedies for Valley Fever, with a detailed focus on
            homeopathic treatments. If you have specific questions or need
            further elaboration on any part, feel free to ask.
          </p>
        </div>
      </div>
    </>
  );
};

export default ValleyFever;
