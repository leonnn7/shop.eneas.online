import React from 'react';
import { PhoneCall, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Contact Us',
    description: 'Reach out through our 24/7 support line or online form',
    icon: PhoneCall,
  },
  {
    title: 'We Fix It',
    description: 'Our experts diagnose and resolve your tech issues',
    icon: Wrench,
  },
  {
    title: 'Problem Solved',
    description: 'Get back to work with your fully functional device',
    icon: CheckCircle,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-xl text-gray-400">
            Simple steps to get your tech problems solved
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-center text-gray-400">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="h-0.5 w-full bg-blue-500/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;