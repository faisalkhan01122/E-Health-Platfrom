import React from "react";
import HeroSection from "./HeroSection";

const Denguefever = () => {
  return (
    <>
      <div>
        <HeroSection
          bgImage="https://ehealth.com.pk/images/dengue-fever-3884.png"
          heading="Dengue fever"
          description="Dengue Fever is a mosquito-borne viral infection caused by the dengue virus. It is transmitted primarily by Aedes mosquitoes, particularly Aedes aegypti. Symptoms typically begin 4-10 days after infection and can last for 2-7 days."
        />
      </div>

      <div className="overflow-hidden p-4 md:p-6 text-gray bg-white">
        {/* Symptoms */}
        <h2 className="text-[1rem] md:text-[1.1rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Symptoms of dengue fever include:
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>High fever</li>
          <li>Severe headache</li>
          <li>Pain behind the eyes</li>
          <li>Severe joint and muscle pain</li>
          <li>Fatigue</li>
          <li>Nausea</li>
          <li>Vomiting</li>
          <li>Skin rash (appears 2-5 days after the onset of fever)</li>
          <li>Mild bleeding (nosebleed, gum bleeding, easy bruising)</li>
        </ul>

        {/* Homeopathic Remedies */}
        <h2 className="text-[1rem] md:text-[1.1rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Homeopathic Remedies for Dengue Fever
        </h2>
        <p>
          Homeopathy focuses on individual symptoms and aims to stimulate the
          body’s self-healing mechanism. Here are some detailed homeopathic
          remedies commonly used for dengue fever:
        </p>

        {/* Eupatorium Perfoliatum */}
        <h3 className="text-[1rem] md:text-[1.1rem] font-semibold mt-4">
          1. Eupatorium Perfoliatum (Boneset)
        </h3>
        <p>
          <strong>Symptoms:</strong> Severe muscle and joint pains, high fever,
          headache, pain in bones.
        </p>
        <p>
          <strong>Potency:</strong> 30C, 200C
        </p>
        <p>
          <strong>Materia Medica:</strong> Known for its use in flu-like
          symptoms with deep aching in bones and soreness. Patients feel better
          after perspiring and worse in cold air.
        </p>

        {/* Bryonia Alba */}
        <h3 className="text-[1rem] md:text-[1.1rem] font-semibold mt-4">
          2. Bryonia Alba
        </h3>
        <p>
          <strong>Symptoms:</strong> Severe headache, dry mouth, great thirst,
          dry cough, body aches that are worse with movement.
        </p>
        <p>
          <strong>Potency:</strong> 30C, 200C
        </p>
        <p>
          <strong>Materia Medica:</strong> Indicated for dry, painful coughs,
          sharp pains, and excessive thirst for large quantities of cold water.
        </p>

        {/* Gelsemium */}
        <h3 className="text-[1rem] md:text-[1.1rem] font-semibold mt-4">
          3. Gelsemium
        </h3>
        <p>
          <strong>Symptoms:</strong> Fever with chills, dizziness, weakness,
          trembling, headache, pain in the back and limbs.
        </p>
        <p>
          <strong>Potency:</strong> 30C, 200C
        </p>
        <p>
          <strong>Materia Medica:</strong> Suitable for cases with profound
          weakness, drowsiness, and lack of energy, often accompanied by
          headaches and heavy limbs.
        </p>

        {/* Rhus Toxicodendron */}
        <h3 className="text-[1rem] md:text-[1.1rem] font-semibold mt-4">
          4. Rhus Toxicodendron
        </h3>
        <p>
          <strong>Symptoms:</strong> Fever with restlessness, body aches, relief
          from warmth and movement.
        </p>
        <p>
          <strong>Potency:</strong> 30C, 200C
        </p>
        <p>
          <strong>Materia Medica:</strong> Beneficial for muscular pains, joint
          pains, and stiffness that improve with continued movement and worsen
          with rest.
        </p>

        {/* Arsenicum Album */}
        <h3 className="text-[1rem] md:text-[1.1rem] font-semibold mt-4">
          5. Arsenicum Album
        </h3>
        <p>
          <strong>Symptoms:</strong> High fever with anxiety, restlessness,
          extreme weakness, nausea, vomiting, diarrhea.
        </p>
        <p>
          <strong>Potency:</strong> 30C, 200C
        </p>
        <p>
          <strong>Materia Medica:</strong> Effective for symptoms that include
          severe restlessness, fear, and weakness, often with burning pains and
          a need for frequent sips of water.
        </p>

        {/* Belladonna */}
        <h3 className="text-[1rem] md:text-[1.1rem] font-semibold mt-4">
          6. Belladonna
        </h3>
        <p>
          <strong>Symptoms:</strong> Sudden onset of high fever, throbbing
          headache, flushed face, sensitivity to light, heat, and touch.
        </p>
        <p>
          <strong>Potency:</strong> 30C, 200C
        </p>
        <p>
          <strong>Materia Medica:</strong> Indicated for sudden and violent
          symptoms, fever with burning heat, and throbbing pain, especially when
          the skin is hot and dry.
        </p>

        {/* Phosphorus */}
        <h3 className="text-[1rem] md:text-[1.1rem] font-semibold mt-4">
          7. Phosphorus
        </h3>
        <p>
          <strong>Symptoms:</strong> Bleeding tendencies, low platelet count,
          bruising, weakness, burning pains.
        </p>
        <p>
          <strong>Potency:</strong> 30C, 200C
        </p>
        <p>
          <strong>Materia Medica:</strong> Useful for conditions with a tendency
          to bleed, weakness, and anxiety. Often indicated for haemorrhagic
          conditions.
        </p>

        {/* Dosage Information */}
        <h3 className="text-[1rem] md:text-[1.1rem] font-semibold mt-4">
          Recommended Potencies and Dosage
        </h3>
        <p>
          <strong>30C:</strong> For mild to moderate symptoms, taken 2-3 times
          daily.
        </p>
        <p>
          <strong>200C:</strong> For more severe symptoms, taken 1-2 times
          daily.
        </p>
        <p>
          <strong>Dosage:</strong> Typically, 3-5 pellets are dissolved under
          the tongue. Frequency may vary based on the severity of symptoms and
          individual response.
        </p>

        <p className="mt-4">
          It’s important to consult with a healthcare provider or a professional
          homeopath before starting any homeopathic treatment to ensure the
          right remedy and potency are selected based on individual symptoms and
          overall health condition.
        </p>
      </div>
    </>
  );
};

export default Denguefever;
