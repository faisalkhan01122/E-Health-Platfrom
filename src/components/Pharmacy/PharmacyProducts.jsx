import { useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard";
import ProductDetail from "./ProductDetail";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const pharmacyProducts = [
  {
    id: 1,
    name: 'Aspirin',
    description: 'Pain reliever and fever reducer',
    price: 5.99,
    discountPrice: 4.99,
    image: 'https://bp-creality.de/wp-content/uploads/2018/08/Packaging-Development-Aspirin-08.jpg',
    images: [
      'https://farmaciarubino.net/3-large_default/aspirin-pain-inflammation-20-tablets-500-mg.jpg',
      'https://meinarztbedarf.com/cdn/shop/files/10203626_8a071722-3594-4060-b2f3-87c6612bd145_587x587.jpg?v=1720026293',
      'https://m.media-amazon.com/images/I/61HgtbHPKrL._AC_UF894,1000_QL80_.jpg',
    ],
    quantity: 100,
    stocks: 50,
    paymentMethods: ['Credit Card', 'PayPal', 'Cash'],
  },
  {
    id: 2,
    name: 'Ibuprofen',
    description: 'Nonsteroidal anti-inflammatory drug (NSAID)',
    price: 7.99,
    discountPrice: 6.99,
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets.jpg',
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2023/7/323775436/LT/XS/NE/192312702/ibuprofen-tables-400mg.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2024/3/400701623/AE/VW/WJ/214713665/ibuprofen-tablets-i-p-200mg-500x500.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzHOmQt2qR_y4rZffjxgVe5mAElSscqAAkWzaJB9Cq0aUpYzZj_FHCG6iFOr90Vgzpr0&usqp=CAU',
    ],
    quantity: 200,
    stocks: 75,
    paymentMethods: ['Credit Card', 'PayPal', 'Cash'],
  },
  {
    id: 3,
    name: 'Paracetamol',
    description: 'Pain reliever and fever reducer',
    price: 4.99,
    discountPrice: 3.99,
    image: 'https://www.chemist-4-u.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/a/paracetamol-500mg-tablets-32-pack-1.jpg',
    images: [
      'https://www.chemist-4-u.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/a/paracetamol-500mg-tablets-32-pack-1.jpg',
      'https://www.chemist-4-u.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/a/paracetamol-500mg-tablets-32-pack-1.jpg',
      'https://www.chemist-4-u.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/a/paracetamol-500mg-tablets-32-pack-1.jpg',
    ],
    quantity: 150,
    stocks: 100,
    paymentMethods: ['Credit Card', 'PayPal', 'Cash'],
  },
  {
    id: 4,
    name: 'Vitamin C',
    description: 'Boosts the immune system',
    price: 9.99,
    discountPrice: 8.99,
    image: 'https://www.chemist-4-u.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/i/vitabiotics-ultra-vitamin-c-effervescent-20-tablets-1.jpg',
    images: [
      'https://www.chemist-4-u.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/i/vitabiotics-ultra-vitamin-c-effervescent-20-tablets-1.jpg',
      'https://www.chemist-4-u.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/i/vitabiotics-ultra-vitamin-c-effervescent-20-tablets-1.jpg',
      'https://www.chemist-4-u.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/i/vitabiotics-ultra-vitamin-c-effervescent-20-tablets-1.jpg',
    ],
    quantity: 100,
    stocks: 50,
    paymentMethods: ['Credit Card', 'PayPal', 'Cash'],
  }
  // Add more products as needed
];



const PharmacyProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = [
    { id: 1, bgColor: 'bg-green-100', image:"https://t3.ftcdn.net/jpg/03/27/57/08/360_F_327570873_RzRWwsKMPlMLXcvF2dKVbW0FqcZPw1XE.jpg" },
    { id: 2, bgColor: 'bg-yellow-100', image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pharmacy-banner-design-template-aa95147277c64d4cc8db12f3d742d177_screen.jpg?ts=1657220335" },
    // Add more banners as needed
  ];
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handlePrevBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  const handleNextBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextBanner();
    }, 3000); // Change banner every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  
  return (
    <div className="container font-poppins mx-auto p-4">
      {/* banners with slider */}
      <div className="relative w-full h-96 mb-4">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentBannerIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className={`w-full h-96 ${banner.bgColor} rounded-lg`}>
              <img src={banner.image} alt="banners" className="object-cover w-full h-full" />
            </div>
          </div>
        ))}
        <button
          onClick={handlePrevBanner}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNextBanner}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="w-[80%] mx-auto">
      <h1 className="text-2xl font-bold mb-4">Pharmacy Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pharmacyProducts.map((product, index) => (
          <div key={product.id} onClick={() => openModal(product)}>
            <ProductCard product={product} index={index} />
          </div>
        ))}
      </div>
      </div>
      
      {selectedProduct && <ProductDetail product={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default PharmacyProducts;