import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import { 
  Send, Download, Mail, Phone, MapPin, Github, Linkedin, 
  Twitter, CheckCircle, AlertCircle, Loader, Sparkles,
  Copy, Globe, MessageSquare, FileText,  Calendar,
  Clock, Heart, Zap,User, AtSign
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const mainControls = useAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    const form = e.target;

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsError(true);
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/ss resume.pdf';
    link.download = 'Sabelo_Sibaya_Resume.pdf';
    link.click();
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'sabelo@example.com', href: 'mailto:sabelo@example.com', color: 'from-blue-500 to-blue-600' },
    { icon: <Phone className="h-5 w-5" />, label: 'Phone', value: '+27 74 642 2396', href: 'tel:+27746422396', color: 'from-green-500 to-green-600' },
    { icon: <MapPin className="h-5 w-5" />, label: 'Location', value: 'South Africa', href: null, color: 'from-red-500 to-red-600' },
    { icon: <Globe className="h-5 w-5" />, label: 'Portfolio', value: 'sabelo.dev', href: 'https://sabelo.dev', color: 'from-purple-500 to-purple-600' },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/Sabelodone', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/in/sabelo-sibaya', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/SabeloSibaya', label: 'Twitter', color: 'hover:text-blue-300' },
    { icon: <FaWhatsapp className="h-5 w-5" />, href: 'https://wa.me/+27746422396', label: 'WhatsApp', color: 'hover:text-green-400' },
  ];

  const quickResponses = [
    'I typically reply within 24 hours',
    'Available for freelance work',
    'Open to collaborations',
    'Based in South Africa (GMT+2)'
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-200 overflow-hidden relative"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/10"
          >
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Get in Touch</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                  style={{ background: `linear-gradient(135deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})` }}
                />
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color}`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-white hover:text-purple-400 transition-colors font-medium">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                    {item.value.includes('@') && (
                      <button
                        onClick={() => copyToClipboard(item.value)}
                        className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                        title="Copy to clipboard"
                      >
                        <Copy className="h-4 w-4 text-gray-400 hover:text-white" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Heart className="h-4 w-4 text-pink-400" />
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-gray-700 text-gray-300 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                Quick Responses
              </h3>
              <div className="space-y-2">
                {quickResponses.map((response, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                    <span>{response}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="h-5 w-5 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Send a Message</h3>
              </div>

              {/* Form Section */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full pl-10 pr-4 py-3 bg-gray-700/50 text-white border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your email address"
                        className="w-full pl-10 pr-4 py-3 bg-gray-700/50 text-white border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-gray-700/50 text-white border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700/50 text-white border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 placeholder-gray-500 resize-none"
                    required
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="h-5 w-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDownloadResume}
                    className="w-full sm:w-auto px-8 py-3 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <FileText className="h-5 w-5" />
                    <span>Download Resume</span>
                    <Download className="h-4 w-4 ml-1" />
                  </motion.button>
                </div>

                {/* Feedback Messages */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-6 p-4 bg-green-900/30 border border-green-500/50 text-green-400 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Message sent successfully!</p>
                        <p className="text-sm text-green-400/70">I'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}

                  {isError && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-6 p-4 bg-red-900/30 border border-red-500/50 text-red-400 rounded-lg flex items-center gap-3"
                    >
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Error sending message</p>
                        <p className="text-sm text-red-400/70">Please try again later or contact me directly.</p>
                      </div>
                    </motion.div>
                  )}

                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-6 p-3 bg-blue-900/30 border border-blue-500/50 text-blue-400 rounded-lg text-center"
                    >
                      Email copied to clipboard! 📋
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              {/* Form Footer */}
              <div className="mt-6 pt-6 border-t border-gray-700 flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Response time: 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Mon - Fri, 9AM - 6PM GMT+2</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;