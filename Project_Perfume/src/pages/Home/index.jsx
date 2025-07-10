



import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import InputField from '../../components/ui/InputField';
import Checkbox from '../../components/ui/Checkbox';
import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) setDarkMode(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleSubscribe = () => {
    if (email && acceptTerms) {
      alert('Thank you for subscribing!');
      setEmail('');
      setAcceptTerms(false);
    } else alert('Please enter email and accept terms.');
  };

  const cards = [
    { id: 1, name: "Aventus", image: "/images/img_may_16_2025_113008_am_3.png" },
    { id: 2, name: "Oud Wood", image: "/images/Export2.png" },
    { id: 3, name: "Creed", image: "/images/img_chatgpt_image_may_16_2025_114211_am_1_1.png" },
  ];

  const items = [
    {
      src: "/images/img_may_16_2025_113008_am_3.png",
      name: "Aventus",
      description: "Meet VESARII Ember Nocturne — a perfume forged in twilight, kissed by wild lavender, smoked cedar, and a whisper of fire-kissed amber. Designed to enchant from the very first breath.",
    },
    {
      src: "/images/img_chatgpt_image_may_15_2025_055628_pm_1_1.png",
      name: "Ember Blaze",
      description: "A bold fragrance for the confident soul, Ember Blaze blends smoky spice with hints of citrus and leather to create a trail that’s unforgettable.",
    },
  ];

  
  

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#79300f] dark:bg-[#0d0603] dark:text-[#f6d110]">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.4 }}>
          <HeroSection />
        </motion.div>

        {/* Fragrant Favourites */}
        <motion.section variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" className="bg-[#F2F2F2] dark:bg-[#0d0603] py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-[60px] font-dm-serif mb-12">Fragrant Favourites</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-[#E7DDC6] p-6 rounded-lg shadow text-left">
                  <div className="mb-4 font-bold text-sm text-red-600 uppercase">
                    {i === 0 ? 'Bestseller' : i === 1 ? 'New Release' : 'Bestseller'}
                  </div>
                  <img src="/images/img_may_16_2025_113008_am_3.png" alt="Aventus" className="h-[300px] w-full object-contain mb-4" />
                  <h3 className="text-[30px] font-alata">Aventus</h3>
                  <p className="text-[20px]">Dry Woods, Fruit, Citrus & Fruity</p>
                  <p className="text-[24px] font-semibold my-2">$455</p>
                  <Button className="mt-2">Add to Cart</Button>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Marmalade & Mini Collection */}
        {/* <motion.section variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" className="bg-[#E7DDC6] dark:bg-[#021914] py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {['Orange Marmalade Cologne', 'New Mini Collection'].map((label, i) => (
              <div key={i} className="text-center">
                <img src="/images/WhatsApp Image 2025-05-02 at 16.59.15_10065fa1.png" alt={label} className="w-full h-[400px] object-cover mb-4" />
                <h3 className="text-[30px] font-alata mb-2">{label}</h3>
                <Button variant="primary">Shop Now</Button>
              </div>
            ))}
          </div>
        </motion.section> */}

            <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-[#F2F2F2] dark:bg-[#021914] py-16 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Orange Marmalade Cologne */}
        <div className="text-center">
          <img
            src="/images/WhatsApp Image 2025-05-02 at 16.59.15_10065fa1.png"
            alt="Orange Marmalade Cologne"
            className="w-full h-[400px] object-cover mb-4 rounded-xl"
          />
          <h3 className="text-[20px] md:text-[24px] font-alata mb-3">
            Orange Marmalade Cologne
          </h3>
          <Button variant="primary" className="bg-[#6E3B23] text-white">
            Shop Now
          </Button>
        </div>

        {/* New Mini Collection */}
        <div className="text-center">
          <img
            src="/images/WhatsApp Image 2025-05-02 at 16.59.15_10065fa1.png"
            alt="New Mini Collection"
            className="w-full h-[400px] object-cover mb-4 rounded-xl"
          />
          <h3 className="text-[20px] md:text-[24px] font-alata mb-3">
            New Mini Collection
          </h3>
          <Button variant="primary" className="bg-[#6E3B23] text-white">
            Shop Now
          </Button>
        </div>
      </div>
    </motion.section>

        {/* The Scents of Summer */}
        <motion.section variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" className="bg-[#F2F2F2] dark:bg-[#0d0603] py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-[60px] font-dm-serif mb-12">The Scents of Summer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-[#E7DDC6] p-6 rounded-lg shadow text-left">
                  <img src="/images/img_may_16_2025_113008_am_3.png" alt="Aventus" className="h-[300px] w-full object-contain mb-4" />
                  <h3 className="text-[30px] font-alata">Aventus</h3>
                  <p className="text-[20px]">An expression of Lush Orange. Sharp yet sweet.</p>
                  <p className="text-[24px] font-semibold my-2">$455</p>
                  <Button className="mt-2">Add to Cart</Button>
                </div>
              ))}
            </div>
          </div>
        </motion.section>


        {/* Signature Collection */}
