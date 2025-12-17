import React from "react";
import HeroSection from "./HeroSection";

const Yeast = () => {
  return (
    <>
      <div>
        <HeroSection
          bgImage="https://ehealth.com.pk/images/yeast-infection-8768.png"
          heading="Yeast Infection"
          description="Yeast infection, commonly referred to as candidiasis, is caused by an overgrowth of Candida, a type of fungus. The most common species is Candida albicans. Symptoms can include itching, redness, and discharge in affected areas, often the mouth (oral thrush), genital area (vaginal yeast infection), or skin folds."
        />
      </div>

      <div className="text-[1rem] md:text-[1.1rem] overflow-hidden p-4 md:p-6 text-gray bg-white">
        <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Allopathic Remedies
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Antifungal Creams and Ointments:</strong>
            <ul className="list-none pl-4">
              <li>Clotrimazole</li>
              <li>Miconazole</li>
              <li>Econazole</li>
            </ul>
          </li>
          <li>
            <strong>Oral Antifungal Medications:</strong>
            <ul className="list-none pl-4">
              <li>Fluconazole (Diflucan)</li>
              <li>Itraconazole</li>
            </ul>
          </li>
          <li>
            <strong>Vaginal Suppositories:</strong>
            <ul className="list-none pl-4">
              <li>Clotrimazole</li>
              <li>Miconazole</li>
            </ul>
          </li>
        </ul>

        <div className=" mt-8">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Herbal Remedies
          </h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Garlic:</strong> Antifungal properties, can be consumed or
              applied topically.
            </li>
            <li>
              <strong>Tea Tree Oil:</strong> Applied topically in diluted form.
            </li>
            <li>
              <strong>Coconut Oil:</strong> Antifungal properties, applied
              topically.
            </li>
            <li>
              <strong>Oregano Oil:</strong> Antifungal, can be taken orally or
              applied topically in diluted form.
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Chinese Remedies
          </h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Phellodendron (Huang Bai):</strong> Used for its
              antifungal properties.
            </li>
            <li>
              <strong>Coptis (Huang Lian):</strong> Known for its antibacterial
              and antifungal effects.
            </li>
            <li>
              <strong>Rehmannia (Di Huang):</strong> Often used in formulas for
              treating infections.
            </li>
            <li>
              <strong>Sophora Root (Ku Shen):</strong> Used for its antifungal
              and anti-inflammatory properties.
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Homeopathic Remedies
          </h2>
          <p>
            Homeopathic remedies are selected based on the principle of “like
            cures like” and tailored to the individual’s symptoms. Here are some
            commonly used remedies for yeast infections, along with detailed
            symptomatology and recommended potencies:
          </p>
          <ul className="list-disc pl-5 py-4">
            <li>
              <strong>Borax (Borax veneta):</strong>
              <div>
                <strong>Symptoms:</strong> White, thick, creamy discharge;
                burning sensation in the vaginal area; tendency to develop mouth
                ulcers; worse with menstruation; worse from downward motion.
              </div>
              <div>
                <strong>Potency:</strong> 6C to 30C, typically taken once or
                twice daily depending on severity.
              </div>
            </li>
            <li>
              <strong>Candida Albicans (Candida albicans nosode):</strong>
              <div>
                <strong>Symptoms:</strong> Used specifically when Candida
                infections are recurrent; general symptoms of yeast infection.
              </div>
              <div>
                <strong>Potency:</strong> 30C to 200C, taken once weekly or
                bi-weekly for chronic conditions.
              </div>
            </li>
            <li>
              <strong>Calcarea Carbonica (Calcium carbonate):</strong>
              <div>
                <strong>Symptoms:</strong> Sour-smelling discharge; itching and
                burning in the vulva; general weakness; craving for eggs and
                indigestible things like chalk or dirt.
              </div>
              <div>
                <strong>Potency:</strong> 6C to 30C, taken once or twice daily.
              </div>
            </li>
            <li>
              <strong>Kreosotum (Kreosote):</strong>
              <div>
                <strong>Symptoms:</strong> Offensive, acrid-smelling discharge;
                intense itching; vulvar swelling and soreness; worse from cold
                and at rest.
              </div>
              <div>
                <strong>Potency:</strong> 30C, taken once daily.
              </div>
            </li>
            <li>
              <strong>Pulsatilla (Wind flower):</strong>
              <div>
                <strong>Symptoms:</strong> Thick, creamy, yellow or greenish
                discharge; no two periods alike; worse from warm rooms; better
                in open air; changeable moods.
              </div>
              <div>
                <strong>Potency:</strong> 30C, taken once daily.
              </div>
            </li>
            <li>
              <strong>Sepia (Cuttlefish ink):</strong>
              <div>
                <strong>Symptoms:</strong> Yellow-greenish, offensive-smelling
                discharge; bearing down sensation in the pelvis; worse after
                sexual intercourse; feeling of coldness in the vaginal area.
              </div>
              <div>
                <strong>Potency:</strong> 30C to 200C, taken once daily or as
                needed.
              </div>
            </li>
            <li>
              <strong>Sulphur (Sulphur):</strong>
              <div>
                <strong>Symptoms:</strong> Itching and burning worse from
                warmth; offensive discharge; sensation of heat in the body,
                especially at night.
              </div>
              <div>
                <strong>Potency:</strong> 6C to 30C, taken once daily.
              </div>
            </li>
          </ul>
          <p>
            <strong>Recommended Approach:</strong>
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Acute Symptoms:</strong> Lower potencies (6C to 30C) are
              used more frequently (once or twice daily).
            </li>
            <li>
              <strong>Chronic/Recurrent Infections:</strong> Higher potencies
              (200C) may be used less frequently (weekly or bi-weekly).
            </li>
            <li>
              <strong>Individualization:</strong> The remedy selection should be
              based on the totality of symptoms, considering both physical and
              emotional aspects.
            </li>
          </ul>
          <p className="mt-8">
            Note: It is recommended to consult with a healthcare provider or a
            professional homeopath before starting any treatment to ensure the
            appropriate remedy and potency are selected for individual cases.
          </p>
          <p className="mt-4">
            This comprehensive approach offers a wide range of options across
            different systems of medicine, allowing for tailored treatments
            based on individual preferences and needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default Yeast;
