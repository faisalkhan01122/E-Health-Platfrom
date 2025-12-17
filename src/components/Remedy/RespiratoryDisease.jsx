import React from "react";
import HeroSection from "./HeroSection";
import RemedyImages from "./RemedyImages";

const RespiratoryDisease = () => {
  return (
    <div className="text-gray bg-white text-[1rem] md:text-[1.1rem]">
      <HeroSection
        bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8P_Pr3O6Zxu-31fd3OKKI8iC2ZXk8Vj6Xw&s"
        heading={"Respiratory Disease"}
        description={
          "Respiratory diseases affect the lungs and other parts of the respiratory system. They can range from mild, such as the common cold, to severe, such as chronic obstructive pulmonary disease (COPD) or lung cancer."
        }
      />
      <div>
        <RemedyImages
          img2="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22740_16564268624824428.jpg"
          img1="https://travelhealthpro.org.uk/media_lib/mlib-uploads/full/respiratory-system.jpg"
        />
      </div>
      <div className="p-4 ">
        {/* Common Respiratory Diseases */}
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4">
          Common Respiratory Diseases:
        </h2>
        <p>1. Asthma</p>
        <p>2. Chronic Obstructive Pulmonary Disease (COPD)</p>
        <p>3. Pneumonia</p>
        <p>4. Tuberculosis (TB)</p>
        <p>5. Lung Cancer</p>
        <p>6. Bronchitis</p>
        <p>7. Emphysema</p>
        <p>8. Pulmonary Fibrosis</p>
        <p>9. Common Cold</p>
        <p>10. Influenza (Flu)</p>

        {/* Detailed Symptoms for Common Respiratory Diseases */}
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4 mt-6">
          Detailed Symptoms for Common Respiratory Diseases:
        </h2>

        <h3 className="text-xl font-semibold mb-2">1. Asthma:</h3>
        <p>• Shortness of breath</p>
        <p>• Chest tightness or pain</p>
        <p>• Wheezing</p>
        <p>• Coughing, especially at night or early morning</p>

        <h3 className="text-xl font-semibold mb-2 mt-4">2. COPD:</h3>
        <p>• Chronic cough</p>
        <p>• Shortness of breath, especially during physical activities</p>
        <p>• Frequent respiratory infections</p>
        <p>• Wheezing</p>
        <p>• Fatigue</p>

        <h3 className="text-xl font-semibold mb-2 mt-4">3. Pneumonia:</h3>
        <p>• Chest pain when you breathe or cough</p>
        <p>• Confusion or changes in mental awareness (in older adults)</p>
        <p>• Cough with phlegm</p>
        <p>• Fatigue</p>
        <p>• Fever, sweating, and shaking chills</p>
        <p>• Lower than normal body temperature (in older adults)</p>

        <h3 className="text-xl font-semibold mb-2 mt-4">4. Tuberculosis:</h3>
        <p>• Persistent cough that lasts more than three weeks</p>
        <p>• Coughing up blood</p>
        <p>• Chest pain</p>
        <p>• Unintentional weight loss</p>
        <p>• Fatigue</p>
        <p>• Fever</p>
        <p>• Night sweats</p>
        <p>• Chills</p>
        <p>• Loss of appetite</p>

        <h3 className="text-xl font-semibold mb-2 mt-4">5. Lung Cancer:</h3>
        <p>• Coughing, especially if it persists or becomes intense</p>
        <p>
          • Pain in the chest, shoulder, or back unrelated to pain from coughing
        </p>
        <p>• Change in color or volume of sputum</p>
        <p>• Shortness of breath</p>
        <p>• Changes in the voice or being hoarse</p>
        <p>• Harsh sounds with each breath</p>
        <p>• Recurrent lung problems, such as bronchitis or pneumonia</p>
        <p>• Coughing up blood</p>

        <h3 className="text-xl font-semibold mb-2 mt-4">6. Bronchitis:</h3>
        <p>• Cough</p>
        <p>
          • Production of mucus (sputum), which can be clear, white,
          yellowish-gray, or green in color
        </p>
        <p>• Fatigue</p>
        <p>• Shortness of breath</p>
        <p>• Slight fever and chills</p>
        <p>• Chest discomfort</p>

        <h3 className="text-xl font-semibold mb-2 mt-4">7. Emphysema:</h3>
        <p>• Shortness of breath, especially during light physical activity</p>
        <p>• Chronic cough</p>
        <p>• Wheezing</p>
        <p>• Fatigue</p>
        <p>• Blue-tinged lips or fingernail beds</p>

        <h3 className="text-xl font-semibold mb-2 mt-4">
          8. Pulmonary Fibrosis:
        </h3>
        <p>• Shortness of breath</p>
        <p>• Dry, persistent cough</p>
        <p>• Fatigue</p>
        <p>• Unexplained weight loss</p>
        <p>• Aching muscles and joints</p>

        <h3 className="text-xl font-semibold mb-2 mt-4">9. Common Cold:</h3>
        <p>• Runny or stuffy nose</p>
        <p>• Sneezing</p>
        <p>• Sore throat</p>
        <p>• Cough</p>
        <p>• Congestion</p>
        <p>• Mild headache or body aches</p>

        <h3 className="text-xl font-semibold mb-2 mt-4">
          10. Influenza (Flu):
        </h3>
        <p>• Fever</p>
        <p>• Cough</p>
        <p>• Sore throat</p>
        <p>• Runny or stuffy nose</p>
        <p>• Muscle or body aches</p>
        <p>• Headaches</p>
        <p>• Fatigue</p>

        {/* Allopathic Treatments */}
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4 mt-6">
          Allopathic Remedies:
        </h2>
        <p>1. Inhalers for Asthma</p>
        <p>2. Antibiotics for Pneumonia</p>
        <p>3. Bronchodilators for COPD</p>
        <p>4. Chemotherapy for Lung Cancer</p>
        <p>5. Antiviral medications for Influenza</p>
        <p>6. Corticosteroids for Emphysema</p>

        {/* Herbal Treatments */}
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4 mt-6">
          Herbal Remedies:
        </h2>
        <p>1. Eucalyptus for clearing the respiratory tract</p>
        <p>2. Ginger for anti-inflammatory effects</p>
        <p>3. Peppermint for soothing airways</p>
        <p>4. Turmeric for anti-inflammatory properties</p>
        <p>5. Mullein for treating coughs and lung irritation</p>

        {/* Chinese Remedies */}
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4 mt-6">
          Chinese Remedies:
        </h2>
        <p>1. Acupuncture to alleviate respiratory symptoms</p>
        <p>2. Astragalus root for boosting immune function</p>
        <p>3. Ginseng to improve lung capacity</p>
        <p>4. Cordyceps for respiratory strength</p>
        <p>5. Schisandra for reducing cough and improving lung function</p>

        {/* Homeopathic Remedies */}
        <h2 className="text-[1rem] md:text-[1.2rem] underline font-bold mb-4 mt-6">
          Homeopathic Remedies:
        </h2>
        <p>1. Arsenicum Album for shortness of breath</p>
        <p>2. Bryonia for dry cough</p>
        <p>3. Antimonium Tart for rattling cough with chest congestion</p>
        <p>4. Hepar Sulph for persistent cough</p>
        <p>5. Spongia for barking cough</p>
      </div>
    </div>
  );
};

export default RespiratoryDisease;
