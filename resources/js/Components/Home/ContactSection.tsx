import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-12 md:py-24 text-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-5xl font-extrabold text-center mb-8 md:mb-16 text-[#0047AB]" 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="w-full lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0047AB]">We're Here for You</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-xl md:text-2xl mr-3 text-[#FF6600]" /> 
                <a href="mailto:info@mcmprogroup.com" className="text-sm md:text-base hover:text-[#FF6600] transition-colors">
                  info@mcmprogroup.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-xl md:text-2xl mr-3 text-[#FF6600]" /> 
                <a href="tel:+61450770286" className="text-sm md:text-base hover:text-[#FF6600] transition-colors">
                  +61 450 770 286
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-[#FF6600] opacity-50 rounded-lg transform -rotate-3 md:-rotate-6"></div>
            <div className="absolute inset-0 bg-[#0047AB] opacity-50 rounded-lg transform rotate-3 md:rotate-6"></div>
            <form onSubmit={handleSubmit} className="relative bg-white rounded-lg p-6 md:p-8 shadow-xl">
              <div className="mb-4 md:mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-1 md:mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white bg-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white bg-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-white bg-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-[#0047AB] hover:bg-[#003380] text-white font-bold py-2 md:py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;