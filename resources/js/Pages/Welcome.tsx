import React from 'react';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import HeroSection from '@/Components/Home/HeroSection';
import ServicesSection from '@/Components/Home/ServicesSection';
import WhyChooseUsSection from '@/Components/Home/WhyChooseUsSection';
import TestimonialsSection from '@/Components/Home/TestimonialsSection';
import GetQuoteSection from '@/Components/Home/GetQuoteSection';
import ContactSection from '@/Components/Home/ContactSection';

const Home = () => {
  return (
    <Layout>
      <Head title="Home - CleanPro Services" />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;