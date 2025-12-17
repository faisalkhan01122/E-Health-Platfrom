import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const Diabetes = () => {
  return (
    <div className="text-[1rem] md:text-[1.1rem] text-gray bg-white">
      <HeroSection
        heading={"Diabetes"}
        bgImage="https://medlineplus.gov/images/Diabetes_share.jpg"
        description={
          "Is a chronic medical condition in which the body is unable to properly regulate blood sugar (glucose) levels. This can lead to various health complications if not managed effectively. There are two main types of diabetes:"
        }
      />
      <div>
        <RemedyImages
          img2="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_975_16981278236522842.png"
          img1="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2421932.jpg"
        />
      </div>
      <section className="mt-6">
        <h2 className=" underline font-bold">Types of Diabetes</h2>
        <p className=" pt-4">
          <strong>Type 1 Diabetes:</strong> An autoimmune condition where the
          immune system attacks the insulin-producing beta cells in the
          pancreas. This type requires insulin therapy for management.
        </p>
        <p className="pt-4 ">
          <strong>Type 2 Diabetes:</strong> A metabolic disorder where the body
          becomes resistant to insulin or doesn’t produce enough insulin.
          Lifestyle changes and medications are often used for management.
        </p>
      </section>

      <section className="mt-6">
        <h2 className=" underline font-bold">Symptoms of Diabetes</h2>
        <ul className="list-disc  pt-4 space-y-4 ml-5">
          <li>Frequent urination</li>
          <li>Excessive thirst</li>
          <li>Extreme hunger</li>
          <li>Unexplained weight loss</li>
          <li>Fatigue</li>
          <li>Blurred vision</li>
          <li>Slow-healing sores</li>
          <li>Frequent infections</li>
          <li>Numbness or tingling in hands or feet</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className=" underline font-bold">Allopathic Remedies</h2>
        <h3 className="text-md font-semibold md: pt-4">1. Insulin Therapy</h3>
        <p className="">
          Various forms of insulin (rapid-acting, short-acting,
          intermediate-acting, and long-acting).
        </p>
        <h3 className=" pt-4 font-semibold">2. Oral Medications:</h3>
        <ul className="list-disc  space-y-4 pt-4 ml-5">
          <li>Metformin</li>
          <li>Sulfonylureas (e.g., glipizide, glyburide)</li>
          <li>Meglitinides (e.g., repaglinide)</li>
          <li>Thiazolidinediones (e.g., pioglitazone)</li>
          <li>DPP-4 inhibitors (e.g., sitagliptin)</li>
          <li>GLP-1 receptor agonists (e.g., liraglutide)</li>
          <li>SGLT2 inhibitors (e.g., empagliflozin)</li>
        </ul>
        <h3 className=" font-semibold pt-4">3. Injectable Medications:</h3>
        <p className=" pt-4">
          Besides insulin, some other injectable medications include GLP-1
          receptor agonists and amylin analogs.
        </p>
      </section>

      <section className="mt-6">
        <h2 className=" underline font-bold">Herbal Remedies</h2>
        <ul className="list-disc  pt-4 space-y-4 ml-5">
          <li>Bitter Melon (Momordica charantia)</li>
          <li>Fenugreek (Trigonella foenum-graecum)</li>
          <li>Gymnema Sylvestre</li>
          <li>Berberine</li>
          <li>Aloe Vera</li>
          <li>Cinnamon</li>
          <li>Ginseng</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className=" underline font-bold">Chinese Remedies</h2>
        <ul className="list-disc  pt-4 space-y-4 ml-5">
          <li>Ginseng (Ren Shen)</li>
          <li>Astragalus (Huang Qi)</li>
          <li>Rehmannia (Di Huang)</li>
          <li>Bitter Melon (Ku Gua)</li>
          <li>Schisandra (Wu Wei Zi)</li>
          <li>Pueraria (Ge Gen)</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className=" underline font-bold">
          Homeopathic Remedies for Diabetes
        </h2>
        <ul className="list-disc space-y-4 pt-4  ml-5">
          <li>
            <span className="font-semibold"> Syzygium Jambolanum:</span> Known
            for its potential to reduce blood sugar levels.
          </li>
          <li>
            <span className="font-semibold">Phosphoric Acid:</span> For
            diabetes-related fatigue.
          </li>
          <li>
            <span className="font-semibold">Uranium Nitricum:</span> For
            excessive urination and thirst.
          </li>
          <li>
            <span className="font-semibold">Lactic Acid:</span> For nausea and
            excessive thirst.
          </li>
          <li>
            <span className="font-semibold">Argentum Met:</span> For diabetes
            with stress.
          </li>
          <li>
            <span className="font-semibold">Natrum Sulph:</span> For excessive
            thirst and dry mouth.
          </li>
          <li>
            <span className="font-semibold">Phosphorus:</span> For weight loss
            and fatigue.
          </li>
          <li>
            <span className="font-semibold">Arsenicum Album:</span> For burning
            sensations and thirst.
          </li>
          <li>
            <span className="font-semibold">Gymnema Sylvestre:</span> Supports
            insulin production.
          </li>
          <li>
            <span className="font-semibold">Cephalandra Indica:</span> Regulates
            blood sugar levels.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Helonias Dioica: </span> Abroma
            Augusta: For high blood sugar levels.
          </li>
          <li>
            {" "}
            <span className="font-semibold"></span> For fatigue and kidney
            issues.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Taraxacum Officinale: </span>{" "}
            Supports liver and kidney function.
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className=" underline  font-bold">
          Key Points for Homeopathic Treatment
        </h2>
        <ol className="list-decimal pt-4  space-y-4 ml-5">
          <li>
            <span className="font-semibold">Individualization:</span> Remedies
            are based on individual symptoms.
          </li>
          <li>
            <span className="font-semibold">Professional Guidance:</span>{" "}
            Consult a qualified homeopath.
          </li>
          <li>
            <span className="font-semibold"> Complementary Approach:</span>{" "}
            Homeopathy can complement conventional treatments.
          </li>
          <li>
            <span className="font-semibold"> Lifestyle Management:</span> Diet,
            exercise, and monitoring are essential.
          </li>
        </ol>
      </section>

      <section className="mt-6">
        <h2 className=" underline font-bold">
          Lifestyle and Dietary Recommendations
        </h2>
        <ul className="list-disc   pt-4 space-y-4 ml-5">
          <li>
            <span className="font-semibold"> Balanced Diet:</span> Emphasize
            whole grains, vegetables, fruits, and lean proteins.
          </li>
          <li>
            <span className="font-semibold">Regular Exercise:</span> Aim for at
            least 30 minutes most days.
          </li>
          <li>
            <span className="font-semibold">Hydration:</span> Drink plenty of
            water.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Diabetes;
