// import React from 'react';
// import Button from '../ui/Button';

// const HeroSection = () => {
//   return (
//     <section className="bg-[#fff9c7] py-16 px-6">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Left content */}
//         <div className="flex-1">
//           <h1 className="text-[60px] font-joan text-[#792f0f] leading-[78px] mb-4">
//             VESARII
//           </h1>
//           <p className="text-[25px] font-joan text-[#79300f] leading-[32px] mb-8 max-w-[351px]">
//             Oloréve crafts luxury fragrances that capture the essence of elegance and sustainability.
//           </p>
//           <Button variant="primary">
//             <a href="/all-fragrances">Discover More</a>
            
//           </Button>
//         </div>
        
//         {/* Center image */}
//         <div className="flex-1 flex justify-center">
//           <img 
//             src="/images/img_image.png" 
//             alt="Vesarii fragrance bottle" 
//             className="w-[483px] h-[474px] rounded-full object-cover"
//           />
//         </div>
        
//         {/* Right content */}
//         <div className="flex-1 text-right">
//           <h2 className="text-[30px] font-joan text-[#792f0f] leading-[38px] mb-4 max-w-[406px] ml-auto">
//             Discover the Fragrance of Elegance
//           </h2>
//           <p className="text-[20px] font-dm-sans text-[#79300f] leading-[26px] max-w-[327px] ml-auto">
//             Meet VESARII Ember Nocturne — a perfume forged in twilight, kissed by wild lavender, smoked cedar, and a whisper of fire-kissed amber. Designed to enchant from the very first breath.
//           </p>
//           <Button variant="secondary" className="mt-8">
//             <a href="/product-cart">
//             Shop Now</a>
            
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="bg-[#fff9c7] dark:bg-[#220104] py-16 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left content */}
        <div className="flex-1">
          <h1 className="text-[60px] font-joan text-[#792f0f] dark:text-[#f6d110] leading-[78px] mb-4">
            VESARII
          </h1>
          <p className="text-[25px] font-joan text-[#79300f] dark:text-[#f6d110] leading-[32px] mb-8 max-w-[351px]">
            Oloréve crafts luxury fragrances that capture the essence of elegance and sustainability.
          </p>
          <Button variant="primary">
            <a href="/all-fragrances">Discover More</a>
          </Button>
        </div>
        
        {/* Center image */}
        <div className="flex-1 flex justify-center">
          <img 
            src="/images/img_image.png" 
            alt="Vesarii fragrance bottle" 
            className="w-[483px] h-[474px] rounded-full object-cover"
          />
        </div>
        
        {/* Right content */}
        <div className="flex-1 text-right">
          <h2 className="text-[30px] font-joan text-[#792f0f] dark:text-[#f6d110] leading-[38px] mb-4 max-w-[406px] ml-auto">
            Discover the Fragrance of Elegance
          </h2>
          <p className="text-[20px] font-dm-sans text-[#79300f] dark:text-[#f6d110] leading-[26px] max-w-[327px] ml-auto">
            Meet VESARII Ember Nocturne — a perfume forged in twilight, kissed by wild lavender, smoked cedar, and a whisper of fire-kissed amber. Designed to enchant from the very first breath.
          </p>
          <Button variant="secondary" className="mt-8">
            <a href="/product-cart">Shop Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
