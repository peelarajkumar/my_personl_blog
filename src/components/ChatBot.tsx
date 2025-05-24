
import React, { useState, useRef, useEffect } from 'react';
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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const rajkumarKnowledge = `You are Rajkumar's personal AI assistant. Here's what you know about Rajkumar:

PROFESSIONAL BACKGROUND:
- Senior Full-Stack Developer with 5+ years of experience
- Currently working at Tech Solutions Inc.
- Specializes in React, Node.js, and AI integration
- Expert in building automation tools and AI solutions

TECHNICAL SKILLS:
- Frontend: ReactJS, NextJS, JavaScript, HTML5, CSS3, Redux, jQuery
- Backend: NodeJS, ExpressJS, SQL, Supabase
- Cloud & Deployment: Azure, Vercel, Azure AI
- Tools & Libraries: Puppeteer, OpenAI integration, automation tools
- Specializes in microservices architecture and modern web development

KEY PROJECTS:
- Automation tools using Node.js and Puppeteer
- AI chatbots with OpenAI integration
- Microservices with HazardHub and Experian APIs
- Browser automation solutions
- Modern web applications with 15+ production apps

ACHIEVEMENTS:
- Reduced processing time by 60% through automation
- Led development teams successfully
- Implemented CI/CD pipelines
- Built scalable web applications
- Expert in AI integration and automation

CONTACT:
- Available through the portfolio contact form
- Professional email and social media profiles linked
- Open to new opportunities and collaborations

You can answer questions about Rajkumar professionally and also help with general questions. Keep responses helpful, professional, and enthusiastic about Rajkumar's work.`;

  const getAIResponse = async (userMessage: string) => {
    const apiKey = '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';

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Rajkumar Portfolio Assistant',
        },
        body: JSON.stringify({
          model: 'mistralai/mistral-7b-instruct',
          messages: [
            { role: 'system', content: rajkumarKnowledge },
            { role: 'user', content: userMessage }
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenRouter API Error:', error);
      return "I apologize, but I'm having trouble connecting right now. Please try asking about Rajkumar's experience, skills, or projects, and I'll do my best to help you!";
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user' as const
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
          sender: 'bot' as const
        };
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      const errorResponse = {
        id: messages.length + 2,
        text: "I apologize, but I'm experiencing some technical difficulties. Please try asking about Rajkumar's experience, skills, or projects!",
        sender: 'bot' as const
      };
      setMessages(prev => [...prev, errorResponse]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full shadow-lg flex items-center justify-center z-50 hover:shadow-xl transition-shadow"
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
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
          >
            <div className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white p-4 flex justify-between items-center">
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
                  <p className="text-xs opacity-90">Powered by Mistral AI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start max-w-xs ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-teal-400 ml-2' : 'bg-orange-400 mr-2'}`}>
                      {message.sender === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                    </div>
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-teal-400 text-white'
                          : 'bg-white text-gray-800 shadow-sm'
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
                  <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full mr-2"
                    />
                    <span className="text-gray-600">Thinking...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Rajkumar or anything else..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputText.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-teal-400 to-cyan-400 text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
