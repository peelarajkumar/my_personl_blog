
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, User, Bot, Send } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I'm Rajkumar's AI Assistant. I can answer questions about his experience, skills, projects, or help with general inquiries. What would you like to know?", 
      sender: 'bot' 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiInput, setShowApiInput] = useState(false);

  const rajkumarKnowledge = {
    experience: "Rajkumar has 5+ years of full-stack development experience, specializing in React, Node.js, and AI integration. He's currently a Senior Full-Stack Developer at Tech Solutions Inc., where he leads automation projects and AI solutions.",
    skills: "His core technical skills include ReactJS, NodeJS, JavaScript, Python, Azure, Supabase, OpenAI integration, Puppeteer automation, microservices architecture, and modern web development frameworks.",
    projects: "He has built automation tools using Node.js and Puppeteer, AI chatbots with OpenAI integration, microservices with HazardHub and Experian APIs, modern web applications, and various automation solutions.",
    contact: "You can reach Rajkumar through the contact form on this website, via email, or through his social media profiles linked in the portfolio.",
    education: "Rajkumar has a strong background in computer science and continuously updates his skills with the latest technologies and frameworks.",
    achievements: "Key achievements include reducing processing time by 60% through automation, leading development teams, implementing CI/CD pipelines, and building 15+ production applications."
  };

  const getAIResponse = async (userMessage: string) => {
    if (!apiKey) {
      setShowApiInput(true);
      return "To provide you with AI-powered responses, I need your OpenAI API key. Please enter it in the field above, and I'll be able to help you with both questions about Rajkumar and general inquiries!";
    }

    try {
      const systemPrompt = `You are Rajkumar's personal AI assistant. Your primary role is to help users learn about Rajkumar's professional background, skills, and experience as a full-stack developer.

Here's what you know about Rajkumar:
- ${rajkumarKnowledge.experience}
- ${rajkumarKnowledge.skills}
- ${rajkumarKnowledge.projects}
- ${rajkumarKnowledge.achievements}

You can also help with general questions, but always maintain a professional and friendly tone. If asked about Rajkumar, use the knowledge above. For other questions, provide helpful and accurate responses.

Keep responses concise but informative, and always be enthusiastic about Rajkumar's work and capabilities.`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage }
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API Error:', error);
      return "I'm having trouble connecting to my AI capabilities right now. Let me help you with some basic information about Rajkumar instead! Feel free to ask about his experience, skills, or projects.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user'
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await getAIResponse(inputText);
      
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: response,
          sender: 'bot'
        };
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      const errorResponse = {
        id: messages.length + 2,
        text: "I apologize, but I'm experiencing some technical difficulties. Please try asking about Rajkumar's experience, skills, or projects!",
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorResponse]);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg flex items-center justify-center z-50"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MessageCircle className="text-white" size={24} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3"
                >
                  <Bot size={16} className="text-white" />
                </motion.div>
                <div>
                  <h3 className="font-semibold">Raj's AI Assistant</h3>
                  <p className="text-xs opacity-90">Powered by OpenAI</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {showApiInput && (
              <div className="p-4 bg-orange-50 border-b">
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your OpenAI API key..."
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                />
                <button
                  onClick={() => setShowApiInput(false)}
                  className="mt-2 px-3 py-1 bg-teal-500 text-white rounded text-sm"
                >
                  Save API Key
                </button>
              </div>
            )}

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start max-w-xs ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-teal-500 ml-2' : 'bg-orange-400 mr-2'}`}>
                      {message.sender === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                    </div>
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-teal-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-teal-500 border-t-transparent rounded-full mr-2"
                    />
                    <span className="text-gray-600">Thinking...</span>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about Rajkumar or anything else..."
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50"
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
