// import React from 'react';
// import Header from '../../components/common/Header';
// import ProductCard from './Production';
// import ImageUpload from './ImageUpload';
// import './App.css';

// const App = () => {
//   const products = [
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", imageUrl: "https://picsum.photos/200/300?random=1" },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", imageUrl: "https://picsum.photos/200/300?random=2" },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", imageUrl: "https://picsum.photos/200/300?random=3" },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", imageUrl: "https://picsum.photos/200/300?random=4" },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", imageUrl: "https://picsum.photos/200/300?random=5" },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", imageUrl: "https://picsum.photos/200/300?random=6" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#fff9c7]">
//       <Header />
//       <main className="max-w-7xl mx-auto py-12 px-4">
//         {/* Women's Fragrances Section */}
//         <section className="mb-12">
//           <h1 className="text-3xl font-semibold text-gray-800 mb-4">Women's Fragrances</h1>
//           <p className="text-gray-600">
//             Creating iconic hand-crafted perfume for men, Creed has established a legacy of acclaimed
//             fragrance, cologne and aftershave for men. Explore our collection of bestselling Creed men's
//             fragrances including Creed Aventus, Creed Bois du Portugal, Creed Viking, Creed Silver Mountain Water,
//             the classic and woody Royal Oud and Green Irish Tweed.
//           </p>
//         </section>

//         {/* Popular Products Section */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Popular Products</h2>
//           <div className="flex space-x-4 mb-6">
//             <button className="bg-white border border-gray-300 px-4 py-2 rounded">Aventus</button>
//             <button className="bg-transparent border border-gray-300 px-4 py-2 rounded">Aventus</button>
//             <button className="bg-transparent border border-gray-300 px-4 py-2 rounded">Aventus</button>
//           </div>
//           <div className="grid grid-cols-3 gap-8">
//             {products.map((product, index) => (
//               <ProductCard
//                 key={index}
//                 name={product.name}
//                 price={product.price}
//                 description={product.description}
//               />
//             ))}
//           </div>
//           <div className="flex justify-center mt-6">
//             <button className="bg-transparent border border-gray-700 text-gray-700 px-4 py-2 rounded hover:bg-gray-700 hover:text-white">
//               Load More
//             </button>
//           </div>
//           <p className="text-center text-gray-600 mt-4">Viewing 6 of 28</p>
//         </section>

//         {/* Exclusive Fragrances Section */}
//         <section>
//           <h2 className="text-2xl font-semibold text-[#8B5A2B] mb-4">Explore Exclusive Fragrances</h2>
//           <div className="flex space-x-8">
//             <div className="w-1/3">
//               <div className="w-full h-64 bg-gray-200 rounded-lg mb-4"></div>
//             </div>
//             <div className="w-2/3">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Millésime Impérial</h3>
//               <p className="text-gray-600">
//                 Fresh and uplifting, Millésime Impérial radiates a sparkling scent with citrus and floral notes
//                 of iris, lemon, bergamot, mandarin orange and a touch of blackcurrant. This scent then settles into
//                 a rich, musky base of sandalwood, ambergris and musk. Housed in a shimmering marine accord, this
//                 fragrance evokes the golden sands of a warm, sunny beach. Millésime Impérial is the pinnacle of luxury.
//               </p>
//               <button className="mt-4 bg-transparent border border-gray-700 text-gray-700 px-4 py-2 rounded hover:bg-gray-700 hover:text-white">
//                 Shop Now
//               </button>
//             </div>
//           </div>
//         </section>
//          <ImageUpload />
//       </main>
//     </div>
//   );
// };

// export default App;





// import React from 'react';
// import Header from '../../components/common/Header';
// import ProductCard from './Production';
// import ImageUpload from './ImageUpload';
// import './App.css';

// // Import local images
// import aventus1 from './assets/aventus1.jpg';
// import aventus2 from './assets/aventus1.jpg';
// import aventus3 from './assets/aventus1.jpg';
// import aventus4 from './assets/aventus1.jpg';
// import aventus5 from './assets/aventus1.jpg';
// import aventus6 from './assets/aventus1.jpg';
// import millesime from './assets/millesime.jpg';
// import Footer from '@/components/common/Footer';

// const Womenscollection = () => {
//   const products = [
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus1 },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus2 },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus3 },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus4 },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus5 },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus6 },
//   ];

