
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: Code, title: "Full-Stack Development", desc: "Expert in modern web technologies" },
    { icon: Zap, title: "Automation & AI", desc: "Building intelligent solutions" },
    { icon: Users, title: "Team Leadership", desc: "Leading development teams" },
    { icon: Award, title: "Best Practices", desc: "Clean code & architecture" }
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
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate full-stack developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">My Journey</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              With over 5 years of experience in full-stack development, I've had the privilege 
              of working on diverse projects ranging from automation tools to AI-integrated solutions. 
              My journey began with a curiosity for how things work, and it has evolved into a 
              passion for building exceptional digital experiences.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              I specialize in modern web technologies including React, Node.js, and cloud platforms. 
              My expertise extends to automation using Puppeteer, AI integration with OpenAI, 
              and microservices architecture. I believe in writing clean, maintainable code 
              and following best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="Developer workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{skill.title}</h4>
                <p className="text-gray-600">{skill.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
