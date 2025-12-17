import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const Gastroenteritis = () => {
  return (
    <div className="text-gray bg-white text-[1rem] md:text-[1.1rem]">
      <HeroSection
        heading={"Gastroenteritis"}
        description={
          "Gastroenteritis is an inflammation of the stomach and intestines, typically resulting from a bacterial, viral, or parasitic infection. Common symptoms include: (a) Diarrhea (b) Vomiting (c) Abdominal pain and cramps (d) Fever (e) Dehydration"
        }
        bgImage="https://osmose-it.s3.amazonaws.com/-JOJkN4qQVusIRxJVCUuIj7kQAeVPThS/_.jpg"
      />
      <div>
        <RemedyImages
          img2="https://ausmed-images.s3.ap-southeast-2.amazonaws.com/ausmed.com/ausmed-articles/20200317_cover_v2.jpg"
          img1="https://api.parashospitals.com/uploads/2020/06/Gastroenteritis.jpg"
        />
      </div>
      {/* Allopathic Remedies Section */}
      <section className="px-4 py-6 ">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Allopathic Remedies for Gastroenteritis
        </h2>
        <ul className="list-disc space-y-4 pt-4 ml-6">
          <li>
            <strong>Oral Rehydration Solutions (ORS):</strong> Essential to
            prevent dehydration.
          </li>
          <li>
            <strong>Loperamide:</strong> Reduces diarrhea.
          </li>
          <li>
            <strong>Bismuth Subsalicylate:</strong> Also used for nausea and
            abdominal discomfort.
          </li>
          <li>
            <strong>Ondansetron:</strong> Reduces nausea and vomiting.
          </li>
          <li>
            <strong>Metoclopramide:</strong> Aids in gastric emptying and
            reduces nausea.
          </li>
          <li>
            <strong>Antibiotics:</strong> Prescribed if bacterial causes are
            confirmed (e.g., Ciprofloxacin, Azithromycin).
          </li>
        </ul>
      </section>

      {/* Herbal Remedies Section */}
      <section className="px-4 py-6 ">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Herbal Remedies for Gastroenteritis
        </h2>
        <ul className="list-disc space-y-4 pt-4 ml-6">
          <li>
            <strong>Ginger:</strong> Reduces nausea and vomiting.
          </li>
          <li>
            <strong>Peppermint:</strong> Helps with abdominal pain and spasms.
          </li>
          <li>
            <strong>Chamomile:</strong> Soothing and anti-inflammatory to the
            digestive tract.
          </li>
          <li>
            <strong>Turmeric:</strong> Known for its anti-inflammatory
            properties.
          </li>
          <li>
            <strong>Fennel Seeds:</strong> Help reduce gas and bloating.
          </li>
        </ul>
      </section>

      {/* Chinese Herbal Remedies Section */}
      <section className="px-4 py-6">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Chinese Herbal Remedies for Gastroenteritis
        </h2>
        <ul className="list-disc space-y-4 pt-4 ml-6">
          <li>
            <strong>Huo Xiang Zheng Qi San:</strong> Used for digestive upset,
            including nausea and diarrhea.
          </li>
          <li>
            <strong>Ban Xia Xie Xin Tang:</strong> Balances the stomach and
            intestines, reduces bloating and discomfort.
          </li>
          <li>
            <strong>Ge Gen Tang:</strong> Relieves symptoms like fever,
            headache, and muscle aches often associated with gastroenteritis.
          </li>
        </ul>
      </section>

      {/* Homeopathic Remedies Section */}
      <section className="px-4 py-6">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Homeopathic Remedies for Gastroenteritis
        </h2>
        <ul className="list-disc space-y-4 pt-4 ml-6">
          <li>
            <strong>Arsenicum Album:</strong> Used for severe diarrhea,
            vomiting, burning pain in the stomach, and restlessness.
            <ul className="list-disc space-y-4 pt-4 ml-6 mt-2">
              <li>
                <span className="font-semibold">Recommended Potency:</span> 6C,
                30C, or 200C. 30C can be taken every 1-2 hours during acute
                symptoms.
              </li>
            </ul>
          </li>
          <li>
            <strong>Veratrum Album:</strong> Suitable for violent vomiting and
            diarrhea, cold sweats, and collapse.
            <ul className="list-disc space-y-4 pt-4 ml-6 mt-2">
              <li>
                <span className="font-semibold">Recommended Potency:</span> 6C,
                30C, or 200C. 30C can be taken every 1-2 hours during acute
                phases.
              </li>
            </ul>
          </li>
          <li>
            <strong>Nux Vomica:</strong> Best for nausea, constant urge to
            vomit, and abdominal cramps.
            <ul className="list-disc space-y-4 pt-4 ml-6 mt-2">
              <li>
                <span className="font-semibold">Recommended Potency:</span> 6C,
                30C, or 200C. 30C taken every 2-4 hours as needed.
              </li>
            </ul>
          </li>
          <li>
            <strong>Podophyllum:</strong> Used for profuse, watery diarrhea,
            especially in the morning.
            <ul className="list-disc space-y-4 pt-4 ml-6 mt-2">
              <li>
                <span className="font-semibold">Recommended Potency:</span> 6C,
                30C, or 200C. 30C taken every 2-3 hours during acute episodes.
              </li>
            </ul>
          </li>
          <li>
            <strong>China Officinalis (Cinchona):</strong> Useful for diarrhea
            with bloating, gas, and weakness due to fluid loss.
            <ul className="list-disc space-y-4 pt-4 ml-6 mt-2">
              <li>
                <span className="font-semibold">Recommended Potency:</span> 6C,
                30C, or 200C. 30C taken every 2-4 hours during acute symptoms.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Conclusion Section */}
      <section className="px-4 py-6">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Conclusion
        </h2>
        <p className="space-y-4 ">
          In managing gastroenteritis, it is essential to stay hydrated and seek
          medical attention if symptoms are severe or persistent. Allopathic,
          herbal, Chinese, and homeopathic remedies can offer relief, but the
          choice of treatment should be tailored to the individual’s specific
          symptoms and overall condition. Homeopathic remedies, in particular,
          require a detailed understanding of the patient’s symptoms and
          characteristics to select the most appropriate remedy and potency.
        </p>
      </section>
    </div>
  );
};

export default Gastroenteritis;
