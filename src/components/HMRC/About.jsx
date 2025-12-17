import Banner from "../Share/Banner";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <Banner
        title={"About HMRC"}
        imageUrl={
          "https://www.dimins.com/wp-content/uploads/2021/11/collaboration-in-heatlcare-ftrd.jpg"
        }
      />
      <div className="p-2">
        <h1 className="text-3xl font-bold mb-4">About HMRC</h1>
        <p className="text-gray-700 mb-4">
          Welcome at "Health & Medicinal Research Center"
        </p>
        <p className="text-gray-700 mb-4">
          At the HMRC, our mission is to advance the field of allopathic
          medicine through cutting-edge research, innovation, and education.
          Established with the goal of enhancing patient care and treatment
          outcomes, we are dedicated to exploring new frontiers in medical
          science and translating our findings into tangible benefits for
          patients worldwide.
        </p>
      </div>
    </div>
  );
};

export default About;
