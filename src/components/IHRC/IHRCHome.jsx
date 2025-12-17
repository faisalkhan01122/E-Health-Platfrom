import React from "react";
import IHRC_Card from "./IHRC_Card"; // Adjust the import path as necessary

export const items = [
  {
    title: "About IHRC",
    content:
      "International Homeopathic Research Centre (IHRC) proudly positions itself as a leader in healthcare..",
    image:
      "https://www.hri-research.org/wp-content/themes/hri/images/sharelogo.png",
  },
  {
    title: "IHRC Services",
    content:
      "International Homeopathic Research Centre (IHRC) provide a variety of services to its clients..",
    image: "https://www.multicarehomeopathy.com/images/slider_1.png",
  },

  {
    title: "IHRC Collaborations",
    content:
      '"IHRC" believes in the power of collaboration to drive innovation and deliver except..',
    image:
      "https://brand24.com/blog/wp-content/uploads/2022/08/brand-collaborations-1140x537.png",
  },
  {
    title: "Research & Education",
    content: "..",
    image:
      "https://www.axians.com/app/uploads/sites/11/2020/11/CyberSecurityNew_05-e1606209321698.jpg",
  },
  {
    title: "Quality & Standards",
    content: "..",
    image:
      "https://qualityengineerstuff.com/wp-content/uploads/2022/02/quality-standards-1.png",
  },
  {
    title: "News & Events",
    content: "..",
    image: "https://www.efulife.com/assets/images/news-and-events-banner.png",
  },
  {
    title: "Support Us",
    content: "..",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43D8-OhmsOP5r9hWi6Mboon3yPPggAjLnpg&s",
  },
  {
    title: "Contact Us",
    content:
      "eHealth, Business Incubation Center, Health Services Academy, Prime Ministers National Health..",
    image:
      "https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg",
  },
];

const IHRCHome = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <IHRC_Card key={index} data={item} />
      ))}
    </div>
  );
};

export default IHRCHome;
