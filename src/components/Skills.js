import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaBootstrap, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
    { name: 'MySQL', icon: <FaDatabase />, color: '#4479A1' },
  ];

  return (
    <section id="skills" ref={ref} className="py-16">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
          <div className="text-3xl font-bold mb-6">Skills</div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl" style={{ color: skill.color }}>
                        {skill.icon}
                      </span>
                      <span className="font-medium text-lg">{skill.name}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full`}
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }} // This can be adjusted dynamically as needed
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
