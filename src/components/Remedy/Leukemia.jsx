import React from "react";
import HeroSection from "./HeroSection";
import HomeopathicRemedies from "./HomeopathicRemedies";

const Leukemia = () => {
  return (
    <>
      <div>
        <HeroSection
          bgImage="https://ehealth.com.pk/images/leukemia-8404.png"
          heading="Leukemia"
          description="Leukemia is a type of cancer affecting blood and bone marrow. It originates in the bone marrow, leading to the rapid production of abnormal white blood cells. These abnormal cells crowd out normal blood cells, impairing their function."
        />

        <div className=" overflow-hidden text-[1rem] md:text-[1.1rem] p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Types of Leukemia:
          </h2>
          <ol className="list-decimal list-inside ml-4">
            <li>Acute Lymphoblastic Leukemia (ALL)</li>
            <li>Acute Myeloid Leukemia (AML)</li>
            <li>Chronic Lymphocytic Leukemia (CLL)</li>
            <li>Chronic Myeloid Leukemia (CML)</li>
          </ol>
        </div>

        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Symptoms:
          </h2>
          <ul className="list-disc list-inside ml-6">
            <li>Fatigue</li>
            <li>Frequent infections</li>
            <li>Fever or chills</li>
            <li>Easy bleeding or bruising</li>
            <li>Bone pain or tenderness</li>
            <li>Weight loss</li>
            <li>Swollen lymph nodes</li>
            <li>Petechiae (tiny red spots under the skin)</li>
          </ul>
        </div>

        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Allopathic Treatments:
          </h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 p-4">
            <img
              src="https://doctorrekha.com/wp-content/uploads/2023/12/medicines-2.png"
              alt="Medicines"
              className="w-full md:w-1/2"
            />
            <img
              src="https://www.ayurvedainstitute.co.uk/wp-content/uploads/2022/07/Difference-between-Ayurvedic-and-allopathic-treatments.jpg"
              alt="Ayurveda and Allopathic"
              className="w-full md:w-[40vw]"
            />
          </div>
        </div>

        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Chemotherapy:
          </h2>
          <p>
            Drugs such as Cytarabine, Doxorubicin, Vincristine, and Methotrexate
          </p>
        </div>

        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Targeted Therapy:
          </h2>
          <div className="flex flex-col gap-4">
            <p>
              Imatinib (Gleevec), Dasatinib (Sprycel), Nilotinib (Tasigna) for
              CML
            </p>
            <p>Rituximab (Rituxan) for CLL</p>
          </div>
        </div>

        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Radiation Therapy:
          </h2>
          <p>
            Used to kill leukemia cells or shrink an enlarged spleen or lymph
            nodes
          </p>
        </div>

        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Bone Marrow Transplant:
          </h2>
          <p>Replaces diseased bone marrow with healthy stem cells</p>
        </div>

        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Immunotherapy:
          </h2>
          <p>CAR T-cell therapy, Interferons</p>
        </div>

        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Herbal Remedies:
          </h2>
        </div>
        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Turmeric:
          </h2>
          <p>Contains curcumin, known for its anti-inflammatory properties</p>
        </div>
        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Green Tea:
          </h2>
          <p>
            Rich in antioxidants like EGCG, which may help combat cancer cells
          </p>
        </div>
        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Garlic:
          </h2>
          <p>Contains sulfur compounds that may boost immune function</p>
        </div>
        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Ginseng:
          </h2>
          <p>Enhances immune system and increases energy levels</p>
        </div>

        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Chinese Medicine:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 g-red-100 transform transition-transform duration-300 hover:scale-105">
              <h3 className="font-bold text-lg mb-2">Huang Qi (Astragalus)</h3>
              <p>Strengthens the immune system</p>
            </div>

            <div className="p-4 g-blue-100 transform transition-transform duration-300 hover:scale-105">
              <h3 className="font-bold text-lg mb-2">
                Lingzhi (Reishi Mushroom)
              </h3>
              <p>Enhances immunity and possesses anti-cancer properties</p>
            </div>

            <div className="p-4 g-green-100 transform transition-transform duration-300 hover:scale-105">
              <h3 className="font-bold text-lg mb-2">Dong Quai</h3>
              <p>Acts as a blood tonic and helps reduce fatigue</p>
            </div>

            <div className="p-4 g-orange-100 transform transition-transform duration-300 hover:scale-105">
              <h3 className="font-bold text-lg mb-2">
                Bai Hua She She Cao (Oldenlandia)
              </h3>
              <p>Known for its anti-cancer properties</p>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Homeopathic Remedies:
          </h2>
          <div className="">
            <HomeopathicRemedies />
          </div>
        </div>
      </div>
    </>
  );
};

export default Leukemia;
