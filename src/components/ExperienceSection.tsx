
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer",
      company: "Donyati India Private Limited",
      period: "2023 - Present",
      location: "Bengaluru",
      description: "Developing modern, scalable web applications using a wide range of frontend and backend technologies including JavaScript, jQuery, ReactJS, Node.js, Hasura, and MySQL and related technologies. Experienced in deploying solutions to the cloud with Azure, integrating third-party APIs, and building automation tools. Built a custom AI chatbot using OpenAI APIs, designed to streamline workflows and enhance user interaction within web platforms.",
      achievements: [
        "Built an AI-powered chatbot to evaluate financial risk and generate reports using OpenAI.",
        "Integrated third-party data services including HazardHub for risk analysis and reporting.",
        "Streamlined manual business processes, resulting in a significant reduction in operational effort and time."
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Development Engineer",
      company: "Wavemaker India",
      period: "2021 - 2023",
      location: "Hyderabad",
      description: "Developed multiple dynamic web applications using ReactJS and a low-code/no-code platform (Wavemaker). Led a team of developers, guiding them in building scalable and complex UI modules while actively contributing to the architecture and feature planning. Collaborated closely with stakeholders to propose and implement the best possible solutions tailored to business needs.",
      achievements: [
        "Led the successful end-to-end development and deployment of a full-scale banking application.",
        "Streamlined financial and wealth management processes by replacing manual workflows, significantly improving efficiency for banking staff.",
        "Designed and implemented reusable components adopted across the platform, enhancing consistency and accelerating development cycles."
      ],
      color: "from-orange-400 to-red-400"
    },
    {
      id: 3,
      title: "Software Intern",
      company: "Motivity Labs",
      period: "2020 - 2021",
      location: "Hyderabad",
      description: "Focused on building foundational skills in HTML, CSS, JavaScript, and React. Gradually transitioned into contributing to internal projects while gaining exposure to real-world development practices, SDLC, and Agile workflows.",
      achievements: [
    "Built UI components as part of internal resource management projects.",
    "Participated in sprint planning and learned Agile methodologies.",
    "Improved understanding of version control, debugging, and frontend workflows."
  ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
            Experience Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional evolution through innovation and growth
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-orange-400 to-pink-400 rounded-full">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-teal-500 to-transparent rounded-full"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative flex items-start mb-16 ml-20"
            >
              {/* Animated Dot */}
              <motion.div
                className={`absolute -left-[72px] w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full shadow-lg flex items-center justify-center`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                whileHover={{ scale: 1.2 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Briefcase className="text-white" size={16} />
                </motion.div>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 w-full"
              >
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center text-gray-500 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{exp.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center mb-3">
                    <TrendingUp size={16} className="mr-2 text-teal-500" />
                    <span className="font-semibold text-gray-700">Key Achievements</span>
                  </div>
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.3 + achIndex * 0.1 + 0.8 }}
                      className="flex items-start"
                    >
                      <div className={`w-3 h-3 bg-gradient-to-r ${exp.color} rounded-full mt-2 mr-4 flex-shrink-0`}></div>
                      <span className="text-gray-600 leading-relaxed">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
