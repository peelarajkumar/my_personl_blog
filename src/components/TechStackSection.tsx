
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';

const TechStackSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const technologies = {
    frontend: [
      { name: 'HTML5', icon: '🌐', color: 'from-orange-500 to-red-500' },
      { name: 'CSS3', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
      { name: 'JavaScript', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
      { name: 'ReactJS', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
      { name: 'Redux', icon: '🔄', color: 'from-purple-500 to-pink-500' },
      { name: 'NextJS', icon: '▲', color: 'from-gray-700 to-gray-900' },
    ],
    backend: [
      { name: 'NodeJS', icon: '🟢', color: 'from-green-500 to-green-600' },
      { name: 'ExpressJS', icon: '🚀', color: 'from-gray-600 to-gray-800' },
      { name: 'SQL', icon: '🗄️', color: 'from-blue-600 to-blue-800' },
      { name: 'Supabase', icon: '⚡', color: 'from-green-400 to-emerald-500' },
    ],
    cloud: [
      { name: 'Azure', icon: '☁️', color: 'from-blue-500 to-blue-700' },
      { name: 'Vercel', icon: '▲', color: 'from-gray-800 to-black' },
      { name: 'Azure AI', icon: '🤖', color: 'from-indigo-500 to-purple-600' },
    ],
    tools: [
      { name: 'Puppeteer', icon: '🎭', color: 'from-green-500 to-teal-500' },
      { name: 'OpenAI', icon: '🧠', color: 'from-green-400 to-blue-500' },
      { name: 'jQuery', icon: '📜', color: 'from-blue-600 to-indigo-600' },
    ]
  };

  const categories = [
    { key: 'frontend', label: 'Frontend', icon: Code2 },
    { key: 'backend', label: 'Backend', icon: Database },
    { key: 'cloud', label: 'Cloud & Deployment', icon: Cloud },
    { key: 'tools', label: 'Tools & Libraries', icon: Wrench },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
            Tech Arsenal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies I master to build exceptional applications
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/30'
                    : 'bg-white text-gray-600 shadow-md hover:shadow-lg'
                }`}
              >
                <Icon size={20} className="mr-2" />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {technologies[selectedCategory as keyof typeof technologies].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className="text-4xl"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.2 
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                  <motion.div
                    className={`w-8 h-8 bg-gradient-to-r ${tech.color} rounded-full`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                  {tech.name}
                </h3>
                
                <motion.div
                  className={`h-2 bg-gradient-to-r ${tech.color} rounded-full mb-2 opacity-20 group-hover:opacity-100 transition-opacity`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                />
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Technology</span>
                  <motion.span 
                    className="font-bold text-teal-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 1 }}
                  >
                    Expert
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default TechStackSection;
