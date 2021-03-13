import React from 'react';

import AboutUsSection from '../componts/aboutUssection';

import ServiesSection from '../componts/ServicesSection';

import FAQ from '../componts/Faq';
import { motion } from 'framer-motion';

import { PageAnimation } from '../Animation';

export default function AboutUs() {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutUsSection />
      <ServiesSection />
      <FAQ />
    </motion.div>
  );
}
