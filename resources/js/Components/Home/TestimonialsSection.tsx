import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: 'John Smith',
      text: 'The professional cleaning service has transformed our office building. The work environment is now more pleasant and productive for all tenants.',
      position: 'Strata Manager, Highrise Properties',
      rating: 5,
      date: 'April 10, 2023',
      service: 'Strata Cleaning'
    },
    {
      name: 'Emily Brown',
      text: 'We\'ve been impressed by the attention to detail in our government facility. The cleanliness standards have significantly improved since switching to this service.',
      position: 'Facility Manager, City Hall',
      rating: 5,
      date: 'May 22, 2023',
      service: 'Government Facility Cleaning'
    },
    {
      name: 'Michael Johnson',
      text: 'The cleaning team did an exceptional job in our shopping center. Their professionalism and efficiency in maintaining such a large commercial space are truly outstanding.',
      position: 'Operations Director, Metro Mall',
      rating: 5,
      date: 'June 7, 2023',
      service: 'Commercial Cleaning'
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
        <h2 className="text-5xl font-extrabold text-center mb-16 text-[#0047BA]">Client Testimonials</h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden p-10"
            >
              <div className="flex flex-col">
                <div className="text-6xl text-[#F15A29] mb-6">
                  <FaQuoteLeft />
                </div>
                <p className="text-gray-700 text-xl italic mb-8">"{testimonials[currentIndex].text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-xl text-[#0047BA]">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[#F15A29]" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentIndex].date} | {testimonials[currentIndex].service}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg text-[#0047BA] hover:text-[#F15A29] transition-colors duration-300"
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg text-[#0047BA] hover:text-[#F15A29] transition-colors duration-300"
          >
            <FaChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;