import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const RockyMountain = () => {
  return (
    <div className=" bg-white text-[1rem] md:text-[1.1rem] text-gray">
      <HeroSection
        bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1l5mSd2Ja0AX6uv816GzvvYB9TSDygD-DIQ&s"
        heading={"Rocky Mountain Spotted Fever (RMSF)"}
        description={
          "Rocky Mountain spotted fever (RMSF) is a bacterial infection caused by *Rickettsia rickettsii*, which is transmitted to humans through the bite of infected ticks, primarily the American dog tick, Rocky Mountain wood tick, and the brown dog tick. It can cause severe illness and even be fatal if not treated promptly."
        }
      />
      <div>
        <RemedyImages
          img2="https://directorsblog.health.azdhs.gov/wp-content/uploads/2014/07/rocky-mountain1.jpg"
          img1="https://www.verywellhealth.com/thmb/lYeyDmt8d41ucwdq0MkLxun5v3g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-453122023-95cad09a90d144e98e6ca21249f21622.jpg"
        />
      </div>
      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold my-4">
        Symptoms
      </h2>
      <ul>
        <li>
          <strong>Sudden onset of fever</strong>
        </li>
        <li>
          <strong>Severe headache</strong>
        </li>
        <li>
          <strong>Rash</strong> (typically starts a few days after the fever)
        </li>
        <li>
          <strong>Muscle pain</strong>
        </li>
        <li>
          <strong>Nausea and vomiting</strong>
        </li>
        <li>
          <strong>Abdominal pain</strong>
        </li>
        <li>
          <strong>Joint pain</strong>
        </li>
        <li>
          <strong>Conjunctivitis</strong> (red eyes)
        </li>
      </ul>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold my-4">
        Allopathic (Conventional) Treatments
      </h2>
      <ol>
        <li>
          <strong>Doxycycline</strong>: The first-line treatment for adults and
          children. It is typically given for 7-14 days.
        </li>
        <li>
          <strong>Chloramphenicol</strong>: An alternative for those who cannot
          take doxycycline, though it is less commonly used due to potential
          side effects.
        </li>
      </ol>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold my-4">
        Herbal Remedies
      </h2>
      <p>
        While herbal remedies are not a substitute for medical treatment, they
        can be used to support overall health:
      </p>
      <ul>
        <li>
          <strong>Echinacea</strong>: Boosts the immune system.
        </li>
        <li>
          <strong>Garlic</strong>: Has antibacterial properties.
        </li>
        <li>
          <strong>Ginger</strong>: Reduces inflammation and nausea.
        </li>
        <li>
          <strong>Turmeric</strong>: Anti-inflammatory and antioxidant
          properties.
        </li>
        <li>
          <strong>Andrographis</strong>: Supports immune function and has
          antibacterial properties.
        </li>
      </ul>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold my-4">
        Chinese Medicine Remedies
      </h2>
      <p>
        Traditional Chinese Medicine (TCM) may use a combination of herbal
        formulations, acupuncture, and dietary changes to support the body’s
        immune response:
      </p>
      <ul>
        <li>
          <strong>Ban Lan Gen</strong> (Isatis root): Known for its antiviral
          and antibacterial properties.
        </li>
        <li>
          <strong>Huang Qi</strong> (Astragalus): Immune-boosting properties.
        </li>
        <li>
          <strong>Lian Qiao</strong> (Forsythia fruit): Helps clear heat and
          toxins.
        </li>
        <li>
          <strong>Yin Qiao San</strong>: A formula used at the onset of febrile
          illnesses.
        </li>
      </ul>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold my-4">
        Homeopathic Remedies
      </h2>
      <p>
        Homeopathy treats the person as a whole, considering physical,
        emotional, and mental symptoms. Here are detailed descriptions of
        homeopathic remedies for RMSF based on symptoms:
      </p>
      <ol>
        <li className="py-2">
          <strong>Arsenicum Album</strong>:
          <ul>
            <li>
              <span className="font-semibold">Symptoms:</span> High fever,
              restlessness, anxiety, severe prostration, intense thirst for
              small sips of water, burning pains relieved by heat.
            </li>
            <li>
              <span className="font-semibold">Potency:</span> 30C to 200C,
              repeated every few hours during acute symptoms.
            </li>
          </ul>
        </li>
        <li className="py-2">
          <strong>Belladonna</strong>:
          <ul>
            <li>
              <span className="font-semibold">Symptoms:</span> Sudden onset of
              high fever, flushed face, dilated pupils, throbbing headache,
              sensitivity to light and noise, dry and hot skin, no thirst.
            </li>
            <li>
              <span className="font-semibold">Potency:</span> 30C to 200C, taken
              every few hours in acute stages.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Bryonia</span>:
          <ul>
            <li>
              <span className="font-semibold">Symptoms:</span> Slow onset of
              fever, intense thirst for large quantities of water, severe
              headache, muscle and joint pain worsened by movement, dry and
              painful cough.
            </li>
            <li>
              <span className="font-semibold">Potency:</span> 30C to 200C, taken
              every few hours during acute symptoms.
            </li>
          </ul>
        </li>
        <li className="py-2">
          <strong>Eupatorium Perfoliatum</strong>:
          <ul>
            <li>
              <span className="font-semibold">Symptoms:</span> Severe bone and
              muscle pain (“as if bones were broken”), fever with chills, great
              thirst, headache, nausea and vomiting.
            </li>
            <li>
              <span className="font-semibold">Potency:</span> 30C to 200C, taken
              every few hours during acute symptoms.
            </li>
          </ul>
        </li>
        <li className="py-2">
          <strong>Gelsemium</strong>:
          <ul>
            <li>
              <span className="font-semibold">Symptoms:</span> Slow onset of
              symptoms, great weakness, drowsiness, trembling, heaviness of
              eyelids, dull and aching headache, thirstlessness, fever with
              chills running up and down the spine.
            </li>
            <li>
              <span className="font-semibold">Potency:</span> 30C to 200C, taken
              every few hours during acute symptoms.
            </li>
          </ul>
        </li>
        <li className="py-2">
          <strong>Rhus Toxicodendron</strong>:
          <ul>
            <li>
              <span className="font-semibold">Symptoms:</span> Restlessness,
              fever with chills, aching muscles and joints relieved by motion,
              red and swollen rash, intense itching.
            </li>
            <li>
              <span className="font-semibold">Potency:</span> 30C to 200C, taken
              every few hours during acute symptoms.
            </li>
          </ul>
        </li>
        <li className="py-2">
          <strong>Pulsatilla</strong>:
          <ul>
            <li>
              <span className="font-semibold">Symptoms:</span> Changeable
              symptoms, no thirst, fever worse in the evening, weepy and
              emotional state, symptoms ameliorated by open air.
            </li>
            <li>
              <span className="font-semibold">Potency:</span> 30C to 200C, taken
              every few hours during acute symptoms.
            </li>
          </ul>
        </li>
      </ol>
      <p className="py-2">
        <strong>Recommended Potencies:</strong> In acute conditions like RMSF,
        homeopathic remedies are typically administered in potencies ranging
        from 30C to 200C. The frequency of dosing can vary from every hour
        during severe symptoms to three times a day as symptoms improve. It is
        crucial to consult with a qualified homeopath for personalized treatment
        and dosage recommendations.
      </p>

      <p className="py-2">
        <strong>Note:</strong> Homeopathic remedies should complement, not
        replace, conventional medical treatment. Immediate medical attention is
        essential for RMSF due to its potentially severe complications.
      </p>

      <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold my-4">
        Conclusion
      </h2>
      <p className="py-2">
        Rocky Mountain spotted fever is a serious illness requiring prompt
        medical treatment. Allopathic treatments like doxycycline are the
        primary mode of care. Herbal and Chinese medicine can support the body’s
        immune response, and homeopathy offers individualized treatment options
        focusing on the totality of symptoms. Always consult with healthcare
        professionals for the best treatment approach.
      </p>
    </div>
  );
};

export default RockyMountain;
