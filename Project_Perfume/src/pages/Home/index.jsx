


import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import InputField from '../../components/ui/InputField';
import Checkbox from '../../components/ui/Checkbox';
import { useEffect, useState } from 'react';

// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../../variants';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#fff9c7] text-[#79300f] dark:bg-[#0d0603] dark:text-[#f6d110]">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.4 }}>
          <HeroSection />
        </motion.div>

        <motion.section variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} id="latest" className="bg-[#f6d110] dark:bg-[#021914] py-16 px-6 shadow">
          <div className="max-w-7xl mx-auto">
            <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.7 }} className="text-[150px] font-dm-serif leading-[275px] mb-8">
              Latest Launch
            </motion.h2>
            <motion.div variants={fadeIn("up", 0.4)} className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <motion.img variants={fadeIn("left", 0.6)} src="/images/img_may_16_2025_113008_am_3.png" alt="Aventus small" className="w-[309px] h-[309px]" />
                <motion.img variants={fadeIn("right", 0.6)} src="/images/img_chatgpt_image_may_15_2025_055628_pm_1_1.png" alt="Aventus main" className="w-[542px] h-[542px]" />
              </div>
              <motion.div variants={fadeIn("up", 0.6)} className="text-right">
                <h3 className="text-[100px] font-alata leading-[138px] mb-4">Aventus</h3>
                <p className="text-[23px] font-dm-sans leading-[29px] max-w-[512px] ml-auto">
                  Meet VESARII Ember Nocturne — a perfume forged in twilight, kissed by wild lavender,
                  smoked cedar, and a whisper of fire-kissed amber.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={fadeIn("left", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.4 }} id="collection" className="bg-[#fff9c7] dark:bg-[#220104] py-16 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div variants={fadeIn("left", 0.4)} className="flex-1">
              <h2 className="text-[80px] font-alata leading-[111px] mb-4">Aventus</h2>
              <p className="text-[30px] font-dm-sans leading-[39px] max-w-[504px] mb-8">
                Meet VESARII Ember Nocturne — a perfume forged in twilight...
              </p>
              <Button variant="secondary"><a href="/all-fragrances">Discover More</a></Button>
            </motion.div>
            <motion.div variants={fadeIn("up", 0.4)} className="flex-1 flex justify-center">
              <img src="/images/img_chatgpt_image_may_15_2025_052217_pm_1_1.png" alt="Luxury" className="w-[780px] h-[780px]" />
            </motion.div>
            <motion.div variants={fadeIn("right", 0.4)} className="flex-1 text-right">
              <h3 className="text-[80px] font-dm-serif leading-[109px]">Luxury Collection</h3>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.4 }} className="bg-[#f6d110] dark:bg-[#021612] py-16 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div variants={fadeIn("left", 0.4)} className="flex-1">
              <h2 className="text-[80px] font-dm-serif leading-[109px]">Signature Collection</h2>
            </motion.div>
            <motion.div variants={fadeIn("up", 0.4)} className="flex-1 flex justify-center">
              <img src="/images/img_chatgpt_image_may_15_2025_055628_pm_1_1.png" alt="Signature" className="w-[724px] h-[724px]" />
            </motion.div>
            <motion.div variants={fadeIn("right", 0.4)} className="flex-1 text-right">
              <h3 className="text-[100px] font-alata leading-[138px] mb-4">Aventus</h3>
              <p className="text-[30px] font-dm-sans leading-[39px] max-w-[504px] ml-auto mb-8">Meet VESARII Ember Nocturne...</p>
              <Button variant="secondary"><a href="/all-fragrances">Discover More</a></Button>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.4 }} id="bestsellers" className="bg-[#fff9c7] dark:bg-[#220104] py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2 variants={fadeIn("up", 0.3)} className="text-[150px] font-dm-serif leading-[206px] mb-16 shadow">Our Bestsellers</motion.h2>
            <motion.div variants={fadeIn("up", 0.4)} className="flex justify-center items-end space-x-8 mb-8">
              {[1, 2, 3].map((_, i) => (
                <motion.div key={i} variants={fadeIn("up", 0.5 + i * 0.2)}>
                  <Card variant="product" className="text-center">
                    <img src="/images/img_may_16_2025_113008_am_3_1.png" alt="Aventus" className="w-[309px] h-[309px] mb-4 mx-auto" />
                    <h3 className="text-[50px] font-alata leading-[69px]">Aventus</h3>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <Button variant="secondary" className="text-[40px] leading-[56px]">
              <a href="/all-fragrances">Discover More</a>
            </Button>
          </div>
        </motion.section>

        <motion.section variants={fadeIn("left", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.4 }} id="about" className="bg-[#f6d110] dark:bg-[#021914] py-16 px-6">
          <div className="max-w-7xl mx-auto flex items-center">
            <motion.div variants={fadeIn("left", 0.4)} className="flex-1">
              <img src="/images/img_chatgpt_image_may_16_2025_115910_am_1_2.png" alt="About us" className="w-[876px] h-[459px]" />
            </motion.div>
            <motion.div variants={fadeIn("right", 0.4)} className="flex-1 pl-16">
              <h2 className="text-[150px] font-dm-serif leading-[206px] mb-8">About Us</h2>
              <p className="text-[25px] font-joan leading-[32px] tracking-[1px] max-w-[502px]">
                At Oloréve, we believe that fragrance is not just a scent...
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.4 }} className="bg-[#fff9c7] dark:bg-[#220104] py-16 px-6">
          <motion.div variants={fadeIn("up", 0.4)} className="max-w-4xl mx-auto text-center">
            <h2 className="text-[100px] font-dm-serif leading-[138px] mb-8">Join Exclusive Circle</h2>
            <p className="text-[30px] font-joan leading-[38px] tracking-[1px] mb-12 max-w-[840px] mx-auto">
              Subscribe to our newsletter for early access to limited edition releases...
            </p>
            <div className="mb-8">
              <div className="flex max-w-[876px] mx-auto">
                <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 rounded-l-lg" />
                <Button onClick={handleSubscribe} className="bg-[#f6d110] dark:bg-[#79300f] text-white text-[30px] font-joan px-8 py-4 rounded-r-lg">
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
