import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, 
  FaGitAlt, FaGithub, FaDatabase, FaDocker, FaAws, FaPython,
  FaLock, FaEnvelope, FaWhatsapp, FaCreditCard, FaShieldAlt,
  FaServer, FaToolbox, FaLockOpen, FaCodeBranch, FaBug,
  FaTerminal, FaCloud, FaRegFileCode
} from 'react-icons/fa';
import { DiCssdeck, DiMysql, DiJqueryLogo, DiNpm, DiGitBranch } from 'react-icons/di';
import { 
  SiTypescript, SiNextdotjs, SiFirebase, SiMongodb, SiRedux, 
  SiExpress, SiFramer, SiGraphql, SiPrisma, SiJest, SiCypress, 
  SiVercel, SiMui, SiFastapi, SiPydantic, SiJsonwebtokens,
  SiPostman, SiRender, SiVite, SiAxios, SiReactrouter,
  SiTailwindcss, SiLucide, SiTwilio, SiGmail, SiNgrok,
  SiPaypal
} from 'react-icons/si';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; // Important: Add this for tooltips to work

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const skills = [
    // Frontend Core
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', proficiency: 95, category: 'Frontend' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', proficiency: 90, category: 'Frontend' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', proficiency: 90, category: 'Frontend' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', proficiency: 85, category: 'Frontend' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB', proficiency: 90, category: 'Frontend' },
    { name: 'React Router', icon: <SiReactrouter />, color: '#CA4245', proficiency: 85, category: 'Frontend' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000', proficiency: 85, category: 'Frontend' },
    { name: 'Vite', icon: <SiVite />, color: '#646CFF', proficiency: 85, category: 'Frontend' },
    { name: 'jQuery', icon: <DiJqueryLogo />, color: '#0769AD', proficiency: 80, category: 'Frontend' },
    
    // Styling
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3', proficiency: 85, category: 'Styling' },
    { name: 'Material-UI', icon: <SiMui />, color: '#007FFF', proficiency: 80, category: 'Styling' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38BDF8', proficiency: 90, category: 'Styling' },
    { name: 'CSS Modules', icon: <FaRegFileCode />, color: '#000000', proficiency: 85, category: 'Styling' }, // Fixed: Changed from DiCssdeck
    
    // Animation & Assets
    { name: 'Framer Motion', icon: <SiFramer />, color: '#0055FF', proficiency: 85, category: 'Animation' },
    { name: 'Lucide Icons', icon: <SiLucide />, color: '#F56565', proficiency: 80, category: 'Assets' },
    
    // State Management
    { name: 'Redux', icon: <SiRedux />, color: '#764ABC', proficiency: 85, category: 'State' },
    { name: 'Context API', icon: <FaReact />, color: '#61DAFB', proficiency: 85, category: 'State' },
    
    // HTTP Client
    { name: 'Axios', icon: <SiAxios />, color: '#5A29E4', proficiency: 90, category: 'Networking' },
    { name: 'Fetch API', icon: <FaJs />, color: '#F7DF1E', proficiency: 90, category: 'Networking' },
    
    // Backend Core
    { name: 'Python', icon: <FaPython />, color: '#3776AB', proficiency: 90, category: 'Backend' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', proficiency: 85, category: 'Backend' },
    { name: 'Express.js', icon: <SiExpress />, color: '#000000', proficiency: 85, category: 'Backend' },
    { name: 'FastAPI', icon: <SiFastapi />, color: '#009688', proficiency: 85, category: 'Backend' },
    { name: 'Pydantic', icon: <SiPydantic />, color: '#E92063', proficiency: 80, category: 'Backend' },
    { name: 'Gunicorn', icon: <FaPython />, color: '#499848', proficiency: 80, category: 'Backend' },
    { name: 'Uvicorn', icon: <FaPython />, color: '#45b8d8', proficiency: 80, category: 'Backend' },
    
    // Database
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', proficiency: 85, category: 'Database' },
    { name: 'MongoDB Atlas', icon: <SiMongodb />, color: '#00ED64', proficiency: 80, category: 'Database' },
    { name: 'MySQL', icon: <DiMysql />, color: '#4479A1', proficiency: 75, category: 'Database' },
    { name: 'Prisma', icon: <SiPrisma />, color: '#2D3748', proficiency: 70, category: 'Database' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28', proficiency: 75, category: 'Database' },
    
    // Authentication & Security
    { name: 'JWT', icon: <SiJsonwebtokens />, color: '#000000', proficiency: 85, category: 'Security' },
    { name: 'bcrypt', icon: <FaLock />, color: '#003A70', proficiency: 80, category: 'Security' },
    { name: 'CORS', icon: <FaShieldAlt />, color: '#4CAF50', proficiency: 80, category: 'Security' },
    { name: 'Environment Variables', icon: <FaLockOpen />, color: '#FF6B6B', proficiency: 90, category: 'Security' },
    
    // Payments
    { name: 'PayFast', icon: <FaCreditCard />, color: '#9C27B0', proficiency: 75, category: 'Payments' },
    { name: 'PayPal', icon: <SiPaypal />, color: '#00457C', proficiency: 70, category: 'Payments' },
    
    // Communications
    { name: 'SMTP', icon: <FaEnvelope />, color: '#D14836', proficiency: 80, category: 'Communications' },
    { name: 'Email Templates', icon: <FaEnvelope />, color: '#34A853', proficiency: 85, category: 'Communications' },
    { name: 'Twilio', icon: <SiTwilio />, color: '#F22F46', proficiency: 70, category: 'Communications' },
    { name: 'WhatsApp API', icon: <FaWhatsapp />, color: '#25D366', proficiency: 70, category: 'Communications' },
    { name: 'Gmail API', icon: <SiGmail />, color: '#EA4335', proficiency: 75, category: 'Communications' },
    
    // API & Integration
    { name: 'REST API', icon: <FaServer />, color: '#FF6C37', proficiency: 90, category: 'API' },
    { name: 'GraphQL', icon: <SiGraphql />, color: '#E535AB', proficiency: 75, category: 'API' },
    { name: 'HTTPX', icon: <FaPython />, color: '#FF6600', proficiency: 75, category: 'API' },
    
    // Deployment & Hosting
    { name: 'Render', icon: <SiRender />, color: '#46E3B7', proficiency: 85, category: 'DevOps' },
    { name: 'Vercel', icon: <SiVercel />, color: '#000000', proficiency: 85, category: 'DevOps' },
    { name: 'AWS', icon: <FaAws />, color: '#FF9900', proficiency: 65, category: 'DevOps' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED', proficiency: 70, category: 'DevOps' },
    { name: 'Ngrok', icon: <SiNgrok />, color: '#1F1E37', proficiency: 75, category: 'DevOps' },
    { name: 'Environment Config', icon: <FaCodeBranch />, color: '#FF8800', proficiency: 90, category: 'DevOps' },
    
    // Version Control
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032', proficiency: 90, category: 'Version Control' },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717', proficiency: 90, category: 'Version Control' },
    { name: 'GitHub Actions', icon: <DiGitBranch />, color: '#2088FF', proficiency: 75, category: 'Version Control' },
    { name: 'npm', icon: <DiNpm />, color: '#CB3837', proficiency: 85, category: 'Version Control' },
    
    // Testing & Development
    { name: 'Jest', icon: <SiJest />, color: '#C21325', proficiency: 75, category: 'Testing' },
    { name: 'Cypress', icon: <SiCypress />, color: '#17202C', proficiency: 70, category: 'Testing' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37', proficiency: 85, category: 'Tools' },
    { name: 'Swagger/OpenAPI', icon: <SiFastapi />, color: '#85EA2D', proficiency: 80, category: 'Tools' },
    { name: 'Logging', icon: <FaTerminal />, color: '#FFD700', proficiency: 85, category: 'Tools' }, // Fixed: Changed from FaDatabase
    { name: 'Debugging', icon: <FaBug />, color: '#DC143C', proficiency: 90, category: 'Tools' }, // Fixed: Changed from FaToolbox
  ];

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  // Get unique categories sorted alphabetically
  const categories = Object.keys(groupedSkills).sort();

  return (
    <section 
      id="skills" 
      ref={ref} 
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Skills & Technologies
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              A comprehensive overview of the technologies I've mastered throughout my development journey
            </motion.p>
          </div>
          
          {/* Category Filters */}
          <div className="overflow-x-auto pb-4 mb-8 scrollbar-hide">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 min-w-max md:min-w-0">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm bg-gray-800/80 hover:bg-purple-600 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 whitespace-nowrap backdrop-blur-sm border border-gray-700 hover:border-purple-500"
                  onClick={() => {
                    document.getElementById(`category-${category}`)?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Skills by Category */}
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category} id={`category-${category}`} className="scroll-mt-24">
                <motion.h3 
                  className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-8 text-left border-b border-gray-700 pb-2 inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={mainControls}
                  transition={{ duration: 0.5 }}
                >
                  {category}
                </motion.h3>
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ staggerChildren: 0.05 }}
                >
                  {groupedSkills[category].map((skill, index) => (
                    <motion.div
                      key={`${category}-${index}`}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-tooltip-id="skill-tooltip"
                      data-tooltip-content={`${skill.name} - ${skill.proficiency}% proficiency`}
                    >
                      <div 
                        className="flex flex-col items-center p-4 md:p-5 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer relative group h-full"
                      >
                        {/* Icon with 3D Bubble Effect */}
                        <div className="relative mb-3">
                          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 scale-150"></div>
                          <span 
                            className="text-4xl md:text-5xl transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1"
                            style={{ color: skill.color }}
                          >
                            {skill.icon}
                          </span>
                        </div>
                        <span className="font-medium text-sm md:text-base text-gray-200 group-hover:text-white transition-colors duration-300 text-center">
                          {skill.name}
                        </span>
                        {skill.proficiency && (
                          <div className="w-full mt-3 space-y-1">
                            <div className="flex justify-between text-xs text-gray-400">
                              <span>Proficiency</span>
                              <span>{skill.proficiency}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                              <motion.div 
                                className="h-full rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.proficiency}%` }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                                style={{ backgroundColor: skill.color }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <Tooltip 
        id="skill-tooltip" 
        place="top"
        className="!bg-gray-900 !text-white !px-3 !py-2 !rounded-lg !text-sm !shadow-xl !border !border-gray-700 z-50"
      />
    </section>
  );
};

export default Skills;