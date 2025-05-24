
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, User, MessageCircle, CheckCircle, LinkedinIcon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_r7dr1u7',        // 🔁 Replace with actual service ID
        'template_e4yxete',       // 🔁 Replace with actual template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'gQa38-xTx6rrFsh74'         // 🔁 Replace with your EmailJS public key
      );
  
      console.log('EmailJS success:', result.text);
  
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. Rajkumar will get back to you soon.",
      });
  
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
  
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact directly at peelarajkumar@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Let's Connect</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-white rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">peelarajkumar@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-white rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mr-4">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">GitHub</h4>
                  <p className="text-gray-600">github.com/rajkumar</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-white rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mr-4">
                  <LinkedinIcon className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                  <p className="text-gray-600">https://www.linkedin.com/in/raj-kumar-peela/</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <MessageCircle className="inline-block mr-2" size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Your message will be sent directly to Rajkumar at peelarajkumar@gmail.com
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
