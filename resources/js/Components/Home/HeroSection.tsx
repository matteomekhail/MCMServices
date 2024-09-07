import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/Components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/BackgroundHero.jpg" 
          alt="Cleaning Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <motion.div 
          className="lg:w-1/2 lg:pr-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl lg:text-6xl font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Champions in quality cleaning
          </motion.h1>
          <motion.p 
            className="mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            If you are not completely satisfied with our services, we will 
            return at no additional charge to address your concerns. 
            If you are still unsatisfied, we will honor our money back guarantee.
          </motion.p>
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="font-semibold">+1-541-271-4684, +1-688-587-3838</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              CONTACT US
            </Button>
          </motion.div>
          <motion.p 
            className="mt-6 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            702 New Street Readgport, OR 97467
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;