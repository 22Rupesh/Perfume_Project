

import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/common/Header';
import ProductCard from './Production';
import Footer from '@/components/common/Footer';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// Local images
import aventus1 from './assets/aventus1.jpg';
import aventus2 from './assets/image 31.png';
import aventus3 from './assets/aventus1.jpg';
import aventus4 from './assets/image 37.png';
import aventus5 from './assets/image 29.png';
import aventus6 from './assets/image.png';
import marmaladeBanner from './assets/millesime.jpg';

const MensCollection = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      setDarkMode(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const products = [
    { name: 'Aventus', price: '$455', desc: 'A new expression of bitter Orange. Sharp yet sweet', image: aventus1 },
    { name: 'Aventus', price: '$455', desc: 'A new expression of bitter Orange. Sharp yet sweet', image: aventus2 },
    { name: 'Aventus', price: '$455', desc: 'A new expression of bitter Orange. Sharp yet sweet', image: aventus3 },
  ];

  return (
    <div className="bg-white dark:bg-black text-[#79300f] dark:text-[#f6d110]">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-7xl mx-auto py-12 px-4">
        <motion.section
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="text-center px-6 mb-10"
        >
          <motion.h2
            variants={fadeIn('up', 0.3)}
            className="text-3xl font-semibold text-[#4b2c10] my-6"
          >
            Men's Fragrances
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.4)}
            className="text-[18px] text-[#3d2b1f] leading-relaxed max-w-3xl mx-auto"
          >
            Creating iconic hand-crafted perfume for men, Creed has established a legacy of acclaimed
            fragrance, cologne and aftershave for men. Explore our collection of bestselling Creed men's
            fragrances including Creed Aventus and Silver Mountain Water, the classic and woody Royal Oud and Green Irish Tweed.
          </motion.p>
        </motion.section>

        {/* Just Arrived */}
        <motion.section className="bg-[#f7f7f7] py-12">
          <h3 className="text-3xl text-center mb-8">Just Arrived</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {products.map((item, idx) => (
              <div key={idx} className="bg-white p-4 text-center shadow">
                <img src={item.image} alt={item.name} className="w-full h-64 object-contain mb-4" />
                <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                <p className="text-lg font-bold mb-4">{item.price}</p>
                <button className="bg-[#79300f] text-white px-4 py-2 rounded">Add to Cart</button>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Marmalade Banner */}
        <motion.section className="py-16 relative">
          <img src={marmaladeBanner} alt="Shop Marmalade" className="w-full h-[400px] object-cover" />
          <div className="absolute bottom-6 left-6 bg-white px-4 py-2 font-semibold">
            Shop Orange Marmalade Cologne
          </div>
        </motion.section>

        {/* Best Sellers */}
        <motion.section className="bg-[#f7f7f7] py-12">
          <h3 className="text-3xl text-center mb-8">Best Sellers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {products.map((item, idx) => (
              <div key={idx} className="bg-white p-4 text-center shadow">
                <img src={item.image} alt={item.name} className="w-full h-64 object-contain mb-4" />
                <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                <p className="text-lg font-bold mb-4">{item.price}</p>
                <button className="bg-[#79300f] text-white px-4 py-2 rounded">Add to Cart</button>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-[#79300f] text-white px-6 py-3 rounded text-lg">See More</button>
          </div>
        </motion.section>



        {/* Huntsman Savile Row Section */}
<motion.section className="bg-white dark:bg-black py-16 px-4 text-center">
  <h3 className="text-2xl font-bold text-[#79300f] mb-2">Huntsman Savile Row</h3>
  <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
    A collection of refined colognes and candles tailored to the modern man.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {products.map((item, idx) => (
      <div key={idx} className="bg-[#F3F3F3] dark:bg-[#191919] p-4 text-center">
        <img src={item.image} alt={item.name} className="w-full h-64 object-contain mb-4" />
        <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{item.desc}</p>
        <p className="text-lg font-bold mb-4">{item.price}</p>
        <button className="bg-[#79300f] text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    ))}
  </div>
</motion.section>



{/* A Scent That Suites Section */}
<motion.section className="bg-[#f2e4ca] dark:bg-[#2f2f2f] py-16 px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {[1, 2].map((_, idx) => (
      <div key={idx} className="bg-[#e4d3b4] dark:bg-[#3b3b3b] p-6 flex flex-col justify-between h-full">
        <div className="bg-[#d4c1a6] dark:bg-[#2a2a2a] h-48 mb-6" /> {/* Placeholder image box */}
        <div>
          <h4 className="text-xl font-semibold mb-2">A Scent That Suites</h4>
          <p className="text-sm mb-4">
            Whether you're compiling a wish list or looking for inspiration, you're at the right place.
          </p>
          <button className="bg-[#79300f] text-white px-4 py-2 rounded">Gifts for Him</button>
        </div>
      </div>
    ))}
  </div>
</motion.section>


      </main>


      
      <Footer />
    </div>
  );
};

export default MensCollection;
