'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center mb-8"
      style={{
        backgroundImage: 'url(/images/hero-section/hero.png)',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <motion.div
        className="relative z-10 text-center text-white p-6 md:p-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Global Virtual Solutions
        </motion.h1>
        <motion.p
          className="text-base md:text-lg lg:text-2xl mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Revolutionizing the way businesses operate by providing top-tier
          virtual employee services across the globe.
        </motion.p>
        <motion.a
          href="/contact"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Get Started
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
