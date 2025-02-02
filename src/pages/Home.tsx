import React from 'react';
import Hero from './home/Hero';
import TrustSignals from './home/TrustSignals';
import FeaturedCourses from './home/FeaturedCourses';
import WhyChooseUs from './home/WhyChooseUs';
import Testimonials from './home/Testimonials';
import Team from './home/Team';
import PricingSection from './home/PricingSection';
import DemoVideo from './home/DemoVideo';

interface HomeProps {
  setActivePage: (page: string) => void;
}

function Home({ setActivePage }: HomeProps) {
  return (
    <div className="bg-white">
      <Hero setActivePage={setActivePage} />
      <TrustSignals />
      <FeaturedCourses setActivePage={setActivePage} />
      <WhyChooseUs />
      <DemoVideo />
      <PricingSection />
      <Testimonials />
      <Team />
    </div>
  );
}

export default Home;