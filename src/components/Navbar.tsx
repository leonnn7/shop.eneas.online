import React, { useState } from 'react';
import { Menu, X, Monitor, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();

  const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm fixed w-full z-50 border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center gap-2">
                <Monitor className="h-8 w-8 text-blue-500" />
                <span className="text-2xl font-bold text-white">BCX Tech</span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#contact" className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                <a href="#about" className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-300 hover:text-blue-500"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="text-gray-300 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <a href="#about" className="text-gray-300 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">About</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;