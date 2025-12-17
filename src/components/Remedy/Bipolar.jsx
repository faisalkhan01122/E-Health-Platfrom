import React from "react";
import HeroSection from "./HeroSection";

const Bipolar = () => {
  return (
    <>
      <div>
        <HeroSection
          bgImage="https://ehealth.com.pk/images/bipolar-disorder-1860.png"
          heading="Bipolar Disorder"
          description="Bipolar Disorder, formerly known as manic-depressive illness, is a mental health condition characterized by extreme mood swings that include emotional highs (mania or hypomania) and lows (depression)."
        />
      </div>
      <div className="text-[1rem] md:text-[1.1rem]  overflow-hidden p-4 md:p-6 text-gray bg-white">
        <h2 className=" font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Symptoms:
        </h2>

        <h3 className="font-semibold">1. Manic/Hypomanic Episode:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Increased energy, activity, and restlessness</li>
          <li>Excessively high, overly good, euphoric mood</li>
          <li>Extreme irritability</li>
          <li>
            Racing thoughts and talking very fast, jumping from one idea to
            another
          </li>
          <li>Distractibility, lack of concentration</li>
          <li>Little need for sleep</li>
          <li>Unrealistic beliefs in one’s abilities and powers</li>
          <li>Poor judgment, spending sprees, increased sexual drive</li>
          <li>
            Abuse of drugs, particularly cocaine, alcohol, and sleeping
            medications
          </li>
          <li>Provocative, intrusive, or aggressive behavior</li>
          <li>Denial that anything is wrong</li>
        </ul>

        <h3 className="font-semibold">2. Depressive Episode:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Lasting sad, anxious, or empty mood</li>
          <li>Feelings of hopelessness or pessimism</li>
          <li>Feelings of guilt, worthlessness, or helplessness</li>
          <li>
            Loss of interest or pleasure in activities once enjoyed, including
            sex
          </li>
          <li>Decreased energy, fatigue, being “slowed down”</li>
          <li>Difficulty concentrating, remembering, making decisions</li>
          <li>Restlessness or irritability</li>
          <li>Sleeping too much, or can’t sleep</li>
          <li>Change in appetite and/or unintended weight loss or gain</li>
          <li>
            Chronic pain or other persistent bodily symptoms not caused by
            physical illness or injury
          </li>
          <li>Thoughts of death or suicide, suicide attempts</li>
        </ul>

        <h2 className=" font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Treatments for Bipolar Disorder:
        </h2>

        <h3 className="font-semibold">Allopathic Remedies:</h3>
        <ol className="list-decimal pl-5 mb-4">
          <li>
            <strong>Mood Stabilizers:</strong>
            <ul>
              <li>Lithium</li>
              <li>Valproate (Depakote)</li>
              <li>Lamotrigine (Lamictal)</li>
              <li>Carbamazepine (Tegretol)</li>
            </ul>
          </li>
          <li>
            <strong>Antipsychotics:</strong>
            <ul>
              <li>Olanzapine (Zyprexa)</li>
              <li>Risperidone (Risperdal)</li>
              <li>Quetiapine (Seroquel)</li>
              <li>Aripiprazole (Abilify)</li>
              <li>Lurasidone (Latuda)</li>
            </ul>
          </li>
          <li>
            <strong>Antidepressants:</strong>
            <p>Often combined with mood stabilizers to prevent mania:</p>
            <ul>
              <li>Fluoxetine (Prozac)</li>
              <li>Sertraline (Zoloft)</li>
              <li>Paroxetine (Paxil)</li>
              <li>Bupropion (Wellbutrin)</li>
            </ul>
          </li>
          <li>
            <strong>Antidepressant-Antipsychotic:</strong>
            <p>Fluoxetine-olanzapine combination (Symbyax)</p>
          </li>
          <li>
            <strong>Benzodiazepines:</strong>
            <p>
              For short-term use for agitation, anxiety, and sleep problems:
            </p>
            <ul>
              <li>Lorazepam (Ativan)</li>
              <li>Clonazepam (Klonopin)</li>
            </ul>
          </li>
        </ol>

        <h3 className="font-semibold">Herbal Remedies:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>
            St. John’s Wort: Used for mild to moderate depression; caution
            advised as it can interact with medications.
          </li>
          <li>Valerian Root: Often used for sleep disturbances and anxiety.</li>
          <li>
            Omega-3 Fatty Acids: Found in fish oil; may help with mood
            stabilization.
          </li>
          <li>Rhodiola Rosea: Used for depression and fatigue.</li>
          <li>
            Ashwagandha: Known for its adaptogenic properties, helping to manage
            stress.
          </li>
        </ul>

        <h3 className="font-semibold">Chinese Medicine Remedies:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Chai Hu Shu Gan San: For mood regulation and stress relief.</li>
          <li>
            Gan Mai Da Zao Tang: Often used for anxiety, depression, and
            insomnia.
          </li>
          <li>Xiao Yao San: Helps with emotional imbalances and stress.</li>
          <li>
            Tian Wang Bu Xin Dan: For insomnia and palpitations due to anxiety.
          </li>
          <li>
            He Huan Pi: Used for calming the mind and treating depression.
          </li>
        </ul>

        <h2 className=" font-bold mb-4 border-b-2 border-gray-300 inline-block pb-2">
          Homeopathic Remedies:
        </h2>
        <p>
          Homeopathy offers personalized remedies based on a comprehensive
          understanding of an individual’s symptoms, both mental and physical.
          Here are some commonly used remedies for bipolar disorder:
        </p>

        <ol className="list-decimal pl-5 mb-4">
          <li>
            <strong>Arsenicum Album:</strong>
            <p>
              Symptoms: Anxiety, restlessness, and fear of being alone. Great
              prostration with rapid sinking of vital force. Mental
              restlessness, can be calm in demeanor but internally anxious.
            </p>
            <p>Potencies: 6C, 30C, 200C, 1M</p>
            <p>
              Recommended for: Patients who are very meticulous, have intense
              fears, and feel cold.
            </p>
            <p>
              Dosage: Typically taken as 3-5 pellets under the tongue, 1-3 times
              a day depending on the severity.
            </p>
          </li>
          <li>
            <strong>Natrum Muriaticum:</strong>
            <p>
              Symptoms: Depression with a sense of hopelessness. Difficulty in
              expressing emotions, introverted nature. Craving for salt and
              salty foods. Aversion to company, prefers to be alone to cry.
            </p>
            <p>Potencies: 6X, 30C, 200C</p>
            <p>
              Recommended for: Individuals who have experienced grief,
              disappointment, or betrayal.
            </p>
            <p>
              Dosage: Generally, 3-5 pellets under the tongue, once or twice
              daily.
            </p>
          </li>
          <li>
            <strong>Lachesis:</strong>
            <p>
              Symptoms: Intense jealousy, suspicion, and talkativeness.
              Worsening of symptoms upon waking. Feelings of constriction,
              particularly around the throat. Intense, passionate nature with
              rapid mood swings.
            </p>
            <p>Potencies: 30C, 200C, 1M</p>
            <p>
              Recommended for: People who are highly passionate and emotional,
              prone to jealousy and suspicion.
            </p>
            <p>
              Dosage: Typically taken 1-3 times daily, depending on severity.
            </p>
          </li>
          <li>
            <strong>Aurum Metallicum:</strong>
            <p>
              Symptoms: Deep depression, suicidal thoughts. Sense of
              worthlessness and failure. Better by music, open air, and during
              summer. Extreme despair, especially at night.
            </p>
            <p>Potencies: 6C, 30C, 200C, 1M</p>
            <p>
              Recommended for: Those with severe depression and suicidal
              tendencies.
            </p>
            <p>Dosage: Usually taken as 3-5 pellets, once or twice daily.</p>
          </li>
          <li>
            <strong>Sepia:</strong>
            <p>
              Symptoms: Apathy and indifference towards loved ones. Irritability
              and aversion to company. Feeling of a weight in the pelvis. Better
              from vigorous exercise, worse before menstruation.
            </p>
            <p>Potencies: 6C, 30C, 200C, 1M</p>
            <p>
              Recommended for: Women, especially those who feel overwhelmed by
              their domestic duties.
            </p>
            <p>Dosage: Typically, 3-5 pellets, once or twice daily.</p>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Bipolar;
