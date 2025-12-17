import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const Diarrhea = () => {
  return (
    <div className="text-[1rem] md:text-[1.1rem] text-gray bg-white">
      <HeroSection
        heading={"Diarrhea"}
        description={
          "Diarrhoea is a condition characterized by the frequent passage of loose or watery stools. It can be acute or chronic and may be caused by a variety of factors including infections (bacterial, viral, parasitic), food intolerances, medication side effects, and underlying health conditions."
        }
        bgImage="https://www.shutterstock.com/shutterstock/videos/1103592117/thumb/8.jpg?ip=x480"
      />
      <div>
        <RemedyImages
          img2="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2023/04/960x0-3.jpg"
          img1="https://amandeephospital.org/wp-content/uploads/2021/08/How-ORS-Helps-In-Dehydration-And-Diarrhea.jpg"
        />
      </div>
      <section className="p-4 ">
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Symptoms of Diarrhoea
        </h2>
        <ul className="list-disc  space-y-4 pt-4 list-inside mb-4">
          <li>Frequent loose or watery stools</li>
          <li>Abdominal cramps or pain</li>
          <li>Bloating</li>
          <li>Nausea</li>
          <li>Urgent need to have a bowel movement</li>
          <li>
            Dehydration (dry mouth, decreased urine output, dizziness, weakness)
          </li>
          <li>Fever (in some cases)</li>
          <li>Blood or mucus in stool (in severe cases)</li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Allopathic Remedies
        </h2>
        <ul className="list-disc  space-y-4 pt-4 list-inside mb-4">
          <li>
            <strong>Oral Rehydration Solutions (ORS):</strong> Prevent
            dehydration.
          </li>
          <li>
            <strong>Antidiarrheal Medications:</strong> Loperamide (Imodium),
            Bismuth subsalicylate (Pepto-Bismol)
          </li>
          <li>
            <strong>Antibiotics:</strong> For bacterial infections
            (Ciprofloxacin, Azithromycin).
          </li>
          <li>
            <strong>Probiotics:</strong> Restore gut flora.
          </li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Herbal Remedies
        </h2>
        <ul className="list-disc  space-y-4 pt-4 list-inside mb-4">
          <li>
            <strong>Ginger:</strong> Anti-inflammatory properties.
          </li>
          <li>
            <strong>Chamomile:</strong> Antispasmodic effects.
          </li>
          <li>
            <strong>Peppermint:</strong> Relaxes the digestive system.
          </li>
          <li>
            <strong>Fenugreek Seeds:</strong> Adds bulk to the stool.
          </li>
          <li>
            <strong>Turmeric:</strong> Antibacterial and anti-inflammatory.
          </li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Chinese Remedies
        </h2>
        <ul className="list-disc  space-y-4 pt-4 list-inside mb-4">
          <li>
            <strong>Huang Lian (Coptis Root):</strong> Antibacterial properties.
          </li>
          <li>
            <strong>Bai Tou Weng (Pulsatilla):</strong> For bacterial
            infections.
          </li>
          <li>
            <strong>Ge Gen (Kudzu Root):</strong> Alleviates gastrointestinal
            distress.
          </li>
          <li>
            <strong>Mu Xiang (Aucklandia):</strong> Promotes digestion.
          </li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Homeopathic Remedies
        </h2>
        <ul className="list-disc  space-y-4 pt-4 list-inside mb-4">
          <li>
            <strong>Arsenicum Album:</strong> Burning sensation in the anus,
            vomiting, thirst for small sips of water.
          </li>
          <li>
            <strong>Podophyllum:</strong> Profuse, watery stools, worse in the
            morning.
          </li>
          <li>
            <strong>Aloe Socotrina:</strong> Involuntary stool with gas.
          </li>
          <li>
            <strong>Chamomilla:</strong> Teething-related diarrhea in children.
          </li>
          <li>
            <strong>Sulphur:</strong> Early morning diarrhea, burning sensation.
          </li>
          <li>
            <strong>Veratrum Album:</strong> Projectile diarrhea with cold
            sweats.
          </li>
          <li>
            <strong>China:</strong> Diarrhea with bloating and weakness.
          </li>
          <li>
            <strong>Phosphorus:</strong> After cold drinks or ice cream.
          </li>
          <li>
            <strong>Mercurius Solubilis:</strong> Diarrhea with mucus and blood.
          </li>
          <li>
            <strong>Nux Vomica:</strong> Alternating diarrhea and constipation.
          </li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Prevention and Management Tips
        </h2>
        <ul className="list-disc  space-y-4 pt-4 list-inside mb-4">
          <li>Stay hydrated with water, broths, and ORS.</li>
          <li>
            Maintain a balanced diet; avoid spicy, fatty, and greasy foods.
          </li>
          <li>Practice good hygiene by washing hands thoroughly.</li>
          <li>
            Avoid unpasteurized dairy products and questionable food sources.
          </li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          When to Seek Medical Attention
        </h2>
        <ul className="list-disc  space-y-4 pt-4 list-inside mb-4">
          <li>
            Diarrhea lasting more than 2 days for adults or 24 hours for
            children.
          </li>
          <li>
            Signs of dehydration such as dizziness and decreased urine output.
          </li>
          <li>High fever or blood/mucus in the stool.</li>
          <li>Severe abdominal or rectal pain.</li>
        </ul>
      </section>
    </div>
  );
};

export default Diarrhea;
