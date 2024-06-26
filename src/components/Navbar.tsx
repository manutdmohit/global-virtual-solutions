'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="text-lg font-bold ml-3">
            <Link href="/">Global Virtual Solutions</Link>
          </div>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="hover:text-gray-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-400 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-400 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-400 transition duration-300"
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col space-y-2 p-4">
          <Link
            href="/"
            className="hover:text-gray-400 transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-400 transition duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-400 transition duration-300"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-400 transition duration-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
