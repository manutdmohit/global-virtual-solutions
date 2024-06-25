import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-gray-400 transition duration-300"
          >
            Global Virtual Solutions
          </Link>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
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
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-500">
          &copy; {currentYear} Global Virtual Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
