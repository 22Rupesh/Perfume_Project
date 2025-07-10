


import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '@/components/common/Footer';
import ProductCard from './Production';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import aventus1 from './assets/aventus1.jpg';
import aventus2 from '../../../public/images/amberNocturne4.png';
import aventus3 from '../../../public/images/millesimeImperial.png';
import marmalade from './assets/millesime.jpg';

import intimateImage from './assets/millesime.jpg'; // rename as per your actual image name


const WomensCollection = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) setDarkMode(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const products = [
    { name: "Aventus", price: 455, description: "A new expression of bitter Orange. Sharp yet Sweet", image: aventus1 },
    { name: "Aventus", price: 455, description: "A new expression of bitter Orange. Sharp yet Sweet", image: aventus2 },
    { name: "Aventus", price: 455, description: "A new expression of bitter Orange. Sharp yet Sweet", image: aventus3 },
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#79300f] dark:bg-[#220104] dark:text-[#f6d110]">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-7xl mx-auto py-12 px-4">

        {/* Women's Fragrances Heading */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Women's Fragrances</h1>
          <p className="text-[#3d2b1f] dark:text-white max-w-3xl mx-auto">
            Creating iconic hand-crafted perfume for women, Creed has established a legacy of acclaimed
            fragrances for women. Explore our collection of bestselling Creed women's fragrances including
            Creed Aventus for Her, Love in White, Spring Flower, and the elegant Carmina.
          </p>
        </section>

        {/* Just Arrived */}
        <section className="py-10 bg-[#F4F4F4] dark:bg-[#1c1c1c]">
          <h2 className="text-2xl font-semibold text-center mb-8">Just Arrived</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </section>

        {/* Marmalade Banner */}
        <section className="relative py-12">
          <img
            src={marmalade}
            alt="Marmalade Cologne"
            className="w-full h-[400px] object-cover rounded-lg shadow"
          />
          <div className="absolute bottom-6 left-6 bg-white px-6 py-3 text-[#79300f] font-bold shadow-md rounded">
            Shop Orange Marmalade Cologne
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-10 bg-[#F4F4F4] dark:bg-[#1c1c1c]">
          <h2 className="text-2xl font-semibold text-center mb-8">Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-[#79300f] text-white px-6 py-2 rounded hover:opacity-90">
              See More
            </button>
          </div>
        </section>

        {/* Huntsman Savile Row */}
        <section className="py-10 bg-white dark:bg-[#181818] text-center">
          <h2 className="text-xl font-bold mb-2 text-[#79300f]">Huntsman Savile Row</h2>
          <p className="mb-8 text-sm text-[#333] dark:text-gray-300">
            A collection of refined colognes and candles tailored to the modern man.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </section>


        {/* My Very Intimate Perfumes Section */}
<section className="py-16 bg-[#F9F9F9] dark:bg-[#1a1a1a] px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    {/* Image */}
    <div>
      <img
        src={intimateImage}
        alt="My Very Intimate Perfumes"
        className="rounded-lg shadow-lg w-full object-cover"
      />
    </div>

    {/* Text Content */}
    <div className="text-left">
      <h3 className="text-2xl font-bold text-[#000] dark:text-[#f6d110] mb-4 leading-tight">
        <span className="underline underline-offset-4">My Very</span><br />
        <span className="underline underline-offset-4">Intimate Perfumes</span>
      </h3>
      <p className="mb-6 text-gray-700 dark:text-gray-200 text-sm">
        My Very Intimate Perfumes is an exclusive collection of bold and audacious sillage scents that are part of Maison Francis Kurkdjian's history and heritage. Four aromatic masterpieces to discover or rediscover...
      </p>
      <button className="bg-[#79300f] text-white px-6 py-2 rounded hover:opacity-90">
        Gifts for Him
      </button>
    </div>
  </div>
</section>

{/* Closing Description Paragraph */}
<section className="text-center text-sm text-[#333] dark:text-gray-300 px-6 py-10 max-w-4xl mx-auto">
  <p>
    Explore Jo Malone London’s collection of men’s perfume, home scents, and grooming gifts. Each scent is crafted with rich, layered notes and timeless elegance, offering a luxurious selection for every occasion. From fresh, vibrant body washes to warm, woody scented candles, our range is designed to suit every scent preference. Discover distinctive, luxury fragrances for men who appreciate quality and sophistication, and find the perfect expression of personal style.
  </p>
</section>



      </main>

      <Footer />
    </div>
  );
};

export default WomensCollection;
