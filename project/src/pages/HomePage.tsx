import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;