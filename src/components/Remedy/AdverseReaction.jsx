import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const AdverseReaction = () => {
  return (
    <div className="text-gray bg-white text-[1rem] md:text-[1.1rem]">
      <HeroSection
        heading={"Adverse Reaction of Birth Control Pills"}
        bgImage="https://www.toplinemd.com/wp-content/uploads/2023/08/iStock-1389894090.jpg"
        description={`Birth control pills, also known as oral contraceptives, can cause various side effects, some of which may be mild and temporary, while others can be more serious. Here are the common adverse reactions:
`}
      />
      <div>
        <RemedyImages
          img2="https://medlineplus.gov/images/BirthControl_Share.jpg"
          img1="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/12/female-holding-birth-control-pack-1296-728-header.jpg?w=1155&h=1528"
        />
      </div>
      <div className=" ">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-2">
          Common Side Effects:
        </h2>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>Nausea</li>
          <li>Weight gain</li>
          <li>Breast tenderness</li>
          <li>Mood changes</li>
          <li>Spotting between periods</li>
          <li>Headaches</li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-2">
          Serious Side Effects:
        </h2>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>Blood clots</li>
          <li>High blood pressure</li>
          <li>Heart attack</li>
          <li>Stroke</li>
          <li>Liver tumors</li>
          <li>Gallbladder disease</li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-2">
          Complete Symptoms of Adverse Reactions:
        </h2>
        <h3 className=" font-semibold">1. Gastrointestinal Symptoms:</h3>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>Nausea</li>
          <li>Vomiting</li>
          <li>Bloating</li>
          <li>Abdominal cramps</li>
        </ul>

        <h3 className=" font-semibold mt-2">2. Neurological Symptoms:</h3>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>Headaches</li>
          <li>Dizziness</li>
          <li>Migraines</li>
        </ul>

        <h3 className=" font-semibold mt-2">3. Psychological Symptoms:</h3>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>Mood swings</li>
          <li>Depression</li>
          <li>Anxiety</li>
        </ul>

        <h3 className=" font-semibold mt-2">4. Dermatological Symptoms:</h3>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>Acne</li>
          <li>Skin rash</li>
        </ul>

        <h3 className=" font-semibold mt-2">5. Cardiovascular Symptoms:</h3>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>Hypertension</li>
          <li>Blood clots</li>
          <li>Increased risk of heart attack or stroke</li>
        </ul>

        <h3 className=" font-semibold mt-2">6. Reproductive Symptoms:</h3>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>Breast tenderness</li>
          <li>Irregular periods</li>
          <li>Decreased libido</li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-2">
          Allopathic Remedies for Adverse Reactions:
        </h2>
        <h4 className="font-semibold ">1. For Nausea:</h4>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            <span className="font-semibold">Antiemetics:</span> Ondansetron,
            Metoclopramide
          </li>
          <li>
            <span className="font-semibold">Antacids:</span> Ranitidine,
            Omeprazole
          </li>
        </ul>

        <h4 className="font-semibold  mt-2">2. For Headaches:</h4>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            <span className="font-semibold">Pain Relievers:</span> Ibuprofen,
            Paracetamol
          </li>
        </ul>

        <h4 className="font-semibold  mt-2">3. For Mood Changes:</h4>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            {" "}
            <span className="font-semibold">Antidepressants:</span> SSRIs like
            Fluoxetine, Sertraline
          </li>
        </ul>

        <h4 className="font-semibold  mt-2">4. For Blood Clots:</h4>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            {" "}
            <span className="font-semibold">Anticoagulants:</span> Warfarin,
            Rivaroxaban
          </li>
        </ul>

        <h4 className="font-semibold  mt-2">5. For High Blood Pressure:</h4>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            <span className="font-semibold">Antihypertensives:</span>{" "}
            Amlodipine, Losartan
          </li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-2">
          Herbal Remedies for Adverse Reactions:
        </h2>
        <h4 className="font-semibold ">1. For Nausea:</h4>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            <span className="font-semibold">Ginger:</span> Ginger tea, ginger
            supplements
          </li>
          <li>
            <span className="font-semibold">Peppermint:</span> Peppermint tea
          </li>
        </ul>

        <h4 className="font-semibold  mt-2">2. For Headaches:</h4>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            <span className="font-semibold">Feverfew: </span>Feverfew
            supplements
          </li>
          <li>
            <span className="font-semibold">Butterbur:</span> Butterbur root
            extract
          </li>
        </ul>

        <h4 className="font-semibold  mt-2">3. For Mood Changes:</h4>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            <span className="font-semibold">St. John’s Wort:</span> St. John’s
            Wort supplements
          </li>
          <li>
            <span className="font-semibold">Chamomile:</span> Chamomile tea
          </li>
        </ul>

        <h4 className="font-semibold  mt-2">
          4. For Menstrual Irregularities:
        </h4>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            <span className="font-semibold">Vitex (Chasteberry):</span> Vitex
            supplements
          </li>
          <li>
            <span className="font-semibold">Dong Quai:</span> Dong Quai
            supplements
          </li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-2">
          Chinese Medicine Remedies for Adverse Reactions:
        </h2>
        <h4 className="font-semibold ">1. For Nausea:</h4>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            <span className="font-semibold">Ban Xia Hou Po Tang:</span> A
            traditional formula
          </li>
          <li>
            <span className="font-semibold">Ginger: </span>Fresh ginger in tea
          </li>
        </ul>

        <h4 className="font-semibold  mt-2">2. For Headaches:</h4>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            <span className="font-semibold">Chuan Xiong Cha Tiao San:</span> A
            traditional formula
          </li>
          <li>
            <span className="font-semibold">Acupuncture: </span>Targeting
            specific points for headache relief
          </li>
        </ul>

        <h4 className="font-semibold  mt-2">3. For Mood Changes:</h4>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            <span className="font-semibold">Xiao Yao San:</span> A traditional
            formula
          </li>
          <li>
            <span className="font-semibold">Jujube Seeds:</span> Used in various
            decoctions
          </li>
        </ul>

        <h4 className="font-semibold  mt-2">
          4. For Menstrual Irregularities:
        </h4>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            <span className="font-semibold">Gui Pi Tang: </span>A traditional
            formula
          </li>
          <li>
            <span className="font-semibold">Angelica Root (Dang Gui):</span>{" "}
            Commonly used in formulations
          </li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-2">
          Homeopathic Remedies for Treating Symptoms of Adverse Reactions:
        </h2>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            <span className="font-semibold"> Nux Vomica:</span> Useful for
            treating nausea and digestive issues, often aggravated by stress or
            dietary indiscretions.
          </li>
          <li>
            <span className="font-semibold"> Pulsatilla:</span> Helpful for mood
            swings, depression, and irregular periods. Often recommended for
            women who are emotional and feel better with consolation.
          </li>
          <li>
            <span className="font-semibold"> Sepia:</span> Used for fatigue,
            irritability, and decreased libido. It is particularly effective for
            women feeling indifferent to their family or work.
          </li>
          <li>
            <span className="font-semibold"> Calcarea Carbonica:</span>{" "}
            Beneficial for weight gain, fatigue, and excessive sweating. It’s
            often used for women who feel cold and are overweight.
          </li>
          <li>
            <span className="font-semibold"> Natrum Muriaticum: </span> Helps
            with headaches, especially those related to grief or suppressed
            emotions, and for women who crave salt.
          </li>
          <li>
            <span className="font-semibold">Belladonna:</span> Effective for
            sudden onset of symptoms like headaches, breast tenderness, and
            throbbing pains.
          </li>
          <li>
            <span className="font-semibold"> Lachesis:</span> Useful for hot
            flashes, mood swings, and symptoms that worsen before menstruation.
          </li>
          <li>
            <span className="font-semibold"> Sulphur:</span> Can help with skin
            eruptions, itching, and a feeling of heat or burning.
          </li>
          <li>
            <span className="font-semibold">Arnica:</span> Helps with bruising
            or soreness, especially after long-term use of birth control.
          </li>
          <li>
            <span className="font-semibold"> Ignatia: </span> For emotional
            symptoms such as sadness, mood swings, and sensitivity to grief or
            stress.
          </li>
        </ul>

        <p className="mt-4">
          Homeopathy should be approached with the guidance of a trained
          practitioner for best results.
        </p>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-2">
          Adverse Reactions of Mononucleosis (Infectious Mononucleosis):
        </h2>
        <ul className="list-disc space-y-4  pt-4  pl-5">
          <li>
            <span className="font-semibold">Extreme Fatigue: </span>Persistent
            and debilitating tiredness
          </li>
          <li>
            <span className="font-semibold">Fever:</span> Elevated body
            temperature, often 101-104°F (38.3-40°C)
          </li>
          <li>
            <span className="font-semibold">Sore Throat:</span> Severe and
            prolonged throat pain, often with swollen, red tonsils
          </li>
          <li>
            <span className="font-semibold">Swollen Lymph Nodes:</span>{" "}
            Especially in the neck and armpits
          </li>
          <li>
            <span className="font-semibold">Swollen Tonsils:</span> Sometimes
            with white patches or pus
          </li>
          <li>
            <span className="font-semibold">Headache:</span> Often severe and
            persistent
          </li>
          <li>
            <span className="font-semibold">Skin Rash: </span> May develop,
            particularly if treated with certain antibiotics
          </li>
          <li>
            <span className="font-semibold">Enlarged Spleen:</span> Can cause
            discomfort or pain in the upper left abdomen
          </li>
          <li>
            <span className="font-semibold">Liver Inflammation:</span> Mild
            hepatitis and jaundice (yellowing of the skin and eyes)
          </li>
          <li>
            <span className="font-semibold">Body Aches:</span> General muscle
            pain and discomfort
          </li>
          <li>
            <span className="font-semibold">Loss of Appetite:</span> Reduced
            desire to eat
          </li>
          <li>
            <span className="font-semibold">Night Sweats:</span> Excessive
            sweating during sleep
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdverseReaction;
