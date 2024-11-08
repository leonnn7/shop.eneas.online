import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-400">
            Get in touch with our support team 24/7
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-gray-800 rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white">Phone Support</h3>
                  <p className="mt-1 text-gray-400">
                    24/7 Emergency Support Line
                    <br />
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-400">
                    support@bcx.lol
                    <br />
                    sales@bcx.lol
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="mt-1 text-gray-400">
                    123 Tech Street
                    <br />
                    Silicon Valley, CA 94025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;