import Banner from "../share/Banner";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <Banner title={"Contact Us"} imageUrl={"https://www.dimins.com/wp-content/uploads/2021/11/collaboration-in-heatlcare-ftrd.jpg"}/>
      <div className="p-2">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          eHealth, Business Incubation Center,
        </p>
        <p className="text-gray-700 mb-4">
          Health Services Academy,
        </p>
        <p className="text-gray-700 mb-4">
          Prime Ministers National Health Complex,
        </p>
        <p className="text-gray-700 mb-4">
          NIH Park Road, Chak Shahzad,
        </p>
        <p className="text-gray-700 mb-4">
          Islamabad.
        </p>
      </div>
    </div>
  );
};

export default Contact;