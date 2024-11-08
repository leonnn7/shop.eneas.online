import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        <Hero />
        <Products />
        <Newsletter />
        <Footer />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;