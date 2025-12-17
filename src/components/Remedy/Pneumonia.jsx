import React from "react";
import HeroSection from "./HeroSection";

const Pneumonia = () => {
  return (
    <>
      <div>
        <HeroSection
          bgImage="https://ehealth.com.pk/images/pneumonia-9709.png"
          heading="Pneumonia"
          description="What is Pneumonia?

Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus, causing symptoms like cough with phlegm or pus, fever, chills, and difficulty breathing. Various organisms, including bacteria, viruses, and fungi, can cause pneumonia."
        />
      </div>
      <div className="text-[1rem] md:text-[1.1rem] overflow-hidden p-4 md:p-6 text-gray bg-white">
        <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Symptoms:
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Chest pain when breathing or coughing</li>
          <li>
            Confusion or changes in mental awareness (in adults age 65 and
            older)
          </li>
          <li>Cough, which may produce phlegm</li>
          <li>Fatigue</li>
          <li>Fever, sweating, and shaking chills</li>
          <li>
            Lower than normal body temperature (in adults older than age 65 and
            people with weak immune systems)
          </li>
          <li>Nausea, vomiting, or diarrhea</li>
          <li>Shortness of breath</li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Allopathic Remedies:
        </h2>
        <ol className="list-decimal pl-5 mb-4">
          <li>
            <strong>Antibiotics (for bacterial pneumonia):</strong>
            <ul>
              <li>Amoxicillin</li>
              <li>Azithromycin</li>
              <li>Doxycycline</li>
              <li>Levofloxacin</li>
              <li>Ceftriaxone</li>
            </ul>
          </li>
          <li>
            <strong>Antiviral Medications (for viral pneumonia):</strong>
            <ul>
              <li>Oseltamivir (Tamiflu) for influenza virus</li>
              <li>Acyclovir for herpes virus</li>
            </ul>
          </li>
          <li>
            <strong>Antifungal Medications (for fungal pneumonia):</strong>
            <ul>
              <li>Fluconazole</li>
              <li>Itraconazole</li>
            </ul>
          </li>
          <li>
            <strong>Other Treatments:</strong>
            <ul>
              <li>Cough suppressants</li>
              <li>Fever reducers/Pain relievers (Ibuprofen, Acetaminophen)</li>
            </ul>
          </li>
        </ol>

        <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Herbal Remedies:
        </h2>
        <ol className="list-decimal pl-5 mb-4">
          <li>
            <strong>Ginger:</strong> Has anti-inflammatory properties and can
            help with respiratory infections.
          </li>
          <li>
            <strong>Garlic:</strong> Known for its antibacterial and antiviral
            properties.
          </li>
          <li>
            <strong>Echinacea:</strong> May boost the immune system and help
            fight infections.
          </li>
          <li>
            <strong>Turmeric:</strong> Contains curcumin, which has
            anti-inflammatory and antioxidant effects.
          </li>
          <li>
            <strong>Thyme:</strong> Effective for coughs and bronchitis, with
            antimicrobial properties.
          </li>
        </ol>

        <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Chinese Remedies:
        </h2>
        <ol className="list-decimal pl-5 mb-4">
          <li>
            <strong>Ban Lan Gen (Isatis Root):</strong> Used for its antiviral
            properties.
          </li>
          <li>
            <strong>Huang Qi (Astragalus):</strong> Boosts the immune system.
          </li>
          <li>
            <strong>Gan Cao (Licorice Root):</strong> Soothes the respiratory
            system.
          </li>
          <li>
            <strong>Jin Yin Hua (Honeysuckle):</strong> Has anti-inflammatory
            and antibacterial properties.
          </li>
          <li>
            <strong>Xing Ren (Apricot Seed):</strong> Used to treat cough and
            respiratory issues.
          </li>
        </ol>

        <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Homeopathic Remedies:
        </h2>
        <p>
          Homeopathy focuses on treating the individual as a whole, considering
          their physical, emotional, and psychological states. Below are some
          common homeopathic remedies for pneumonia, along with detailed
          symptoms and recommended potencies:
        </p>

        <ol className="list-decimal pl-5 mb-4">
          <li>
            <strong>Aconitum Napellus:</strong>
            <p>
              Symptoms: Sudden onset of high fever, dry cough, restlessness,
              anxiety, and intense thirst. Often used at the beginning of
              pneumonia.
            </p>
            <p>
              Potency: 6C to 30C, repeated every few hours depending on
              severity.
            </p>
          </li>
          <li>
            <strong>Bryonia Alba:</strong>
            <p>
              Symptoms: Dry, painful cough that worsens with movement, chest
              pain, headache, irritability, and thirst for large quantities of
              water.
            </p>
            <p>Potency: 6C to 30C, taken 2-3 times a day.</p>
          </li>
          <li>
            <strong>Phosphorus:</strong>
            <p>
              Symptoms: Burning chest pain, blood-streaked sputum, fatigue,
              shortness of breath, and anxiety. Symptoms worsen with lying on
              the left side.
            </p>
            <p>Potency: 6C to 30C, taken 2-3 times a day.</p>
          </li>
          <li>
            <strong>Antimonium Tart:</strong>
            <p>
              Symptoms: Rattling cough with thick, difficult-to-expectorate
              mucus, weakness, drowsiness, and sweating.
            </p>
            <p>Potency: 6C to 30C, taken every 2-3 hours until improvement.</p>
          </li>
          <li>
            <strong>Arsenicum Album:</strong>
            <p>
              Symptoms: Great weakness, restlessness, anxiety, burning chest
              pain, thirst for small sips of water, and symptoms worsen at
              night.
            </p>
            <p>
              Potency: 6C to 30C, taken every 2-3 hours during acute phase, then
              reduced.
            </p>
          </li>
          <li>
            <strong>Kali Carb:</strong>
            <p>
              Symptoms: Stitching chest pains, dry cough, difficulty breathing,
              worse at night or early morning, and feeling of tightness in the
              chest.
            </p>
            <p>Potency: 6C to 30C, taken 2-3 times a day.</p>
          </li>
          <li>
            <strong>Hepar Sulphuris:</strong>
            <p>
              Symptoms: Wet cough, yellow or greenish mucus, sensitivity to cold
              air, irritability, and pain in the chest.
            </p>
            <p>Potency: 6C to 30C, taken every 4-6 hours during acute phase.</p>
          </li>
          <li>
            <strong>Sulphur:</strong>
            <p>
              Symptoms: Relapse of symptoms, fever with hot flashes, thirst for
              cold drinks, and burning sensations in the chest.
            </p>
            <p>Potency: 6C to 30C, taken once or twice a day.</p>
          </li>
          <li>
            <strong>Pulsatilla:</strong>
            <p>
              Symptoms: Thick, bland, yellow-green mucus, cough worse in the
              evening, changeable symptoms, and need for fresh air.
            </p>
            <p>Potency: 6C to 30C, taken 2-3 times a day.</p>
          </li>
          <li>
            <strong>Ferrum Phosphoricum:</strong>
            <p>
              Symptoms: Early stages of pneumonia with mild fever, dry cough,
              and slight difficulty breathing.
            </p>
            <p>Potency: 6X to 12X, taken 3-4 times a day.</p>
          </li>
        </ol>

        <h3 className="font-semibold">
          Recommended Usage and Potency Guidelines:
        </h3>
        <p>
          Homeopathic remedies should be selected based on the totality of
          symptoms. Lower potencies (6C to 30C) are typically used in acute
          cases and can be taken more frequently. As symptoms improve, the
          frequency of doses should be reduced. Higher potencies (200C and
          above) should be used with caution and typically under the guidance of
          a qualified homeopath.
        </p>
        <p>
          In summary, the selection of a homeopathic remedy for pneumonia
          involves a detailed understanding of the patient’s specific symptoms
          and matching them with the remedy profile from the materia medica.
          It’s advisable to consult with a professional homeopath for
          personalized treatment.
        </p>
      </div>
    </>
  );
};

export default Pneumonia;
