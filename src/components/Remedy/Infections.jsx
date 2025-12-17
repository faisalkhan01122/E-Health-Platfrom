// import React from 'react'
// import HeroSection from './HeroSection'

// const Infections = () => {
//   return (
//     <>
//     <div>
//         <HeroSection
//           bgImage="https://ehealth.com.pk/images/infections-after-organ-transplant-4517.png"
//           heading="Infections after organ transplant"
//           description="Infections are a significant concern for patients who have undergone organ transplants due to the immunosuppressive therapy required to prevent organ rejection. These medications weaken the immune system, making patients more susceptible to infections."
//         />
//         </div>
//         <div className="shadow-lg rounded-b-lg overflow-hidden p-4 md:p-6 text-gray bg-graylight">
//   <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
//   Common Infections:
//   </h2></div>
//   </>
//   )
// }

// export default Infections

import React from "react";
import HeroSection from "./HeroSection";

const Infections = () => {
  return (
    <>
      <div>
        <HeroSection
          bgImage="https://ehealth.com.pk/images/infections-after-organ-transplant-4517.png"
          heading="Infections after organ transplant"
          description="Infections are a significant concern for patients who have undergone organ transplants due to the immunosuppressive therapy required to prevent organ rejection. These medications weaken the immune system, making patients more susceptible to infections."
        />
      </div>

      <div className="shadow-lg rounded-b-lg overflow-hidden text-[1rem] md: p-4 md:p-6 text-gray bg-white">
        <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Homeopathic Remedies:
        </h2>
        <p className="mt-4">
          Homeopathy follows the principle of{" "}
          <strong>“like cures like.”</strong> The following are homeopathic
          remedies for infections:
        </p>

        <ul className="list-disc pl-5 mt-4 space-y-4">
          <li>
            <strong className="">Aconitum napellus (Aconite):</strong>
            <p>
              <span className="font-semibold">Symptoms:</span> Sudden onset,
              high fever, restlessness.
            </p>
            <p>
              <span className="font-semibold">Potency:</span> 30C every 1-2
              hours.
            </p>
          </li>
          <li>
            <strong className="">Belladonna:</strong>
            <p>
              <span className="font-semibold">Symptoms:</span> High fever, red
              face, throbbing headache.
            </p>
            <p>
              <span className="font-semibold">Potency:</span> 30C or 200C every
              2-3 hours.
            </p>
          </li>
          <li>
            <strong className="">Bryonia alba:</strong>
            <p>
              <span className="font-semibold">Symptoms:</span> Dry cough, thirst
              for cold water.
            </p>
            <p>
              <span className="font-semibold">Potency:</span> 30C, 3-4 times a
              day.
            </p>
          </li>
          <li>
            <strong className="">Arsenicum album:</strong>
            <p>
              <span className="font-semibold">Symptoms:</span> Restlessness,
              anxiety, burning pains.
            </p>
            <p>
              <span className="font-semibold">Potency:</span> 30C or 200C, every
              2-3 hours.
            </p>
          </li>
          <li>
            <strong className="">Gelsemium sempervirens:</strong>
            <p>
              <span className="font-semibold">Symptoms:</span> Gradual onset,
              weakness, headache.
            </p>
            <p>
              <span className="font-semibold">Potency:</span> 30C, 3-4 times a
              day.
            </p>
          </li>
          <li>
            <strong className="">Hepar sulphuris calcareum:</strong>
            <p>
              <span className="font-semibold">Symptoms:</span> Cold sensitivity,
              abscesses.
            </p>
            <p>
              <span className="font-semibold">Potency:</span> 30C or 200C, 2-3
              times a day.
            </p>
          </li>
          <li>
            <strong className="">Pulsatilla:</strong>
            <p>
              <span className="font-semibold">Symptoms:</span> Thick,
              yellow-green discharge, weepy state.
            </p>
            <p>
              <span className="font-semibold">Potency:</span> 30C, 2-3 times a
              day.
            </p>
          </li>
          <li>
            <strong className="">Silicea:</strong>
            <p>
              <span className="font-semibold">Symptoms:</span> Chronic
              infections, abscesses.
            </p>
            <p>
              <span className="font-semibold">Potency:</span> 30C, once daily.
            </p>
          </li>
          <li>
            <strong className="">Mercurius solubilis:</strong>
            <p>
              <span className="font-semibold">Symptoms:</span> Offensive breath,
              swollen glands.
            </p>
            <p>
              <span className="font-semibold">Potency:</span> 30C, 2-3 times a
              day.
            </p>
          </li>
          <li>
            <strong className="">Kali bichromicum:</strong>
            <p>
              <span className="font-semibold">Symptoms:</span> Thick mucus, root
              of nose pain.
            </p>
            <p>
              <span className="font-semibold">Potency:</span> 30C, 3-4 times a
              day.
            </p>
          </li>
        </ul>

        <p className="mt-4">
          <strong>Note:</strong> Homeopathic treatments should be tailored to
          the individual, and it's advisable to consult a professional homeopath
          for personalized treatment recommendations.
        </p>
        <p className="mt-4">
          These remedies, when selected according to the totality of symptoms,
          can support the immune system and help manage infections in transplant
          patients.
        </p>
      </div>
    </>
  );
};

export default Infections;
