import React from "react";
import HeroSection from "./HeroSection";

const Malaria = () => {
  return (
    <>
      <div>
        <HeroSection
          bgImage="https://ehealth.com.pk/images/malaria-8914.png"
          heading="Malaria"
          description="Malaria is a life-threatening disease caused by parasites transmitted to humans through the bites of infected female Anopheles mosquitoes. The most common species responsible for malaria include Plasmodium falciparum, P. vivax, P. ovale, and P. malariae."
        />
      </div>

      <div className="text-[1rem] md:text-[1.1rem]-hidden p-4 md:p-6 text-gray bg-white">
        <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Allopathic Remedies
        </h2>
        <ul className="list-disc  pl-4">
          <li className="py-4">
            <strong>Chloroquine:</strong>
            <br />
            <strong>Used for:</strong> Treatment and prevention of malaria
            caused by <em>P. vivax, P. ovale, P. malariae</em>.<br />
            <strong>Dosage:</strong> 600 mg base initially, followed by 300 mg
            at 6, 24, and 48 hours.
            <br />
            <strong>Side Effects:</strong> Nausea, vomiting, headache,
            dizziness, blurred vision.
          </li>
          <li className="py-4">
            <strong>Artemisinin-based combination therapies (ACTs):</strong>
            <br />
            <strong>Used for:</strong> <em>P. falciparum</em> malaria.
            <br />
            <strong>Dosage:</strong> Varies by combination and patient weight.
            <br />
            <strong>Side Effects:</strong> Nausea, vomiting, headache,
            dizziness.
          </li>
          <li className="py-4">
            <strong>Mefloquine:</strong>
            <br />
            <strong>Used for:</strong> Treatment and prevention of malaria.
            <br />
            <strong>Dosage:</strong> 250 mg once weekly for prevention; 750 mg
            followed by 500 mg at 6–12 hours and 250 mg at 24–36 hours for
            treatment.
            <br />
            <strong>Side Effects:</strong> Nausea, dizziness, vivid dreams.
          </li>
          <li className="py-4">
            <strong>Atovaquone-proguanil:</strong>
            <br />
            <strong>Used for:</strong> Prevention and treatment of malaria.
            <br />
            <strong>Dosage:</strong> 250 mg/100 mg once daily for prevention; 4
            tablets once daily for 3 days for treatment.
            <br />
            <strong>Side Effects:</strong> Nausea, vomiting, headache, abdominal
            pain.
          </li>
          <li className="py-4">
            <strong>Primaquine:</strong>
            <br />
            <strong>Used for:</strong> Prevention of relapse in{" "}
            <em>P. vivax</em> and <em>P. ovale</em>.<br />
            <strong>Dosage:</strong> 30 mg base daily for 14 days.
            <br />
            <strong>Side Effects:</strong> Nausea, vomiting, abdominal pain.
          </li>
        </ul>

        <div className="  overflow-hidden p-4 md:p-6 text-gray bg-graylight mt-6">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Herbal Remedies
          </h2>
          <ul className="list-disc pl-4">
            <li>
              <strong>Artemisia annua (Sweet Wormwood):</strong> Contains
              artemisinin. Used in teas, capsules. Side Effects: Mild
              gastrointestinal upset.
            </li>
            <li>
              <strong>Neem (Azadirachta indica):</strong> Leaf extracts for
              prophylaxis. Side Effects: Nausea, liver toxicity at high doses.
            </li>
            <li>
              <strong>Cinchona Bark:</strong> Contains quinine. Side Effects:
              Nausea, cinchonism (tinnitus, dizziness).
            </li>
          </ul>
        </div>
        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-graylight mt-6">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Chinese Remedies
          </h2>
          <ul className="list-disc pl-4">
            <li>
              <strong>Qinghaosu (Artemisinin):</strong>
              <br />
              <strong>Derived from:</strong> <em>Artemisia annua</em>.<br />
              <strong>Form:</strong> Extracts used in combination therapies.
              <br />
              <strong>Side Effects:</strong> Similar to ACTs.
            </li>
            <li>
              <strong>Chuanxinlian (Andrographis paniculata):</strong>
              <br />
              <strong>Usage:</strong> Decoctions or extracts.
              <br />
              <strong>Side Effects:</strong> Gastrointestinal upset.
            </li>
            <li>
              <strong>Chang Shan (Dichroa febrifuga):</strong>
              <br />
              <strong>Usage:</strong> Decoctions or extracts.
              <br />
              <strong>Side Effects:</strong> Nausea, vomiting.
            </li>
          </ul>
        </div>

        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-graylight mt-6">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Homeopathic Remedies
          </h2>
          <p>
            Homeopathy treats malaria by addressing the unique symptoms
            presented by each individual. Remedies are selected based on the
            totality of symptoms. Here are some commonly used homeopathic
            remedies for malaria:
          </p>
          <ul className="list-disc mt-4 pl-4">
            <li>
              <strong>Cinchona officinalis (China):</strong>
              <br />
              <strong>Symptoms:</strong> Weakness, periodic fevers, bloating.
              <br />
              <strong>Potency:</strong> 6C, 30C, 200C.
              <br />
              <strong>Dosage:</strong> 1-3 times daily.
              <br />
              <strong>Additional Symptoms:</strong> Exhaustion, trembling,
              headache, spleen enlargement.
            </li>
            <li>
              <strong>Arsenicum album:</strong>
              <br />
              <strong>Symptoms:</strong> High fever, restlessness, thirst.
              <br />
              <strong>Potency:</strong> 6C, 30C, 200C.
              <br />
              <strong>Dosage:</strong> 1-3 times daily.
              <br />
              <strong>Additional Symptoms:</strong> Cold sweats, vomiting,
              anxiety.
            </li>
            <li>
              <strong>Natrum muriaticum:</strong>
              <br />
              <strong>Symptoms:</strong> Severe chills, weakness, headache.
              <br />
              <strong>Potency:</strong> 6C, 30C, 200C.
              <br />
              <strong>Dosage:</strong> 1-3 times daily.
              <br />
              <strong>Additional Symptoms:</strong> Sweating, aversion to bread,
              thirst for cold drinks.
            </li>
            <li>
              <strong>Nux vomica:</strong>
              <br />
              <strong>Symptoms:</strong> Intense chills, irritability.
              <br />
              <strong>Potency:</strong> 6C, 30C, 200C.
              <br />
              <strong>Dosage:</strong> 1-3 times daily.
              <br />
              <strong>Additional Symptoms:</strong> Gastric disturbances,
              headache over the eyes.
            </li>
            <li>
              <strong>Eupatorium perfoliatum:</strong>
              <br />
              <strong>Symptoms:</strong> Severe bone pains, vomiting.
              <br />
              <strong>Potency:</strong> 6C, 30C, 200C.
              <br />
              <strong>Dosage:</strong> 1-3 times daily.
              <br />
              <strong>Additional Symptoms:</strong> Aching limbs, sore eyeballs,
              periodic fever.
            </li>
            <li>
              <strong>Pulsatilla:</strong>
              <br />
              <strong>Symptoms:</strong> No thirst, weepiness.
              <br />
              <strong>Potency:</strong> 6C, 30C, 200C.
              <br />
              <strong>Dosage:</strong> 1-3 times daily.
              <br />
              <strong>Additional Symptoms:</strong> Headache relieved by cold,
              mild disposition, chilliness without thirst.
            </li>
          </ul>
        </div>
        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-graylight mt-6">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Summary:
          </h2>{" "}
          <p>
            Malaria treatment involves a variety of approaches depending on the
            type and severity of the infection. Allopathic medicine provides
            highly effective treatments, while herbal, Chinese, and homeopathic
            remedies offer alternative or complementary approaches. Homeopathic
            remedies, in particular, are individualized based on the patient’s
            symptoms and constitution, offering a holistic approach to
            treatment.
          </p>
        </div>
      </div>
    </>
  );
};

export default Malaria;
