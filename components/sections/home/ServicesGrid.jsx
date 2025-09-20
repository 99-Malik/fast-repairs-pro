"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { WashingMachine, Snowflake, Utensils, Wind, Flame, Tv, Thermometer } from "lucide-react";

const ServicesGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("services-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Washing Machine Repair",
      description: "Professional diagnosis and repair of all washing machine issues including drainage problems, spin cycle issues, and water leakage.",
      image: "/samsung/washingMachine.avif",
      icon: WashingMachine,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: ["Same-day service", "Genuine parts", "6-month warranty"]
    },
    {
      id: 2,
      title: "Refrigerator Repair",
      description: "Expert repair services for cooling issues, compressor problems, temperature control, and door seal replacements.",
      image: "/samsung/ref.webp",
      icon: Snowflake,
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      features: ["Emergency repairs", "Energy efficiency check", "1-year warranty"]
    },
    {
      id: 3,
      title: "Dishwasher Repair",
      description: "Complete dishwasher maintenance including pump repairs, spray arm issues, detergent dispenser problems, and drainage solutions.",
      image: "/samsung/dishwasher.avif",
      icon: Utensils,
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      features: ["Water leak fixes", "Cleaning optimization", "3-month warranty"]
    },
    {
      id: 4,
      title: "Dryer Repair",
      description: "Professional dryer repair services for heating issues, drum problems, vent cleaning, and electrical component replacement.",
      image: "/samsung/washingMachine.avif",
      icon: Wind,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      features: ["Heating element repair", "Vent cleaning", "6-month warranty"]
    },
    {
      id: 5,
      title: "Stove & Cooker Repair",
      description: "Expert repair for gas and electric stoves, oven temperature issues, ignition problems, and burner maintenance.",
      image: "/samsung/stove.webp",
      icon: Flame,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      features: ["Gas safety check", "Ignition repair", "1-year warranty"]
    },
    {
      id: 6,
      title: "Television Repair",
      description: "Professional TV repair services for screen issues, sound problems, power supply, and smart TV functionality.",
      image: "/samsung/tv.webp",
      icon: Tv,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: ["Screen replacement", "Software updates", "2-year warranty"]
    },
    {
      id: 7,
      title: "Gas Oven Repair",
      description: "Specialized repair services for gas oven temperature control, ignition systems, gas safety, and thermostat calibration.",
      image: "/samsung/oven.webp",
      icon: Thermometer,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      features: ["Gas safety certified", "Temperature calibration", "1-year warranty"]
    },
    {
      id: 8,
      title: "Air Conditioner Repair",
      description: "Complete AC repair services including cooling issues, compressor problems, refrigerant leaks, and maintenance.",
      image: "/samsung/repair.webp",
      icon: Snowflake,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      features: ["Cooling optimization", "Energy efficiency", "6-month warranty"]
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Our Services
          </motion.div>
          
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Complete Appliance
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Repair Solutions
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            From washing machines to air conditioners, we provide expert repair services 
            for all major home appliances with guaranteed quality and satisfaction.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
            >
              {/* Header Section with Icon */}
              <div className="relative h-40 bg-white p-8 z-10">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-3">
                  <div className="absolute top-6 left-6 w-24 h-24 border border-gray-200 rounded-full"></div>
                  <div className="absolute bottom-6 right-6 w-16 h-16 border border-gray-200 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-200 rounded-full"></div>
                </div>
                
                {/* Service Icon */}
                <div className="relative z-10 flex justify-center">
                  <div className={`w-20 h-20 rounded-2xl ${
                    service.id === 6 
                      ? 'bg-gradient-to-br from-purple-500 to-indigo-500' 
                      : service.id === 7 
                      ? 'bg-gradient-to-br from-red-500 to-orange-500'
                      : `bg-gradient-to-br ${service.color}`
                  } flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 relative z-10">
                {/* Service Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-6 border border-blue-100">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  Professional Service
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 group/item">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-4 px-6 ${
                    service.id === 6 
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500' 
                      : service.id === 7 
                      ? 'bg-gradient-to-r from-red-500 to-orange-500'
                      : `bg-gradient-to-r ${service.color}`
                  } text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group/btn relative overflow-hidden shadow-lg`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Get Free Quote</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                  
                  {/* Button Hover Effect */}
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>
              </div>

              {/* Hover Overlay - Removed to prevent text fading */}

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-gray-50/30 rounded-bl-3xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-6 left-6 sm:top-12 sm:left-12 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/3 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/4 right-1/4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border border-white/20 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/10 text-white text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-white/20 backdrop-blur-sm">
                <div className="w-2 h-2 bg-white rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                Custom Solutions Available
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Need a Different Service?
              </h3>
              
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                We repair all major home appliances with expert precision and professional care. 
                Contact us for a free consultation and personalized quote for any appliance not listed above.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button 
                  className="px-12 py-5 text-sm bg-white text-blue-600 font-semibold rounded-2xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-3 group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Contact Us Today</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                  <div className="absolute inset-0 bg-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>
                
                <motion.button 
                  className="px-12 py-5 border-2 text-sm border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-3 group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View All Services</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </motion.div>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
