"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { phoneNumber } from "@/utils/phoneNumber";
import { 
  Phone, 
  MessageCircle, 
  AlertTriangle, 
  ChevronUp, 
  Wrench,
  Clock,
  Star,
  Zap
} from "lucide-react";

const FloatingActionButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowButtons(true), 500);
      return () => clearTimeout(timer);
    } else {
      setShowButtons(false);
      setIsExpanded(false);
    }
  }, [isVisible]);

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = "Hello! I need professional appliance repair services. Please help me with a quote.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmergency = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const buttons = [
    {
      id: 'call',
      icon: Phone,
      label: 'Call Now',
      action: handleCall,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      delay: 0.1,
      description: 'Instant Support'
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      label: 'WhatsApp',
      action: handleWhatsApp,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      delay: 0.2,
      description: 'Quick Chat'
    },
    {
      id: 'emergency',
      icon: AlertTriangle,
      label: 'Emergency',
      action: handleEmergency,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      delay: 0.3,
      description: 'Urgent Repair',
      pulse: true
    },
    {
      id: 'scroll',
      icon: ChevronUp,
      label: 'Back to Top',
      action: handleScrollToTop,
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-600',
      delay: 0.4,
      description: 'Scroll Up'
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Main Action Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative w-16 h-16 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={showButtons ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
              animate={{ 
                background: [
                  'linear-gradient(45deg, rgba(255,255,255,0.2), transparent)',
                  'linear-gradient(135deg, rgba(255,255,255,0.1), transparent)',
                  'linear-gradient(225deg, rgba(255,255,255,0.2), transparent)',
                  'linear-gradient(315deg, rgba(255,255,255,0.1), transparent)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Icon */}
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Phone className="w-8 h-8 text-white relative z-10" />
            </motion.div>
            
            {/* Floating Particles */}
            <motion.div
              className="absolute inset-0"
              animate={{ 
                background: [
                  'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Quick Actions</span>
              </div>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </motion.button>

          {/* Expanded Action Buttons */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute bottom-20 right-0 flex flex-col space-y-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {buttons.map((button, index) => (
                  <motion.button
                    key={button.id}
                    onClick={() => {
                      button.action();
                      setIsExpanded(false);
                    }}
                    className="group relative flex items-center space-x-3 px-4 py-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 min-w-[200px]"
                    whileHover={{ scale: 1.02, x: -5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Icon Container */}
                    <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${button.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
                      <button.icon className="w-6 h-6 text-white" />
                      
                      {/* Pulse Effect for Emergency */}
                      {button.pulse && (
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-red-400"
                          animate={{ 
                            scale: [1, 1.1, 1], 
                            opacity: [0.7, 0, 0.7] 
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                      
                      {/* Hover Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-white/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                        {button.label}
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                        {button.description}
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <motion.div
                      className="text-gray-400 group-hover:text-gray-600 transition-colors"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronUp className="w-4 h-4 rotate-90" />
                    </motion.div>
                    
                    {/* Hover Background */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl ${button.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                    />
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionButtons;
