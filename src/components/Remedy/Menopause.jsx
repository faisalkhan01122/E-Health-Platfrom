import React from "react";
import HeroSection from "./HeroSection";

const Menopause = () => {
  return (
    <>
      <div className="text-[1rem] md:text-[1.1rem] text-gray bg-white">
        <HeroSection
          bgImage="https://ehealth.com.pk/images/menopause-4189.png"
          heading="Menopause"
          description="Menopause is a natural biological process marking the end of a woman’s menstrual cycles and fertility. It typically occurs in women between the ages of 45 and 55, though it can happen earlier or later. Menopause is officially diagnosed after a woman has gone 12 months without a menstrual period."
        />
        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Symptoms of Menopause:
          </h2>
          <ol className="list-decimal list-inside ml-4">
            <li>Hot flashes</li>
            <li>Night sweats</li>
            <li>Mood changes</li>
            <li>Sleep problems</li>
            <li>Weight gain and slowed metabolism</li>
            <li>Thinning hair and dry skin</li>
            <li>Loss of breast fullness</li>
            <li>Vaginal dryness</li>
            <li>Loss of libido</li>
          </ol>
        </div>

        <div className=" overflow-hidden p-4 md:p-6 text-gray bg-white">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Remedies for Menopause:
          </h2>
          <p className="mb-2">
            <strong>1. Allopathic Remedies:</strong>
          </p>
          <ul className="list-disc ml-4">
            <li>
              Hormone Replacement Therapy (HRT): Estrogen and progesterone to
              relieve symptoms.
            </li>
            <li>Estrogen therapy: For women who have had a hysterectomy.</li>
            <li>Combined HRT: For women who have not had a hysterectomy.</li>
            <li>
              Antidepressants: Such as SSRIs to help with mood swings and hot
              flashes.
            </li>
            <li>Gabapentin: For hot flashes and night sweats.</li>
            <li>Clonidine: To reduce hot flashes.</li>
            <li>
              Vaginal Estrogen: Creams, tablets, or rings to alleviate vaginal
              dryness.
            </li>
            <li>
              Osteoporosis Medications: Bisphosphonates, raloxifene to prevent
              bone loss.
            </li>
          </ul>
          <p className="mb-2">
            <strong>2. Herbal Remedies:</strong>
          </p>
          <ul className="list-disc ml-4">
            <li>Black Cohosh: For hot flashes and night sweats.</li>
            <li>
              Red Clover: Contains phytoestrogens that may help with symptoms.
            </li>
            <li>
              Dong Quai: Used in traditional Chinese medicine for balancing
              hormones.
            </li>
            <li>Evening Primrose Oil: May help with hot flashes.</li>
            <li>Ginseng: For mood swings and sleep disturbances.</li>
            <li>St. John’s Wort: For mood swings and depression.</li>
            <li>
              Soy Isoflavones: Contains phytoestrogens which may help with
              symptoms.
            </li>
          </ul>
          <p className="mb-2">
            <strong>3. Chinese Remedies:</strong>
          </p>
          <ul className="list-disc ml-4">
            <li>Chinese Angelica (Dang Gui): For balancing hormones.</li>
            <li>Licorice Root: For its estrogen-like properties.</li>
            <li>White Peony Root: To support the balance of hormones.</li>
            <li>
              Chinese Yam (Shan Yao): For nourishing the kidneys and balancing
              hormones.
            </li>
            <li>Poria (Fu Ling): For calming and reducing stress.</li>
            <li>Rehmannia (Di Huang): For supporting adrenal function.</li>
          </ul>
          <p className="mb-2">
            <strong>4. Homeopathic Remedies:</strong>
          </p>
          <p className="mb-2">
            Homeopathic remedies are selected based on the totality of symptoms,
            and the remedies are prescribed in various potencies, often ranging
            from 6C to 200C, depending on the individual’s symptoms and overall
            health.
          </p>
          <p className="mb-2">
            Here are detailed descriptions of common homeopathic remedies used
            for menopause:
          </p>
          <ul className="list-disc ml-4">
            <li>
              <strong>Sepia</strong>: Feeling of bearing down in the pelvic
              region, hot flashes with weakness and sweating, irritability,
              indifference to family, desire to be alone. (Potency: 30C to 200C)
            </li>
            <li>
              <strong>Lachesis</strong>: Hot flashes, especially at night,
              intolerance to tight clothing, left-sided complaints,
              palpitations, jealousy, loquacity. (Potency: 30C to 200C)
            </li>
            <li>
              <strong>Pulsatilla</strong>: Hot flashes alternating with chills,
              mood swings, weepiness, desire for open air, aversion to fatty
              foods. (Potency: 30C to 200C)
            </li>
            <li>
              <strong>Sulphur</strong>: Hot flashes with sweating, heat in the
              top of the head, burning feet, irritability, forgetfulness,
              aversion to bathing. (Potency: 30C to 200C)
            </li>
            <li>
              <strong>Calcarea Carbonica</strong>: Profuse sweating, especially
              on the head, cold feet, anxiety about health, easy fatigue, weight
              gain. (Potency: 30C to 200C)
            </li>
            <li>
              <strong>Belladonna</strong>: Sudden and intense hot flashes,
              throbbing headaches, red face, irritability, sensitivity to light.
              (Potency: 30C to 200C)
            </li>
            <li>
              <strong>Natrum Muriaticum</strong>: Hot flashes with chilliness,
              emotional vulnerability, headaches, dryness of mucous membranes.
              (Potency: 30C to 200C)
            </li>
            <li>
              <strong>Glonoinum</strong>: Intense hot flashes with a feeling of
              pressure in the head, dizziness, palpitations, and pulsating
              headaches. (Potency: 30C to 200C)
            </li>
          </ul>
          <p className="mt-4">
            <strong>Summary:</strong> Menopause can be managed with a variety of
            remedies, from allopathic hormone therapies to natural and
            alternative treatments. Homeopathy offers personalized treatment
            based on an individual’s specific symptoms and overall health. It’s
            important to consult with healthcare providers to determine the most
            appropriate treatment options.
          </p>
        </div>
      </div>
    </>
  );
};

export default Menopause;
