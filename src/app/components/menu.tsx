"use client";
import React, { useState } from 'react';
// Import your logo image
import  LogoSVG from '../assets/image/logo.svg'; // Adjust the path as needed
import Link from 'next/link';
import { Button } from 'antd';
const MenuComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { key: 'product', label: 'Product' },
    { key: 'solution', label: 'Solution' },
    { key: 'resource', label: 'Resource' },
    { key: 'partner', label: 'Partner' },
    { key: 'contact', label: 'Contact Us' },
  ];

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <LogoSVG className="h-8 w-auto" />{/* Adjust the height as needed */}
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link key={item.key} href={`#${item.key}`} className="text-gray-600 hover:text-gray-900">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={toggleDrawer}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="p-6">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            onClick={toggleDrawer}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="mt-8 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                className="block text-gray-600 hover:text-gray-900"
                onClick={toggleDrawer}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MenuComponent;
