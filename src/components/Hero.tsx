'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/hero-section/hero.png)' }}
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
          Hire Remote Employees
        </motion.h1>
        <motion.p
          className="text-base md:text-lg lg:text-2xl mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Work with top talent from around the world, right from your office.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link
            href="/get-started"
            className='className="bg-blue-500 bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"'
          >
            Get Started
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-8"
        >
          <Link
            href="/services"
            className="bg-white hover:bg-gray-200 text-blue-500 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
