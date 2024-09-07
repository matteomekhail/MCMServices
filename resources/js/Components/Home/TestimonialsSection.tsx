import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: 'Emily Thompson',
      text: 'The level of cleanliness achieved in my home exceeded all expectations. Truly a game-changer!',
      position: 'CEO, Thompson Enterprises',
      image: '/images/testimonials/emily-thompson.jpg',
      rating: 5,
      date: 'May 15, 2023',
      service: 'Residential Cleaning'
    },
    {
      name: 'Emily Thompson',
      text: 'The level of cleanliness achieved in my home exceeded all expectations. Truly a game-changer!',
      position: 'CEO, Thompson Enterprises',
      image: '/images/testimonials/emily-thompson.jpg',
      rating: 5,
      date: 'May 15, 2023',
      service: 'Residential Cleaning'
    },
    {
      name: 'Emily Thompson',
      text: 'The level of cleanliness achieved in my home exceeded all expectations. Truly a game-changer!',
      position: 'CEO, Thompson Enterprises',
      image: '/images/testimonials/emily-thompson.jpg',
      rating: 5,
      date: 'May 15, 2023',
      service: 'Residential Cleaning'
    },
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section className="pb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-white">Client Testimonials</h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <FaQuoteLeft className="text-white text-6xl opacity-50" />
                  </div>
                </div>
                <div className="md:w-3/5 p-10">
                  <p className="text-gray-700 text-xl italic mb-8">"{testimonials[currentIndex].text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-xl text-gray-900">{testimonials[currentIndex].name}</p>
                      <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-300"} />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">
                        {testimonials[currentIndex].date} | {testimonials[currentIndex].service}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg text-indigo-600 hover:text-purple-600 transition-colors duration-300"
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg text-indigo-600 hover:text-purple-600 transition-colors duration-300"
          >
            <FaChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;