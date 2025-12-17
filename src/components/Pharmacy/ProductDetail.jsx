import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTimes, FaPlus, FaMinus, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProductDetail = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  // const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? product.images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === product.images.length - 1 ? 0 : prevIndex + 1));
  };
  const increaseQuantity = () => {
    if (quantity < product.stocks) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 font-poppins flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[80%] h-[80%]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        <div className='flex '>
        <div className='w-1/2' >
          <div className="relative w-full  mb-4">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="w-full h-96  object-cover rounded-lg"
            />
            <button
              onClick={handlePrevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <FaArrowRight />
            </button>
          </div>
          <div className="flex space-x-2 mb-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${selectedImageIndex === index ? 'border-2 border-blue-500' : ''}`}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className='w-1/2 p-6'>
          <p className="text-gray mb-4">{product.description}</p>
          <div className="text-lg font-semibold text-blue-600 mb-4">
            {product.discountPrice ? (
              <>
                <span className="line-through text-red-500 mr-2">${product.price.toFixed(2)}</span>
                <span>${product.discountPrice.toFixed(2)}</span>
              </>
            ) : (
              <span>${product.price.toFixed(2)}</span>
            )}
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <button
                onClick={decreaseQuantity}
                className="px-2 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                <FaMinus />
              </button>
              <span className="mx-4 text-gray-700">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-2 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Number of Stocks: {product.stocks}</p>
            <p className="text-gray-700 mb-2">Payment Methods: {product.paymentMethods.join(', ')}</p>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 px-4 py-2 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300">
              Add to Cart
            </button>
            <button className="flex-1 px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
              Buy Now
            </button>
          </div>
        </div>
        </div>       
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountPrice: PropTypes.number,
    image: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    quantity: PropTypes.number.isRequired,
    stocks: PropTypes.number.isRequired,
    paymentMethods: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProductDetail;