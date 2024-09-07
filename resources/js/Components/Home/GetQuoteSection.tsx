import React from 'react';
import { motion } from 'framer-motion';

const GetQuoteSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold mb-6 leading-tight">
          Transform Your Space with Professional Cleaning
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Experience the difference of a spotless environment. Our expert team is ready to elevate your cleanliness standards.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-100"
        >
          Request Your Complimentary Quote
        </motion.button>
      </div>
    </section>
  );
};

export default GetQuoteSection;