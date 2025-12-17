import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const WestNileVirus = () => {
  return (
    <div className="text-[1rem] md:text-[1.1rem] text-gray bg-white">
      <HeroSection
        bgImage="https://www.cdc.gov/west-nile-virus/media/images/RS2155LVV7CulexquinquefasciatusAdultFeeding202200416.9_1.jpg"
        heading={"West Nile Virus"}
        description={
          "West Nile virus (WNV) is a mosquito-borne virus that can cause illness in humans, birds, horses, and other mammals. The virus is primarily transmitted through the bite of an infected mosquito, typically the Culex species. Most people infected with WNV either remain asymptomatic or experience mild, flu-like symptoms. However, in some cases, it can lead to severe neurological diseases, such as encephalitis or meningitis."
        }
      />
      <div>
        <RemedyImages
          img2="https://cdn.mos.cms.futurecdn.net/SERkbycrGpo4cUF4stYXi8-1200-80.jpg"
          img1="https://content.health.harvard.edu/wp-content/uploads/2024/04/05d637b6-2909-4c6d-80a3-8ce36c53fa69.jpg"
        />
      </div>
      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
        Symptoms of West Nile Virus
      </h2>

      <h3 className="underline font-semibold mt-4">
        1. Mild Symptoms (West Nile Fever)
      </h3>
      <ul className="list-disc list-inside">
        <li>Fever</li>
        <li>Headache</li>
        <li>Body aches</li>
        <li>Joint pains</li>
        <li>Vomiting</li>
        <li>Diarrhea</li>
        <li>Rash</li>
      </ul>

      <h3 className=" underline  font-semibold mt-4">
        2. Severe Symptoms (Neuroinvasive Disease)
      </h3>
      <ul className="list-disc list-inside">
        <li>High fever</li>
        <li>Headache</li>
        <li>Neck stiffness</li>
        <li>Stupor</li>
        <li>Disorientation</li>
        <li>Coma</li>
        <li>Tremors</li>
        <li>Convulsions</li>
        <li>Muscle weakness</li>
        <li>Vision loss</li>
        <li>Numbness</li>
        <li>Paralysis</li>
      </ul>

      <h2 className=" underline  font-semibold mt-6">
        Allopathic Remedies for West Nile Virus
      </h2>
      <p>
        Currently, there is no specific antiviral treatment for WNV in
        allopathic medicine. Treatment mainly focuses on supportive care,
        including:
      </p>
      <ul className="list-disc list-inside">
        <li>Hospitalization for severe cases</li>
        <li>Intravenous (IV) fluids to prevent dehydration</li>
        <li>
          Pain relievers (e.g., acetaminophen) to reduce fever and relieve
          symptoms
        </li>
        <li>
          Respiratory support (e.g., ventilators) for patients with severe
          respiratory involvement
        </li>
        <li>Anti-inflammatory drugs or steroids to reduce brain swelling</li>
      </ul>

      <h2 className="  underline  font-semibold mt-6">
        Herbal Remedies for West Nile Virus
      </h2>
      <ul className="list-disc list-inside">
        <li>
          Elderberry (Sambucus nigra): Believed to boost the immune system and
          alleviate flu-like symptoms.
        </li>
        <li>
          Echinacea (Echinacea purpurea): Often used to enhance the immune
          response.
        </li>
        <li>
          Garlic (Allium sativum): Known for its antiviral and immune-boosting
          properties.
        </li>
        <li>
          Astragalus (Astragalus membranaceus): Used to strengthen the body’s
          defense mechanisms.
        </li>
        <li>
          Ginger (Zingiber officinale): Helps reduce inflammation and boost
          immunity.
        </li>
      </ul>

      <h2 className=" font-semibold underline mt-6">
        Chinese Remedies for West Nile Virus
      </h2>
      <ul className="list-disc list-inside">
        <li>
          Yin Qiao San: A classic formula used for early stages of viral
          infections.
        </li>
        <li>
          Lian Hua Qing Wen: Modern formulation used for respiratory viruses.
        </li>
        <li>
          Gan Mao Ling: Effective for early stages of flu and viral infections.
        </li>
        <li>
          Chuan Xin Lian: Known for its antiviral and immune-boosting effects.
        </li>
        <li>
          Ban Lan Gen: Used to treat viral infections and reduce symptoms.
        </li>
      </ul>

      <h2 className=" underline font-semibold mt-6">
        Homeopathic Remedies for West Nile Virus
      </h2>
      <p>
        Homeopathy offers several remedies that can be selected based on the
        totality of symptoms. Here are some key remedies with detailed symptom
        profiles and recommended potencies:
      </p>
      <h3 className="underline font-semibold mt-4">
        1. Gelsemium sempervirens
      </h3>
      <p>
        Symptoms: Drowsiness, dizziness, and dullness. Headache, especially in
        the back of the head. Fever with chills running up and down the spine.
        General weakness and trembling.
      </p>
      <p>
        Potency: 30C to 200C, as needed, typically once or twice a day during
        acute phases.
      </p>

      <h3 className="underline font-semibold mt-4">2. Belladonna</h3>
      <p>
        Symptoms: Sudden onset of high fever with red, hot skin. Throbbing
        headaches, often worse with light and noise. Delirium or confusion with
        fever. Sensitivity to touch.
      </p>
      <p>
        Potency: 30C to 200C, every few hours during acute symptoms, reducing
        frequency as improvement occurs.
      </p>

      <h3 className="underline font-semibold mt-4">3. Bryonia alba</h3>
      <p>
        Symptoms: Fever with intense thirst for large quantities of water.
        Severe, splitting headaches, worse with movement. Dry, painful cough
        with sharp chest pains.
      </p>
      <p>Potency: 30C to 200C, up to three times daily in acute stages.</p>

      <h3 className="underline font-semibold mt-4">4. Rhus toxicodendron</h3>
      <p>
        Symptoms: Fever with restlessness and aching in muscles and joints.
        Better with movement and warm applications. Stiffness and pain,
        especially in the morning or after rest.
      </p>
      <p>Potency: 30C to 200C, every few hours during acute phases.</p>

      <h3 className="underline font-semibold mt-4">
        5. Eupatorium perfoliatum
      </h3>
      <p>
        Symptoms: Severe bone and muscle pain, as if bones are breaking. Fever
        with chills, intense thirst for cold drinks. Vomiting bile and marked
        weakness.
      </p>
      <p>
        Potency: 30C to 200C, as needed, typically once or twice a day during
        acute phases.
      </p>

      <h3 className="underline font-semibold mt-4">6. Apis mellifica</h3>
      <p>
        Symptoms: Fever with marked swelling and redness of the skin. Burning,
        stinging pains, worse with heat. Symptoms improve with cold
        applications.
      </p>
      <p>Potency: 30C to 200C, every few hours during acute symptoms.</p>

      <h2 className=" underline  font-semibold mt-6">Conclusion</h2>
      <p>
        While managing West Nile Virus, it’s essential to follow medical advice
        and consider all available treatment options. Homeopathy can be a
        supportive therapy alongside conventional treatments, especially in
        symptomatic relief. Always consult with a healthcare professional or a
        qualified homeopath before starting any treatment regimen.
      </p>
    </div>
  );
};

export default WestNileVirus;
