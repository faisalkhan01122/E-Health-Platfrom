import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const Allergies = () => {
  return (
    <div className="text-[1rem] md:text-[1.1rem] text-gray bg-white">
      <HeroSection
        heading={"Allergies"}
        description={
          "Allergies are hypersensitive immune responses to substances that either enter or come into contact with the body, such as pollen, food, or pet dander. These substances are known as allergens. The immune system overreacts to these allergens by producing antibodies that cause allergy symptoms."
        }
        bgImage="https://www.shutterstock.com/image-vector/word-cloud-terms-related-allergy-600nw-412710193.jpg"
      />
      <div>
        <RemedyImages
          img2="https://t3.ftcdn.net/jpg/07/75/51/56/360_F_775515607_wBU3FZ3OlB2mUN8QimelaHDmBGQF0ayr.jpg"
          img1="https://www.bergerhenryent.com/wp-content/uploads/nose-and-pollen-illustration-seasonal-allergies.jpg"
        />
      </div>
      <div className="">
        <h2 className="underline font-bold">Common Symptoms of Allergies:</h2>
        <h3 className="mt-4  underline font-semibold">
          1. Respiratory Symptoms:
        </h3>
        <ul className="list-disc  pt-4 ml-6 space-y-4">
          <li>Sneezing</li>
          <li>Runny or stuffy nose</li>
          <li>Itchy or watery eyes</li>
          <li>Coughing</li>
          <li>Wheezing or shortness of breath</li>
          <li>Itchy throat</li>
        </ul>

        <h3 className="mt-4  underline font-semibold">2. Skin Symptoms:</h3>
        <ul className="list-disc pt-4  space-y-4 ml-6">
          <li>Hives (red, itchy bumps on the skin)</li>
          <li>Eczema (dry, itchy skin)</li>
          <li>Swelling (especially around the eyes, lips, and face)</li>
        </ul>

        <h3 className="mt-4  underline font-semibold">
          3. Digestive Symptoms:
        </h3>
        <ul className="list-disc pt-4  ml-6">
          <li>Nausea</li>
          <li>Vomiting</li>
          <li>Diarrhea</li>
          <li>Abdominal pain</li>
        </ul>

        <h3 className="mt-4  underline font-semibold">4. Severe Reactions:</h3>
        <ul className="list-disc pt-4  ml-6">
          <li>
            Anaphylaxis (a severe, potentially life-threatening reaction that
            requires immediate medical attention)
          </li>
          <li>Difficulty breathing</li>
          <li>Rapid or weak pulse</li>
          <li>Swelling of the tongue and throat</li>
          <li>Loss of consciousness</li>
        </ul>

        <h2 className="mt-8 underline font-bold">Remedies for Allergies:</h2>

        <h3 className="mt-4  underline font-semibold">
          Allopathic (Conventional Medicine) Remedies:
        </h3>
        <ul className="list-disc pt-4 space-y-4  ml-6">
          <li>
            <span className="font-semibold">Antihistamines:</span> Reduce or
            block histamines, relieving allergy symptoms (e.g., Cetirizine,
            Loratadine).
          </li>
          <li>
            <span className="font-semibold"> Decongestants:</span> Reduce nasal
            congestion and swelling (e.g., Pseudoephedrine).
          </li>
          <li>
            <span className="font-semibold"> Corticosteroids:</span> Reduce
            inflammation and swelling (e.g., Fluticasone).
          </li>
          <li>
            <span className="font-semibold">Leukotriene Inhibitors:</span> Block
            the action of leukotrienes (e.g., Montelukast).
          </li>
          <li>
            <span className="font-semibold">Mast Cell Stabilizers:</span>{" "}
            Prevent the release of histamine (e.g., Cromolyn sodium).
          </li>
          <li>
            <span className="font-semibold"> Immunotherapy:</span> Allergy shots
            or sublingual tablets to desensitize the immune system.
          </li>
        </ul>

        <h3 className="mt-4  underline font-semibold">Herbal Remedies:</h3>
        <ul className="list-disc  pt-4 space-y-4 ml-6">
          <li>
            <span className="font-semibold"> Butterbur:</span> Reduces
            inflammation and relieves hay fever symptoms.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Stinging Nettle:</span> Treats
            allergic rhinitis.
          </li>
          <li>
            <span className="font-semibold">Quercetin:</span> Stabilizes mast
            cells and prevents histamine release.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Peppermint Oil:</span> Helps clear
            nasal congestion.
          </li>
          <li>
            <span className="font-semibold"> Eucalyptus Oil:</span> Used in
            steam inhalation to relieve nasal congestion.
          </li>
        </ul>

        <h3 className="mt-4  underline font-semibold">
          Chinese Medicine Remedies:
        </h3>
        <ul className="list-disc text-md pt-4 md: space-y-4 ml-6">
          <li>
            {" "}
            <span className="font-semibold">Acupuncture:</span> Balances the
            flow of energy.
          </li>
          <li>
            <span className="font-semibold">Herbal Formulas:</span> Such as Cang
            Er Zi San for nasal congestion.
          </li>
          <li>
            <span className="font-semibold"> Dietary Therapy:</span>{" "}
            Incorporates specific foods to strengthen the immune system.
          </li>
        </ul>

        <h2 className="mt-8 underline font-bold">Homeopathic Remedies:</h2>
        <ul className="list-decimal  space-y-4 pt-4 ml-6">
          <li>
            <span className="font-semibold">Allium Cepa:</span> Profuse, watery
            nasal discharge; burning and watery eyes.
          </li>
          <li>
            <span className="font-semibold"> Nux Vomica:</span> Stuffy nose,
            especially at night; frequent sneezing.
          </li>
          <li>
            <span className="font-semibold"> Arsenicum Album:</span> Burning,
            watery eyes; restlessness and anxiety.
          </li>
          <li>
            <span className="font-semibold">Sabadilla:</span> Violent sneezing;
            itching in the nose and throat.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Wyethia:</span> Intense itching of
            the nose, throat, and palate.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Histaminum:</span> General allergy
            symptoms.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Euphrasia:</span> Burning and
            irritated eyes; runny nose.
          </li>
          <li>
            <span className="font-semibold">Natrum Muriaticum:</span> Clear,
            watery nasal discharge; frequent sneezing.
          </li>
          <li>
            <span className="font-semibold">Pulsatilla:</span> Thick, yellowish
            nasal discharge; symptoms change frequently.
          </li>
          <li>
            <span className="font-semibold"> Kali Bichromicum:</span> Thick,
            stringy, yellow nasal discharge; sinus congestion.
          </li>
          <li>
            <span className="font-semibold">Sulphur:</span> Burning and itching
            eyes; redness and irritation.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Galphimia Glauca:</span> Hay fever
            with sneezing and runny nose.
          </li>
          <li>
            <span className="font-semibold"> Phosphorus:</span> Hoarseness; dry
            cough; sensitivity to odors.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Aconitum Napellus:</span> Sudden
            onset of allergy symptoms.
          </li>
          <li>
            <span className="font-semibold"> Gelsemium:</span> Fatigue;
            weakness; watery discharge.
          </li>
          <li>
            <span className="font-semibold">Apis Mellifica: </span>Swelling
            around the eyes; stinging sensations.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Silicea:</span> Chronic nasal
            congestion; sinusitis.
          </li>
        </ul>

        <p className="mt-4 ">
          Consulting with a qualified homeopathic practitioner can help tailor
          these remedies to individual symptoms and health conditions for
          optimal results.
        </p>
      </div>
    </div>
  );
};

export default Allergies;
