import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Aventus',
    price: '$455',
    description: 'A new expression of bitter Orange, Sharp yet Sweet',
    image: '/images/aventus.png',
  },
  // You can duplicate or map the same product for now
  {
    id: 2,
    name: 'Aventus',
    price: '$455',
    description: 'A new expression of bitter Orange, Sharp yet Sweet',
    image: '/images/aventus.png',
  },
  {
    id: 3,
    name: 'Aventus',
    price: '$455',
    description: 'A new expression of bitter Orange, Sharp yet Sweet',
    image: '/images/aventus.png',
  },
  {
    id: 4,
    name: 'Aventus',
    price: '$455',
    description: 'A new expression of bitter Orange, Sharp yet Sweet',
    image: '/images/aventus.png',
  },
  {
    id: 4,
    name: 'Aventus',
    price: '$455',
    description: 'A new expression of bitter Orange, Sharp yet Sweet',
    image: '/images/aventus.png',
  },
  {
    id: 4,
    name: 'Aventus',
    price: '$455',
    description: 'A new expression of bitter Orange, Sharp yet Sweet',
    image: '/images/aventus.png',
  },
];

const Wishlist = () => {
  return (
    <div className="bg-[#f3f3f3] min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-10 text-[#79300f]">Wishlist</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white p-4 rounded shadow-md relative"
              whileHover={{ scale: 1.02 }}
            >
              <button className="absolute top-4 right-4 text-gray-500">
                <FiHeart size={20} />
              </button>
              <img src={product.image} alt={product.name} className="w-full h-60 object-contain mb-4" />
              <h3 className="text-lg font-semibold text-[#79300f]">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-black">{product.price}</span>
              </div>
              <button className="w-full mt-2 bg-black text-white py-2 text-sm">Add to Cart</button>
              <button className="w-full mt-2 bg-[#79300f] text-white py-2 text-sm">Buy Now</button>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
