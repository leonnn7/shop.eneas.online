import React, { useState } from 'react';
import { Filter, Clock, Shield, Wifi, HardDrive, Laptop, Cpu, Settings } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

const services = [
  {
    id: 1,
    name: 'Emergency Tech Support',
    price: 99.99,
    category: '24/7 Support',
    description: '24/7 emergency technical support with guaranteed 1-hour response time',
    icon: Clock,
    stripeProductId: 'price_emergency_support'
  },
  {
    id: 2,
    name: 'Security Audit & Protection',
    price: 199.99,
    category: 'Security',
    description: 'Comprehensive security audit and malware protection setup',
    icon: Shield,
    stripeProductId: 'price_security_audit'
  },
  {
    id: 3,
    name: 'Network Optimization',
    price: 149.99,
    category: 'Network',
    description: 'Professional network analysis and performance optimization',
    icon: Wifi,
    stripeProductId: 'price_network_opt'
  },
  {
    id: 4,
    name: 'Data Recovery Service',
    price: 299.99,
    category: 'Recovery',
    description: 'Professional data recovery from failed or damaged storage devices',
    icon: HardDrive,
    stripeProductId: 'price_data_recovery'
  },
  {
    id: 5,
    name: 'Remote PC Repair',
    price: 129.99,
    category: 'Repair',
    description: 'Expert remote diagnosis and repair for computers and laptops',
    icon: Laptop,
    stripeProductId: 'price_pc_repair'
  },
  {
    id: 6,
    name: 'System Performance Boost',
    price: 179.99,
    category: 'Optimization',
    description: 'Complete system optimization and performance enhancement',
    icon: Cpu,
    stripeProductId: 'price_system_boost'
  },
  {
    id: 7,
    name: 'Software Support',
    price: 89.99,
    category: '24/7 Support',
    description: 'Resolution of software conflicts and performance issues',
    icon: Settings,
    stripeProductId: 'price_software_support'
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { dispatch } = useCart();
  
  const categories = ['All', ...new Set(services.map(service => service.category))];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(service => service.category === selectedCategory);

  const handleAddToCart = (service: typeof services[0]) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: service.id,
        name: service.name,
        price: service.price,
        quantity: 1,
        stripeProductId: service.stripeProductId
      },
    });
  };

  return (
    <section id="services" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white">Our Services</h2>
            <p className="mt-2 text-gray-400">Professional tech support solutions</p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center gap-4">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-500 bg-opacity-10 rounded-lg mb-6">
                    <Icon className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <p className="text-blue-500 font-bold">${service.price}</p>
                  </div>
                  <p className="text-sm text-gray-400 mb-6">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{service.category}</span>
                    <button
                      onClick={() => handleAddToCart(service)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;