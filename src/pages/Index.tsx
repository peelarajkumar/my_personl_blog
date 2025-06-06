import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react'; // ⬅️ Add this import
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TechStackSection from '../components/TechStackSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ServicesSection from '../components/ServicesSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
import ChatBot from '../components/ChatBot';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 'home', component: HeroSection },
    { id: 'about', component: AboutSection },
    { id: 'techstack', component: TechStackSection },
    { id: 'projects', component: ProjectsSection },
    { id: 'experience', component: ExperienceSection },
    { id: 'services', component: ServicesSection },
    { id: 'certifications', component: CertificationsSection },
    { id: 'contact', component: ContactSection },
  ];

  const getCurrentSection = () => {
    return sections.find(section => section.id === activeSection);
  };

  const currentSection = getCurrentSection();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-orange-50 to-pink-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">
            Loading Portfolio...
          </h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-orange-50 to-pink-50 relative">
      {/* ✅ Always-visible toggle button when collapsed on mobile */}
      {isCollapsed && window.innerWidth < 1024 && (
        <button
          onClick={() => setIsCollapsed(false)}
          className="fixed top-4 left-2 z-50 bg-white p-2 rounded-full shadow-md border border-gray-200"
        >
          <ChevronRight size={16} />
        </button>
      )}

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <main
        className={`min-h-screen transition-all duration-300 ${
          isCollapsed ? 'ml-0 lg:ml-20' : 'ml-64'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full"
          >
            {currentSection && (
              <currentSection.component setActiveSection={setActiveSection} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <ChatBot />
    </div>
  );
};

export default Index;
