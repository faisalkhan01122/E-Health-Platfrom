import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const KidneyDisease = () => {
  return (
    <div className="text-gray bg-white text-[1rem] md:text-[1.1rem]">
      <HeroSection
        bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8GXqzBbdAiOZKtwCq3x4LS2Eq63KD58Qtw&s"
        heading={"Chronic Kidney Disease (CKD)"}
        description={
          "Chronic Kidney Disease (CKD) is a long-term condition characterized by a gradual loss of kidney function over time. The kidneys filter waste and excess fluids from the blood, which are then excreted in the urine. When kidney function declines, harmful levels of waste can accumulate in the body, leading to various health issues."
        }
      />
      <div>
        <RemedyImages
          img2="https://www.nuhospitals.com/blog/wp-content/uploads/2023/03/kidney-care.jpg"
          img1="https://www.kidney.org/sites/default/files/styles/original/public/stagesofckd_hero_mobile_v1.jpg?itok=TLTDuAel"
        />
      </div>
      {/* Symptoms of CKD */}
      <div className="p-6 ">
        <h2 className="text-[1rem] md:text-[1.2rem] underline  font-bold mb-4">
          Symptoms of CKD
        </h2>

        {/* Early Stages */}
        <h3 className=" font-semibold mb-2">1. Early Stages</h3>
        <ul className="list-disc space-y-4 pt-4  list-inside ml-4 mb-4">
          <li>Fatigue</li>
          <li>Poor appetite</li>
          <li>Nausea</li>
          <li>Insomnia</li>
          <li>Dry, itchy skin</li>
          <li>Frequent urination, especially at night</li>
        </ul>

        {/* Advanced Stages */}
        <h3 className=" font-semibold mb-2">2. Advanced Stages</h3>
        <ul className="list-disc  space-y-4 pt-4 list-inside ml-4 mb-4">
          <li>Swelling in the feet and ankles (edema)</li>
          <li>Persistent itching</li>
          <li>Muscle cramps</li>
          <li>Shortness of breath (due to fluid buildup in the lungs)</li>
          <li>
            High blood pressure (hypertension) that’s difficult to control
          </li>
          <li>
            Chest pain (if fluid builds up around the lining of the heart)
          </li>
          <li>Vomiting</li>
          <li>Weight loss</li>
        </ul>

        {/* Allopathic Remedies */}
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Allopathic Remedies
        </h2>
        <h3 className=" font-semibold mb-2">1. Medications</h3>
        <ul className="list-disc  space-y-4 pt-4 list-inside ml-4 mb-4">
          <li>
            <span className="font-semibold">ACE inhibitors: </span> Ramipril,
            Enalapril
          </li>
          <li>
            <span className="font-semibold"> ARBs:</span> Losartan, Valsartan
          </li>
          <li>
            <span className="font-semibold">Diuretics:</span> Furosemide,
            Torsemide
          </li>
          <li>
            <span className="font-semibold">Statins:</span> Atorvastatin,
            Rosuvastatin
          </li>
          <li>
            <span className="font-semibold">ESAs:</span> Epoetin alfa,
            Darbepoetin alfa
          </li>
          <li>
            <span className="font-semibold">Phosphate binders:</span> Sevelamer,
            Calcium acetate
          </li>
          <li>
            <span className="font-semibold">Vitamin D supplements:</span>{" "}
            Calcitriol, Cholecalciferol
          </li>
        </ul>

        <h3 className=" font-semibold mb-2">2. Dialysis</h3>
        <ul className="list-disc  space-y-4 pt-4 list-inside ml-4 mb-4">
          <li>Hemodialysis</li>
          <li>Peritoneal dialysis</li>
        </ul>

        <h3 className=" font-semibold mb-2">3. Kidney Transplant</h3>
        <p className="ml-4  mb-4">
          Surgical procedure to replace the damaged kidney with a healthy one
          from a donor.
        </p>

        {/* Herbal Remedies */}
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Herbal Remedies
        </h2>
        <ul className="list-disc  space-y-4 pt-4 list-inside ml-4 mb-4">
          <li>
            <span className="font-semibold">Astragalus:</span> Supports kidney
            function and reduces proteinuria.
          </li>
          <li>
            {" "}
            <span className="font-semibold"> Dandelion root:</span>
            Acts as a natural diuretic, aiding in the removal of waste and
            excess fluids.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Nettle leaf:</span>
            Helps reduce inflammation and supports kidney health.
          </li>
          <li>
            <span className="font-semibold">Ginger: </span> Improves digestion
            and kidney function.
          </li>
          <li>
            {" "}
            <span className="font-semibold"> Turmeric:</span>
            Reduces inflammation and protects against kidney damage.
          </li>
        </ul>

        {/* Chinese Remedies */}
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Chinese Remedies
        </h2>
        <ul className="list-disc  space-y-4 pt-4 list-inside ml-4 mb-4">
          <li>
            <span className="font-semibold"> Cordyceps:</span> Used to improve
            kidney function and overall energy levels.
          </li>
          <li>
            {" "}
            <span className="font-semibold"> Rehmannia:</span>
            Commonly used in traditional Chinese medicine to support kidney
            health.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Ginseng:</span> Boosts energy and
            supports kidney function.
          </li>
          <li>
            {" "}
            <span className="font-semibold"> Rhubarb:</span>
            Helps detoxify the kidneys and improve their function.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Licorice root: </span> Supports
            adrenal and kidney health.
          </li>
        </ul>

        {/* Homeopathic Remedies for CKD */}
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Homeopathic Remedies for CKD
        </h2>

        <p className="mb-4 ">
          Homeopathy offers various remedies for the treatment of CKD, aiming to
          improve the patient’s overall condition and slow the progression of
          the disease. Here are some commonly used homeopathic remedies along
          with their indications:
        </p>

        <h3 className=" font-semibold mb-2">1. Apis Mellifica</h3>
        <p className="ml-4  mb-4">
          <span className="font-semibold"> Symptoms:</span> Swelling of face and
          extremities, urinary problems, burning and stinging pains, scanty and
          dark urine.
          <br />
          <span className="font-semibold"> Indications:</span> Useful in
          nephritis and nephrotic syndrome.
        </p>

        <h3 className=" font-semibold mb-2">2. Arsenicum Album</h3>
        <p className="ml-4  mb-4">
          <span className="font-semibold"> Symptoms:</span> Anxiety,
          restlessness, intense thirst, burning pains, dry mouth, cold
          extremities.
          <br />
          <span className="font-semibold"> Indications:</span> Chronic renal
          failure with general weakness and edema.
        </p>

        <h3 className=" font-semibold mb-2">3. Berberis Vulgaris</h3>
        <p className="ml-4  mb-4">
          <span className="font-semibold"> Symptoms:</span> Radiating pain from
          the kidney to bladder, frequent urge to urinate, cloudy or turbid
          urine.
          <br />
          <span className="font-semibold"> Indications:</span> Kidney stones,
          renal colic, and urinary tract infections.
        </p>

        {/* Add other homeopathic remedies similarly */}

        {/* Management and Prevention Tips */}
        <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4">
          Management and Prevention Tips
        </h2>
        <ul className="list-disc  space-y-4 pt-4 list-inside ml-4 mb-4">
          <li>
            Maintain a balanced diet low in sodium, potassium, and phosphorus.
          </li>
          <li>Control blood pressure and blood sugar levels.</li>
          <li>Regular exercise.</li>
          <li>Avoid smoking and excessive alcohol consumption.</li>
          <li>Regular monitoring of kidney function if at risk.</li>
        </ul>

        <p className=" mb-4">
          Always consult a healthcare provider before starting any treatment to
          ensure it's appropriate for your specific condition.
        </p>
      </div>
    </div>
  );
};

export default KidneyDisease;
