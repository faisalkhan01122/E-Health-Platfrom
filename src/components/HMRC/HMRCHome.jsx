 // Adjust the import path as necessary

import IHRC_Card from "../IHRC/IHRC_Card";

export const items = [
  {
    title: 'About HMRC',
    content: 'Welcome at "Health & Medicinal Research Center" At the HMRC, our mission is to advance...',
    image: 'https://www.multicarehomeopathy.com/images/slider_1.png'
  },
  {
    title: 'HMRC Services',
    content: 'At the HMRC, we offer a comprehensive range of services designed to advance the field of allopathic...',
    image: 'https://brand24.com/blog/wp-content/uploads/2022/08/brand-collaborations-1140x537.png'
  },
  {
    title: 'Research At HMRC',
    content: 'Research Conducted at the HMRC Here’s an overview of the...',
    image: 'https://www.axians.com/app/uploads/sites/11/2020/11/CyberSecurityNew_05-e1606209321698.jpg'
  },
  {
    title: 'Resources',
    content: '..',
    image: 'https://qualityengineerstuff.com/wp-content/uploads/2022/02/quality-standards-1.png'
  },
  {
    title: 'FAQs',
    content: '..',
    image: 'https://www.efulife.com/assets/images/news-and-events-banner.png'
  },
  {
    title: 'Contact Us',
    content: 'eHealth, Business Incubation Center, Health Services Academy, Prime Ministers National Heal...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43D8-OhmsOP5r9hWi6Mboon3yPPggAjLnpg&s'
  },
];

const HMRCHome = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <IHRC_Card key={index} data={item} />
      ))}
    </div>
  );
};

export default HMRCHome;