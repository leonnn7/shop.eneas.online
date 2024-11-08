import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-2xl p-8 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="h-12 w-12 text-blue-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Subscribe to our newsletter for exclusive deals and new product announcements
            </p>
            <form className="mt-8 sm:flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:max-w-md px-5 py-3 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="mt-3 sm:mt-0 sm:ml-3 px-6 py-3 w-full sm:w-auto bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;