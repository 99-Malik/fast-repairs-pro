"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench, Zap, Shield, DollarSign, Phone, MessageCircle, Check } from "lucide-react";
import { phoneNumber } from "@/utils/phoneNumber";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
      <div className="absolute inset-0 bg-[url('/main-banner.jpg')] bg-cover bg-center bg-no-repeat opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent-200 rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                  <span className="text-xs sm:text-sm font-semibold">Licensed & Certified</span>
                  <span className="text-primary-400">•</span>
                  <span className="text-xs sm:text-sm font-semibold">15+ Years Experience</span>
                </div>
              </motion.div>
              
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-secondary-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Expert Appliance
                <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Repair Services
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Professional repair solutions for all major home appliances. 
                Fast, reliable, and affordable service across Dubai and Abu Dhabi. 
                Your satisfaction is our guarantee.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href={`tel:${phoneNumber}`}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                  <span className="relative z-10 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now - {phoneNumber}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                href={`https://wa.me/${phoneNumber}?text=Hello! I need professional appliance repair services.`}
                target="_blank"
                className="group px-8 py-4 border-2 border-secondary-300 text-secondary-700 font-semibold rounded-2xl hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm text-secondary-600">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-success-500" />
                <span className="text-sm text-secondary-600">Same Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-success-500" />
                <span className="text-sm text-secondary-600">Warranty Included</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Wrench, title: "Expert Technicians", desc: "Certified professionals" },
                    { icon: Zap, title: "Fast Service", desc: "Same day repairs" },
                    { icon: Shield, title: "Warranty", desc: "Guaranteed work" },
                    { icon: DollarSign, title: "Fair Pricing", desc: "Transparent costs" },
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                    <motion.div
                      key={index}
                      className="text-center p-4 rounded-xl bg-secondary-50 hover:bg-primary-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className="flex justify-center mb-2">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-secondary-900 text-sm">{item.title}</h3>
                      <p className="text-xs text-secondary-600">{item.desc}</p>
                    </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;