<motion.section
  variants={fadeIn("up", 0.2)}
  initial="hidden"
  whileInView="show"
  className="bg-[#F2F2F2] dark:bg-[#0d0603] py-16 px-6"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div className="text-left">
      <h3 className="text-lg text-[#79300f] font-semibold uppercase mb-3 dark:text-[#f6d110]">Discover Our Signature Collection</h3>
      <p className="text-[20px] mb-6 dark:text-white">
        Meet VESARII Ember Nocturne — a perfume forged in twilight, kissed by wild lavender.
      </p>
      <Button variant="primary">Shop Now</Button>
    </div>
    <img
      src="/images/img_may_16_2025_113008_am_3.png"
      alt="VESARII Perfume"
      className="rounded-lg object-cover w-full h-auto"
    />
  </div>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-16 items-center">
    <img
      src="/images/WhatsApp Image 2025-05-02 at 16.59.15_10065fa1.png"
      alt="VESARII Perfume"
      className="rounded-lg object-cover w-full h-auto"
    />
    <div className="bg-[#F5E9DC] p-8 rounded-lg text-left dark:bg-[#291e1a]">
      <span className="text-xs uppercase text-[#79300f] tracking-widest dark:text-[#f6d110]">A Vesarii Masterpiece</span>
      <h3 className="text-[28px] font-bold mt-2 mb-4 dark:text-white">
        CRAFTED TO CAPTIVATE. <br /> WORN TO REMEMBER.
      </h3>
      <p className="text-[18px] dark:text-white">
        Meet VESARII Ember Nocturne — a perfume forged in twilight, kissed by wild lavender.
      </p>
      <Button className="mt-4">Find out more</Button>
    </div>
  </div>
</motion.section>

{/* Newsletter / Join Exclusive Circle */}
<motion.section
  variants={fadeIn("up", 0.2)}
  initial="hidden"
  whileInView="show"
  className="bg-[#F2F2F2] dark:bg-[#0d0603] py-20 px-6"
>
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-[40px] font-dm-serif mb-4 dark:text-white">Join Exclusive Circle</h2>
    <p className="text-[18px] mb-6 dark:text-white">
      Subscribe to our newsletter for early access to limited edition releases, private events,
      and the secrets behind our scent creations.
    </p>

    <div className="flex items-center gap-4 justify-center mb-4">
      <InputField
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white text-black px-4 py-2 rounded border"
      />
      <Button onClick={handleSubscribe}>Subscribe</Button>
    </div>

    <div className="flex items-center justify-center gap-2">
      <Checkbox
        checked={acceptTerms}
        onChange={(e) => setAcceptTerms(e.target.checked)}
      />
      <span className="text-sm dark:text-white">
        By checking the box, I accept the terms and conditions.
      </span>
    </div>
  </div>
</motion.section>


        {/* Signature Collection - already exists */}
        {/* Newsletter section - already exists */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
