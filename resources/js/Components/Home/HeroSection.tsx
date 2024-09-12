import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/Components/ui/button";

const HeroSection: React.FC = () => {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white min-h-screen w-full flex items-center overflow-hidden py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between">
                    <motion.div
                        className="w-full mb-8 text-center"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-blue-700 leading-tight"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Premium Cleaning Services in Sydney
                        </motion.h1>
                        <motion.p
                            className="mb-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Luxury cleaning for exclusive residences, prestigious offices, and elite commercial spaces.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <Button className="bg-orange-500 text-white hover:bg-orange-600 text-lg px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Request a Quote
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="w-full mt-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative max-w-lg mx-auto">
                            <motion.div
                                className="absolute inset-0 bg-blue-200 rounded-3xl transform rotate-3"
                                initial={{ scale: 0.8, rotate: -5 }}
                                animate={{ scale: 1, rotate: 3 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            ></motion.div>
                            <motion.img
                                src="/img/pulitore.jpg"
                                alt="Cleaning service"
                                className="relative z-10 rounded-3xl shadow-2xl w-full h-auto object-cover"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
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