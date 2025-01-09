import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
  const [ref, isInView] = useInView({ triggerOnce: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the form element directly (no need to create FormData object)
    const form = e.target;

    // Log the form data for debugging
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    // Send the form data using EmailJS
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Use environment variable
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Use environment variable
        form, // Pass the actual form element here (e.target)
        process.env.REACT_APP_EMAILJS_USER_ID // Use environment variable
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.reset(); // Reset form fields after successful submission
        },
        (error) => {
          console.error('Error sending message:', error);
          alert('Error sending message, please try again later.');
        }
      );
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sabelo Sibaya Resume 2024 (3).pdf'; // Path to the resume in the public folder
    link.download = 'Sabelo_Sibaya_Resume.pdf'; // Desired download file name
    link.click();
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-200"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="max-w-4xl mx-auto bg-gray-800/90 backdrop-blur-lg p-8 rounded-xl shadow-xl"
      >
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-white">Contact Me</h1>
          <p className="text-lg text-gray-400">
            Feel free to reach out for opportunities or inquiries.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6" onSubmit={handleSubmit}>
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
                className="w-full px-4 py-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                className="w-full px-4 py-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
              className="w-full px-4 py-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
              rows="4"
              className="w-full px-4 py-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Send Message
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Download Resume
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
