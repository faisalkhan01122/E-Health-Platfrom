import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import EDoctor from "./_root/pages/EDoctor";
import CancerDisease from "./components/Remedy/CancerDisease";
import AestheticCare from "./components/Remedy/AestheticCare";
import LymeDisease from "./components/Remedy/LymeDisease";
import Allergies from "./components/Remedy/Allergies";
import Chlamydia from "./components/Remedy/Chlamydia";
import Diabetes from "./components/Remedy/Diabetes";
import KidneyDisease from "./components/Remedy/KidneyDisease";
import AdverseReaction from "./components/Remedy/AdverseReaction";
import Mononucleosis from "./components/Remedy/Mononucleosis";
import RespiratoryDisease from "./components/Remedy/RespiratoryDisease";
import Diarrhea from "./components/Remedy/Diarrhea";
import Gastroenteritis from "./components/Remedy/Gastroenteritis";
import Headaches from "./components/Remedy/Headaches";
import HeartDisease from "./components/Remedy/HeartDisease";
import Hyperlipidemia from "./components/Remedy/Hyperlipidemia";
import ThyroidDisease from "./components/Remedy/ThyroidDisease";
import OldAgeIssues from "./components/Remedy/OldAgeIssues";
import WestNileVirus from "./components/Remedy/WestNileVirus";
import Tularemia from "./components/Remedy/Tularemia";
import RockyMountain from "./components/Remedy/RockyMountain";
import Rabies from "./components/Remedy/Rabies";
import PsychologicalDisorders from "./components/Remedy/PsychologicalDisorders";
import LeukemiaPage from "./_root/pages/LeukemiaPage";
import MenopausePage from "./_root/pages/MenopausePage";
import MaleInferPage from "./_root/pages/MaleInferPage";
import FemaleInfertilityPage from "./_root/pages/FemaleInfertilityPage";
import GynaecologicalPage from "./_root/pages/GynaecologicalPage";
import PolycysticPage from "./_root/pages/PolycysticPage";
import ChickenpoxPage from "./_root/pages/ChickenpoxPage";
import CommonColdPage from "./_root/pages/CommonColdPage";
import COVID19Page from "./_root/pages/COVID19Page.jsx";
import HivPage from "./_root/pages/HivPage";
import HepatitisPage from "./_root/pages/HepatitisPage";
import InfluenzaPage from "./_root/pages/InfluenzaPage";
import MeaslesPage from "./_root/pages/MeaslesPage";
import MeningitisPage from "./_root/pages/MeningitisPage";
import MonkeypoxPage from "./_root/pages/MonkeypoxPage";
import MononucleosiPage from "./_root/pages/MononucleosiPage";
import SexuallyPage from "./_root/pages/SexuallyPage";
import TuberculosisPage from "./_root/pages/TuberculosisPage";
import ViralHepatitisPage from "./_root/pages/ViralHepatitisPage";
import WhoopingcoughPage from "./_root/pages/WhoopingcoughPage";
import BipolarDisorderPage from "./_root/pages/BipolarDisorderPage";
import PneumoniaPage from "./_root/pages/PneumoniaPage";
import PostsurgicalPage from "./_root/pages/PostsurgicalPage";
import InfectionsPage from "./_root/pages/InfectionsPage";
import UrinaryPage from "./_root/pages/UrinaryPage";
import ValleyFeverPage from "./_root/pages/ValleyFeverPage";
import YeastInfection from "./_root/pages/YeastInfection";
import DenguefeverPage from "./_root/pages/DenguefeverPage";
import MalariaPage from "./_root/pages/MalariaPage";
import FeverPage from "./_root/pages/FeverPage";
import SecondOpinionPage from "./_root/pages/SecondOpinionPage";
import PsycologistPage from "./_root/pages/PsycologistPage";
import PhysiotherapistPage from "./_root/pages/PhysiotherapistPage";
import PatientCarePage from "./_root/pages/PatientCarePage";
import EPharmacy from "./_root/pages/EPharmacy";
import PharmacyProducts from "./components/Pharmacy/PharmacyProducts";
import Download from "./components/IHRC/Download.jsx";
import ResearchEducation from "./components/IHRC/ResearchEducation";
import QualityStandards from "./components/IHRC/QualityStandards";
import Events from "./components/IHRC/Events";
import ContactUs from "./components/IHRC/ContactUs";
import SupportUs from "./components/IHRC/SupportUs";
import HMRCPage from "./_root/pages/HRMCPage";
import HMRCHome from "./components/HMRC/HMRCHome";
import About from "./components/HMRC/About";
import HRMCServices from "./components/HMRC/HMRCServices";
import Research from "./components/HMRC/Research";
import Resources from "./components/HMRC/Resources";
import FAQs from "./components/HMRC/FAQs";
import Contact from "./components/HMRC/Contact";
import IHRCPage from "./_root/pages/IHRCPage";
import IHRCHome from "./components/IHRC/IHRCHome";
import IHRCAbout from "./components/IHRC/IHRCAbout";
import Services from "./components/IHRC/Services";
import Collaborations from "./components/IHRC/Collaborations";
import HsaPage from "./_root/pages/HsaPage";
import AboutHsaPage from "./_root/pages/AboutHsaPage";
import BusinessIncubationCenter from "./_root/pages/BusinessIncubationCenter";
import RearchAndEducation from "./_root/pages/RearchAndEducation";
import RemedyPage from "./_root/pages/RemedyPage.jsx";
import Remedy from "./components/Remedy/Remedy.jsx";
import Page404 from "./_root/pages/Page404.jsx";
import DoctorPanel from "./_root/pages/DoctorPanel.jsx";
import DoctorAtHome from "./_root/pages/DoctorAtHome.jsx";
import Literature from "./components/IHRC/Literature.jsx";
import ScrollToTop from "./components/share/ScrollTOTop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <RootLayout />,
        <ScrollToTop />
      </>
    ),

    children: [
      { path: "", element: <EDoctor /> },
      { path: "doctor-at-home", element: <DoctorAtHome /> },
      { path: "/download", element: <Download /> },
      { path: "/second-opinion", element: <SecondOpinionPage /> },
      { path: "/e-psychologist", element: <PsycologistPage /> },
      { path: "/e-physiotherapist", element: <PhysiotherapistPage /> },
      { path: "/e-patient-care", element: <PatientCarePage /> },
      { path: "e-pharmacy", element: <EPharmacy /> },
      { path: "e-pharmacy/products", element: <PharmacyProducts /> },
      { path: "/hsa", element: <HsaPage /> },
      { path: "/about-hsa", element: <AboutHsaPage /> },
      {
        path: "/business-incubation-center",
        element: <BusinessIncubationCenter />,
      },
      { path: "/research-education", element: <RearchAndEducation /> },
      { path: "*", element: <Page404 /> },
      { path: "doctor-panel", element: <DoctorPanel /> },

      {
        path: "ihrc",
        element: <IHRCPage />,
        children: [
          { path: "", element: <IHRCHome /> },
          { path: "about", element: <IHRCAbout /> },
          { path: "services", element: <Services /> },
          // { path: 'contact', element: <Collaborations /> },
          { path: "collaborations", element: <Collaborations /> },
          { path: "research-education", element: <ResearchEducation /> },
          { path: "quality-standards", element: <QualityStandards /> },
          { path: "news-events", element: <Events /> },
          { path: "contact", element: <ContactUs /> },
          { path: "support-us", element: <SupportUs /> },
        ],
      },
      {
        path: "hmrc",
        element: <HMRCPage />,
        children: [
          { path: "", element: <HMRCHome /> },
          { path: "about", element: <About /> },
          { path: "services", element: <HRMCServices /> },
          { path: "research", element: <Research /> },
          { path: "resources", element: <Resources /> },
          { path: "faqs", element: <FAQs /> },
          { path: "contact", element: <Contact /> },
          { path: "literature", element: <Literature /> },
          // { path: 'support-us', element: <SupportUs /> },
        ],
      },
      {
        path: "remedy",
        element: <RemedyPage />,
        children: [
          { path: "", element: <Remedy /> },
          { path: "leukemia", element: <LeukemiaPage /> },
          { path: "menopause", element: <MenopausePage /> },
          { path: "male-infertility", element: <MaleInferPage /> },
          { path: "female-infertility", element: <FemaleInfertilityPage /> },
          { path: "gynaecological", element: <GynaecologicalPage /> },
          { path: "pcos", element: <PolycysticPage /> },
          { path: "chickenpox", element: <ChickenpoxPage /> },
          { path: "cold", element: <CommonColdPage /> },
          { path: "covid", element: <COVID19Page /> },
          { path: "hiv", element: <HivPage /> },
          { path: "hepatitis", element: <HepatitisPage /> },
          { path: "flu", element: <InfluenzaPage /> },
          { path: "measles", element: <MeaslesPage /> },
          { path: "meningitis", element: <MeningitisPage /> },
          { path: "monkeypox", element: <MonkeypoxPage /> },
          { path: "mono", element: <MononucleosiPage /> },
          { path: "sti", element: <SexuallyPage /> },
          { path: "tb", element: <TuberculosisPage /> },
          { path: "viral-hepatitis", element: <ViralHepatitisPage /> },
          { path: "pertussis", element: <WhoopingcoughPage /> },
          { path: "bipolar", element: <BipolarDisorderPage /> },
          { path: "pneumonia", element: <PneumoniaPage /> },
          { path: "post-surgical", element: <PostsurgicalPage /> },
          { path: "transplant-infections", element: <InfectionsPage /> },
          { path: "uti", element: <UrinaryPage /> },
          { path: "valley-fever", element: <ValleyFeverPage /> },
          { path: "yeast", element: <YeastInfection /> },
          { path: "dengue", element: <DenguefeverPage /> },
          { path: "malaria", element: <MalariaPage /> },
          { path: "q-fever", element: <FeverPage /> },
          {
            path: "aesthetic",
            element: <AestheticCare />,
          },
          {
            path: "cancer",
            element: <CancerDisease />,
          },
          {
            path: "lyme",
            element: <LymeDisease />,
          },
          {
            path: "allergies",
            element: <Allergies />,
          },
          {
            path: "chlamydia",
            element: <Chlamydia />,
          },
          {
            path: "psych-disorders",
            element: <PsychologicalDisorders />,
          },
          {
            path: "diabetes",
            element: <Diabetes />,
          },
          {
            path: "ckd",
            element: <KidneyDisease />,
          },
          {
            path: "birth-control-reaction",
            element: <AdverseReaction />,
          },
          {
            path: "mono",
            element: <Mononucleosis />,
          },
          {
            path: "respiratory",
            element: <RespiratoryDisease />,
          },
          {
            path: "diarrhea",
            element: <Diarrhea />,
          },
          {
            path: "gastroenteritis",
            element: <Gastroenteritis />,
          },
          {
            path: "headaches",
            element: <Headaches />,
          },
          {
            path: "heart-disease",
            element: <HeartDisease />,
          },
          {
            path: "hyperlipidemia",
            element: <Hyperlipidemia />,
          },
          {
            path: "thyroid",
            element: <ThyroidDisease />,
          },
          {
            path: "old-age",
            element: <OldAgeIssues />,
          },
          {
            path: "west-nile",
            element: <WestNileVirus />,
          },
          {
            path: "tularemia",
            element: <Tularemia />,
          },
          {
            path: "rocky-mountain",
            element: <RockyMountain />,
          },
          {
            path: "rabies",
            element: <Rabies />,
          },
        ],
      },
    ],
  },
]);

export default router;
