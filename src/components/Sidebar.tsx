import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  User,
  Briefcase,
  Code,
  Settings,
  Mail,
  ChevronLeft,
  Award,
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
  isCollapsed,
  setIsCollapsed,
}) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'techstack', label: 'Tech Stack', icon: Settings },
    { id: 'services', label: 'Services', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.aside
      animate={{
        width: isCollapsed ? (window.innerWidth < 1024 ? 0 : 80) : 256,
      }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 h-full z-50 bg-white/80 backdrop-blur-lg border-r border-gray-200 shadow-xl overflow-hidden"
    >
      {/* Sidebar content - Hidden completely on mobile when collapsed */}
      <div
        className={`p-6 ${
          isCollapsed && window.innerWidth < 1024 ? 'hidden' : 'block'
        }`}
      >
        <motion.div
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          {!isCollapsed && (
            <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">
              Rajkumar
            </h1>
          )}
        </motion.div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} className="flex-shrink-0" />
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="ml-3 font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </nav>
      </div>

      {/* Collapse toggle button only visible when sidebar is expanded (desktop only) */}
      {!(isCollapsed && window.innerWidth < 1024) && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-4 right-4 z-50 bg-white p-2 rounded-full shadow-md border border-gray-200 transition-all"
        >
          <ChevronLeft size={16} />
        </button>
      )}
    </motion.aside>
  );
};

export default Sidebar;
