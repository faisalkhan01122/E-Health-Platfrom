import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaEye, FaShoppingCart, FaCreditCard, FaHeart, FaRegHeart } from 'react-icons/fa';

const bgColors = [
  'bg-red-100',
  'bg-green-100',
  'bg-blue-100',
  'bg-yellow-100',
  'bg-purple-100',
  'bg-pink-100',
];

const ProductCard = ({ product, index }) => {
  const [liked, setLiked] = useState(false);
  const bgColor = bgColors[index % bgColors.length];

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={`relative rounded-xl h-96 font-poppins ${bgColor}`}>
      <div className="overflow-hidden rounded-lg group relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-44 object-cover mb-4 transform transition-transform duration-300 group-hover:scale-105"
        />
        {/* <Link
          to={`/e-pharmacy/product/${product.id}`}
          className="absolute inset-0 flex items-center justify-center text-4xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <FaEye />
        </Link> */}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 text-sm mb-4">{product.description}</p>
        <div className="text-sm text-blue-600 mb-4">
          {product.discountPrice ? (
            <>
              <span className="line-through text-red-500 mr-2">${product.price.toFixed(2)}</span>
              <span>${product.discountPrice.toFixed(2)}</span>
            </>
          ) : (
            <span>${product.price.toFixed(2)}</span>
          )}
        </div>
        <div className='flex flex-col gap-2 absolute top-2 right-2'>
          <button
            className=" inline-block text-2xl p-2 hover:bg-primary bg-primary-2 rounded-lg transition-colors duration-300 text-primarylight"
          >
            <FaEye />
          </button>
          <span
            onClick={toggleLike}
            className='inline-block text-2xl p-2 hover:bg-primary bg-primary-2 rounded-lg transition-colors duration-300 text-primarylight cursor-pointer'
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </span>
        </div>
        <div className="absolute bottom-4 mt-4 w-[90%] flex space-x-2">
          <button className="flex-1 flex items-center text-xs justify-center p-2 text-green-800 bg-green-200 rounded-lg shadow-md hover:bg-green-300 transition-colors duration-300">
            <FaShoppingCart className="mr-2" />
           Add Cart
          </button>
          <button className="flex-1 flex items-center text-xs justify-center p-2 text-blue-800 bg-blue-200 rounded-lg shadow-md hover:bg-blue-300 transition-colors duration-300">
            <FaCreditCard className="mr-2" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountPrice: PropTypes.number,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductCard;