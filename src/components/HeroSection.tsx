
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, User } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center px-6 py-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto mb-6 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1"
            >
              <div className="w-full h-full rounded-full bg-white p-2">
                <img
                  src="/lovable-uploads/professional-headshot.jpg"
                  alt="Rajkumar - Full Stack Developer"
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face`;
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Rajkumar
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-700 mb-6 font-light"
        >
          Full-Stack Developer & AI Solutions Engineer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          5+ years of experience in designing, building, and deploying modern web applications, 
          automation tools, and AI-integrated solutions. Passionate about creating innovative 
          digital experiences that make a difference.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowDown className="inline-block mr-2" size={20} />
            Download Resume
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <Mail className="inline-block mr-2" size={20} />
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="#"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github size={24} className="text-gray-700" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            href="#"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mail size={24} className="text-gray-700" />
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-gray-400" size={32} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
