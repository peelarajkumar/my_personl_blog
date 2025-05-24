
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Settings, User } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern technologies like React, Node.js, and cloud platforms.",
      features: ["Custom Web Applications", "API Development", "Database Design", "Cloud Deployment"]
    },
    {
      icon: Zap,
      title: "Automation Solutions",
      description: "Building intelligent automation tools using Puppeteer, Node.js, and AI to streamline business processes.",
      features: ["Web Scraping", "Process Automation", "Data Processing", "Browser Automation"]
    },
    {
      icon: Settings,
      title: "AI Integration",
      description: "Implementing AI-powered features and chatbots using OpenAI and Azure AI services for enhanced user experiences.",
      features: ["AI Chatbots", "Natural Language Processing", "Machine Learning", "Intelligent Analytics"]
    },
    {
      icon: User,
      title: "Technical Consulting",
      description: "Providing expert guidance on technology choices, architecture decisions, and best practices for your projects.",
      features: ["Architecture Review", "Code Audits", "Performance Optimization", "Team Mentoring"]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to help bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
