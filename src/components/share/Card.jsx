import PropTypes from "prop-types";

const Card = ({ title, category }) => (
  <div className="p-4 m-2 bg-white shadow-md">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-600">{category}</p>
  </div>
);

const MainContent = ({ cards }) => (
  <div className="flex flex-wrap">
    {cards.map((card) => (
      <Card key={card.title} title={card.title} category={card.category} />
    ))}
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

MainContent.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MainContent;
