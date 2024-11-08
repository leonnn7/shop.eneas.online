import React from 'react';
import { Laptop, Wifi, HardDrive, Shield, Cpu, Settings } from 'lucide-react';

const services = [
  {
    title: 'PC Repair',
    description: 'Hardware diagnostics and repairs for all types of computers',
    icon: Laptop,
  },
  {
    title: 'Network Solutions',
    description: 'Wi-Fi setup, troubleshooting, and network security',
    icon: Wifi,
  },
  {
    title: 'Data Recovery',
    description: 'Professional data recovery from failed storage devices',
    icon: HardDrive,
  },
  {
    title: 'Security Services',
    description: 'Antivirus installation and security optimization',
    icon: Shield,
  },
  {
    title: 'Hardware Upgrades',
    description: 'RAM, storage, and component upgrades',
    icon: Cpu,
  },
  {
    title: 'Software Support',
    description: 'Installation, updates, and troubleshooting',
    icon: Settings,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-400">
            Comprehensive tech solutions for all your needs
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-gray-900 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-500 bg-opacity-10">
                  <service.icon className="h-6 w-6 text-blue-500" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;