import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const Rabies = () => {
  return (
    <div className="text-gray text-[1rem] md:text-[1.1rem] bg-white ">
      <HeroSection
        bgImage="https://www.annapharmacy.com/wp-content/uploads/2023/08/How-Long-Does-An-Anti-Rabies-Vaccine-Provide-Immunity-In-Humans-scaled.webp"
        heading={"Rabies"}
        description={
          "Rabies is a viral disease that affects the central nervous system, causing encephalitis (inflammation of the brain). It is typically spread through the bite of an infected animal. The disease is almost always fatal once symptoms appear, so prompt medical treatment after exposure is critical."
        }
      />
      <div>
        <RemedyImages
          img2="https://static.wixstatic.com/media/372554_ac4b9b4a010945dd8eed2b1f061b6285~mv2.jpg/v1/fill/w_568,h_264,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/372554_ac4b9b4a010945dd8eed2b1f061b6285~mv2.jpg"
          img1="https://www.cdc.gov/rabies/media/images/2024/06/Rabies-Microscopy.jpg"
        />
      </div>
      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
        1. Allopathic (Conventional Medicine) Remedies:
      </h2>
      <ol>
        <li>
          <span className="font-bold py-2">
            Post-Exposure Prophylaxis (PEP):
          </span>
          <ul>
            <li>
              <span className="font-semiboldd">
                Rabies Immunoglobulin (RIG):
              </span>{" "}
              Administered immediately after exposure to neutralize the virus at
              the site of the wound.
            </li>
            <li>
              <span className="font-semibold">Rabies Vaccine:</span> A series of
              injections given over 14 days to help the immune system develop
              protection against the virus.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Supportive Care:</span>
          <ul>
            <li>
              Intensive care to manage symptoms like seizures, agitation, and
              difficulty breathing.
            </li>
            <li>
              Antiviral medications may be used experimentally, although their
              efficacy is uncertain.
            </li>
          </ul>
        </li>
      </ol>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
        2. Herbal Remedies:
      </h2>
      <p>
        Herbal remedies are not a replacement for conventional treatment but may
        support overall health. Some herbs believed to have antiviral properties
        include:
      </p>
      <ul>
        <li>
          <span className="font-semibold">Echinacea:</span> Boosts the immune
          system.
        </li>
        <li>
          <span className="font-semibold">Lemon Balm:</span> Contains compounds
          that may inhibit virus replication.
        </li>
        <li>
          <span className="font-semibold">Garlic:</span> Known for its antiviral
          and immune-boosting properties.
        </li>
        <li>
          <span className="font-semibold">Astragalus:</span> Enhances immune
          function.
        </li>
      </ul>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
        3. Chinese Medicine:
      </h2>
      <p>
        Traditional Chinese Medicine (TCM) approaches include herbal
        formulations and acupuncture. Common herbs used in TCM for viral
        infections include:
      </p>
      <ul>
        <li>
          <span className="font-semibold">Huang Qi (Astragalus):</span> Boosts
          the immune system.
        </li>
        <li>
          <span className="font-semibold">Ban Lan Gen (Isatis Root):</span>{" "}
          Antiviral properties.
        </li>
        <li>
          <span className="font-semibold">Lian Qiao (Forsythia):</span> Used for
          its antiviral and anti-inflammatory effects.
        </li>
        <li>
          <span className="font-semibold">Da Qing Ye (Isatis Leaf):</span> Often
          used for its antiviral properties.
        </li>
      </ul>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
        4. Homeopathic Remedies:
      </h2>
      <p>
        Homeopathy is an alternative medicine system that uses highly diluted
        substances to trigger the body’s natural healing processes. The
        following are detailed homeopathic remedies often mentioned for rabies,
        focusing on their symptoms and materia medica descriptions.
      </p>
      <ol>
        <li>
          <div className="font-semibold underline py-2">Belladonna:</div>
          <p>
            <span className="font-semibold">Symptoms:</span> High fever,
            delirium, sensitivity to light, fear of water (hydrophobia), violent
            outbursts.
          </p>
          <p>
            <span className="font-semibold">Materia Medica:</span> Used when
            symptoms come on suddenly and violently.
          </p>
          <p>
            <span className="font-semibold">Potency:</span> Typically used in
            30C or 200C potency.
          </p>
        </li>
        <li>
          <div className="font-semibold underline py-2">Hyoscyamus:</div>
          <p>
            <span className="font-semibold">Symptoms:</span> Nervous system
            disorders, restlessness, delirium, muscular twitching, fear of
            water.
          </p>
          <p>
            <span className="font-semibold">Materia Medica:</span> Indicated for
            marked restlessness with jerking and twitching of muscles.
          </p>
          <p>
            <span className="font-semibold">Potency:</span> Commonly used in 30C
            or 200C potency.
          </p>
        </li>
        <li>
          <div className="font-semibold underline py-2">Stramonium:</div>
          <p>
            <span className="font-semibold">Symptoms:</span> Violent symptoms,
            intense fear, aggression, hallucinations, fear of water.
          </p>
          <p>
            <span className="font-semibold">Materia Medica:</span> Used for
            patients with intense terror and violent delirium.
          </p>
          <p>
            <span className="font-semibold">Potency:</span> Often used in 30C
            potency.
          </p>
        </li>
        <li>
          <h1 className="font-semibold underline py-2">
            Lyssin (Hydrophobinum):
          </h1>
          <p>
            <span className="font-semibold">Symptoms:</span> Fear of water,
            difficulty swallowing, spasms, aggression, anxiety.
          </p>
          <p>
            <span className="font-semibold">Materia Medica:</span> Derived from
            the saliva of a rabid dog, used for symptoms resembling rabies.
          </p>
          <p>
            <span className="font-semibold">Potency:</span> Frequently used in
            30C, 200C, or 1M potency.
          </p>
        </li>
        <li>
          <h1 className="font-semibold underline py-2">Cantharis:</h1>
          <p>
            <span className="font-semibold">Symptoms:</span> Burning pains,
            spasms, difficulty swallowing, excessive thirst with aversion to
            water.
          </p>
          <p>
            <span className="font-semibold">Materia Medica:</span> Indicated for
            intense burning pains.
          </p>
          <p>
            <span className="font-semibold">Potency:</span> Typically used in
            30C or 200C potency.
          </p>
        </li>
        <li>
          <h1 className="font-semibold underline py-2">Nux Vomica:</h1>
          <p>
            <span className="font-semibold">Symptoms:</span> Irritability,
            sensitivity to stimuli, spasms, and convulsions.
          </p>
          <p>
            <span className="font-semibold">Materia Medica:</span> Used for
            highly irritable patients who react spanly to stimuli.
          </p>
          <p>
            <span className="font-semibold">Potency:</span> Commonly used in 30C
            potency.
          </p>
        </li>
      </ol>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
        5. Conclusion:
      </h2>
      <p>
        Rabies is a serious and often fatal disease that requires immediate
        medical attention. While allopathic medicine provides the most effective
        treatment through PEP, complementary therapies such as herbal remedies,
        Chinese medicine, and homeopathic remedies can support overall health
        and recovery. Homeopathic remedies should be chosen based on the
        specific symptoms and characteristics of the patient, with potencies
        adjusted accordingly. Always consult a healthcare professional before
        starting any treatment, especially for serious conditions like rabies.
      </p>
    </div>
  );
};

export default Rabies;
