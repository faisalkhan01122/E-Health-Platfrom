import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const Hyperlipidemia = () => {
  return (
    <div className=" text-gray bg-white text-[1rem] md:text-[1.1rem]">
      <HeroSection
        bgImage="https://www.sugarfit.com/assets/63182c707282527bd87872f5_high-cholesterol_2twK0P.jpg"
        heading={"Hyperlipidemia (High Cholesterol)"}
        description={
          "Hyperlipidemia refers to an abnormally high concentration of fats or lipids in the blood, including cholesterol and triglycerides. While cholesterol is essential for cellular structure and function, elevated levels can increase the risk of cardiovascular disease."
        }
      />
      <div>
        <RemedyImages
          img2="https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/494/2023/07/iStock-1495757529-1024x696.jpg"
          img1="https://www.medanta.org/storage/blogs/February2024//xFnRmGcUK66MD7SGXtB3Nsr2Njd4Bx-metac2h1dHRlcnN0b2NrXzUzMTU3MDEzMy5qcGc=-.jpg"
        />
      </div>
      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mt-6">
        Types of Cholesterol
      </h2>
      <ul className="list-disc  space-y-4 pt-4 list-inside  ">
        <li>
          <strong>Low-Density Lipoprotein (LDL) Cholesterol:</strong> Known as
          “bad” cholesterol, it can lead to the buildup of plaques in the
          arteries, increasing the risk of heart disease.
        </li>
        <li>
          <strong>High-Density Lipoprotein (HDL) Cholesterol:</strong> Often
          termed “good” cholesterol, it helps remove LDL cholesterol from the
          bloodstream, reducing heart disease risk.
        </li>
        <li>
          <strong>Triglycerides:</strong> A type of fat found in the blood, with
          high levels contributing to atherosclerosis.
        </li>
      </ul>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mt-6">
        Causes
      </h2>
      <ul className="  space-y-4 pt-4list-disc lis mt-2 mb-4">
        <li>Poor diet high in saturated and trans fats</li>
        <li>Obesity</li>
        <li>Sedentary lifestyle</li>
        <li>Smoking</li>
        <li>Genetic factors</li>
        <li>Medical conditions like diabetes and hypothyroidism</li>
      </ul>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mt-6">
        Symptoms
      </h2>
      <p className="mt-2  mb-4">
        Hyperlipidemia often presents no symptoms and is typically diagnosed
        through blood tests (lipid profile).
      </p>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mt-6">
        Allopathic Remedies
      </h2>
      <ul className="  space-y-4 pt-4 list-disc list-inside mt-2 mb-4">
        <li>
          <span className="font-semibold">Statins:</span> Atorvastatin,
          Simvastatin, Rosuvastatin
        </li>
        <li>
          <span className="font-semibold">Bile Acid Sequestrants:</span>{" "}
          Cholestyramine, Colesevelam
        </li>
        <li>
          <span className="font-semibold">Fibrates:</span> Fenofibrate,
          Gemfibrozil
        </li>
        <li>
          <span className="font-semibold">Niacin:</span> Nicotinic acid
        </li>
        <li>
          <span className="font-semibold">
            Cholesterol Absorption Inhibitors:
          </span>{" "}
          Ezetimibe
        </li>
        <li>
          <span className="font-semibold">PCSK9 Inhibitors:</span> Alirocumab,
          Evolocumab
        </li>
      </ul>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mt-6">
        Herbal Remedies
      </h2>
      <ul className="  space-y-4 pt-4 list-disc list-inside  mt-2 mb-4">
        <li>
          <span className="font-semibold">Garlic:</span> Known for reducing
          total cholesterol levels.
        </li>
        <li>
          <span className="font-semibold">Guggul: </span>An Indian herb used to
          lower LDL and triglycerides.
        </li>
        <li>
          <span className="font-semibold">Fenugreek:</span> Seeds that can
          reduce cholesterol absorption.
        </li>
        <li>
          {" "}
          <span className="font-semibold">Artichoke Leaf Extract:</span> Helps
          in lowering LDL cholesterol.
        </li>
        <li>
          <span className="font-semibold">Psyllium:</span> A source of soluble
          fiber that reduces cholesterol levels.
        </li>
      </ul>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mt-6">
        Chinese Remedies
      </h2>
      <ul className="  space-y-4 pt-4 list-disc list-inside  mt-2 mb-4">
        <li>
          {" "}
          <span className="font-semibold">Red Yeast Rice:</span> Contains
          naturally occurring statins.
        </li>
        <li>
          <span className="font-semibold">Gynostemma Pentaphyllum:</span> Known
          as “Southern Ginseng,” it can lower cholesterol.
        </li>
        <li>
          <span className="font-semibold">Dan Shen (Salvia Miltiorrhiza):</span>{" "}
          Improves blood circulation and lowers cholesterol.
        </li>
      </ul>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mt-6">
        Homeopathic Remedies
      </h2>
      <p className="mt-2  mb-4">
        Homeopathy offers a variety of remedies tailored to the individual’s
        specific symptoms and constitution. The following remedies are commonly
        used for managing high cholesterol:
      </p>

      <ul className="  space-y-4 pt-4 list-disc list-inside  mt-2 mb-4">
        <li>
          <strong>Allium Sativum:</strong> For high cholesterol with symptoms of
          high blood pressure and digestive disturbances. <em>Potency:</em> 6C
          to 30C.
        </li>
        <li>
          <strong>Aurum Metallicum:</strong> Suitable for individuals with high
          cholesterol and a tendency towards depression, palpitations, and
          anger. <em>Potency:</em> 30C to 200C.
        </li>
        <li>
          <strong>Calcarea Carbonica:</strong> For overweight individuals with
          high cholesterol who crave sweets and eggs and experience excessive
          sweating, especially on the head. <em>Potency:</em> 6C to 30C.
        </li>
        <li>
          <strong>Crataegus Oxyacantha:</strong> Used for high cholesterol with
          a focus on heart health, particularly when there is a history of heart
          disease. <em>Potency:</em> Mother tincture (Q) to 6C.
        </li>
        <li>
          <strong>Nux Vomica:</strong> For high cholesterol in individuals who
          lead a sedentary lifestyle, have a tendency to overeat, and suffer
          from digestive complaints. <em>Potency:</em> 30C to 200C.
        </li>
      </ul>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mt-6">
        Detailed Materia Medica Overview of Selected Remedies
      </h2>
      <h3 className="text-xl underline font-semibold mt-4">
        1. Allium Sativum
      </h3>
      <p className="">
        <span className="font-semibold"> Symptoms:</span> Digestive issues,
        hypertension, flatulence, and a sensation of fullness.
      </p>
      <p className="">
        <span className="font-semibold"> Recommended Potencies:</span> 6C to
        30C, taken 2-3 times daily.
      </p>

      <h3 className="text-xl underline font-semibold mt-4">
        2. Aurum Metallicum
      </h3>
      <p className="">
        <span className="font-semibold"> Symptoms:</span> Depression,
        palpitations, high blood pressure, and a sense of worthlessness.
      </p>
      <p className="">
        <span className="font-semibold"> Recommended Potencies:</span> 30C to
        200C, once daily or weekly, depending on severity.
      </p>

      <h3 className="text-xl underline font-semibold mt-4">
        3. Calcarea Carbonica
      </h3>
      <p className="">
        <span className="font-semibold"> Symptoms:</span> Overweight, craving
        for sweets and eggs, excessive sweating, especially on the head, and
        cold extremities.
      </p>
      <p className="">
        <span className="font-semibold"> Recommended Potencies:</span> 6C to
        30C, taken 2-3 times daily.
      </p>

      <h3 className="text-xl underline font-semibold mt-4">
        4. Crataegus Oxyacantha
      </h3>
      <p className="">
        <span className="font-semibold"> Symptoms:</span> Heart-related issues,
        high cholesterol, and a history of heart disease.
      </p>
      <p className="">
        <span className="font-semibold"> Recommended Potencies:</span> Mother
        tincture (Q) to 6C, 3 times daily.
      </p>

      <h3 className="text-xl underline font-semibold mt-4">5. Nux Vomica</h3>
      <p className="">
        <span className="font-semibold"> Symptoms:</span> Sedentary lifestyle,
        overeating, indigestion, irritability, and a tendency towards anger.
      </p>
      <p className="">
        <span className="font-semibold"> Recommended Potencies:</span> 30C to
        200C, once daily or weekly, depending on severity.
      </p>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mt-6">
        Summary
      </h2>
      <p className="mt-2 mb-4 ">
        While managing hyperlipidemia involves lifestyle changes such as diet
        and exercise, these various treatments, from allopathic to homeopathic
        remedies, can offer additional support. Homeopathic remedies, in
        particular, are tailored to the individual’s specific symptoms and
        constitution, providing a holistic approach to managing high
        cholesterol. Always consult with a healthcare provider before starting
        any new treatment.
      </p>
    </div>
  );
};

export default Hyperlipidemia;
