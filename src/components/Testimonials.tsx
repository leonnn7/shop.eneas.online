import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    content: 'BCX saved my business when our entire network went down. Their quick response and expertise got us back online within hours.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Freelance Designer',
    content: 'The team at BCX helped recover crucial client files from my crashed hard drive. Their service is worth every penny.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    content: 'Regular maintenance from BCX has kept our office computers running smoothly. Their preventive care approach has saved us from many potential disasters.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Don't just take our word for it
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-8 transform transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="mt-6 flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;