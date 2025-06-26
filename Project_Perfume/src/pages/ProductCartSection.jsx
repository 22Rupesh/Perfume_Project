


import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';



import amberNocturne1 from './Men/assets/aventus1.jpg';
import amberNocturne2 from '../../public/images/amberNocturne2.png';
import amberNocturne3 from '../../public/images/amberNocturne3.png';
import amberNocturne4 from '../../public/images/amberNocturne4.png';

const ProductCartSection = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("100ML");

    const handleQuantity = (type) => {
        setQuantity((prev) => (type === "inc" ? prev + 1 : Math.max(1, prev - 1)));
    };

    const sizes = ["30ML", "50ML", "100ML", "200ML"];

    return (
        <div className="bg-[#C0BA87] px-6 py-10 font-sans text-[#3b220c]">
            
            {/* Top Section */}
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                className="flex flex-col lg:flex-row gap-12"
            >
                {/* Left - Product Image */}
                <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex-1 flex flex-col items-center"
                >
                    <motion.img
                        variants={fadeIn("left", 0.6)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        src={amberNocturne2}
                        alt="Ma Vesarii"
                        className="w-[689px] h-[742px] object-contain rounded"
                    />
                    {/* Thumbnails Below */}
                    <motion.div
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="flex gap-4 mt-6"
                    >
                        <motion.img
                            variants={fadeIn("left", 0.6)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.4 }}
                            src={amberNocturne3}
                            alt="Thumbnail 1"
                            className="w-[308px] h-[308px] object-contain rounded shadow"
                        />
                        <motion.img
                            variants={fadeIn("right", 0.6)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.4 }}
                            src={amberNocturne4}
                            alt="Thumbnail 2"
                            className="w-[308px] h-[308px]  object-contain rounded shadow"
                        />
                    </motion.div>
                </motion.div>

                {/* Right - Product Info */}
                <motion.div
                    variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex-1 flex flex-col justify-center"
                >
                    <motion.h2
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-3xl font-bold mb-2"
                    >
                        Ember Nocturne
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="text-sm text-gray-700 mb-1"
                    >
                        Lavender, Cedar, & Amber
                    </motion.p>
                    <motion.p
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="text-[15px] leading-relaxed mb-4"
                    >
                        Something something something something something something something something.
                    </motion.p>
                    <motion.p
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="text-xl font-semibold mb-4"
                    >
                        $499
                    </motion.p>

                    {/* Size Selector */}
                    <motion.div
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="mb-4"
                    >
                        <motion.span
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.4 }}
                            className="block text-sm font-medium mb-2"
                        >
                            Size
                        </motion.span>
                        <motion.div
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.4 }}
                            className="flex flex-wrap gap-3"
                        >
                            {sizes.map((size, index) => (
                                <motion.button
                                    key={size}
                                    variants={fadeIn("left", 0.4 + index * 0.1)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: false, amount: 0.4 }}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-1 border ${selectedSize === size
                                            ? 'bg-[#3b220c] text-white'
                                            : 'text-[#3b220c] border-[#3b220c]'
                                        } text-sm rounded transition`}
                                >
                                    {size}
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Personalize Button */}
                    <motion.div
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="mb-4"
                    >
                        <motion.button
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.4 }}
                            className="text-sm underline underline-offset-2 text-[#3b220c] hover:text-[#5e160e]"
                        >
                            Personalize My Bottle <motion.span variants={fadeIn("up", 0.6)} className="ml-2 font-medium">Free</motion.span>
                        </motion.button>
                    </motion.div>

                    {/* Quantity + Cart */}
                    <motion.div
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="flex items-center gap-4"
                    >
                        <motion.div
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.4 }}
                            className="flex items-center border border-[#3b220c] px-2"
                        >
                            <motion.button
                                variants={fadeIn("left", 0.6)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.4 }}
                                onClick={() => handleQuantity("dec")}
                                className="px-2 text-lg"
                            >
                                -
                            </motion.button>
                            <motion.span
                                variants={fadeIn("up", 0.6)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.4 }}
                                className="px-2"
                            >
                                {quantity}
                            </motion.span>
                            <motion.button
                                variants={fadeIn("right", 0.6)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.4 }}
                                onClick={() => handleQuantity("inc")}
                                className="px-2 text-lg"
                            >
                                +
                            </motion.button>
                        </motion.div>
                        <motion.button
                            variants={fadeIn("right", 0.6)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.4 }}
                            className="bg-[#3b220c] w-[347px] h-[43px] text-white px-6 py-2 text-sm font-medium hover:bg-[#5e160e]"
                        >
                            Add to Cart
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Divider */}
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                className="h-px bg-[#c2a85c] my-12 w-full"
            />

            {/* Highlights Section */}
            {/* <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                className="bg-[#fff9c7] py-12 px-6 md:px-16 space-y-20"
            > */}
                {/* Aventus Collection */}
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-10"
                >
                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="md:w-1/2 space-y-4"
                    >
                        <motion.h3
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-xl font-semibold text-[#4B0000]"
                        >
                            The Aventus Collection
                        </motion.h3>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.4 }}
                            className="text-sm text-[#333]"
                        >
                            Aventus stands alone with its unique blend of precious ingredients, from the vibrant debut of exclusive,
                            hand-picked Calabrian bergamot to the distinctively decadent base of cedarwood intertwined with The House of
                            Creed’s signature ingredient of ambergris notes.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="md:w-1/2 flex justify-center"
                    >
                        <motion.img
                            variants={fadeIn("right", 0.6)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.4 }}
                            src={amberNocturne3}
                            alt="Aventus Bottle"
                            className="max-w-xs w-[574px] h-[574px] rounded"
                        />
                    </motion.div>
                </motion.div>

                {/* Distinction Section */}
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex flex-col-reverse md:flex-row items-center justify-between gap-10"
                >
                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="md:w-1/2 flex justify-center"
                    >
                        <motion.img
                            variants={fadeIn("left", 0.6)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.4 }}
                            src={amberNocturne4}
                            alt="Vesarii Box"
                            className="max-w-xs w-[536px] h-[536px] rounded"
                        />
                    </motion.div>
                    <motion.div
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="md:w-1/2 space-y-4"
                    >
                        <motion.h3
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-xl font-semibold text-[#4B0000]"
                        >
                            A Fragrance Of True Distinction
                        </motion.h3>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.4 }}
                            className="text-sm text-[#333]"
                        >
                            The Aventus trilogy boasts the most exclusive ingredients, masterfully blended using age-old techniques.
                            The result is a fragrance collection unrivalled in the world of perfumery that distills The House of Creed’s
                            characteristic commitment to artistry and perfection.
                        </motion.p>
                    </motion.div>
                </motion.div>
            {/* </motion.div> */}
        </div>
    );
};

export default ProductCartSection;