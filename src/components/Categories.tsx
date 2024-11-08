import React from 'react';
import { Shirt, Laptop, Coffee, Headphones } from 'lucide-react';

const categories = [
  {
    name: 'Apparel',
    icon: Shirt,
    description: 'T-shirts, hoodies, and caps',
    bgImage: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80',
  },
  {
    name: 'Tech Accessories',
    icon: Laptop,
    description: 'Cases, bags, and gadgets',
    bgImage: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80',
  },
  {
    name: 'Office Essentials',
    icon: Coffee,
    description: 'Mugs, mousepads, and more',
    bgImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
  },
  {
    name: 'Electronics',
    icon: Headphones,
    description: 'Headphones and speakers',
    bgImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80',
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Shop by Category</h2>
          <p className="mt-4 text-xl text-gray-400">
            Find the perfect BCX merchandise for you
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="relative h-80">
                <img
                  src={category.bgImage}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <category.icon className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>
                  <p className="mt-2 text-gray-300">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;