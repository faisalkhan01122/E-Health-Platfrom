import React from "react";
import HeroSection from "./HeroSection";

const CommonCold = () => {
  return (
    <>
      <div>
        <HeroSection
          bgImage="https://ehealth.com.pk/images/common-cold-4556.png"
          heading="Common Cold"
          description="The common cold is a viral infection of the upper respiratory tract, primarily affecting the nose and throat. It’s generally harmless, although it can be uncomfortable and disruptive. Symptoms of a common cold can include:"
        />
      </div>

      <div className=" text-[1rem] md:text-[1.1rem] overflow-hidden p-4 md:p-6 text-gray bg-white">
        <h2 className="text-[1rem] md:text-[1.1rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          1. Symptoms:
        </h2>
        <ol className="list-decimal pl-5 mb-4">
          <li>Runny or stuffy nose</li>
          <li>Sore throat</li>
          <li>Cough</li>
          <li>Congestion</li>
          <li>Slight body aches or a mild headache</li>
          <li>Sneezing</li>
          <li>Low-grade fever</li>
          <li>General feeling of unwellness (malaise)</li>
        </ol>

        <h2 className="text-[1rem] md:text-[1.1rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          2. Allopathic Remedies:
        </h2>
        <p>
          Allopathic (conventional) medicine typically offers symptomatic relief
          for the common cold. Common treatments include:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Decongestants:</strong>
            <ul>
              <li>Pseudoephedrine (Sudafed)</li>
              <li>Phenylephrine (Sudafed PE)</li>
            </ul>
          </li>
          <li>
            <strong>Antihistamines:</strong>
            <ul>
              <li>Diphenhydramine (Benadryl)</li>
              <li>Loratadine (Claritin)</li>
              <li>Cetirizine (Zyrtec)</li>
            </ul>
          </li>
          <li>
            <strong>Pain Relievers:</strong>
            <ul>
              <li>Acetaminophen (Tylenol)</li>
              <li>Ibuprofen (Advil, Motrin)</li>
              <li>Aspirin (not recommended for children)</li>
            </ul>
          </li>
          <li>
            <strong>Cough Suppressants and Expectorants:</strong>
            <ul>
              <li>Dextromethorphan (Robitussin)</li>
              <li>Guaifenesin (Mucinex)</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.1rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          3. Herbal Remedies:
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Echinacea: Believed to boost the immune system and reduce symptoms.
          </li>
          <li>Garlic: Known for its antiviral properties.</li>
          <li>Ginger: Helps soothe the throat and reduce inflammation.</li>
          <li>Honey: Used for its soothing and antibacterial properties.</li>
          <li>
            Elderberry: May reduce the duration and severity of cold symptoms.
          </li>
          <li>
            Peppermint: Acts as a decongestant and has antimicrobial properties.
          </li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.1rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          4. Chinese Medicine Remedies:
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Yin Qiao San: A popular formula for early stages of a cold.</li>
          <li>Gan Mao Ling: Used for various cold symptoms.</li>
          <li>
            Chuan Xiong Cha Tiao San: Effective for headache and nasal
            congestion.
          </li>
          <li>
            Ban Lan Gen Chong Ji: Helps with sore throat and antiviral activity.
          </li>
          <li>
            Ginger Tea (Sheng Jiang): Used to warm the body and alleviate cold
            symptoms.
          </li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.1rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          3. Homeopathic Remedies:
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Aconitum napellus (Aconite):</strong>
            <p>
              Symptoms: Sudden onset of symptoms after exposure to cold, dry
              wind. Fever, restlessness, and anxiety. Symptoms often come on at
              night.
            </p>
            <p>Potency: Commonly used in 6X, 12X, 30X, or 30C potency.</p>
            <p>Dosage: 3-4 times daily until symptoms improve.</p>
          </li>
          <li>
            <strong>Allium cepa:</strong>
            <p>
              Symptoms: Profuse, watery nasal discharge that irritates the
              nostrils and upper lip. Sneezing and a tickling cough. Symptoms
              improve in open air.
            </p>
            <p>Potency: 6C, 12C, or 30C potency.</p>
            <p>Dosage: 3-4 times daily until symptoms improve.</p>
          </li>
          <li>
            <strong>Arsenicum album:</strong>
            <p>
              Symptoms: Thin, watery, burning nasal discharge. Frequent sneezing
              and restlessness. Cold symptoms often worse at night and in cold
              air.
            </p>
            <p>Potency: 6C, 12C, or 30C potency.</p>
            <p>Dosage: 3-4 times daily until symptoms improve.</p>
          </li>
          <li>
            <strong>Belladonna:</strong>
            <p>
              Symptoms: Sudden onset of high fever, red face, and throbbing
              headache. Dryness and burning in the throat. Sensitivity to light
              and noise.
            </p>
            <p>Potency: 6C, 12C, or 30C potency.</p>
            <p>Dosage: 3-4 times daily until symptoms improve.</p>
          </li>
          <li>
            <strong>Bryonia alba:</strong>
            <p>
              Symptoms: Dry, painful cough with stitching chest pain. Dry mouth
              and excessive thirst. Symptoms worsen with motion and improve with
              rest.
            </p>
            <p>Potency: 6C, 12C, or 30C potency.</p>
            <p>Dosage: 3-4 times daily until symptoms improve.</p>
          </li>
          <li>
            <strong>Euphrasia officinalis:</strong>
            <p>
              Symptoms: Profuse, watery discharge from the eyes and nose. Eyes
              feel irritated and sensitive to light. Cold symptoms often worse
              in the evening.
            </p>
            <p>Potency: 6C, 12C, or 30C potency.</p>
            <p>Dosage: 3-4 times daily until symptoms improve.</p>
          </li>
          <li>
            <strong>Gelsemium sempervirens:</strong>
            <p>
              Symptoms: Gradual onset of cold with fatigue, drowsiness, and body
              aches. Heavy sensation in the head and limbs. Often used for colds
              that occur in warm weather.
            </p>
            <p>Potency: 6C, 12C, or 30C potency.</p>
            <p>Dosage: 3-4 times daily until symptoms improve.</p>
          </li>
          <li>
            <strong>Nux vomica:</strong>
            <p>
              Symptoms: Stuffy nose, particularly at night, and runny nose
              during the day. Irritable mood and sensitivity to cold. Often used
              for colds associated with overeating or excessive alcohol
              consumption.
            </p>
            <p>Potency: 6C, 12C, or 30C potency.</p>
            <p>Dosage: 3-4 times daily until symptoms improve.</p>
          </li>
          <li>
            <strong>Pulsatilla nigricans:</strong>
            <p>
              Symptoms: Thick, bland nasal discharge. Symptoms vary and are
              often worse in warm, stuffy rooms. Desire for fresh air and
              company.
            </p>
            <p>Potency: 6C, 12C, or 30C potency.</p>
            <p>Dosage: 3-4 times daily until symptoms improve.</p>
          </li>
          <li>
            <strong>Rhus toxicodendron:</strong>
            <p>
              Symptoms: Sneezing, runny nose, and restlessness. Aching muscles
              and joints. Symptoms often worse with initial movement and improve
              with continued motion.
            </p>
            <p>Potency: 6C, 12C, or 30C potency.</p>
            <p>Dosage: 3-4 times daily until symptoms improve.</p>
          </li>
        </ul>
        <h2 className="text-[1rem] md:text-[1.1rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Conclusion:
        </h2>
        <p>
          While the common cold is typically self-limiting, various remedies
          across allopathic, herbal, Chinese, and homeopathic medicine can help
          alleviate symptoms and support recovery. Homeopathic remedies, in
          particular, offer a personalized approach based on the specific
          symptoms and overall condition of the individual.
        </p>
      </div>
    </>
  );
};

export default CommonCold;
