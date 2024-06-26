'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';

interface MenuItem {
  label: string;
  url?: string;
  submenu?: MenuItem[];
  type?: string;
}

const navBarData: MenuItem[] = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Services',
    url: '/',
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
    url: '/contact',
    type: 'button',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);
  const [hoveredChildMenu, setHoveredChildMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubMenuHover = (submenuLabel: string | null) => {
    setHoveredSubMenu(submenuLabel);
    setHoveredChildMenu(null); // Reset child menu when hovering a new submenu
  };

  const handleChildMenuHover = (childLabel: string | null) => {
    setHoveredChildMenu(childLabel);
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
            ? 'absolute left-full top-0 mt-0 w-56 bg-gray-700 text-white shadow-lg rounded-md py-2 z-50'
            : 'md:flex md:space-x-4'
        }`}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className={`relative group ${
              isSubmenu ? 'block px-4 py-2' : 'block py-2 px-2'
            }`}
            onMouseEnter={() =>
              isSubmenu
                ? handleChildMenuHover(item.label)
                : handleSubMenuHover(item.label)
            }
            onMouseLeave={() =>
              isSubmenu ? handleChildMenuHover(null) : handleSubMenuHover(null)
            }
          >
            {item.url ? (
              <Link
                href={item.url}
                className={`hover:text-gray-400 transition duration-300 block ${
                  item.label === 'SEND US YOUR REQUIREMENT'
                    ? 'bg-red-500 inline py-4 px-1 text-sm'
                    : ''
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <div className="hover:text-gray-400 transition duration-300 flex items-center cursor-pointer">
                {item.label}{' '}
                {item.submenu &&
                  (isSubmenu ? (
                    <FaChevronRight className="ml-1" />
                  ) : (
                    <FaChevronDown className="ml-1" />
                  ))}
              </div>
            )}
            {item.submenu && !isSubmenu && hoveredSubMenu === item.label && (
              <ul
                className="absolute left-0 mt-2 w-56 bg-gray-700 text-white shadow-lg rounded-md py-2 z-50"
                onMouseEnter={() => handleChildMenuHover(null)}
                onMouseLeave={() => handleChildMenuHover(null)}
              >
                {item.submenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="relative group"
                    onMouseEnter={() => handleChildMenuHover(subItem.label)}
                    onMouseLeave={() => handleChildMenuHover(null)}
                  >
                    {subItem.url ? (
                      <Link
                        href={subItem.url}
                        className="text-sm hover:text-gray-400 hover:bg-red-500  transition duration-300 block px-4 py-2"
                      >
                        {subItem.label}
                      </Link>
                    ) : (
                      <div className="hover:text-gray-400  hover:bg-red-500 transition duration-300 flex items-center cursor-pointer px-4 py-2">
                        {subItem.label}{' '}
                        {subItem.submenu && <FaChevronRight className="ml-1" />}
                      </div>
                    )}
                    {subItem.submenu && hoveredChildMenu === subItem.label && (
                      <ul className="absolute left-full top-0 mt-0 w-56 bg-gray-700 text-white shadow-lg rounded-md py-2 z-50">
                        {subItem.submenu.map((childItem, childIndex) => (
                          <li key={childIndex} className="relative group">
                            <Link
                              href={childItem.url || '#'}
                              className="text-sm hover:text-gray-400 hover:bg-red-500  transition duration-300 block px-4 py-2"
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
