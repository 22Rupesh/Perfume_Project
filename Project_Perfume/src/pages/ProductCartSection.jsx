
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

// Assets
import amberNocturne1 from '../../public/images/amberNocturne3.png';
import amberNocturne2 from '../../public/images/amberNocturne3.png';
import amberNocturne3 from '../../public/images/amberNocturne3.png';
import amberNocturne4 from '../../public/images/amberNocturne3.png';
import fragranceBg from '../../public/images/amberNocturne3.png';

const ProductCartSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("100ML");
  const sizes = ["30ML", "50ML", "100ML", "200ML"];
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) setDarkMode(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleQuantity = (type) => {
    setQuantity((prev) => (type === "inc" ? prev + 1 : Math.max(1, prev - 1)));
  };

  return (
    <div className="bg-[#F5F5F5] dark:bg-[#220104] font-sans text-[#3b220c] dark:text-[#f6d110]">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <img src={amberNocturne2} alt="Perfume Bottle" className="w-full h-auto rounded shadow" />
          <div className="grid grid-cols-2 gap-4">
            <img src={amberNocturne3} className="w-full h-auto object-cover rounded" alt="thumb1" />
            <img src={amberNocturne4} className="w-full h-auto object-cover rounded" alt="thumb2" />
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-3xl font-bold text-[#3b220c] dark:text-[#EDD1D1]">Ember Nocturne</h2>
          <p className="text-sm text-gray-700 dark:text-[#EDD1D1]">Lavender, Cedar, & Amber</p>
          <p className="text-[15px] leading-relaxed text-[#333] dark:text-[#EDD1D1]">
            A luxurious scent crafted to evoke the serenity of moonlit nights and the passion of hidden desires.
          </p>
          <p className="text-xl font-semibold dark:text-[#EDD1D1]">$499</p>

          {/* Size Selection */}
          <div>
            <span className="block text-sm font-medium mb-2">Size</span>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-1 border text-sm rounded ${
                    selectedSize === size ? 'bg-[#3b220c] text-white' : 'border-[#3b220c] text-[#3b220c]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Personalize */}
          <button className="text-sm underline underline-offset-2 text-[#3b220c] hover:text-[#5e160e] dark:text-[#EDD1D1]">
            Personalize My Bottle <span className="ml-2 font-medium">Free</span>
          </button>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex border border-[#3b220c] items-center px-2">
              <button onClick={() => handleQuantity('dec')} className="px-2 text-lg">-</button>
              <span className="px-2">{quantity}</span>
              <button onClick={() => handleQuantity('inc')} className="px-2 text-lg">+</button>
            </div>
            <button className="bg-[#3b220c] text-white px-6 py-2 rounded text-sm hover:bg-[#5e160e]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Highlight Sections */}
      <div className="bg-white dark:bg-[#2c0a0a] py-16 px-4 space-y-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-xl font-semibold text-[#4B0000]">Story of Ember Nocturne</h3>
            <p className="text-sm text-[#333] dark:text-[#f1e1e1]">
              A fragrance of mystery and elegance, perfect for memorable moments.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={amberNocturne1} alt="Story" className="w-[400px] h-auto rounded" />
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Fragrance Ingredients</h3>
          <img src={fragranceBg} alt="ingredients" className="w-full max-w-4xl mx-auto" />
        </div>

        {/* Similar Fragrances */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6 text-[#b14527]">Similar Fragrances</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-[#f3f3f3] dark:bg-[#1a1a1a] p-4 rounded-lg shadow">
                <img src={amberNocturne1} alt="Similar" className="w-full h-auto rounded" />
                <h4 className="text-sm mt-4">Aventus</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">A new expression of bitter Orange. Sharp yet Sweet</p>
                <p className="text-sm font-semibold mb-2">$455</p>
                <button className="bg-[#3b220c] text-white py-1 px-4 rounded text-sm hover:bg-[#5e160e]">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductCartSection;