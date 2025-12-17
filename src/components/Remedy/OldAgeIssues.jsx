import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const OldAgeIssues = () => {
  return (
    <div className="text-gray bg-white text-[1rem] md:text-[1.1rem]">
      {/* Hero Section */}
      <HeroSection
        heading={"Old Age Issues"}
        description={
          "As individuals age, they often encounter various health problems, including arthritis, osteoporosis, cardiovascular issues, diabetes, cognitive decline, sensory impairments, digestive issues, mental health concerns, respiratory issues, urinary problems, and sleep disorders."
        }
        bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkImQL1PLShVCSvAq3yLLwnX80VvI-OBDMpcFeN7J4FmFxtLTVf_CptjzlGVl2O8lfXjM&usqp=CAU"
      />

      {/* Remedy Images Section */}
      <div>
        <RemedyImages
          img2="https://cdn.cheapism.com/images/iStock-924108718.2e16d0ba.fill-1440x605.jpg"
          img1="https://as2.ftcdn.net/v2/jpg/05/95/81/05/1000_F_595810553_IUzB8dXhO7LEKWuyJIEQqFPEKIfYFtOQ.jpg"
        />
      </div>

      {/* Common Issues in Old Age */}
      <section className="mt-4">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold my-4">
          Common Issues in Old Age
        </h2>
        <p className="mb-4 ">
          Old age brings about numerous health challenges that impact daily
          life. Below are some common issues that people may experience as they
          age:
        </p>
        <ol className="list-decimal  ml-5 space-y-2">
          <li>
            <strong>Arthritis and Joint Pain:</strong> Inflammation of the
            joints leading to pain and stiffness.
          </li>
          <li>
            <strong>Osteoporosis:</strong> Decreased bone density, increasing
            the risk of fractures.
          </li>
          <li>
            <strong>Cardiovascular Issues:</strong> Conditions such as
            hypertension, atherosclerosis, and heart diseases.
          </li>
          <li>
            <strong>Diabetes:</strong> Impaired insulin function leading to high
            blood sugar levels.
          </li>
          <li>
            <strong>Cognitive Decline:</strong> Disorders such as Alzheimer’s
            disease, dementia, and general memory loss.
          </li>
          <li>
            <strong>Sensory Impairments:</strong> Loss of vision and hearing.
          </li>
          <li>
            <strong>Digestive Issues:</strong> Problems like constipation,
            indigestion, and decreased appetite.
          </li>
          <li>
            <strong>Mental Health:</strong> Issues such as depression, anxiety,
            and loneliness.
          </li>
          <li>
            <strong>Respiratory Issues:</strong> Conditions like chronic
            obstructive pulmonary disease (COPD) and asthma.
          </li>
          <li>
            <strong>Urinary Problems:</strong> Incontinence and urinary tract
            infections.
          </li>
          <li>
            <strong>Sleep Disorders:</strong> Conditions like insomnia and
            disrupted sleep patterns.
          </li>
        </ol>
      </section>

      {/* Remedies Section */}
      <section className="mt-6 ">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold my-4">
          Remedies for Old Age Issues
        </h2>

        <p className="mb-4 ">
          There are various treatments available to manage common old-age health
          issues, ranging from allopathic medicine to herbal, Chinese, and
          homeopathic remedies.
        </p>

        {/* Allopathic Remedies */}
        <h3 className="text-[1rem] md:text-[1.2rem] underline font-bold my-4">
          Allopathic Remedies
        </h3>
        <ul className="list-disc ml-5  space-y-2">
          <li>
            <strong>Arthritis and Joint Pain:</strong> NSAIDs (e.g., Ibuprofen,
            Naproxen), corticosteroids, DMARDs (e.g., Methotrexate)
          </li>
          <li>
            <strong>Osteoporosis:</strong> Bisphosphonates (e.g., Alendronate),
            calcium and vitamin D supplements
          </li>
          <li>
            <strong>Cardiovascular Issues:</strong> Antihypertensives (e.g.,
            Amlodipine), statins (e.g., Atorvastatin), anticoagulants (e.g.,
            Warfarin)
          </li>
          <li>
            <strong>Diabetes:</strong> Insulin, Metformin
          </li>
          <li>
            <strong>Cognitive Decline:</strong> Acetylcholinesterase inhibitors
            (e.g., Donepezil), NMDA receptor antagonists (e.g., Memantine)
          </li>
          <li>
            <strong>Sensory Impairments:</strong> Eyeglasses, hearing aids,
            cataract surgery
          </li>
          <li>
            <strong>Digestive Issues:</strong> Laxatives, antacids, prokinetics
          </li>
          <li>
            <strong>Mental Health:</strong> Antidepressants (e.g., Sertraline),
            anxiolytics (e.g., Lorazepam), psychotherapy
          </li>
          <li>
            <strong>Respiratory Issues:</strong> Bronchodilators (e.g.,
            Albuterol), inhaled corticosteroids, oxygen therapy
          </li>
          <li>
            <strong>Urinary Problems:</strong> Anticholinergics (e.g.,
            Oxybutynin), antibiotics for infections, pelvic floor exercises
          </li>
          <li>
            <strong>Sleep Disorders:</strong> Hypnotics (e.g., Zolpidem),
            melatonin, cognitive-behavioral therapy for insomnia (CBT-I)
          </li>
        </ul>

        {/* Herbal Remedies */}
        <h3 className="text-[1rem] md:text-[1.2rem] underline font-bold my-4">
          Herbal Remedies
        </h3>
        <ul className="list-disc  ml-5 space-y-2">
          <li>
            <strong>Arthritis and Joint Pain:</strong> Turmeric, ginger,
            Boswellia
          </li>
          <li>
            <strong>Osteoporosis:</strong> Red clover, horsetail, nettle
          </li>
          <li>
            <strong>Cardiovascular Issues:</strong> Hawthorn, garlic, CoQ10
          </li>
          <li>
            <strong>Diabetes:</strong> Bitter melon, fenugreek, cinnamon
          </li>
          <li>
            <strong>Cognitive Decline:</strong> Ginkgo biloba, Bacopa monnieri,
            sage
          </li>
          <li>
            <strong>Sensory Impairments:</strong> Bilberry, eyebright, ginkgo
            biloba
          </li>
          <li>
            <strong>Digestive Issues:</strong> Peppermint, fennel, ginger
          </li>
          <li>
            <strong>Mental Health:</strong> St. John’s wort, valerian, lavender
          </li>
          <li>
            <strong>Respiratory Issues:</strong> Eucalyptus, thyme, licorice
            root
          </li>
          <li>
            <strong>Urinary Problems:</strong> Cranberry, dandelion, uva ursi
          </li>
          <li>
            <strong>Sleep Disorders:</strong> Chamomile, valerian root,
            passionflower
          </li>
        </ul>

        {/* Chinese Remedies */}
        <h3 className="text-[1rem] md:text-[1.2rem] underline font-bold my-4">
          Chinese Remedies
        </h3>
        <ul className="list-disc ml-5  space-y-2">
          <li>
            <strong>Arthritis and Joint Pain:</strong> Du Huo Ji Sheng Tang, Gui
            Zhi Shao Yao Zhi Mu Tang
          </li>
          <li>
            <strong>Osteoporosis:</strong> Liu Wei Di Huang Wan, Du Zhong
          </li>
          <li>
            <strong>Cardiovascular Issues:</strong> Dan Shen, Huang Qi, Ginkgo
            biloba
          </li>
          <li>
            <strong>Diabetes:</strong> Tian Hua Fen, Huang Lian, Gou Qi Zi
          </li>
          <li>
            <strong>Cognitive Decline:</strong> Ginkgo biloba, Shi Chang Pu,
            Yuan Zhi
          </li>
          <li>
            <strong>Sensory Impairments:</strong> Gou Qi Zi, Ju Hua
          </li>
          <li>
            <strong>Digestive Issues:</strong> Chen Pi, Bai Zhu, Ban Xia
          </li>
          <li>
            <strong>Mental Health:</strong> Suan Zao Ren, Bai Zi Ren, He Huan Pi
          </li>
          <li>
            <strong>Respiratory Issues:</strong> Bai Guo, Xing Ren, Jie Geng
          </li>
          <li>
            <strong>Urinary Problems:</strong> Fu Ling, Ze Xie, Che Qian Zi
          </li>
          <li>
            <strong>Sleep Disorders:</strong> Suan Zao Ren Tang, Tian Wang Bu
            Xin Dan
          </li>
        </ul>

        {/* Homeopathic Remedies */}
        <h3 className="text-[1rem] md:text-[1.2rem] underline font-bold my-4">
          Homeopathic Remedies
        </h3>
        <ul className="list-disc ml-5  space-y-2">
          <li>
            <strong>Arthritis and Joint Pain:</strong> Rhus toxicodendron,
            Bryonia, Causticum
          </li>
          <li>
            <strong>Osteoporosis:</strong> Calcarea carbonica, Silicea
          </li>
          <li>
            <strong>Cardiovascular Issues:</strong> Crataegus oxyacantha,
            Aconitum napellus
          </li>
          <li>
            <strong>Diabetes:</strong> Phosphoric acid, Syzygium jambolanum
          </li>
          <li>
            <strong>Cognitive Decline:</strong> Baryta carbonica, Lycopodium
          </li>
          <li>
            <strong>Sensory Impairments:</strong> Calcarea phosphorica,
            Phosphorus
          </li>
          <li>
            <strong>Digestive Issues:</strong> Nux vomica, Lycopodium
          </li>
          <li>
            <strong>Mental Health:</strong> Ignatia, Natrum muriaticum
          </li>
          <li>
            <strong>Respiratory Issues:</strong> Antimonium tartaricum, Bryonia
          </li>
          <li>
            <strong>Urinary Problems:</strong> Cantharis, Apis mellifica
          </li>
          <li>
            <strong>Sleep Disorders:</strong> Coffea cruda, Nux vomica
          </li>
        </ul>
      </section>
    </div>
  );
};

export default OldAgeIssues;
