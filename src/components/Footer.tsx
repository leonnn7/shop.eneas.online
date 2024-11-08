import React from 'react';
import { Monitor, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <Monitor className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">BCX Shop</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Official merchandise store for BCX tech support. 
              Show your tech pride with our exclusive collection.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#featured" className="text-base text-gray-300 hover:text-blue-500">
                  Featured
                </a>
              </li>
              <li>
                <a href="#categories" className="text-base text-gray-300 hover:text-blue-500">
                  Categories
                </a>
              </li>
              <li>
                <a href="#products" className="text-base text-gray-300 hover:text-blue-500">
                  All Products
                </a>
              </li>
              <li>
                <a href="https://bcx.lol" className="text-base text-gray-300 hover:text-blue-500">
                  Main Site
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Connect With Us
            </h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} BCX Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;