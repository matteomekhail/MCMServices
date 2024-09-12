import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/Components/ui/button";

const HeroSection: React.FC = () => {
    return (
        <section className="bg-white min-h-screen w-full flex items-center overflow-hidden py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <motion.div
                        className="lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-blue-700"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Premium Cleaning Services in Sydney
                        </motion.h1>
                        <motion.p
                            className="mb-8 text-base md:text-lg text-gray-600"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            We offer luxury cleaning services for exclusive residences, prestigious offices, and elite commercial spaces in Sydney. Our expert team is ready to meet your most sophisticated cleaning needs with precision, care, and high-quality eco-friendly products.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <Button className="bg-orange-500 text-white hover:bg-orange-600 text-base md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                                Request a Tailored Quote
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="lg:w-5/12 mt-12 lg:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative max-w-md mx-auto">
                            <motion.div
                                className="absolute inset-0 bg-blue-100 rounded-3xl"
                                initial={{ scale: 0.8, rotate: -5 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            ></motion.div>
                            <motion.img
                                src="/img/Specchio.jpg"
                                alt="Cleaning service"
                                className="relative z-10 rounded-3xl shadow-xl w-full h-auto object-cover"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 0.95 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;