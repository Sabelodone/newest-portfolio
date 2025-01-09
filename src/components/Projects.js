import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const fadeInBounceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  const projects = [
    {
      title: 'Suits-systems',
      description: 'Suits Systems is a responsive web application tailored for law firms, focusing on seamless document management, case management, and time tracking.',
      image: '/Screenshot 2024-09-20 075900.png',
      github: 'https://github.com/Sabelodone/law-firm_software/tree/master/suits-systems',
      demo: 'https://suits-systems.vercel.app/'
    },
    {
      title: 'Cheza',
      description: 'Cheza is a sleek and modern travel management website that provides users with a seamless platform to plan, book, and manage their travel experiences.',
      image: '/Screenshot 2024-09-20 081716.png',
      github: 'https://github.com/Sabelodone/cheza-website',
      demo: 'https://cheza-phi.vercel.app/m'
    },
    {
      title: 'Massage Phela',
      description: 'A website where you can select from various massage options, book your appointment, and confirm it.',
      image: '/massage-phela.png',
      github: 'https://github.com/Sabelodone/massage-phela.git',
      demo: 'http://massage-phela-xv3s-git-master-sabelodones-projects.vercel.app'
    },
    {
      title: 'Soft techs',
      description: 'A website for my small business.',
      image: '/Screenshot 2024-12-27 170320.png',
      github: 'https://github.com/Sabelodone/soft-techs',
      demo: 'https://vercel.com/sabelodones-projects/soft-techs'
    },
    {
      title: 'Cube Notes',
      description: 'A sleek, modern, and fully responsive website for Cube Notes—an online tutoring platform that offers expert tutoring across multiple subjects.',
      image: '/Screenshot 2025-01-02 113100.png',
      github: 'https://github.com/Sabelodone/cube-notes-website/tree/masterr',
      demo: 'https://cube-notes-website.vercel.app/'
    },
    {
      title: 'Weather app',
      description: 'Stay updated with real-time weather and hourly forecasts using our sleek Weather App, powered by OpenWeatherMap and Unsplash APIs for dynamic data and stunning visuals.',
      image: '/Screenshot 2025-01-05 121918.png',
      github: 'https://github.com/Sabelodone/weather',
      demo: 'https://weather-iota-sandy.vercel.app/'
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-16">
      <motion.div
        variants={fadeInBounceVariants}
        initial="hidden"
        animate={mainControls}
        className="bg-gray-800 text-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInBounceVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden h-full flex flex-col bg-gray-700 hover:bg-gray-600 transition-colors duration-300 rounded-lg shadow-md"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
              </div>
              <div className="p-4 pt-0 mt-auto flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 mr-2 text-center py-2 bg-transparent border-2 border-gray-300 text-gray-300 hover:bg-gray-600 rounded-lg flex items-center justify-center"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 ml-2 text-center py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