//   return (
//     <div>
//       <Header />
//       <main className="max-w-7xl mx-auto py-12 px-4">
//         {/* Women's Fragrances Section */}
//         <section className="mb-12">
//           <h1 className="text-3xl font-semibold text-gray-800 mb-4">Women's Fragrances</h1>
//           <p className="text-gray-600">
//             Creating iconic hand-crafted perfume for men, Creed has established a legacy of acclaimed
//             fragrance, cologne and aftershave for men. Explore our collection of bestselling Creed men's
//             fragrances including Creed Aventus, Creed Bois du Portugal, Creed Viking, Creed Silver Mountain Water,
//             the classic and woody Royal Oud and Green Irish Tweed.
//           </p>
//         </section>

//         {/* Popular Products Section */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Popular Products</h2>
//           <div className="flex space-x-4 mb-6">
//             <button className="bg-white border border-gray-300 px-4 py-2 rounded">Aventus</button>
//             <button className="bg-transparent border border-gray-300 px-4 py-2 rounded">Aventus</button>
//             <button className="bg-transparent border border-gray-300 px-4 py-2 rounded">Aventus</button>
//           </div>
//           <div className="grid grid-cols-3 gap-8">
//             {products.map((product, index) => (
//               <ProductCard
//                 key={index}
//                 name={product.name}
//                 price={product.price}
//                 description={product.description}
//                 image={product.image}
//               />
//             ))}
//           </div>
//           <div className="flex justify-center mt-6">
//             <button className="bg-transparent border border-gray-700 text-gray-700 px-4 py-2 rounded hover:bg-gray-700 hover:text-white">
//               Load More
//             </button>
//           </div>
//           <p className="text-center text-gray-600 mt-4">Viewing 6 of 28</p>
//         </section>

//         {/* Exclusive Fragrances Section */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold text-[#8B5A2B] mb-4">Explore Exclusive Fragrances</h2>
//           <div className="flex space-x-8">
//             <div className="w-460px h-690px">
//               <img
//                 src={millesime}
//                 alt="Millésime Impérial"
//                 className="w-full h-64 object-cover rounded-lg mb-4"
//               />
//             </div>
//             <div className="w-2/3">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Millésime Impérial</h3>
//               <p className="text-gray-600">
//                 Fresh and uplifting, Millésime Impérial radiates a sparkling scent with citrus and floral notes
//                 of iris, lemon, bergamot, mandarin orange and a touch of blackcurrant. This scent then settles into
//                 a rich, musky base of sandalwood, ambergris and musk. Housed in a shimmering marine accord, this
//                 fragrance evokes the golden sands of a warm, sunny beach. Millésime Impérial is the pinnacle of luxury.
//               </p>
//               <button className="mt-4 bg-transparent border border-gray-700 text-gray-700 px-4 py-2 rounded hover:bg-gray-700 hover:text-white">
//                 Shop Now
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Image Upload Section */}
//         {/* <ImageUpload /> */}
//       </main>
//       <Footer/>
//     </div>
//   );
// };

// export default Womenscollection;





// import React, { useState, useEffect } from 'react';
// import Header from '../../components/common/Header';
// import ProductCard from './Production';
// import ImageUpload from './ImageUpload';
// import Footer from '@/components/common/Footer';
// import './App.css';

// // Import local images
// import aventus1 from './assets/aventus1.jpg';
// import aventus2 from './assets/aventus1.jpg';
// import aventus3 from './assets/aventus1.jpg';
// import aventus4 from './assets/aventus1.jpg';
// import aventus5 from './assets/aventus1.jpg';
// import aventus6 from './assets/aventus1.jpg';
// import millesime from './assets/millesime.jpg';

// const WomensCollection = () => {
//   const [darkMode, setDarkMode] = useState(false); // Initialize darkMode state

//   // Load saved dark mode preference from localStorage
//   useEffect(() => {
//     const stored = localStorage.getItem('darkMode');
//     if (stored !== null) {
//       setDarkMode(JSON.parse(stored));
//     }
//   }, []);

//   // Apply dark mode class to document and save preference to localStorage
//   useEffect(() => {
//     localStorage.setItem('darkMode', JSON.stringify(darkMode));
//     document.documentElement.classList.toggle('dark', darkMode);
//   }, [darkMode]);

//   const products = [
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus1 },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus2 },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus3 },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus4 },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus5 },
//     { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus6 },
//   ];

