import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaBootstrap, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di'; // For Tailwind CSS logo
import { SiTypescript, SiNextdotjs } from 'react-icons/si'; // For TypeScript and Next.js logos

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
}

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const skills: Skill[] = [
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
    { name: 'Tailwind CSS', icon: <DiCssdeck />, color: '#38BDF8' }, // Added Tailwind CSS
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' }, // Added TypeScript
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' }, // Added Next.js
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
                key={index} // Use index as the key to avoid key duplication issues
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
                      className="h-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
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
