
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, User } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi! I'm Rajkumar's AI assistant. Ask me anything about his experience, skills, or projects!", 
      sender: 'bot' 
    }
  ]);
  const [inputText, setInputText] = useState('');

  const responses = {
    'experience': "Rajkumar has 5+ years of full-stack development experience, specializing in React, Node.js, and AI integration.",
    'skills': "His core skills include ReactJS, NodeJS, Python, Azure, automation tools, and AI solutions development.",
    'projects': "He has built automation tools, AI chatbots, microservices integration, and modern web applications.",
    'contact': "You can reach Rajkumar through the contact form on this website or via email.",
    'default': "I can help you learn more about Rajkumar's experience, skills, projects, or how to contact him. What would you like to know?"
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user'
    };

    setMessages(prev => [...prev, newMessage]);

    // Simple keyword-based response
    const keywords = inputText.toLowerCase();
    let response = responses.default;

    if (keywords.includes('experience') || keywords.includes('work')) {
      response = responses.experience;
    } else if (keywords.includes('skill') || keywords.includes('technology')) {
      response = responses.skills;
    } else if (keywords.includes('project') || keywords.includes('portfolio')) {
      response = responses.projects;
    } else if (keywords.includes('contact') || keywords.includes('email')) {
      response = responses.contact;
    }

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: response,
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputText('');
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center z-50"
      >
        <MessageCircle className="text-white" size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Ask about Rajkumar</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about skills, experience..."
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
