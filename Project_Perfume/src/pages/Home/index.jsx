


import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import InputField from '../../components/ui/InputField';
import Checkbox from '../../components/ui/Checkbox';
import { useEffect, useRef, useState } from 'react';

// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../../variants';
import { useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) {
      setDarkMode(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleSubscribe = () => {
    if (email && acceptTerms) {
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
      setAcceptTerms(false);
    } else {
      alert('Please enter your email and accept the terms and conditions.');
    }
  };


  const cards = [
    { id: 1, name: "Aventus", image: "/images/img_may_16_2025_113008_am_3.png" },
    { id: 2, name: "Oud Wood", image: "/images/Export2.png" },
    { id: 3, name: "Creed", image: "/images/img_chatgpt_image_may_16_2025_114211_am_1_1.png" },
    { id: 4, name: "Noir", image: "/images/Export.png" },
    { id: 5, name: "Sauvage", image: "/images/millesimeImperial.png" },
  ];



    const images = [
    "/images/img_may_16_2025_113008_am_3.png",
    "/images/img_chatgpt_image_may_15_2025_055628_pm_1_1.png",
    "/images/img_may_16_2025_113008_am_3.png",
    "/images/img_chatgpt_image_may_15_2025_055628_pm_1_1.png",
  ];


  const items = [
    {
      src: "/images/img_may_16_2025_113008_am_3.png",
      name: "Aventus",
      description:
        "Meet VESARII Ember Nocturne — a perfume forged in twilight, kissed by wild lavender, smoked cedar, and a whisper of fire-kissed amber. Designed to enchant from the very first breath.",
    },
    {
      src: "/images/img_chatgpt_image_may_15_2025_055628_pm_1_1.png",
      name: "Ember Blaze",
      description:
        "A bold fragrance for the confident soul, Ember Blaze blends smoky spice with hints of citrus and leather to create a trail that’s unforgettable.",
    },
    {
      src: "/images/img_may_16_2025_113008_am_3.png",
      name: "Twilight Dusk",
      description:
        "Soft yet mysterious, Twilight Dusk carries floral undertones wrapped in amber and woody warmth, perfect for evenings under the stars.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#79300f] dark:bg-[#0d0603] dark:text-[#f6d110]">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.4 }}>
          <HeroSection />
        </motion.div>



        {/* modified latest launch */}


    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      id="latest"
      className="bg-[#E7DDC6] dark:bg-[#021914] py-16 px-6 shadow"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          className="text-[150px] font-dm-serif leading-[275px] mb-8 text-center"
        >
          Latest Launch
        </motion.h2>

        {/* Horizontal Scroll - One Item at a Time */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="overflow-x-scroll scroll-smooth no-scrollbar"
          ref={scrollRef}
        >
          <div className="flex gap-16 w-fit px-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[1000px] flex items-start gap-12"
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-[309px] h-[309px] overflow-hidden"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Description on the Right */}
                <div className="max-w-[600px]">
                  <h3 className="text-[100px] font-alata leading-[138px] mb-4">
                    {item.name}
                  </h3>
                  <p className="text-[23px] font-dm-sans leading-[29px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>



        <motion.section variants={fadeIn("left", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.4 }} id="collection" className="bg-[#F2F2F2] dark:bg-[#220104] py-16 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div variants={fadeIn("left", 0.4)} className="flex-1">
              <h2 className="text-[80px] font-alata leading-[111px] mb-4">Aventus</h2>
              <p className="text-[30px] font-dm-sans leading-[39px] max-w-[504px] mb-8">
                Meet VESARII Ember Nocturne — a perfume forged in twilight, kissed by wild lavender, smoked cedar, and a whisper of fire-kissed amber.<br />
                Designed to enchant from the very first breadth.
              </p>
              <Button variant="secondary"><a href="/all-fragrances">Discover More</a></Button>
            </motion.div>
            <motion.div variants={fadeIn("up", 0.4)} className="flex-1 flex justify-center">
              <img src="/images/img_chatgpt_image_may_15_2025_052217_pm_1_1.png" alt="Luxury" className="w-[724px] h-[524px]" />
            </motion.div>
            <motion.div variants={fadeIn("right", 0.4)} className="flex-1 text-right">
              <h3 className="text-[80px] font-dm-serif leading-[109px]">Luxury Collection</h3>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.4 }} className="bg-[#E7DDC6] dark:bg-[#021612] py-16 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div variants={fadeIn("left", 0.4)} className="flex-1">
              <h2 className="text-[80px] font-dm-serif leading-[109px]">Signature Collection</h2>
            </motion.div>
            <motion.div variants={fadeIn("up", 0.4)} className="flex-1 flex justify-center">
              <img src="/images/img_chatgpt_image_may_15_2025_055628_pm_1_1.png" alt="Signature" className="w-[724px] h-[524px]" />
            </motion.div>
            <motion.div variants={fadeIn("right", 0.4)} className="flex-1 text-right">
              <h3 className="text-[100px] font-alata leading-[138px] mb-4">Aventus</h3>
              <p className="text-[30px] font-dm-sans leading-[39px] max-w-[504px] ml-auto mb-8">Meet VESARII Ember Nocturne - a perfume foged in twiligent, kissed by  wild lavender, smoked cedar, and a whisper of fire-kissed amber. Designed to enchant from the very first breadth.</p>
              <Button variant="secondary"><a href="/all-fragrances">Discover More</a></Button>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          id="bestsellers"
          className="bg-[#E7DDC6] dark:bg-[#220104] py-16 px-6 relative"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              className="text-[100px] md:text-[150px] font-dm-serif leading-[120px] md:leading-[206px] mb-12"
            >
              Our Bestsellers
            </motion.h2>

            <div className="relative">
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#79300f] text-white p-2 rounded-full"
                onClick={() => scrollRef.current.scrollBy({ left: -309, behavior: "smooth" })}
              >
                <ChevronLeft size={32} />
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#79300f] text-white p-2 rounded-full"
                onClick={() => scrollRef.current.scrollBy({ left: 309, behavior: "smooth" })}
              >
                <ChevronRight size={32} />
              </button>
              <div ref={scrollRef} className="overflow-x-scroll scroll-smooth no-scrollbar px-8">
                <motion.div variants={fadeIn("up", 0.4)} className="flex gap-8 whitespace-nowrap">
                  {cards.map((card, i) => (
                    <motion.div
                      key={card.id}
                      variants={fadeIn("up", 0.5 + i * 0.2)}
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex-shrink-0 w-[309px] text-center"
                    >
                      <img src={card.image} alt={card.name} className="w-[309px] h-[309px] mb-4 mx-auto" />
                      <h3 className="text-[25px] font-alata leading-[69px]">{card.name}</h3>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            <Button variant="secondary" className="text-[30px] md:text-[40px] leading-[56px] mt-12">
              <a href="/all-fragrances">Discover More</a>
            </Button>
          </div>
        </motion.section>




        <motion.section variants={fadeIn("left", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.4 }} id="about" className="bg-[#E7DDC6] dark:bg-[#021914] py-16 px-6">
          <div className="max-w-7xl mx-auto flex items-center">
            <motion.div variants={fadeIn("left", 0.4)} className="flex-1">
              <img src="/images/img_chatgpt_image_may_16_2025_115910_am_1_2.png" alt="About us" className="w-[876px] h-[459px]" />
            </motion.div>
            <motion.div variants={fadeIn("right", 0.4)} className="flex-1 pl-16">
              <h2 className="text-[150px] font-dm-serif leading-[206px] mb-8">About Us</h2>
              <p className="text-[25px] font-joan leading-[32px] tracking-[1px] max-w-[502px]">
                At Oloréve, we believe that fragrance is not just a scent; it's a reflection of one's inner elegance, a journey through the senses. Our story is one of passion, dedication, and craftsmanship. Born out of a desire to create scents that embody luxury, sustainability, and beauty,<br />
                <br />
                Founded with the vision of offering timeless elegance, Olereve's fragnances are inspired by the beauty of nature and crafted with the utmost care.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.4 }} className="bg-[#F2F2F2] dark:bg-[#220104] py-16 px-6">
          <motion.div variants={fadeIn("up", 0.4)} className="max-w-4xl mx-auto text-center">
            <h2 className="text-[100px] font-dm-serif leading-[138px] mb-8">Join Exclusive Circle</h2>
            <p className="text-[30px] font-joan leading-[38px] tracking-[1px] mb-12 max-w-[840px] mx-auto">
              Subscribe to our newsletter for early access to limited edition releases, private events, and the secrets behind our scent creations.
            </p>
            <div className="mb-8 ">
              <div className="flex max-w-[876px] mx-auto">
                <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 rounded-l-lg bg-[#E7DDC6] " />
                <Button onClick={handleSubscribe} className="bg-[#E7DDC6] dark:bg-[#79300f] text-white text-[30px] font-joan px-8 py-4 rounded-r-lg">
                  Subscribe
                </Button>
              </div>
            </div>
            <Checkbox checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} label="By Checking the box, I accept the terms and conditions." className="justify-center" />
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;