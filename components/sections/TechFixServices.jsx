'use client';

import { useState } from 'react';
import { phoneNumber } from '@/utils/phoneNumber';

const TechFixServices = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: '🔧' },
    { id: 'kitchen', name: 'Kitchen', icon: '🍳' },
    { id: 'laundry', name: 'Laundry', icon: '👕' },
    { id: 'cooling', name: 'Cooling', icon: '❄️' },
    { id: 'entertainment', name: 'Entertainment', icon: '📺' },
  ];

  const services = [
    {
      id: 1,
      title: 'Refrigerator Repair',
      description: 'Expert repair for all refrigerator brands and models. From cooling issues to door problems.',
      category: 'kitchen',
      icon: '🧊',
      features: ['Temperature Control', 'Door Seal Repair', 'Compressor Issues', 'Ice Maker Fix'],
      duration: '1-2 hours',
      rating: 4.9,
      reviews: 1247
    },
    {
      id: 2,
      title: 'Washing Machine Service',
      description: 'Complete washing machine repair and maintenance. Drainage, spinning, and electrical issues.',
      category: 'laundry',
      icon: '🌊',
      features: ['Drainage Problems', 'Spinning Issues', 'Electrical Repair', 'Maintenance'],
      duration: '1-3 hours',
      rating: 4.8,
      reviews: 892
    },
    {
      id: 3,
      title: 'Dishwasher Repair',
      description: 'Professional dishwasher repair services. Water circulation, detergent dispenser, and more.',
      category: 'kitchen',
      icon: '🍽️',
      features: ['Water Circulation', 'Detergent Issues', 'Drainage Problems', 'Door Repair'],
      duration: '1-2 hours',
      rating: 4.7,
      reviews: 634
    },
    {
      id: 4,
      title: 'Air Conditioner Service',
      description: 'AC repair, maintenance, and installation. Cooling problems, filter cleaning, and more.',
      category: 'cooling',
      icon: '❄️',
      features: ['Cooling Issues', 'Filter Cleaning', 'Installation', 'Maintenance'],
      duration: '2-4 hours',
      rating: 4.9,
      reviews: 1456
    },
    {
      id: 5,
      title: 'Oven & Stove Repair',
      description: 'Gas and electric oven repair. Temperature control, ignition, and heating element issues.',
      category: 'kitchen',
      icon: '🔥',
      features: ['Temperature Control', 'Ignition Problems', 'Heating Elements', 'Gas Leak Check'],
      duration: '1-2 hours',
      rating: 4.8,
      reviews: 723
    },
    {
      id: 6,
      title: 'TV Installation & Repair',
      description: 'TV mounting, installation, and repair services. Picture, sound, and connectivity issues.',
      category: 'entertainment',
      icon: '📺',
      features: ['Wall Mounting', 'Picture Issues', 'Sound Problems', 'Connectivity'],
      duration: '1-2 hours',
      rating: 4.6,
      reviews: 445
    },
    {
      id: 7,
      title: 'Dryer Repair',
      description: 'Clothes dryer repair and maintenance. Heating, tumbling, and electrical issues.',
      category: 'laundry',
      icon: '🌪️',
      features: ['Heating Problems', 'Tumbling Issues', 'Electrical Repair', 'Lint Cleaning'],
      duration: '1-2 hours',
      rating: 4.7,
      reviews: 567
    },
    {
      id: 8,
      title: 'Microwave Repair',
      description: 'Microwave oven repair services. Heating, turntable, and control panel issues.',
      category: 'kitchen',
      icon: '⚡',
      features: ['Heating Issues', 'Turntable Problems', 'Control Panel', 'Door Safety'],
      duration: '1 hour',
      rating: 4.5,
      reviews: 389
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Professional Services
          </div>
          <h2 className="text-heading text-gray-900 mb-6">
            Expert Appliance Repair
            <span className="block gradient-text">Services</span>
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Our certified technicians provide comprehensive repair services for all major appliance brands. 
            Same-day service available with warranty on all repairs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="card-modern p-6 group hover:shadow-glow transition-all duration-500 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{service.icon}</span>
              </div>

              {/* Service Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-white line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-500">
                      <svg className="w-3 h-3 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <p className="text-sm font-semibold text-blue-600">Service Duration</p>
                    <p className="text-xs text-gray-500">{service.duration}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-xs text-gray-500">
                      <svg className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {service.rating}
                    </div>
                    <p className="text-xs text-gray-500">{service.reviews} reviews</p>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-medium hover:bg-blue-100 transition-colors duration-300">
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-modern p-8 max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Don't See Your Appliance?
            </h3>
            <p className="text-gray-700 mb-6">
              We repair all major appliance brands and models. Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${phoneNumber}`}
                className="btn-primary"
              >
                Call for Free Quote
              </a>
              <a
                href="#contact"
                className="btn-outline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFixServices;
