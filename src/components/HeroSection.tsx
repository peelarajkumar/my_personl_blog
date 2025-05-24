
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, User } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const HeroSection :React.FC<HeroSectionProps> = ({ setActiveSection })=> {
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
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-48 h-48 mx-auto mb-6 relative">
            {/* <motion.div
              animate={{ rotate: 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-orange-400 p-1"
            > */}
            <div className="w-full h-full rounded-full bg-white p-2">
              <img
                src="/lovable-uploads/c843319e-86e9-4d96-bedd-858510a95aaa.png"
                alt="Rajkumar - Full Stack Developer"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-orange-500 bg-clip-text text-transparent">
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
          4+ years of experience in designing, building, and deploying modern
          web applications, automation tools, and AI-integrated solutions.
          Passionate about creating innovative digital experiences that make a
          difference.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            href="/rajkumar.pdf"
            download
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowDown className="inline-block mr-2" size={20} />
            Download Resume
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection('contact')}
            className="px-8 py-4 border-2 border-teal-500 text-teal-600 rounded-full font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300"
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
            href="https://github.com/peelarajkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github size={24} className="text-gray-700" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            href="https://www.linkedin.com/in/raj-kumar-peela/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaLinkedin size={24} className="text-gray-700" />
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          {/* <ArrowDown className="text-gray-400" size={32} /> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
