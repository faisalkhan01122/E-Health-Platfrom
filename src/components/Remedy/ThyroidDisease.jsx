import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const ThyroidDisease = () => {
  return (
    <div className="text-gray bg-white text-[1rem] md:text-[1.1rem]">
      <HeroSection
        bgImage="https://roshahealth.com/en/wp-content/uploads/2023/07/Thyroid-Gland-1180x560-1.jpg"
        heading={"Thyroid Disease"}
        description={
          "Thyroid disease refers to any dysfunction of the thyroid gland, a small, butterfly-shaped gland located at the base of the neck. The thyroid gland produces hormones that regulate metabolism, energy generation, and growth and development."
        }
      />
      <div>
        <RemedyImages
          img2="https://www.endocrine.org/-/media/endocrine/images/patient-engagement-webpage/condition-page-images/thyroid-health-and-disease/hashimotos_disease_pe_1796x943.jpg"
          img1="https://images.everydayhealth.com/images/thyroid-conditions/hypothyroidism/hypothyroidism-causes-722x406.jpg"
        />
      </div>
      <section className=" ">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-semibold mb-4">
          <span>Types of Thyroid Diseases</span>
        </h2>
        <ol>
          <li className="pt-2">
            <span className="font-semibold space-y-4">Hypothyroidism:</span> The
            thyroid gland does not produce enough thyroid hormone.
          </li>
          <li className="pt-2">
            <span className="font-semibold space-y-4">Hyperthyroidism:</span>{" "}
            The thyroid gland produces too much thyroid hormone.
          </li>
          <li className="pt-2">
            <span className="font-semibold space-y-4">Thyroid Nodules:</span>{" "}
            Lumps in the thyroid gland.
          </li>
          <li className="pt-2">
            <span className="font-semibold space-y-4">Goiter:</span> An
            enlargement of the thyroid gland.
          </li>
          <li className="pt-2">
            <span className="font-semibold space-y-4">Thyroid Cancer:</span>{" "}
            Malignant tumors of the thyroid gland.
          </li>
          <li className="pt-2">
            <span className="font-semibold space-y-4">Thyroiditis:</span>{" "}
            Inflammation of the thyroid gland.
          </li>
        </ol>
      </section>

      <section className="">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-semibold my-4">
          <span>Allopathic Remedies</span>
        </h2>

        <h3 className="pt-2 underline">
          <strong>1. Hypothyroidism:</strong>
        </h3>
        <ul>
          <li className="pt-2">
            {" "}
            <span className="font-semibold">Levothyroxine:</span> Synthroid,
            Euthyrox, Levoxyl.
          </li>
          <li className="pt-2">
            <span className="font-semibold">Liothyronine:</span> Cytomel.
          </li>
          <li className="pt-2">
            <span className="font-semibold">Natural desiccated thyroid:</span>
            Armour Thyroid.
          </li>
        </ul>

        <h3 className="pt-2 underline">
          <strong>2. Hyperthyroidism:</strong>
        </h3>
        <ul>
          <li className="pt-2">
            {" "}
            <span className="font-semibold">Methimazole:</span> Tapazole.
          </li>
          <li className="pt-2">Propylthiouracil (PTU).</li>
          <li className="pt-2">
            <span className="font-semibold">Beta-blockers:</span> Propranolol,
            Atenolol (for symptom control).
          </li>
          <li className="pt-2">Radioactive iodine therapy.</li>
          <li className="pt-2">
            <span className="font-semibold">Surgery:</span> Thyroidectomy.
          </li>
        </ul>

        <h3 className="pt-2 underline">
          <strong>3. Thyroid Cancer:</strong>
        </h3>
        <ul>
          <li className="pt-2">
            <span className="font-semibold">Surgery:</span> Thyroidectomy.
          </li>
          <li className="pt-2">Radioactive iodine therapy.</li>
          <li className="pt-2">Thyroid hormone therapy.</li>
          <li className="pt-2">External radiation therapy.</li>
          <li className="pt-2">Chemotherapy.</li>
          <li className="pt-2">
            <span className="font-semibold">Targeted therapy:</span> Sorafenib,
            Lenvatinib.
          </li>
        </ul>
      </section>

      <section className="">
        <h2 className="pt-2 underline">
          <strong>Herbal Remedies</strong>
        </h2>

        <h3 className="pt-2 underline">
          <strong>1. Hypothyroidism:</strong>
        </h3>
        <ul>
          <li className="pt-2">Ashwagandha (Withania somnifera).</li>
          <li className="pt-2">Bladderwrack (Fucus vesiculosus).</li>
          <li className="pt-2">Guggul (Commiphora mukul).</li>
          <li className="pt-2">Coleus forskohlii.</li>
          <li className="pt-2">
            Siberian ginseng (Eleutherococcus senticosus).
          </li>
        </ul>

        <h3 className="pt-2 underline">
          <strong>2. Hyperthyroidism:</strong>
        </h3>
        <ul>
          <li className="pt-2">Lemon balm (Melissa officinalis).</li>
          <li className="pt-2">Bugleweed (Lycopus virginicus).</li>
          <li className="pt-2">Motherwort (Leonurus cardiaca).</li>
          <li className="pt-2">Skullcap (Scutellaria lateriflora).</li>
        </ul>
      </section>

      <section className="">
        <h2 className="pt-2 underline">
          <strong>Chinese Remedies</strong>
        </h2>

        <h3 className="pt-2 underline">
          <strong>1. Hypothyroidism:</strong>
        </h3>
        <ul>
          <li className="pt-2">Shen Qi Wan (Kidney Qi Pill).</li>
          <li className="pt-2">You Gui Wan (Restore the Right Kidney Pill).</li>
          <li className="pt-2">Er Xian Tang (Two Immortals Decoction).</li>
        </ul>

        <h3 className="pt-2 underline">
          <strong>2. Hyperthyroidism:</strong>
        </h3>
        <ul>
          <li className="pt-2">Xia Ku Cao (Prunella vulgaris).</li>
          <li className="pt-2">Huang Qi (Astragalus membranaceus).</li>
          <li className="pt-2">Zhen Zhu Mu (Mother of Pearl).</li>
        </ul>
      </section>

      <section className="">
        <h2 className="pt-2 underline">
          <strong>Homeopathic Remedies</strong>
        </h2>

        <h3 className="pt-2 underline">
          <strong>Hypothyroidism:</strong>
        </h3>
        <ul>
          <li className="pt-2">
            <strong>Thyroidinum:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>General fatigue,
            weight gain, cold intolerance, depression, dry skin, and hair.
            Potency: 3X to 30C.
          </li>
          <li className="pt-2">
            <strong>Calcarea Carbonica:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>Overweight,
            chilly, fatigue, slow metabolism, constipation, clammy skin.
            Potency: 6X to 30C.
          </li>
          <li className="pt-2">
            <strong>Sepia:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>Hormonal
            imbalances, feeling cold, weight gain, irritability, and
            indifference. Potency: 6C to 30C.
          </li>
          <li className="pt-2">
            <strong>Lycopodium:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>Digestive issues,
            bloating, gas, irritability, and fatigue. Potency: 6C to 30C.
          </li>
          <li className="pt-2">
            <strong>Graphites:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>Dry skin,
            constipation, overweight, sensitivity to cold, and sluggishness.
            Potency: 6C to 30C.
          </li>
        </ul>

        <h3 className="pt-2 underline">
          <strong>Hyperthyroidism:</strong>
        </h3>
        <ul>
          <li className="pt-2">
            <strong>Iodum:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>Rapid weight loss,
            excessive appetite, heat intolerance, restlessness, and anxiety.
            Potency: 6C to 30C.
          </li>
          <li className="pt-2">
            <strong>Natrum Muriaticum:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>Palpitations,
            excessive sweating, nervousness, weight loss, and emotional stress.
            Potency: 6X to 30C.
          </li>
          <li className="pt-2">
            <strong>Lachesis:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>Hot flashes,
            restlessness, irritability, and sensitivity to touch. Potency: 6C to
            30C.
          </li>
          <li className="pt-2">
            <strong>Phosphorus:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>Anxiety,
            palpitations, heat intolerance, and hunger with weight loss.
            Potency: 6C to 30C.
          </li>
          <li className="pt-2">
            <strong>Spongia Tosta:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>Palpitations, dry
            cough, throat issues, and heat intolerance. Potency: 6C to 30C.
          </li>
        </ul>

        <h3 className="pt-2 underline">
          <strong>Thyroiditis:</strong>
        </h3>
        <ul>
          <li className="pt-2">
            <strong>Belladonna:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>Acute
            inflammation, heat, redness, and throbbing pain in the thyroid.
            Potency: 30C.
          </li>
          <li className="pt-2">
            <strong>Conium:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>Hard swelling of
            the thyroid, vertigo, and weakness. Potency: 6C to 30C.
          </li>
          <li className="pt-2">
            <strong>Hepar Sulphuris:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>Sensitive and
            painful swelling, cold intolerance. Potency: 6C to 30C.
          </li>
          <li className="pt-2">
            <strong>Rhus Toxicodendron:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>Swelling,
            stiffness, pain relieved by motion. Potency: 6C to 30C.
          </li>
          <li className="pt-2">
            <strong>Silicea:</strong> <br />
            <span className="font-semibold ">Symptoms: </span>Chronic
            inflammation, hard swelling, and sensitivity to cold. Potency: 6X to
            30C.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ThyroidDisease;
