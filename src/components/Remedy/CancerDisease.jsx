import React from "react";
import HeroSection from "../../components/Remedy/HeroSection";
import RemedyImages from "./RemedyImages";

const CancerDisease = () => {
  return (
    <div>
      <HeroSection
        bgImage="https://news.yale.edu/sites/default/files/styles/featured_media/public/ynews-cancer-healthy_137381816.jpg?itok=HN73dW20&c=a75e254fe1da31f2732f6b0d7bce1413"
        heading={"Cancer"}
        description={
          "Cancer is a broad term for a group of diseases characterized by the uncontrolled growth and spread of abnormal cells. If the spread is not controlled, it can result in death. Cancer can start almost anywhere in the human body, which is made up of trillions of cells."
        }
      />
      <div className="text-gray bg-white p-6 text-[1rem] md:text-[1.1rem] ">
        {/* General Symptoms Section */}
        <div>
          <RemedyImages
            img2="https://www.sciencealert.com/images/2020-06/processed/cancer_topic_1024.jpg"
            img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftc315FxjFeerXRFSnkI24Y04wSYHBqcWOw&s"
          />
        </div>
        <section className="mb-5 ">
          <h2 className="underline  font-bold mb-4">
            General Symptoms of Cancer
          </h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>Unexplained weight loss</li>
            <li>Fatigue</li>
            <li>Fever</li>
            <li>Pain</li>
            <li>Skin changes</li>
            <li>Change in bowel or bladder function</li>
            <li>Persistent cough or trouble breathing</li>
            <li>Hoarseness</li>
            <li>Difficulty swallowing</li>
            <li>Persistent indigestion or discomfort after eating</li>
            <li>Muscle or joint pain</li>
            <li>Persistent, unexplained fevers or night sweats</li>
            <li>Lumps or areas of thickening under the skin</li>
          </ol>
        </section>

        {/* Allopathic Remedies Section */}
        <section className="mb-10">
          <h2 className="underline font-bold mb-4">
            Allopathic Remedies for Cancer
          </h2>
          <ul className="list-decimal list-inside space-y-4">
            <li>
              <strong>Surgery:</strong> Removal of the tumor and surrounding
              tissue.
            </li>
            <li>
              <strong>Chemotherapy:</strong> Use of drugs to kill cancer cells.
            </li>
            <li>
              <strong>Radiation Therapy:</strong> High-energy particles or waves
              to destroy cancer cells.
            </li>
            <li>
              <strong>Immunotherapy:</strong> Boosting the body’s natural
              defenses.
            </li>
            <li>
              <strong>Targeted Therapy:</strong> Drugs targeting specific
              molecules involved in cancer growth.
            </li>
            <li>
              <strong>Hormone Therapy:</strong> Removing/blocking hormones
              fueling cancer.
            </li>
            <li>
              <strong>Stem Cell Transplant:</strong> Replacing diseased bone
              marrow with healthy stem cells.
            </li>
          </ul>
        </section>

        {/* Herbal Remedies Section */}
        <section className="mb-10">
          <h2 className="underline font-bold mb-4">
            Herbal Remedies for Cancer
          </h2>
          <ul className="list-decimal list-inside space-y-4">
            <li>
              <strong>Turmeric:</strong> Anti-inflammatory and anti-cancer
              properties.
            </li>
            <li>
              <strong>Green Tea:</strong> Contains antioxidants that may prevent
              cancer.
            </li>
            <li>
              <strong>Ginger:</strong> Anti-nausea and anti-inflammatory
              effects.
            </li>
            <li>
              <strong>Garlic:</strong> Immune-boosting properties.
            </li>
            <li>
              <strong>Aloe Vera:</strong> May have anti-cancer properties.
            </li>
            <li>
              <strong>Ginseng:</strong> Boosts immune system and improves
              quality of life.
            </li>
            <li>
              <strong>Milk Thistle:</strong> Supports liver health.
            </li>
            <li>
              <strong>Ashwagandha:</strong> Reduces stress and boosts immunity.
            </li>
          </ul>
        </section>

        {/* Traditional Chinese Medicine Remedies Section */}
        <section className="mb-10">
          <h2 className="underline font-bold mb-4">
            Traditional Chinese Medicine (TCM) Remedies for Cancer
          </h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Acupuncture:</strong> Alleviates pain and other symptoms.
            </li>
            <li>
              <strong>Herbal Medicine:</strong> Includes herbs like Astragalus,
              Ginseng, and Reishi Mushroom to boost immunity and reduce cancer
              cell growth.
            </li>
            <li>
              <strong>Dietary Therapy:</strong> Focuses on foods that support
              immune function.
            </li>
            <li>
              <strong>Qi Gong & Tai Chi:</strong> Improve physical and mental
              well-being.
            </li>
          </ul>
        </section>

        {/* Homeopathic Remedies Section */}
        <section className="mb-10">
          <h2 className="underline font-bold mb-4">
            Homeopathic Remedies for Cancer
          </h2>
          <ul className="list-decimal list-inside space-y-4">
            <li>
              <strong>Conium maculatum:</strong> Hard, stony tumors,
              particularly in the breast.
            </li>
            <li>
              <strong>Carcinosin:</strong> Used for patients with a family
              history of cancer.
            </li>
            <li>
              <strong>Phytolacca:</strong> Hard, painful breast lumps and
              nodules.
            </li>
            <li>
              <strong>Arsenicum album:</strong> Severe anxiety, burning pains,
              and exhaustion.
            </li>
            <li>
              <strong>Thuja occidentalis:</strong> Warty growths and skin
              complaints.
            </li>
            <li>
              <strong>Cadmium sulphuratum:</strong> Used for chemotherapy side
              effects.
            </li>
            <li>
              <strong>Hydrastis canadensis:</strong> Cancers involving the
              mucous membranes.
            </li>
            <li>
              <strong>Symphytum officinale:</strong> Promotes healing of
              fractures and bone injuries.
            </li>
          </ul>
        </section>

        {/* Integrative Approach Section */}
        <section className="mb-10">
          <h2 className="underline font-bold mb-4">
            Integrative Approach to Cancer
          </h2>
          <p className="mb-4 text-md md:text-xl">
            An integrative approach combines conventional treatments with
            complementary therapies such as homeopathy, nutrition, acupuncture,
            and mindfulness. It addresses both the physical and psychological
            aspects of health.
          </p>
        </section>

        {/* Consultation Section */}
        <section className="mb-10">
          <h2 className="underline font-bold mb-4">
            Consultation and Monitoring
          </h2>
          <ul className="list-decimal list-inside space-y-4">
            <li>
              <strong>Professional Guidance:</strong> Always consult a licensed
              practitioner for personalized treatment.
            </li>
            <li>
              <strong>Coordination with Oncologist:</strong> Inform your
              oncologist about complementary treatments.
            </li>
            <li>
              <strong>Monitoring:</strong> Regularly monitor symptoms and adjust
              remedies as needed.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CancerDisease;
