import React from 'react';
import { Award, Users, Code, ExternalLink, Calendar, Target, GraduationCap, Briefcase, BookOpen, Zap, Globe, Heart, Clock, Server, Layout, Terminal, Database, Cloud, GitBranch } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-200">
      <div className="max-w-5xl mx-auto bg-gray-800/90 shadow-2xl rounded-lg overflow-hidden backdrop-blur-lg">
        <div className="grid md:grid-cols-3">
          {/* Profile Picture */}
          <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 flex items-center justify-center p-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src="/IMG_6067.JPG"
                alt="Sabelo Sibaya - Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:col-span-2 p-8">
            <header className="mb-6">
              <h1 className="text-4xl font-extrabold text-purple-500">About Me</h1>
              <p className="text-lg text-gray-400 italic">Passionate Developer and Lifelong Learner</p>
            </header>

            <div>
              {/* Original introduction - preserved */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                Hello! I'm <span className="text-purple-400 font-semibold">Sabelo Sibaya</span>, proficient in modern web technologies and languages, with a strong foundation in both front-end and back-end development. Passionate about creating responsive and user-friendly web applications. Seeking a junior role to leverage my skills and contribute to innovative projects.
              </p>

              {/* ALX Full Stack Software Engineering Program - Enhanced with 12-month details */}
              <div className="mt-6 mb-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="text-blue-400 h-6 w-6" />
                  <h2 className="text-2xl font-bold text-blue-400">ALX Full Stack Software Engineering Program</h2>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I am a graduate of the intensive <span className="text-white font-semibold">12-month ALX Software Engineering program</span>, a fully-funded scholarship by Mastercard Foundation in partnership with Holberton School [citation:6]. This immersive program demands up to <span className="text-blue-300">70+ hours per week</span> of hands-on, project-based learning, preparing students for global tech careers with the motto <span className="text-white italic">#DoHardThings</span> [citation:6].
                </p>

                {/* Program Structure */}
                <div className="grid grid-cols-2 gap-3 my-4">
                  <div className="bg-gray-800/80 p-3 rounded-lg text-center">
                    <Clock className="h-5 w-5 text-blue-400 mx-auto mb-1" />
                    <div className="text-purple-400 font-bold text-sm">9 Months</div>
                    <div className="text-xs text-gray-400">Foundations Phase [citation:1]</div>
                  </div>
                  <div className="bg-gray-800/80 p-3 rounded-lg text-center">
                    <Target className="h-5 w-5 text-blue-400 mx-auto mb-1" />
                    <div className="text-purple-400 font-bold text-sm">3 Months</div>
                    <div className="text-xs text-gray-400">Specialization Phase [citation:1]</div>
                  </div>
                </div>

                {/* Foundations Phase */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center gap-2">
                    <Terminal className="h-4 w-4" /> Foundations Phase: The Core (9 Months)
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-purple-200 mb-2">Low-Level & Scripting</h4>
                      <ul className="list-disc list-inside text-gray-400 space-y-1 text-xs">
                        <li>Bash Scripting & terminal commands [citation:6]</li>
                        <li>C programming language (low-level concepts) [citation:1][citation:6]</li>
                        <li>Data Structures & Algorithms [citation:1]</li>
                        <li>Python programming (high-level) [citation:1][citation:8]</li>
                        <li>Python OOP, inheritance, input/output [citation:8]</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-200 mb-2">Frontend & Databases</h4>
                      <ul className="list-disc list-inside text-gray-400 space-y-1 text-xs">
                        <li>HTML, CSS, JavaScript fundamentals [citation:6]</li>
                        <li>SQL - Introduction & more queries [citation:8]</li>
                        <li>Python - Object Relational Mapping [citation:8]</li>
                        <li>JavaScript - web scraping & jQuery [citation:8]</li>
                      </ul>
                    </div>
                  </div>

                  {/* AirBnB Clone Project */}
                  <div className="mt-4 p-3 bg-gray-800/60 rounded-lg border border-blue-500/30">
                    <h4 className="text-blue-200 font-medium mb-1 flex items-center gap-1">
                      <Briefcase className="h-4 w-4" /> 🏆 Key Project: AirBnB Clone
                    </h4>
                    <p className="text-gray-400 text-xs">
                      Built a comprehensive AirBnB clone from scratch, implementing a command interpreter for data manipulation, working with JSON serialization/deserialization, the cmd module, UUIDs, *args/**kwargs, and unit testing - the foundation of full web applications [citation:1][citation:5].
                    </p>
                  </div>
                </div>

                {/* DevOps & Infrastructure */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center gap-2">
                    <Cloud className="h-4 w-4" /> DevOps & Infrastructure
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                    <div className="bg-gray-800/80 p-2 rounded-lg text-center">Servers & SSH</div>
                    <div className="bg-gray-800/80 p-2 rounded-lg text-center">Nginx & SSL</div>
                    <div className="bg-gray-800/80 p-2 rounded-lg text-center">Flask & JavaScript</div>
                    <div className="bg-gray-800/80 p-2 rounded-lg text-center">jQuery & APIs</div>
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    Deployed projects on AWS servers with custom .tech domains, learning server management and deployment strategies [citation:1][citation:6].
                  </p>
                </div>

                {/* Specialization Phase */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center gap-2">
                    <Layout className="h-4 w-4" /> Specialization Phase (3 Months)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-purple-200 mb-2 text-sm">Backend JavaScript [citation:2]</h4>
                      <ul className="list-disc list-inside text-gray-400 space-y-1 text-xs">
                        <li>ES6 Basics, Promises, Classes</li>
                        <li>ES6 Data Manipulation</li>
                        <li>TypeScript fundamentals</li>
                        <li>NodeJS Basics & ExpressJS</li>
                        <li>Unit Testing in JS</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-200 mb-2 text-sm">Full Stack Completion</h4>
                      <ul className="list-disc list-inside text-gray-400 space-y-1 text-xs">
                        <li>Advanced JavaScript concepts</li>
                        <li>Backend integration</li>
                        <li>Final project development</li>
                        <li>Project defense & presentation [citation:6]</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="flex items-start gap-2 text-xs text-gray-300 bg-blue-900/20 p-2 rounded-lg">
                    <GitBranch className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Mastered Git version control & collaborative workflows [citation:1]</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-300 bg-blue-900/20 p-2 rounded-lg">
                    <Database className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>SQLAlchemy, JSON, MySQL, NoSQL databases [citation:1][citation:10]</span>
                  </div>
                </div>

                {/* Program Recognition */}
                <div className="mt-4 flex items-start gap-2 text-xs text-gray-300 bg-purple-900/20 p-3 rounded-lg">
                  <Award className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p>
                    The ALX program, backed by Holberton School and Mastercard Foundation, has empowered thousands of African developers with world-class software engineering skills. As a Cohort 8 graduate, I've joined a network of skilled developers across the continent, ready to make an impact in the tech industry [citation:6][citation:7].
                  </p>
                </div>
              </div>

              {/* FNB App Academy Section - Preserved from before */}
              <div className="mt-6 mb-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="text-purple-400 h-6 w-6" />
                  <h2 className="text-2xl font-bold text-purple-400">FNB App Academy Graduate</h2>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I successfully completed the <span className="text-white font-semibold">FNB App Academy</span>—a prestigious, fully-funded 9-week online coding programme by First National Bank (FNB) South Africa. This initiative is <span className="text-purple-300">Africa's largest free digital skills program</span>, designed to equip aspiring developers with cutting-edge app development skills.
                </p>

                {/* Key Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
                  <div className="bg-gray-800/80 p-2 rounded-lg text-center">
                    <div className="text-purple-400 font-bold text-lg">217K+</div>
                    <div className="text-xs text-gray-400">2025 Applicants</div>
                  </div>
                  <div className="bg-gray-800/80 p-2 rounded-lg text-center">
                    <div className="text-purple-400 font-bold text-lg">33K+</div>
                    <div className="text-xs text-gray-400">Graduates</div>
                  </div>
                  <div className="bg-gray-800/80 p-2 rounded-lg text-center">
                    <div className="text-purple-400 font-bold text-lg">9 Weeks</div>
                    <div className="text-xs text-gray-400">Intensive Program</div>
                  </div>
                  <div className="bg-gray-800/80 p-2 rounded-lg text-center">
                    <div className="text-purple-400 font-bold text-lg">Free</div>
                    <div className="text-xs text-gray-400">Fully Funded</div>
                  </div>
                </div>

                {/* What the Program Covered */}
                <h3 className="text-lg font-semibold text-purple-300 mt-4 mb-2 flex items-center gap-2">
                  <Code className="h-4 w-4" /> Comprehensive Curriculum
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-purple-200 mb-1">📱 App Development</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-xs">
                      <li>JavaScript programming & React basics</li>
                      <li>HTML, CSS, and responsive design</li>
                      <li>UX design principles & layouts</li>
                      <li>GitHub & collaboration workflows</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-200 mb-1">⚙️ Backend & Beyond</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-xs">
                      <li>Python backend development & APIs</li>
                      <li>Database management & data processing</li>
                      <li>AI in development (Pisces AI, Copilot)</li>
                      <li>Business, funding & marketing for apps</li>
                    </ul>
                  </div>
                </div>

                {/* Projects Built */}
                <div className="mt-4 p-3 bg-gray-800/60 rounded-lg">
                  <h4 className="text-purple-200 font-medium mb-1 flex items-center gap-1">
                    <Briefcase className="h-4 w-4" /> Hands-On Projects
                  </h4>
                  <p className="text-gray-400 text-xs">
                    Built functional web apps including a <span className="text-white">calculator</span>, <span className="text-white">contact book app</span> with live API data, and gained full-stack development experience from ideation to deployment.
                  </p>
                </div>

                {/* Recognition */}
                <div className="mt-4 flex items-start gap-2 text-xs text-gray-300 bg-purple-900/20 p-3 rounded-lg">
                  <Users className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p>
                    The FNB App Academy has empowered over <span className="text-white">33,000 young people</span> to become full-stack developers, bridging the digital skills gap and opening pathways into the tech industry. Graduates have gone on to secure roles at leading companies or launch their own tech ventures.
                  </p>
                </div>
              </div>

              {/* Original Education Section - Enhanced with ALX info now above */}
              <h2 className="text-2xl font-bold text-purple-500 mt-8 mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" /> Education Summary
              </h2>
              <div className="text-gray-300 mb-6">
                <p className="font-semibold text-white">ALX-AFRICA (In partnership with Holberton School)</p>
                <p className="text-purple-300 mb-2">Full Stack Software Engineering Graduate - 12-Month Intensive Program [citation:6][citation:7]</p>
                <p className="text-sm text-gray-400 mb-3">Specializing in Full-Stack Development</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Completed comprehensive curriculum covering both front-end and back-end technologies with 70+ hours per week commitment [citation:6].</li>
                  <li>Gained proficiency in modern web technologies including C, Python, JavaScript, TypeScript, and DevOps practices [citation:1][citation:2].</li>
                  <li>Developed strong foundation in creating responsive and user-friendly web applications through project-based learning [citation:5][citation:8].</li>
                </ul>
              </div>

              {/* Original Interests Section */}
              <h2 className="text-2xl font-bold text-purple-500 mt-8 mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5" /> Interests
              </h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Web Development, UI/UX Design, Open Source, and Learning as Much as I Can.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Web Development', 'UI/UX Design', 'Open Source', 'Mobile Apps', 'AI & Machine Learning', 'Continuous Learning'].map((interest, i) => (
                  <span key={i} className="bg-purple-900/30 px-3 py-1 rounded-full text-sm text-purple-300 border border-purple-500/30">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;