//   return (
//     <div className="min-h-screen bg-[#fff9c7] text-[#79300f] dark:bg-[#0d0603] dark:text-[#f6d110]">
//       <Header darkMode={darkMode} setDarkMode={setDarkMode} />
//       <main className="max-w-7xl mx-auto py-12 px-4">
//         {/* Women's Fragrances Section */}
//         <section className="mb-12">
//           <h1 className="text-3xl font-semibold text-[#79300f] dark:text-[#f6d110] mb-4">Women's Fragrances</h1>
//           <p className="text-[#3d2b1f] dark:text-white">
//             Creating iconic hand-crafted perfume for women, Creed has established a legacy of acclaimed
//             fragrances for women. Explore our collection of bestselling Creed women's fragrances including
//             Creed Aventus for Her, Creed Love in White, Creed Spring Flower, Creed Fleurissimo, and the elegant
//             Carmina, crafted with timeless sophistication and floral elegance.
//           </p>
//         </section>

//         {/* Popular Products Section */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold text-[#79300f] dark:text-[#f6d110] mb-4">Popular Products</h2>
//           <div className="flex space-x-4 mb-6">
//             <button className="bg-[#f6d110] dark:bg-[#442b03] border border-[#5e160e] dark:border-[#f6d110] text-[#79300f] dark:text-[#f6d110] px-4 py-2 rounded hover:bg-[#79300f] dark:hover:bg-[#dab61f] hover:text-white dark:hover:text-[#0d0603]">
//               Aventus
//             </button>
//             <button className="bg-transparent border border-[#5e160e] dark:border-[#f6d110] text-[#79300f] dark:text-[#f6d110] px-4 py-2 rounded hover:bg-[#79300f] dark:hover:bg-[#dab61f] hover:text-white dark:hover:text-[#0d0603]">
//               Aventus
//             </button>
//             <button className="bg-transparent border border-[#5e160e] dark:border-[#f6d110] text-[#79300f] dark:text-[#f6d110] px-4 py-2 rounded hover:bg-[#79300f] dark:hover:bg-[#dab61f] hover:text-white dark:hover:text-[#0d0603]">
//               Aventus
//             </button>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {products.map((product, index) => (
//               <ProductCard
//                 key={index}
//                 name={product.name}
//                 price={product.price}
//                 description={product.description}
//                 image={product.image}
//               />
//             ))}
//           </div>
//           <div className="flex justify-center mt-6">
//             <button className="bg-transparent border border-[#79300f] dark:border-[#f6d110] text-[#79300f] dark:text-[#f6d110] px-4 py-2 rounded hover:bg-[#79300f] dark:hover:bg-[#dab61f] hover:text-white dark:hover:text-[#0d0603]">
//               Load More
//             </button>
//           </div>
//           <p className="text-center text-[#3d2b1f] dark:text-white mt-4">Viewing 6 of 28</p>
//         </section>

//         {/* Exclusive Fragrances Section */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold text-[#8B5A2B] dark:text-[#f6d110] mb-4">Explore Exclusive Fragrances</h2>
//           <div className="flex space-x-8">
//             <div className="w-1/3">
//               <img
//                 src={millesime}
//                 alt="Millésime Impérial"
//                 className="w-full h-64 object-cover rounded-lg mb-4"
//               />
//             </div>
//             <div className="w-2/3">
//               <h3 className="text-xl font-semibold text-[#79300f] dark:text-[#f6d110] mb-2">Millésime Impérial</h3>
//               <p className="text-[#3d2b1f] dark:text-white">
//                 Fresh and uplifting, Millésime Impérial radiates a sparkling scent with citrus and floral notes
//                 of iris, lemon, bergamot, mandarin orange and a touch of blackcurrant. This scent then settles into
//                 a rich, musky base of sandalwood, ambergris and musk. Housed in a shimmering marine accord, this
//                 fragrance evokes the golden sands of a warm, sunny beach. Millésime Impérial is the pinnacle of luxury.
//               </p>
//               <button className="mt-4 bg-transparent border border-[#79300f] dark:border-[#f6d110] text-[#79300f] dark:text-[#f6d110] px-4 py-2 rounded hover:bg-[#79300f] dark:hover:bg-[#dab61f] hover:text-white dark:hover:text-[#0d0603]">
//                 Shop Now
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Image Upload Section */}
//         {/* <ImageUpload /> */}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default WomensCollection;




import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import ProductCard from './Production';
import ImageUpload from './ImageUpload';
import Footer from '@/components/common/Footer';
import './App.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// Import local images
import aventus1 from './assets/aventus1.jpg';
import aventus2 from '../../../public/images/amberNocturne4.png';
import aventus3 from '../../../public/images/millesimeImperial.png';
import aventus4 from '../../../public/images/amberNocturne4.png';
import aventus5 from './assets/aventus1.jpg';
import aventus6 from './assets/aventus1.jpg';
import millesime from './assets/millesime.jpg';

