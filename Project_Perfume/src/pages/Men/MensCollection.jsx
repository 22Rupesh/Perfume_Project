

import React, { useState, useEffect,useRef } from 'react';
import Header from '../../components/common/Header';
import ProductCard from './Production';
import Footer from '@/components/common/Footer';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// Import local images
import aventus1 from './assets/aventus1.jpg';
import aventus2 from './assets/image 31.png';
import aventus3 from './assets/aventus1.jpg';
import aventus4 from './assets/image 37.png';
import aventus5 from './assets/image 29.png';
import aventus6 from './assets/image.png';
import millesime from './assets/millesime.jpg';
import heroImage from './assets/aventus1.jpg'; // Replace with your correct hero image


import hero1 from './assets/Rectangle 35.png';
import hero2 from './assets/Rectangle 36.png';
import hero3 from './assets/Rectangle 37.png';


const heroImages = [hero1, hero2, hero3]; 


const MensCollection = () => {
  const [darkMode, setDarkMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

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

    // Auto-scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.offsetWidth * currentIndex,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const products = [
    { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus1 },
    { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus2 },
    { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus3 },
    { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus4 },
    { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus5 },
    { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus6 },
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#79300f] dark:bg-[#220104] dark:text-[#f6d110]">
      {/* <Header darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      <main className="max-w-7xl mx-auto py-12 px-4">
        {/* Hero Section */}
  <motion.section
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.4 }}
    className="text-center px-6 mb-10"
  >
    <motion.h1
      variants={fadeIn("up", 0.2)}
      className="text-5xl font-display font-bold text-[#4b2c10] drop-shadow-md"
    >
      Vesarii
    </motion.h1>
    <motion.h2
      variants={fadeIn("up", 0.3)}
      className="text-2xl font-display font-semibold text-[#4b2c10] my-6"
    >
      Men's Fragrances
    </motion.h2>
    <motion.p
      variants={fadeIn("up", 0.4)}
      className="font-sans text-[20px] text-[#3d2b1f] leading-relaxed max-w-3xl mx-auto"
    >
      Creating iconic hand-crafted perfume for men, Creed has established a legacy of acclaimed
      fragrance, cologne and aftershave for men. Explore our collection of bestselling Creed men's
      fragrances including Creed Aventus, Creed Bois du Portugal, Creed Viking, Creed Silver Mountain Water,
      the classic and woody Royal Oud and Green Irish Tweed.
    </motion.p>
  </motion.section>

  {/* Hero Image Scroll Section */}
  <motion.section
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.4 }}
    className="relative overflow-hidden w-full"
  >
    <div
      ref={scrollRef}
      className="flex overflow-x-scroll no-scrollbar scroll-smooth w-full h-[500px]"
    >
      {heroImages.map((src, index) => (
        <div
          key={index}
          className="w-full flex-shrink-0 h-[500px]"
        >
          <img
            src={src}
            alt={`hero-${index}`}
            className="w-screen  h-[620px] object-cover object-center"
          />
        </div>
      ))}
    </div>
  </motion.section>
        {/* Popular Products */}
        <motion.section className="mb-12">
          <motion.h2 className="text-2xl font-semibold text-[#79300f] dark:text-[#EDD1D1] mb-4">
            Popular Products
          </motion.h2>

          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4">
              {["Aventus", "Aventus", "Aventus", "Aventus"].map((label, idx) => (
                <button
                  key={idx}
                  className="bg-transparent border border-[#5e160e] dark:border-[#f6d110] text-[#79300f] dark:text-[#f6d110] px-4 py-2 rounded hover:bg-[#79300f] dark:hover:bg-[#dab61f] hover:text-white dark:hover:text-[#0d0603]"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="bg-[#f6d110] text-[#79300f] px-3 py-1 rounded-full text-sm shadow">
              28 Products
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14">
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.2 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
              >
                <ProductCard
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center mt-10">
            <button className="bg-transparent border border-[#79300f] dark:border-[#f6d110] text-[#79300f] dark:text-[#f6d110] px-4 py-2 rounded hover:bg-[#79300f] dark:hover:bg-[#dab61f] hover:text-white dark:hover:text-[#0d0603]">
              Load More
            </button>
            <div className="w-[60px] h-[2px] bg-[#f6d110] mt-1"></div>
            <p className="text-center text-[#3d2b1f] dark:text-white mt-4">Viewing 6 of 28</p>
          </div>
        </motion.section>

        {/* Exclusive Fragrances */}
        <motion.section className="mb-12">
          <motion.h2 className="text-2xl font-semibold text-[#8B5A2B] dark:text-[#EDD1D1] mb-4">
            Explore Exclusive Fragrances
          </motion.h2>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
            <div className="md:w-1/3">
              <img
                src={millesime}
                alt="Millésime Impérial"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-[#79300f] dark:text-[#EDD1D1] mb-2">
                Millésime Impérial
              </h3>
              <p className="text-[#3d2b1f] dark:text-white">
                Fresh and uplifting, Millésime Impérial radiates a sparkling scent with citrus and floral notes
                of iris, lemon, bergamot, mandarin orange and a touch of blackcurrant. This scent then settles into
                a rich, musky base of sandalwood, ambergris and musk. Housed in a shimmering marine accord, this
                fragrance evokes the golden sands of a warm, sunny beach. Millésime Impérial is the pinnacle of luxury.
              </p>
              <button className="mt-4 bg-transparent border border-[#79300f] dark:border-[#f6d110] text-[#79300f] dark:text-[#f6d110] px-4 py-2 rounded hover:bg-[#79300f] dark:hover:bg-[#dab61f] hover:text-white dark:hover:text-[#0d0603]">
                Shop Now
              </button>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default MensCollection;
