'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';

interface MenuItem {
  label: string;
  url?: string;
  submenu?: MenuItem[];
}

const navBarData: MenuItem[] = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Services',
    submenu: [
      {
        label: 'IT Outsourcing',
        submenu: [
          {
            label: 'Front End Developers',
            url: '/services/front-end-developers',
          },
          {
            label: 'Hire Backend Developers',
            url: '/services/hire-backend-developers',
          },
          // Add more submenu items here
        ],
      },
      {
        label: 'Digital Marketing',
        url: '/services/digital-marketing',
      },
      {
        label: 'Content Writing',
        url: '/services/content-writing',
      },
      {
        label: 'Hire Developers',
        url: '/services/hire-developers',
      },
      {
        label: 'Graphic & Web Design',
        url: '/services/graphic-web-design',
      },
      {
        label: 'Finance And Accounts',
        url: '/services/graphic-web-design',
      },
      {
        label: 'Embedded Development',
        url: '/services/graphic-web-design',
      },
      {
        label: 'Engineers And Architects',
        url: '/services/graphic-web-design',
      },
      {
        label: 'Legal Process OutSourcing',
        url: '/services/graphic-web-design',
      },
      {
        label: 'Mobile Apps Development',
        url: '/services/graphic-web-design',
      },
      {
        label: 'Hire Virtual Assistant',
        url: '/services/graphic-web-design',
      },
      {
        label: 'Medical Process Outsourcing',
        url: '/services/graphic-web-design',
      },
      // Add more services here
    ],
  },
  {
    label: 'Resources',
    submenu: [
      {
        label: 'FAQs',
        url: '/resources/faqs',
      },
      {
        label: 'Videos',
        url: '/resources/videos',
      },
      {
        label: 'Articles',
        url: '/resources/articles',
      },
      {
        label: 'Blog',
        url: '/resources/blog',
      },
      {
        label: 'Guides',
        url: '/resources/guides',
      },
      {
        label: 'Ebooks',
        url: '/resources/ebooks',
      },
      {
        label: 'Awards And Recognition',
        url: '/resources/award-recognition',
      },
      // Add more services here
    ],
  },
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
  {
    label: 'SEND US YOUR REQUIREMENT',
    url: '/get-started',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeChildMenu, setActiveChildMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubMenuToggle = (submenuLabel: string) => {
    setActiveSubMenu((prev) => (prev === submenuLabel ? null : submenuLabel));
    setActiveChildMenu(null); // Reset child menu when toggling a submenu
  };

  const handleChildMenuToggle = (childLabel: string) => {
    setActiveChildMenu((prev) => (prev === childLabel ? null : childLabel));
  };

  const renderMenuItems = (
    items: MenuItem[],
    isSubmenu = false,
    parentLabel?: string
  ) => {
    return (
      <ul
        className={`menu ${
          isSubmenu
            ? 'absolute md:left-full md:top-0 md:mt-0 w-56 bg-gray-700 text-white shadow-lg rounded-md py-2 z-50'
            : 'md:flex md:space-x-4'
        } ${isOpen && !isSubmenu ? 'block' : 'hidden md:block'}`}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className={`relative group ${
              isSubmenu ? 'block px-4 py-2' : 'block py-2 px-2'
            }`}
            onMouseEnter={() => !isMobile && setActiveSubMenu(item.label)}
            onMouseLeave={() => !isMobile && setActiveSubMenu(null)}
          >
            {item.url ? (
              <Link
                href={item.url}
                className={`hover:text-gray-400 transition duration-300 block ${
                  item.label === 'SEND US YOUR REQUIREMENT'
                    ? 'bg-red-500 inline py-4 px-1 text-sm'
                    : ''
                }`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ) : (
              <div
                className="hover:text-gray-400 transition duration-300 flex items-center cursor-pointer"
                onClick={() => isMobile && handleSubMenuToggle(item.label)}
              >
                {item.label}{' '}
                {item.submenu &&
                  (isSubmenu ? (
                    <FaChevronRight className="ml-1" />
                  ) : (
                    <FaChevronDown className="ml-1" />
                  ))}
              </div>
            )}
            {item.submenu && !isSubmenu && activeSubMenu === item.label && (
              <ul
                className="absolute left-0 mt-2 w-56 bg-gray-700 text-white shadow-lg rounded-md py-2 z-50"
                onMouseEnter={() => setActiveChildMenu(null)}
                onMouseLeave={() => setActiveChildMenu(null)}
              >
                {item.submenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="relative group"
                    onMouseEnter={() =>
                      !isMobile && setActiveChildMenu(subItem.label)
                    }
                    onMouseLeave={() => !isMobile && setActiveChildMenu(null)}
                  >
                    {subItem.url ? (
                      <Link
                        href={subItem.url}
                        className="  text-sm hover:text-gray-400 hover:bg-red-500 transition duration-300 block px-4 py-2"
                      >
                        {subItem.label}
                      </Link>
                    ) : (
                      <div
                        className="hover:text-gray-400 hover:bg-red-500 transition duration-300 flex items-center cursor-pointer px-4 py-2"
                        onClick={() =>
                          isMobile && handleChildMenuToggle(subItem.label)
                        }
                      >
                        {subItem.label}{' '}
                        {subItem.submenu && <FaChevronRight className="ml-1" />}
                      </div>
                    )}
                    {subItem.submenu && activeChildMenu === subItem.label && (
                      <ul
                        className={`${
                          isMobile ? 'block' : 'hidden md:block'
                        } md:absolute md:left-full md:top-0 mt-2 md:mt-0 w-56 bg-blue-700 text-white shadow-lg rounded-md py-2 z-50`}
                      >
                        {subItem.submenu.map((childItem, childIndex) => (
                          <li key={childIndex} className="relative group">
                            <Link
                              href={childItem.url || '#'}
                              className="text-sm hover:text-gray-400 hover:bg-red-500 transition duration-300 block px-4 py-2"
                            >
                              {childItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="text-lg font-bold">
            <Link href="/">Global Virtual Solutions</Link>
          </div>
        </div>
        <nav className="hidden md:block">{renderMenuItems(navBarData)}</nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          {renderMenuItems(navBarData)}
        </div>
      )}
    </header>
  );
};

export default Navbar;
