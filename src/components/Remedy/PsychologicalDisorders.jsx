import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const PsychologicalDisorders = () => {
  return (
    <div className="text-[1rem] md:text-[1.1rem] text-gray bg-white">
      <HeroSection
        bgImage="https://images.thequint.com/thequint%2F2023-01%2F3b080752-7789-458b-a101-756f2a8ca860%2Fhero_image__1_.jpg"
        heading={"Psychological Disorders"}
        description={
          "Also known as mental health disorders, these conditions affect a person’s thinking, feeling, mood, and behavior. They can impact daily functioning and may require medical and therapeutic intervention. Below, you’ll find an overview of several common psychological disorders, their symptoms, and various treatment options, including allopathic (conventional medicine), herbal, Chinese, and homeopathic remedies."
        }
      />
      <div>
        <RemedyImages
          img2="https://allpsych.com/wp-content/uploads/2022/07/DSM-5-TR.png"
          img1="https://psychologyfanatic.com/wp-content/uploads/2024/01/Psychological-Disorders.-Psychology-Fanatic-article-feature-image.webp"
        />
      </div>
      <div className="mt-8">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold">
          Common Psychological Disorders and Symptoms
        </h2>
        <ul className="  pt-4 space-y-4 ml-6 mt-4">
          <li>
            <strong>1. Depression:</strong>
            <p>
              <span className="font-semibold"> Symptoms:</span> Persistent
              sadness, loss of interest, changes in appetite, sleep
              disturbances, fatigue, feelings of worthlessness, difficulty
              concentrating, thoughts of death or suicide.
            </p>
          </li>
          <li>
            <strong>2. Anxiety Disorders:</strong>
            <p>
              <span className="font-semibold"> Symptoms:</span> Excessive worry,
              restlessness, fatigue, difficulty concentrating, irritability,
              muscle tension, sleep disturbances, panic attacks.
            </p>
          </li>
          <li>
            <strong>3. Bipolar Disorder:</strong>
            <p>
              <span className="font-semibold"> Symptoms:</span> Extreme mood
              swings, including emotional highs (mania) and lows (depression).
            </p>
          </li>
          <li>
            <strong>4. Schizophrenia:</strong>
            <p>
              <span className="font-semibold"> Symptoms:</span> Delusions,
              hallucinations, disorganized thinking, abnormal motor behavior,
              reduced emotional expression.
            </p>
          </li>
          <li>
            <strong>5. Obsessive-Compulsive Disorder (OCD):</strong>
            <p>
              <span className="font-semibold"> Symptoms:</span> Obsessions
              (repeated unwanted thoughts) and compulsions (repetitive
              behaviors).
            </p>
          </li>
          <li>
            <strong>6. Post-Traumatic Stress Disorder (PTSD):</strong>
            <p>
              <span className="font-semibold"> Symptoms:</span> Flashbacks,
              nightmares, severe anxiety, uncontrollable thoughts about a
              traumatic event.
            </p>
          </li>
        </ul>

        <h2 className="mt-8 text-[1rem] md:text-[1.2rem] underline font-bold">
          Treatment Options
        </h2>
        <h3 className="mt-4 text-xl underline font-semibold">
          Allopathic (Conventional Medicine)
        </h3>
        <ul className="list-disc  space-y-4 pt-4 ml-6 mt-2">
          <li>
            <strong>Depression:</strong> Medications: Antidepressants (SSRIs,
            SNRIs, tricyclics). Therapies: CBT, psychotherapy, ECT for severe
            cases.
          </li>
          <li>
            <strong>Anxiety Disorders:</strong> Medications: Benzodiazepines,
            SSRIs, beta-blockers. Therapies: CBT, exposure therapy, relaxation
            techniques.
          </li>
          <li>
            <strong>Bipolar Disorder:</strong> Medications: Mood stabilizers,
            antipsychotics, antidepressants. Therapies: Psychotherapy,
            psychoeducation, lifestyle management.
          </li>
          <li>
            <strong>Schizophrenia:</strong> Medications: Antipsychotics.
            Therapies: CBT, social skills training, family therapy.
          </li>
          <li>
            <strong>OCD:</strong> Medications: SSRIs, clomipramine. Therapies:
            CBT (especially exposure and response prevention).
          </li>
          <li>
            <strong>PTSD:</strong> Medications: SSRIs, Prazosin for nightmares.
            Therapies: CBT, EMDR.
          </li>
        </ul>

        <h3 className="mt-4 text-[1rem] md:text-[1.2rem] underline font-bold">
          Herbal Remedies
        </h3>
        <ul className="list-disc  pt-4 space-y-4 ml-6 mt-2">
          <li>
            <strong>Depression:</strong> St. John’s Wort, Saffron.
          </li>
          <li>
            <strong>Anxiety Disorders:</strong> Kava, Valerian Root.
          </li>
          <li>
            <strong>Bipolar Disorder:</strong> Omega-3 Fatty Acids.
          </li>
          <li>
            <strong>Schizophrenia:</strong> Ginkgo Biloba.
          </li>
          <li>
            <strong>OCD:</strong> Inositol.
          </li>
          <li>
            <strong>PTSD:</strong> Ashwagandha.
          </li>
        </ul>

        <h3 className="mt-4 text-[1rem] md:text-[1.2rem] underline font-bold">
          Chinese Medicine
        </h3>
        <ul className="list-disc  pt-4 space-y-4 ml-6 mt-2">
          <li>
            <strong>Depression:</strong> Acupuncture, Herbal formulas (e.g.,
            Xiao Yao San).
          </li>
          <li>
            <strong>Anxiety Disorders:</strong> Acupuncture, Herbal formulas
            (e.g., An Shen Bu Xin Wan).
          </li>
          <li>
            <strong>Bipolar Disorder:</strong> Herbal formulas (e.g., Chai Hu
            Jia Long Gu Mu Li Tang).
          </li>
          <li>
            <strong>Schizophrenia:</strong> Herbal formulas (e.g., Chai Hu Jia
            Long Gu Mu Li Tang).
          </li>
          <li>
            <strong>OCD:</strong> Acupuncture, Herbal formulas (e.g., Gan Mai Da
            Zao Tang).
          </li>
          <li>
            <strong>PTSD:</strong> Acupuncture, Herbal formulas (e.g., Gan Mai
            Da Zao Tang).
          </li>
        </ul>

        <h3 className="mt-4 text-[1rem] md:text-[1.2rem] underline font-bold">
          Homeopathic Remedies
        </h3>
        <ul className="list-disc pt-4  space-y-4 ml-6 mt-2">
          <li>
            Aconitum napellus, Argentum nitricum, Arsenicum album, Aurum
            metallicum, Calcarea carbonica, Ignatia amara, Lachesis mutus,
            Natrum muriaticum, Pulsatilla, Sepia, Staphysagria, Stramonium,
            Hyoscyamus niger.
          </li>
        </ul>

        <p className="mt-4 ">
          It’s important to consult with healthcare professionals before
          starting any treatment, as effectiveness and safety can vary. The
          information provided is for educational purposes and not a substitute
          for professional medical advice.
        </p>
      </div>
    </div>
  );
};

export default PsychologicalDisorders;
