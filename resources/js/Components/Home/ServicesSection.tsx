import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaBuilding, FaBroom } from 'react-icons/fa';

const ServicesSection = () => {
    const [activeService, setActiveService] = useState(0);
    const services = [
        {
            title: 'Strata Cleaning',
            description: 'Customized cleaning services for apartment complexes and residential buildings. We ensure impeccable common areas, maintain green spaces, and manage waste disposal for a comfortable and hygienic living environment.',
            image: '/img/Strata.jpg'
        },
        {
            title: 'Commercial Cleaning',
            description: 'Professional cleaning solutions for offices, stores, and commercial spaces. We offer regular and flexible services, using eco-friendly products and cutting-edge techniques to maintain a clean, healthy, and productive work environment.',
            image: '/img/Commercial.jpg'
        },
        {
            title: 'Government Cleaning',
            description: 'Specialized cleaning services for government facilities, adhering to the highest standards of security and confidentiality. We include deep sanitization, sensitive document handling, and compliance with specific public sector regulations.',
            image: '/img/NSWLogo.svg'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-light text-center mb-16 text-blue-800">Our Premium Services</h2>
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className={`cursor-pointer mb-6 p-6 rounded-lg transition-all duration-300 ${activeService === index ? 'bg-blue-100' : ''}`}
                                onClick={() => setActiveService(index)}
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className="flex items-center">
                                    <h3 className={`text-xl ${activeService === index ? 'font-semibold text-blue-800' : 'font-normal text-gray-700'}`}>
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
                                className="bg-blue-50 p-8 rounded-lg shadow-lg"
                            >
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/2 mb-6 md:mb-0 md:mr-8 flex items-center justify-center bg-white rounded-lg shadow-md" style={{ height: '16rem' }}>
                                        <img
                                            src={services[activeService].image}
                                            alt={services[activeService].title}
                                            className="max-w-full max-h-full object-contain p-4"
                                        />
                                    </div>
                                    <div className="md:w-1/2">
                                        <h3 className="text-2xl font-semibold mb-4 text-blue-800">{services[activeService].title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{services[activeService].description}</p>
                                        <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300">
                                            Scopri di Più
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