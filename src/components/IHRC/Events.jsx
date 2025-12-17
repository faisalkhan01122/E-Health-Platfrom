import React from "react";
import Banner from "../Share/Banner";

const Events = () => {
  return (
    <div className="container mx-auto text-gray p-4">
      <Banner
        title="IHRC News & Events"
        imageUrl={
          "https://bchs.org.au/wp-content/uploads/2023/10/BCH-Welcome-to-Banyule-Community-Health-POSTCARD-GRAPHIC-Feb-2023-1-840x460.jpg"
        }
      />
      <div className="p-2">
        <h1 className="text-3xl font-bold mb-4">News & Events</h1>
        <p className="text-gray-700 mb-4">
          Stay updated with the latest news and events from the International
          Homeopathic Research Centre (IHRC). Our news and events section
          provides information on recent developments, upcoming events, and
          important announcements.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Latest News</h2>
        <p className="text-gray-700 mb-4">
          Here you will find the latest news about our research, collaborations,
          and achievements. Stay informed about our ongoing projects and
          initiatives.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
        <p className="text-gray-700 mb-4">
          Join us at our upcoming events, including conferences, workshops, and
          seminars. These events provide opportunities to learn, network, and
          collaborate with experts in the field of homeopathy.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Past Events</h2>
        <p className="text-gray-700 mb-4">
          Explore our past events to see the impact of our work and the
          contributions of our community. Learn about the topics discussed and
          the outcomes achieved.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Announcements</h2>
        <p className="text-gray-700 mb-4">
          Stay tuned for important announcements from IHRC. We regularly share
          updates on new initiatives, partnerships, and other significant
          developments.
        </p>
      </div>
    </div>
  );
};

export default Events;
