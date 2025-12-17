import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const IHRC_Card = ({ data }) => {
  const { image, title, content, link } = data;
  return (
    <div className={`border border-graylight rounded-lg`}>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4 text-gray bg-graylight rounded-b-lg h-48">
        <Link
          to={link}
          className="text-xl flex justify-center text-primary items-center font-bold mb-2"
        >
          {title}
        </Link>
        <p>{content}</p>
      </div>
    </div>
  );
};

IHRC_Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default IHRC_Card;
