import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [ref, isInView] = useInView({ triggerOnce: true });
  const mainControls = useAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

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
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      setIsError(true);
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

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-200"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="max-w-4xl mx-auto bg-gray-800/90 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-gray-700"
      >
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Contact Me
          </h1>
          <p className="mt-4 text-lg text-gray-400">
          Feel free to reach out for opportunities or inquiries.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              rows="5"
              className="w-full px-4 py-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
              required
            ></textarea>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="w-full md:w-auto px-6 py-3 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
            >
              Download Resume
            </motion.button>
          </div>

          {/* Feedback Messages */}
          {isSuccess && (
            <div className="mt-6 p-4 bg-green-900/50 text-green-400 rounded-lg text-center">
              Message sent successfully! 🎉
            </div>
          )}
          {isError && (
            <div className="mt-6 p-4 bg-red-900/50 text-red-400 rounded-lg text-center">
              Error sending message. Please try again later.
            </div>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;