
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUp, Code } from 'lucide-react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');



  const projects = [
  {
    id: 1,
    title: "Underwriter Workbench",
    description:
      "A web application that assists underwriters in evaluating insured information, premiums, and managing the insurance flow—quoting, binding, renewal, etc. Built using JavaScript, jQuery, Node.js, Power Apps, and Hasura.",
    image: "https://insurancetrainingcenter.com/wp-content/uploads/2021/04/What-is-an-Underwriter.jpg?w=600&h=400&fit=crop",
    tags: ["JavaScript", "jQuery", "NodeJS", "Power Apps", "Hasura"],
    category: "webapp",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Wealth Management System",
    description:
      "An end-to-end wealth management platform for tracking assets, liabilities, and relationship accounts. Developed using ReactJS, Node.js, and the low-code platform Wavemaker.",
    image: "https://www.doozymarketing.com/wp-content/uploads/2022/09/Wealth-Management.jpg?w=600&h=400&fit=crop",
    tags: ["ReactJS", "NodeJS", "Wavemaker", "Finance"],
    category: "finance",
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Banking Application – FIS Cortex",
    description:
      "A card management system built for banking operations—creating, updating, and managing cards. Developed using JavaScript and Wavemaker for FIS Cortex.",
    image: "https://cdn.vectorstock.com/i/1000v/72/54/bank-vector-15347254.jpg?rs=1&pid=ImgDetMain?w=600&h=400&fit=crop",
    tags: ["JavaScript", "Wavemaker", "Banking", "FIS Cortex"],
    category: "banking",
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "AI-Powered Underwriting Assistant",
    description:
      "An AI bot designed to assist underwriters in performing risk analysis by scoring insureds based on policy submissions. Built using OpenAI, Node.js, and ReactJS.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/001/975/259/small_2x/artificial-intelligence-lifestyle-users-and-scientists-exchange-information-around-ai-characters-flat-design-style-minimal-illustration-vector.jpg?w=600&h=400&fit=crop",
    tags: ["OpenAI", "NodeJS", "ReactJS", "AI", "Insurance"],
    category: "ai",
    github: "#",
    demo: "#"
  },
  {
  id: 5,
  title: "IGCC – RFP & Resource Management System",
  description:
    "A comprehensive internal platform for managing RFPs, clients, ongoing projects, and SOWs for a large construction company. Designed to digitally streamline resource and project management workflows. Built using ReactJS, Supabase, Node.js, and deployed on Vercel.",
  image: "https://c8.alamy.com/comp/2RA3BMP/cartoon-factory-on-white-background-in-flat-style-for-icon-2RA3BMP.jpg?w=600&h=400&fit=crop",
  tags: ["ReactJS", "Supabase", "NodeJS", "Vercel", "RFP Management"],
  category: "management",
  github: "#",
  demo: "#"
}
];


  const filters = [
    { key: 'all', label: 'Recent Projects' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work in automation, AI integration, and modern web development
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filterItem) => (
            <motion.button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === filterItem.key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 shadow-md hover:shadow-lg'
              }`}
            >
              {filterItem.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.github}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      <Github className="text-white" size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.demo}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      <ArrowUp className="text-white" size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
