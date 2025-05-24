
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';

const TechStackSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const technologies = {
    frontend: [
      { name: 'HTML5', icon: '🌐', color: 'from-orange-400 to-red-400' },
      { name: 'CSS3', icon: '🎨', color: 'from-blue-400 to-cyan-400' },
      { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-400' },
      { name: 'jQuery', icon: '🧰', color: 'from-blue-500 to-indigo-500' },
      { name: 'ReactJS', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
      { name: 'Redux', icon: '🔄', color: 'from-purple-400 to-pink-400' },
      { name: 'Tailwind', icon: '🍃', color: 'from-yellow-400 to-orange-400' },
      { name: 'NextJS', icon: '▲', color: 'from-gray-600 to-gray-800' },
    ],
    backend: [
      { name: 'NodeJS', icon: '🟢', color: 'from-green-400 to-green-500' },
      { name: 'ExpressJS', icon: '🚀', color: 'from-gray-500 to-gray-700' },
      { name: 'SQL', icon: '🗄️', color: 'from-blue-500 to-blue-700' },
      { name: 'Supabase', icon: '🖥️', color: 'from-green-400 to-emerald-400' },
    ],
    cloud: [
      { name: 'Azure', icon: '☁️', color: 'from-blue-400 to-blue-600' },
      { name: 'Vercel', icon: '▲', color: 'from-gray-700 to-black' },
      { name: 'Supabase', icon: '🖥️', color: 'from-green-400 to-emerald-400' },
    ],
    tools: [
      { name: 'Postman', icon: '🟠', color: 'from-blue-400 to-blue-600' }, 
      { name: 'Hasura', icon: '⚙️', color: 'from-gray-700 to-black' },
      { name: 'Azure AI', icon: '🤖', color: 'from-indigo-400 to-purple-500' },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-orange-400 bg-clip-text text-transparent">
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
                    ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-white shadow-lg shadow-teal-400/30'
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
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
              >
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    className="text-6xl"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.3 
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4 group-hover:text-teal-500 transition-colors">
                  {tech.name}
                </h3>
                
                <motion.div
                  className={`h-1 bg-gradient-to-r ${tech.color} rounded-full mx-auto w-16 group-hover:w-full transition-all duration-500`}
                  initial={{ width: "0%" }}
                  animate={{ width: "4rem" }}
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default TechStackSection;
