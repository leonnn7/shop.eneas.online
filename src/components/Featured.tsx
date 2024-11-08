import React from 'react';
import { Star } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: 'BCX Tech Backpack',
    price: 79.99,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80',
    description: 'Premium laptop backpack with built-in USB charging port',
  },
  {
    id: 2,
    name: 'BCX Premium Hoodie',
    price: 59.99,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80',
    description: 'Comfortable hoodie with embroidered BCX logo',
  },
  {
    id: 3,
    name: 'BCX Water Bottle',
    price: 24.99,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80',
    description: 'Stainless steel water bottle with temperature control',
  },
];

const Featured = () => {
  return (
    <section id="featured" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Products</h2>
          <p className="mt-4 text-xl text-gray-400">
            Our most popular tech merchandise
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                  <p className="text-blue-500 font-bold">${product.price}</p>
                </div>
                <p className="mt-2 text-gray-400">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;