import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Reason {
  title: string;
  description: string;
  statistic: string;
}

const WhyChooseUsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons: Reason[] = [
    {
      title: 'Expert Staff',
      description: 'Our highly trained professionals bring years of experience and expertise to every cleaning task.',
      statistic: '100+ Certified Experts',
    },
    {
      title: 'Eco-Friendly Solutions',
      description: 'We prioritize sustainable practices and use environmentally safe products in all our services.',
      statistic: '90% Reduction in Chemical Usage',
    },
    {
      title: 'Flexible Scheduling',
      description: 'Our services adapt to your needs, offering convenient scheduling options that fit your lifestyle.',
      statistic: '24/7 Availability',
    },
    {
      title: 'Satisfaction Guaranteed',
      description: 'We stand behind our work with a 100% satisfaction guarantee on every service we provide.',
      statistic: '99.8% Client Satisfaction Rate',
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reasons.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reasons.length]);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-between">

<motion.div 
  className="lg:w-1/2 mb-12 lg:mb-0"
  initial="hidden"
  animate={controls}
  variants={{
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  {reasons.map((reason, index) => (
    <motion.div
      key={index}
      className={`mb-8 cursor-pointer ${activeIndex === index ? 'text-blue-600' : 'text-gray-600'}`}
      onClick={() => setActiveIndex(index)}
      // Rimuoviamo whileHover e whileTap
    >
      <h3 className="text-2xl font-semibold mb-2">{reason.title}</h3>
      <p className={`text-sm ${activeIndex === index ? 'block' : 'hidden'}`}>{reason.description}</p>
    </motion.div>
  ))}
</motion.div>
          <motion.div 
            className="lg:w-1/2 relative h-96"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <span className="text-6xl md:text-8xl font-bold text-blue-600">{reason.statistic.split(' ')[0]}</span>
                  <p className="text-xl md:text-2xl text-gray-600 mt-4">{reason.statistic.split(' ').slice(1).join(' ')}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;