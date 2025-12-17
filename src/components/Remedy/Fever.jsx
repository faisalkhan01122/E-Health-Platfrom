import React from "react";
import HeroSection from "./HeroSection";

const Fever = () => {
  return (
    <>
      <div>
        <HeroSection
          bgImage="https://ehealth.com.pk/images/q-fever-338.png"
          heading="Q Fever"
          description="Q Fever is a bacterial infection caused by Coxiella burnetii. It primarily affects animals like cattle, sheep, and goats, but humans can also contract it. Humans typically acquire Q Fever through inhalation of contaminated air particles from animal products or by direct contact with infected animals."
        />
      </div>

      <div className="text-[1rem] md:text-[1.1rem] rounded-b-lg overflow-hidden p-4 md:p-6 text-gray bg-white">
        <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Symptoms:
        </h2>
        <ul className="list-disc pl-4">
          <li>High fever</li>
          <li>Severe headache</li>
          <li>Muscle pain</li>
          <li>Chills</li>
          <li>Fatigue</li>
          <li>Sweats</li>
          <li>Cough</li>
          <li>Nausea</li>
          <li>Vomiting</li>
          <li>Diarrhea</li>
          <li>Abdominal pain</li>
          <li>Chest pain</li>
          <li>Pneumonia</li>
          <li>Hepatitis (inflammation of the liver)</li>
        </ul>
        <div className="mt-4 ">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Allopathic Remedies for Q Fever:
          </h2>
          <ul className="list-disc pl-4">
            <li>
              <strong>Doxycycline:</strong> The preferred antibiotic for Q
              Fever, typically prescribed for 2 weeks.
            </li>
            <li>
              <strong>Hydroxychloroquine:</strong> Often used in chronic cases,
              especially when the heart is involved.
            </li>
            <li>
              <strong>Tetracycline:</strong> An alternative to doxycycline.
            </li>
            <li>
              <strong>Ciprofloxacin:</strong> Another alternative in case of
              resistance or intolerance.
            </li>
          </ul>
        </div>

        <div className=" mt-4">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Herbal Remedies for Q Fever:
          </h2>
          <p>
            Herbal remedies are used as supportive treatments to enhance the
            immune system and alleviate symptoms. Always consult a healthcare
            provider before using herbal remedies.
          </p>
          <ul className="list-disc pl-4 mt-4">
            <li>
              <strong>Echinacea:</strong> Known for its immune-boosting
              properties.
            </li>
            <li>
              <strong>Garlic:</strong> Acts as a natural antibiotic and immune
              system booster.
            </li>
            <li>
              <strong>Astragalus:</strong> Enhances immune function and provides
              anti-inflammatory effects.
            </li>
            <li>
              <strong>Goldenseal:</strong> Contains berberine, which has
              antibacterial properties.
            </li>
            <li>
              <strong>Cat’s Claw:</strong> Has anti-inflammatory and
              immune-enhancing properties.
            </li>
          </ul>
        </div>

        <div className=" mt-4">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Chinese Medicine for Q Fever:
          </h2>
          <ul className="list-disc pl-4">
            <li>
              <strong>Ban Lan Gen (Isatis root):</strong> Used for its antiviral
              and antibacterial properties.
            </li>
            <li>
              <strong>Huang Qi (Astragalus):</strong> Strengthens the immune
              system.
            </li>
            <li>
              <strong>Lian Qiao (Forsythia):</strong> Known for its detoxifying
              effects.
            </li>
            <li>
              <strong>Jin Yin Hua (Honeysuckle flower):</strong> Used for its
              anti-inflammatory and antiviral properties.
            </li>
            <li>
              <strong>Yin Chai Hu (Stellaria root):</strong> Helps reduce fever
              and inflammation.
            </li>
          </ul>
        </div>

        <div className=" mt-4">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Homeopathic Remedies for Q Fever:
          </h2>
          <ul className="list-disc pl-4">
            <li>
              <strong>Pyrogenium:</strong>
              <br />
              Symptoms: High fever with restlessness, aching in bones and
              muscles, foul-smelling discharges, and profuse sweating.
              Potencies: 30C, 200C, 1M.
            </li>
            <li>
              <strong>Bryonia alba:</strong>
              <br />
              Symptoms: High fever with dry mouth, thirst, headaches, muscle
              pain aggravated by movement, and dry cough. Potencies: 30C, 200C.
            </li>
            <li>
              <strong>Rhus toxicodendron:</strong>
              <br />
              Symptoms: High fever with restlessness, body aches that improve
              with movement, sore throat, and skin rashes. Potencies: 30C, 200C.
            </li>
            <li>
              <strong>Belladonna:</strong>
              <br />
              Symptoms: Sudden onset of high fever with red, hot face, throbbing
              headaches, and sensitivity to light. Potencies: 30C, 200C.
            </li>
            <li>
              <strong>Eupatorium perfoliatum:</strong>
              <br />
              Symptoms: Fever with severe bone pain, intense thirst, nausea, and
              vomiting. Potencies: 30C, 200C.
            </li>
            <li>
              <strong>Arsenicum album:</strong>
              <br />
              Symptoms: High fever with anxiety, restlessness, burning pains,
              and thirst for small sips of water. Potencies: 30C, 200C.
            </li>
            <li>
              <strong>Gelsemium sempervirens:</strong>
              <br />
              Symptoms: Fever with fatigue, muscle weakness, drowsiness, chills,
              and lack of thirst. Potencies: 30C, 200C.
            </li>
          </ul>
        </div>

        <div className="p-4 mt-6">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4">
            Conclusion:
          </h2>
          <p>
            Each treatment option, whether allopathic, herbal, Chinese, or
            homeopathic, offers different approaches to managing Q Fever.
            Homeopathic remedies are especially individualized and focus on the
            patient’s specific symptoms, often providing gentle yet effective
            relief. Always consult with a healthcare professional before
            starting any treatment.
          </p>
        </div>
      </div>
    </>
  );
};

export default Fever;
