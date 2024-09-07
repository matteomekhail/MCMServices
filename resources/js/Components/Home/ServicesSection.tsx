import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaBuilding, FaBroom } from 'react-icons/fa';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const services = [
    { 
      title: 'Residential Cleaning', 
      description: 'Tailored cleaning services for your home, ensuring an impeccable and comfortable living environment.',
      icon: FaHome,
      image: '/images/residential-cleaning.jpg'
    },
    { 
      title: 'Commercial Cleaning', 
      description: 'Professional cleaning solutions for offices, stores, and commercial spaces, maintaining a clean and productive work environment.',
      icon: FaBuilding,
      image: '/images/commercial-cleaning.jpg'
    },
    { 
      title: 'Deep Cleaning', 
      description: 'Intensive cleaning service for complete disinfection and thorough cleaning of every corner and surface.',
      icon: FaBroom,
      image: '/images/deep-cleaning.jpg'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-16 text-gray-800">Our Premium Services</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer mb-6 p-6 transition-all duration-300 ${activeService === index ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveService(index)}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center">
                  <service.icon className={`text-2xl mr-4 ${activeService === index ? 'text-blue-600' : 'text-gray-400'}`} />
                  <h3 className={`text-xl ${activeService === index ? 'font-semibold text-blue-600' : 'font-normal text-gray-700'}`}>
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="lg:w-2/3 lg:pl-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 p-8 rounded-lg shadow-lg"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:mr-8">
                    <img 
                      src={services[activeService].image} 
                      alt={services[activeService].title}
                      className="rounded-lg shadow-md w-full h-64 object-cover"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{services[activeService].title}</h3>
                    <p className="text-gray-600 leading-relaxed">{services[activeService].description}</p>
                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;