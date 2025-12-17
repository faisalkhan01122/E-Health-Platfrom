import React from "react";
import HeroSection from "./HeroSection";

const Urinary = () => {
  return (
    <>
      <div>
        <HeroSection
          bgImage="https://ehealth.com.pk/images/urinary-tract-infections-uti--2420.png"
          heading="Urinary Tract Infections (UTI)"
          description="Urinary Tract Infections (UTIs) are infections that occur in any part of the urinary system, including the kidneys, ureters, bladder, and urethra. Most infections involve the lower urinary tract — the bladder and the urethra. UTIs are more common in women, but men can also get them."
        />
      </div>

      <div className=" overflow-hidden text-[1rem] md:text-[1.1rem] p-4 md:p-6 text-gray bg-white">
        {/* Allopathic Remedies */}
        <h2 className="text-[1rem] md:text-[1.2rem] font-bold mt-6 border-b-2 border-gray-300 inline-block pb-2">
          Allopathic Remedies for UTI:
        </h2>
        <ul className="list-disc pl-5 mt-4">
          <li>
            <strong>Trimethoprim/sulfamethoxazole (Bactrim, Septra):</strong>{" "}
            Commonly used for uncomplicated UTIs.
          </li>
          <li>
            <strong>Nitrofurantoin (Macrobid, Macrodantin):</strong> Often
            prescribed for bladder infections.
          </li>
          <li>
            <strong>Fosfomycin (Monurol):</strong> Used as a single-dose
            treatment for uncomplicated UTIs.
          </li>
          <li>
            <strong>Cephalexin (Keflex):</strong> A type of cephalosporin
            antibiotic.
          </li>
          <li>
            <strong>Ciprofloxacin (Cipro):</strong> Typically used for more
            complicated or recurrent UTIs.
          </li>
        </ul>

        <h3 className="text-[1rem] font-semibold mt-6">Pain Relief:</h3>
        <ul className="list-disc pl-5 mt-4">
          <li>
            <strong>Phenazopyridine (Pyridium):</strong> Provides symptomatic
            relief from the pain, burning, and discomfort caused by UTIs.
          </li>
        </ul>

        {/* Herbal Remedies */}
        <h2 className="text-[1rem] md:text-[1.2rem] font-bold mt-6 border-b-2 border-gray-300 inline-block pb-2">
          Herbal Remedies for UTI:
        </h2>
        <ul className="list-disc pl-5 mt-4">
          <li>
            <strong>Cranberry:</strong> Prevents bacteria from adhering to the
            urinary tract walls.
          </li>
          <li>
            <strong>D-mannose:</strong> Helps prevent bacteria from sticking to
            the urinary tract walls.
          </li>
          <li>
            <strong>Uva Ursi (Bearberry):</strong> Contains arbutin, an
            antiseptic.
          </li>
          <li>
            <strong>Garlic:</strong> Known for its antibacterial properties.
          </li>
          <li>
            <strong>Hibiscus:</strong> May help prevent UTIs with its
            antibacterial properties.
          </li>
          <li>
            <strong>Green Tea:</strong> Has antimicrobial properties.
          </li>
        </ul>

        {/* Chinese Remedies */}
        <h2 className="text-[1rem] md:text-[1.2rem] font-bold mt-6 border-b-2 border-gray-300 inline-block pb-2">
          Chinese Remedies for UTI:
        </h2>
        <ul className="list-disc pl-5 mt-4">
          <li>
            <strong>Ba Zheng San (Eight-Herb Powder for Rectification):</strong>{" "}
            Clears damp-heat and promotes urination.
          </li>
          <li>
            <strong>Huang Bai (Phellodendron):</strong> Antimicrobial and
            anti-inflammatory properties.
          </li>
          <li>
            <strong>Pu Gong Ying (Dandelion):</strong> Known for its ability to
            detoxify.
          </li>
          <li>
            <strong>Zhi Mu (Anemarrhena):</strong> Helps clear heat and drain
            fire.
          </li>
        </ul>

        <div className="mt-3">
          <h2 className="text-[1rem] md:text-[1.2rem] font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
            Homeopathic Remedies for UTI
          </h2>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">1. Cantharis</h3>
            <p>
              <strong>Symptoms:</strong> Intense burning and cutting pain during
              urination, frequent urge to urinate, only a few drops passed each
              time, scalding sensation before, during, and after urination,
              possibly with blood.
            </p>
            <p>
              <strong>Potency:</strong> 30C to 200C
            </p>
            <p>
              <strong>Dosage:</strong> Every few hours until symptoms improve.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">2. Apis Mellifica</h3>
            <p>
              <strong>Symptoms:</strong> Burning and stinging pain during
              urination, swollen and tender genital area, feeling of fullness in
              the bladder, scanty urine passed with a frequent urge, worse from
              heat.
            </p>
            <p>
              <strong>Potency:</strong> 30C to 200C
            </p>
            <p>
              <strong>Dosage:</strong> Every few hours until symptoms improve.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">3. Sarsaparilla</h3>
            <p>
              <strong>Symptoms:</strong> Severe pain at the end of urination,
              urine passed better while standing, gravel or sediment in urine,
              constant urging to urinate.
            </p>
            <p>
              <strong>Potency:</strong> 30C to 200C
            </p>
            <p>
              <strong>Dosage:</strong> Every few hours until symptoms improve.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">4. Staphysagria</h3>
            <p>
              <strong>Symptoms:</strong> Burning pain in the urethra during and
              after urination, sensation of a drop rolling down the passage
              after urinating, associated with suppressed emotions, especially
              anger or grief.
            </p>
            <p>
              <strong>Potency:</strong> 30C to 200C
            </p>
            <p>
              <strong>Dosage:</strong> Twice daily until improvement.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">5. Pulsatilla</h3>
            <p>
              <strong>Symptoms:</strong> Symptoms vary and change, scanty urine
              with a burning sensation, pain worse lying down and better with
              movement, more suited to gentle, mild, yielding personalities.
            </p>
            <p>
              <strong>Potency:</strong> 30C to 200C
            </p>
            <p>
              <strong>Dosage:</strong> Twice daily until improvement.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">6. Nux Vomica</h3>
            <p>
              <strong>Symptoms:</strong> Constant urging with a feeling of
              incomplete evacuation, burning pain, especially after excessive
              consumption of alcohol, coffee, or spicy foods, better with
              warmth.
            </p>
            <p>
              <strong>Potency:</strong> 30C to 200C
            </p>
            <p>
              <strong>Dosage:</strong> Twice daily until improvement.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">
              7. Mercurius Corrosivus
            </h3>
            <p>
              <strong>Symptoms:</strong> Intense burning and frequent urination,
              possibly with blood, tenesmus (feeling of incomplete urination),
              worse at night.
            </p>
            <p>
              <strong>Potency:</strong> 30C to 200C
            </p>
            <p>
              <strong>Dosage:</strong> Every few hours until symptoms improve.
            </p>
          </div>

          <h3 className="font-bold text-lg mb-2">Recommendations</h3>
          <p>
            For acute symptoms, higher potencies (e.g., 200C) may be used, and
            dosing can be more frequent. For chronic or recurring symptoms,
            lower potencies (e.g., 30C) might be used over a longer period.
          </p>
          <p>
            Always consult with a qualified homeopath for personalized
            treatment.
          </p>
        </div>

        <p className="mt-4">
          Conclusion: While various treatment options are available for UTI’s
          across different systems of medicine, it’s important to choose a
          method that best suits the individual’s needs and condition severity.
          Consultation with healthcare professionals is recommended for
          appropriate diagnosis and treatment.
        </p>
      </div>
    </>
  );
};

export default Urinary;
