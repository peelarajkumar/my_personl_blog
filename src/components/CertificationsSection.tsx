
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, User } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      title: "Azure Developer Associate",
      issuer: "Microsoft",
      date: "2023",
      description: "Comprehensive certification covering Azure services, development, and deployment strategies.",
      badgeColor: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      description: "Advanced certification in designing distributed systems and scalable applications on AWS.",
      badgeColor: "from-orange-500 to-yellow-500"
    },
    {
      id: 3,
      title: "React Professional Developer",
      issuer: "Meta",
      date: "2022",
      description: "Expert-level certification in React development, including advanced patterns and best practices.",
      badgeColor: "from-cyan-500 to-blue-500"
    },
    {
      id: 4,
      title: "Node.js Application Developer",
      issuer: "OpenJS Foundation",
      date: "2021",
      description: "Professional certification in Node.js development, including Express.js and backend architecture.",
      badgeColor: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      title: "AI and Machine Learning",
      issuer: "Google Cloud",
      date: "2023",
      description: "Specialized certification in AI/ML services and implementation on Google Cloud Platform.",
      badgeColor: "from-purple-500 to-pink-500"
    },
    {
      id: 6,
      title: "DevOps Engineering",
      issuer: "Docker",
      date: "2021",
      description: "Advanced certification in containerization, orchestration, and DevOps best practices.",
      badgeColor: "from-gray-600 to-gray-800"
    }
  ];

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
            Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${cert.badgeColor} rounded-full flex items-center justify-center`}>
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                <p className="text-blue-600 font-semibold mb-1">{cert.issuer}</p>
                <div className="flex items-center justify-center text-gray-500 text-sm">
                  <Calendar size={16} className="mr-2" />
                  <span>{cert.date}</span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-center">
                {cert.description}
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-6 text-center"
              >
                <button className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-lg font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300">
                  View Certificate
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Continuous Learning</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I believe in staying current with the latest technologies and best practices. 
            These certifications represent my commitment to professional growth and excellence in software development.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CertificationsSection;
