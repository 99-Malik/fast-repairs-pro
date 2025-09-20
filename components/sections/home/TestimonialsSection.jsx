"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Smile, CheckCircle, Clock } from "lucide-react";

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("testimonials-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahmed",
      location: "Dubai Marina",
      rating: 5,
      text: "Excellent service! My washing machine was fixed the same day. The technician was professional, explained everything clearly, and the repair has been working perfectly for months.",
      avatar: "SA",
      service: "Washing Machine Repair"
    },
    {
      id: 2,
      name: "Mohammed Al-Rashid",
      location: "Abu Dhabi",
      rating: 5,
      text: "Outstanding work on my refrigerator repair. The team was punctual, clean, and very knowledgeable. The pricing was fair and transparent. Highly recommended!",
      avatar: "MA",
      service: "Refrigerator Repair"
    },
    {
      id: 3,
      name: "Fatima Hassan",
      location: "Jumeirah",
      rating: 5,
      text: "I've used their services multiple times for different appliances. Each time, they've exceeded my expectations. Professional, reliable, and reasonably priced.",
      avatar: "FH",
      service: "Dishwasher Repair"
    },
    {
      id: 4,
      name: "Ahmed Khalil",
      location: "Downtown Dubai",
      rating: 5,
      text: "Quick response time and excellent repair work. My air conditioner is working better than when it was new. The warranty they provide gives me peace of mind.",
      avatar: "AK",
      service: "Air Conditioner Repair"
    },
    {
      id: 5,
      name: "Layla Mansour",
      location: "Palm Jumeirah",
      rating: 5,
      text: "The technician was very thorough in diagnosing the issue with my oven. He explained the problem and solution clearly. The repair was done efficiently and professionally.",
      avatar: "LM",
      service: "Gas Oven Repair"
    },
    {
      id: 6,
      name: "Omar Al-Zahra",
      location: "Business Bay",
      rating: 5,
      text: "Great customer service from start to finish. They scheduled the repair at my convenience and completed the work quickly. My dryer is working perfectly now.",
      avatar: "OZ",
      service: "Dryer Repair"
    }
  ];

  const stats = [
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "2,500+", label: "Happy Customers", icon: Smile },
    { number: "98%", label: "Success Rate", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <section id="testimonials-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
            Customer Reviews
          </motion.div>
          
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            What Our Customers
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience with our repair services.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <div className="max-w-4xl mx-auto">
                      <div className="flex items-center justify-center mb-8">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 text-center leading-relaxed mb-8">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="flex items-center justify-center space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {testimonial.avatar}
                        </div>
                        <div className="text-left">
                          <div className="text-xl font-bold text-gray-900">{testimonial.name}</div>
                          <div className="text-gray-600">{testimonial.location}</div>
                          <div className="text-sm text-blue-600 font-medium">{testimonial.service}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trusted by Thousands of UAE Residents</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Google Reviews", value: "4.9/5" },
                { label: "Facebook Rating", value: "4.8/5" },
                { label: "Trustpilot", value: "4.9/5" },
                { label: "Customer Satisfaction", value: "98%" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{item.value}</div>
                  <div className="text-gray-600 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default TestimonialsSection;
