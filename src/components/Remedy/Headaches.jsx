import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const Headaches = () => {
  return (
    <div className="text-gray bg-white text-[1rem] md:text-[1.1rem]">
      <HeroSection
        bgImage="https://domf5oio6qrcr.cloudfront.net/medialibrary/5999/bf58db0e-a495-4738-bbe6-cdb6cfb167a6.jpg"
        heading={"Headaches"}
        description={
          "Headaches are a common medical condition that most people will experience at some point in their lives. They can range from mild discomfort to severe pain and can be categorized into several types:"
        }
      />
      <div>
        <RemedyImages
          img2="https://www.scripps.org/sparkle-assets/images/headaches_web-6bd6b732448820ddf84b5cfdfad16b22.jpeg"
          img1="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2216033.jpg"
        />
      </div>
      {/* Headache Types Section */}
      <section className="px-4 py-6">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Types of Headaches
        </h2>
        <ul className="list-disc  space-y-4 pt-4 ml-6">
          <li>
            <strong>Tension Headaches:</strong> The most common type, often
            related to stress, muscle strain, or anxiety. Present as a constant,
            dull ache on both sides of the head.
          </li>
          <li>
            <strong>Migraines:</strong> Intense headaches that can be
            accompanied by nausea, vomiting, and sensitivity to light and sound.
            Typically present as a throbbing pain on one side of the head.
          </li>
          <li>
            <strong>Cluster Headaches:</strong> Severe headaches that occur in
            groups or clusters, often around one eye, and can be excruciating.
          </li>
          <li>
            <strong>Sinus Headaches:</strong> Associated with sinus infections,
            causing pain around the forehead, cheeks, and eyes.
          </li>
        </ul>
      </section>

      {/* Allopathic Remedies Section */}
      <section className="px-4 py-6 ">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Allopathic Remedies
        </h2>
        <ul className="list-disc  space-y-4 pt-4 ml-6">
          <li>
            <strong>Over-the-Counter Pain Relievers:</strong> Acetaminophen
            (Tylenol), NSAIDs (ibuprofen, aspirin).
          </li>
          <li>
            <strong>Prescription Medications:</strong>
            <ul className="list-disc  space-y-4 pt-4 ml-6">
              <li>
                <span className="font-semibold">Triptans (for migraines):</span>{" "}
                Sumatriptan, Rizatriptan.
              </li>
              <li>
                <span className="font-semibold">Ergotamines:</span> Ergotamine,
                Dihydroergotamine.
              </li>
              <li>
                <span className="font-semibold">Antidepressants:</span>{" "}
                Amitriptyline, Venlafaxine.
              </li>
              <li>
                <span className="font-semibold">Anticonvulsants:</span>{" "}
                Topiramate, Valproate.
              </li>
              <li>
                <span className="font-semibold">Beta-blockers:</span>{" "}
                Propranolol, Metoprolol.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Herbal Remedies Section */}
      <section className="px-4 py-6">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Herbal Remedies
        </h2>
        <ul className="list-disc  space-y-4 pt-4 ml-6">
          <li>
            <strong>Feverfew:</strong> Known to reduce the frequency of
            migraines.
          </li>
          <li>
            <strong>Butterbur:</strong> May prevent migraines and reduce their
            severity.
          </li>
          <li>
            <strong>Peppermint Oil:</strong> Applied topically to relieve
            tension headaches.
          </li>
          <li>
            <strong>Ginger:</strong> Can reduce migraine symptoms when taken at
            the onset.
          </li>
          <li>
            <strong>Lavender Oil:</strong> Aromatherapy or topical application
            may reduce migraine pain.
          </li>
        </ul>
      </section>

      {/* Chinese Remedies Section */}
      <section className="px-4 py-6 ">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Chinese Remedies
        </h2>
        <ul className="list-disc  space-y-4 pt-4 ml-6">
          <li>
            <strong>Acupuncture:</strong> Involves inserting thin needles into
            specific points to relieve pain and stress.
          </li>
          <li>
            <strong>Chinese Herbal Medicine:</strong>
            <ul className="list-disc  space-y-4 pt-4 ml-6">
              <li>
                {" "}
                <span className="font-semibold">
                  Bai Zhi (Angelica dahurica):
                </span>{" "}
                Used for sinus headaches.
              </li>
              <li>
                <span className="font-semibold">
                  Chuan Xiong (Ligusticum chuanxiong):
                </span>{" "}
                Often combined with other herbs for migraine relief.
              </li>
              <li>
                <span className="font-semibold">Gan Cao (Licorice Root):</span>{" "}
                Used in formulas for headache relief.
              </li>
              <li>
                <span className="font-semibold">
                  Xiao Yao San (Rambling Powder):{" "}
                </span>{" "}
                A formula for stress-related headaches.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Homeopathic Remedies Section */}
      <section className="px-4 py-6">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Homeopathic Remedies
        </h2>
        <ul className="list-disc  space-y-4 pt-4 ml-6">
          <li>
            <strong>Belladonna:</strong> Sudden onset of intense, throbbing
            headaches, often on the right side. Potency: 30C, 200C.
          </li>
          <li>
            <strong>Bryonia:</strong> Severe, splitting headaches that worsen
            with movement, typically on the left side. Potency: 6C, 30C.
          </li>
          <li>
            <strong>Natrum Muriaticum:</strong> Headaches caused by grief or
            emotional stress, described as hammering or beating. Potency: 6X,
            30C.
          </li>
          <li>
            <strong>Nux Vomica:</strong> Headaches from overindulgence in food
            or alcohol. Potency: 6C, 30C.
          </li>
          <li>
            <strong>Gelsemium:</strong> Dull, heavy headaches that begin at the
            back of the head. Potency: 6C, 30C.
          </li>
          <li>
            <strong>Spigelia:</strong> Intense, stabbing headaches on the left
            side, aggravated by motion. Potency: 30C.
          </li>
          <li>
            <strong>Iris Versicolor:</strong> Migraines with visual disturbances
            and nausea. Potency: 30C.
          </li>
          <li>
            <strong>Sanguinaria:</strong> Right-sided headaches starting in the
            neck. Potency: 30C.
          </li>
          <li>
            <strong>Pulsatilla:</strong> Headaches that shift location, often
            hormonal. Potency: 6C, 30C.
          </li>
        </ul>
      </section>

      {/* Conclusion Section */}
      <section className="px-4 py-6">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Conclusion
        </h2>
        <p className=" space-y-4 ">
          Each approach to treating headaches offers different solutions, from
          conventional allopathic treatments to alternative and complementary
          therapies. The choice of treatment should be tailored to the
          individual’s specific symptoms, preferences, and overall health
          condition. For homeopathic treatments, detailed symptom profiles and
          individualized remedies are essential for effective treatment.
        </p>
      </section>
    </div>
  );
};

export default Headaches;
