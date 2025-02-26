import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, 
  FaGitAlt, FaGithub, FaDatabase, FaDocker, FaAws 
} from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di'; // Tailwind CSS
import { SiTypescript, SiNextdotjs, SiFirebase, SiMongodb, SiRedux, 
  SiExpress, SiFramer, SiGraphql, SiPrisma, SiJest, SiCypress, SiVercel, SiMui 
} from 'react-icons/si';
import { Tooltip } from 'react-tooltip';

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
  proficiency?: number; // Optional: Skill proficiency percentage
}

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const skills: Skill[] = [
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26', proficiency: 95 },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6', proficiency: 90 },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', proficiency: 90 },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', proficiency: 85 },
    { name: 'React', icon: <FaReact />, color: '#61DAFB', proficiency: 90 },
    { name: 'Redux', icon: <SiRedux />, color: '#764ABC', proficiency: 80 },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000', proficiency: 85 },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', proficiency: 85 },
    { name: 'Express.js', icon: <SiExpress />, color: '#000000', proficiency: 80 },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', proficiency: 75 },
    { name: 'MySQL', icon: <FaDatabase />, color: '#4479A1', proficiency: 70 },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28', proficiency: 75 },
    { name: 'GraphQL', icon: <SiGraphql />, color: '#E535AB', proficiency: 70 },
    { name: 'Prisma', icon: <SiPrisma />, color: '#2D3748', proficiency: 65 },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3', proficiency: 85 },
    { name: 'Material-UI', icon: <SiMui />, color: '#007FFF', proficiency: 80 },
    { name: 'Tailwind CSS', icon: <DiCssdeck />, color: '#38BDF8', proficiency: 90 },
    { name: 'Framer Motion', icon: <SiFramer />, color: '#0055FF', proficiency: 85 },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED', proficiency: 70 },
    { name: 'AWS', icon: <FaAws />, color: '#FF9900', proficiency: 65 },
    { name: 'Jest', icon: <SiJest />, color: '#C21325', proficiency: 75 },
    { name: 'Cypress', icon: <SiCypress />, color: '#17202C', proficiency: 70 },
    { name: 'Vercel', icon: <SiVercel />, color: '#000000', proficiency: 80 },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032', proficiency: 85 },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717', proficiency: 90 },
  ];

  return (
    <section 
      id="skills" 
      ref={ref} 
      className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl font-bold text-purple-400 mb-10"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Skills
          </motion.h2>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ staggerChildren: 0.1 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                data-tooltip-id="skill-tooltip"
                data-tooltip-content={`${skill.name} - ${skill.proficiency}%`}
              >
                <div 
                  className="flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-lg transform hover:shadow-2xl transition duration-300 cursor-pointer relative group"
                >
                  {/* Icon with 3D Bubble Effect */}
                  <div className="relative">
                    <span 
                      className="text-4xl transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-12"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                  <span className="font-medium text-lg mt-2">{skill.name}</span>
                  {skill.proficiency && (
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-3">
                      <div 
                        className="h-2 rounded-full"
                        style={{ width: `${skill.proficiency}%`, backgroundColor: skill.color }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <Tooltip id="skill-tooltip" />
    </section>
  );
};

export default Skills;