const WomensCollection = () => {
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
    { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus1 },
    { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus2 },
    { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus3 },
    { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus4 },
    { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus5 },
    { name: "Aventus", price: 455, description: "Dry Woods, Fresh, Citrus & Fruity", image: aventus6 },
  ];

  return (
    <div className="min-h-screen bg-[#fff9c7] text-[#79300f] dark:bg-[#220104] dark:text-[#f6d110]">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-7xl mx-auto py-12 px-4">
        {/* Women's Fragrances Section */}
        <motion.section
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="mb-12"
        >
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-3xl font-semibold text-[#79300f] dark:text-[#EDD1D1] mb-4"
          >
            Women's Fragrances
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="text-[#3d2b1f] dark:text-white"
          >
            Creating iconic hand-crafted perfume for women, Creed has established a legacy of acclaimed
            fragrances for women. Explore our collection of bestselling Creed women's fragrances including
            Creed Aventus for Her, Creed Love in White, Creed Spring Flower, Creed Fleurissimo, and the elegant
            Carmina, crafted with timeless sophistication and floral elegance.
          </motion.p>
        </motion.section>

        {/* Popular Products Section */}
        <motion.section
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="mb-12"
        >
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-2xl font-semibold text-[#79300f] dark:text-[#EDD1D1] mb-4"
          >
            Popular Products
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="flex space-x-4 mb-6"
          >
            <motion.button
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="bg-[#f6d110] dark:bg-[#442b03] border border-[#5e160e] dark:border-[#f6d110] text-[#79300f] dark:text-[#f6d110] px-4 py-2 rounded hover:bg-[#79300f] dark:hover:bg-[#dab61f] hover:text-white dark:hover:text-[#0d0603]"
            >
              Aventus
            </motion.button>
            <motion.button
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="bg-transparent border border-[#5e160e] dark:border-[#f6d110] text-[#79300f] dark:text-[#f6d110] px-4 py-2 rounded hover:bg-[#79300f] dark:hover:bg-[#dab61f] hover:text-white dark:hover:text-[#0d0603]"
            >
              Aventus
            </motion.button>
            <motion.button
              variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="bg-transparent border border-[#5e160e] dark:border-[#f6d110] text-[#79300f] dark:text-[#f6d110] px-4 py-2 rounded hover:bg-[#79300f] dark:hover:bg-[#dab61f] hover:text-white dark:hover:text-[#0d0603]"
            >
              Aventus
            </motion.button>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.4 + index * 0.2)}
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
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="flex justify-center mt-6"
          >
            <motion.button
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="bg-transparent border border-[#79300f] dark:border-[#f6d110] text-[#79300f] dark:text-[#f6d110] px-4 py-2 rounded hover:bg-[#79300f] dark:hover:bg-[#dab61f] hover:text-white dark:hover:text-[#0d0603]"
            >
              Load More
            </motion.button>
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="text-center text-[#3d2b1f] dark:text-white mt-4"
          >
            Viewing 6 of 28
          </motion.p>
        </motion.section>

        {/* Exclusive Fragrances Section */}
        <motion.section
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="mb-12"
        >
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-2xl font-semibold text-[#8B5A2B] dark:text-[#EDD1D1] mb-4"
          >
            Explore Exclusive Fragrances
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="flex space-x-8"
          >
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="w-1/3"
            >
              <motion.img
                variants={fadeIn("left", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                src={millesime}
                alt="Millésime Impérial"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="w-2/3"
            >
              <motion.h3
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                className="text-xl font-semibold text-[#79300f] dark:text-[#f6d110] mb-2"
              >
                Millésime Impérial
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                className="text-[#3d2b1f] dark:text-white"
              >
                Fresh and uplifting, Millésime Impérial radiates a sparkling scent with citrus and floral notes
                of iris, lemon, bergamot, mandarin orange and a touch of blackcurrant. This scent then settles into
                a rich, musky base of sandalwood, ambergris and musk. Housed in a shimmering marine accord, this
                fragrance evokes the golden sands of a warm, sunny beach. Millésime Impérial is the pinnacle of luxury.
              </motion.p>
              <motion.button
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                className="mt-4 bg-transparent border border-[#79300f] dark:border-[#f6d110] text-[#79300f] dark:text-[#f6d110] px-4 py-2 rounded hover:bg-[#79300f] dark:hover:bg-[#dab61f] hover:text-white dark:hover:text-[#0d0603]"
              >
                <a href="/product-cart">
                 Shop Now
                </a>
               
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Image Upload Section */}
        {/* <ImageUpload /> */}
      </main>
      <Footer />
    </div>
  );
};

export default WomensCollection;