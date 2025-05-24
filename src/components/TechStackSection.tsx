
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TechStackSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const technologies = {
    frontend: [
      { name: 'HTML5', color: 'from-orange-500 to-red-500', level: 95 },
      { name: 'CSS3', color: 'from-blue-500 to-cyan-500', level: 90 },
      { name: 'JavaScript', color: 'from-yellow-500 to-orange-500', level: 95 },
      { name: 'ReactJS', color: 'from-blue-400 to-cyan-400', level: 92 },
      { name: 'Redux', color: 'from-purple-500 to-pink-500', level: 85 },
      { name: 'NextJS', color: 'from-gray-700 to-gray-900', level: 88 },
    ],
    backend: [
      { name: 'NodeJS', color: 'from-green-500 to-green-600', level: 90 },
      { name: 'ExpressJS', color: 'from-gray-600 to-gray-800', level: 88 },
      { name: 'SQL', color: 'from-blue-600 to-blue-800', level: 85 },
      { name: 'Supabase', color: 'from-green-400 to-emerald-500', level: 80 },
    ],
    cloud: [
      { name: 'Azure', color: 'from-blue-500 to-blue-700', level: 82 },
      { name: 'Vercel', color: 'from-gray-800 to-black', level: 90 },
      { name: 'Azure AI', color: 'from-indigo-500 to-purple-600', level: 75 },
    ],
    tools: [
      { name: 'Puppeteer', color: 'from-green-500 to-teal-500', level: 88 },
      { name: 'OpenAI', color: 'from-green-400 to-blue-500', level: 85 },
      { name: 'jQuery', color: 'from-blue-600 to-indigo-600', level: 90 },
    ]
  };

  const categories = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'cloud', label: 'Cloud & Deployment' },
    { key: 'tools', label: 'Tools & Libraries' },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies I work with to build amazing applications
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 shadow-md hover:shadow-lg'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${tech.color} rounded-full mb-4`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-full bg-white/30 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tech.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Proficiency</span>
                  <span className="font-semibold text-gray-800">{tech.level}%</span>
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
