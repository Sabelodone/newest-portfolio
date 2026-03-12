"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Github, ExternalLink, Users, CreditCard, Mail, Shield, Award, TrendingUp, Film, BarChart, Video, Mic, Play } from "lucide-react"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const fadeInBounceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.5,
      },
    },
  }

  const projects = [
    // 1. CubeNotes Booking System (Featured)
    {
      title: "CubeNotes Booking System",
      description:
        "A full-stack tutoring booking platform with PayFast payment integration. Students can book group sessions (R500) or 1-on-1 tutoring (R200), receive automated email confirmations via SMTP, and track bookings in their dashboard. Includes JWT authentication, MongoDB database, and real-time session availability.",
      longDescription:
        "CubeNotes is a comprehensive online tutoring platform for Maths & Science mastery. It features an intelligent booking system with PayFast payment integration, automated email/SMS confirmations, and personalized student dashboards. Students can book group sessions (R500/session) or 1-on-1 tutoring (R200/session), track their progress, and access success stories. The platform includes authentication, session management, and real-time booking availability. Built with React, TypeScript, FastAPI, MongoDB, and Tailwind CSS.",
      image: "/Screenshot 2026-03-12 100840.png",
      github: "https://github.com/Sabelodone/booking",
      demo: "https://www.cubenotes.co.za/",
      features: [
        "PayFast Payment Gateway",
        "Email Confirmations (SMTP)",
        "Student Dashboard",
        "JWT Authentication",
        "Real-time Booking",
        "MongoDB Database",
      ],
      stats: {
        students: "60+",
        passRate: "98%",
        gradeBoost: "2.1x",
      },
      live: true,
    },
    
    // 2. Balact - Financial Solutions
    {
      title: "Balact Financial Solutions",
      description:
        "A premium financial services website for Balact, offering strategic bookkeeping, tax optimization, growth analytics, and executive reporting. The platform showcases their innovative approach to business finance with AI-driven insights, automated reconciliation, and predictive forecasting.",
      longDescription:
        "Balact provides cutting-edge accounting services that transform financial data into actionable insights. The website highlights their expertise in strategic bookkeeping, tax optimization, growth analytics, executive reporting, compliance monitoring, and smart payroll processing. Built with a modern, professional design that reflects their 'Innovation First' approach to business finance.",
      image: "/Screenshot 2026-03-12 104017.png",
      github: "https://github.com/Sabelodone/balact",
      demo: "https://www.balact.co.za/",
      features: [
        "Strategic Bookkeeping",
        "Tax Optimization",
        "Growth Analytics",
        "Executive Reporting",
        "Compliance Monitoring",
        "Smart Payroll",
      ],
      stats: {
        success: "35+",
        revenue: "R5M+",
        years: "3+",
      },
      live: true,
    },
    
    // 3. Moneo Films - Film Production
    {
      title: "Moneo Films",
      description:
        "A trailblazing, 100% black women-owned film production company website showcasing their award-winning work in film, television, and documentary production. Features their portfolio, services including cinematography, direction, performance coaching, and translation services.",
      longDescription:
        "Moneo Films is a premier production company founded in 2018, led by visionary co-founders Ferry Jele and Neo R Paulus. They produce high-impact films, documentaries, series, and television content. The website showcases their award-winning excellence including International Emmy nominations and SAFTA wins, with a comprehensive portfolio of productions and full-service production capabilities.",
      image: "/Screenshot 2026-03-12 104136.png",
      github: "https://github.com/Sabelodone/moneofilms",
      demo: "https://www.moneofilms.co.za/",
      features: [
        "Film Production",
        "Cinematography",
        "TV Production",
        "Direction & Coaching",
        "Translation Services",
        "Award-Winning Team",
      ],
      stats: {
        founded: "2018",
        ownership: "100%",
        productions: "8+",
      },
      live: true,
    },
    
    // 4. LuxeCommerce
    {
      title: "LuxeCommerce",
      description:
        "This E-commerce User Profile Dashboard is a responsive web app built with React.js, Tailwind CSS, and Firebase for authentication and data storage. It features user profile management, order history tracking, and a dark mode toggle. Users can update their details with real-time validation, track past orders, and switch themes seamlessly. Firebase handles authentication and database operations, ensuring secure and efficient data management. 🚀",
      image: "/Screenshot 2025-03-04 163615.png",
      github: "https://github.com/Sabelodone/store/tree/master/online-store",
      demo: "https://online-store-drab.vercel.app/",
      features: ["Firebase Auth", "Dark Mode", "Order Tracking", "Real-time Validation"],
    },
    
    // 5. Cube CNS
    {
      title: "Cube CNS",
      description:
        "Cube CNS, appears to be a comprehensive student-tutor management system designed to track and manage student progress, tutor sessions, billing, and reporting. It provides an interactive dashboard where users can navigate through different components like Student Management, Tutor Management, Session Management, Billing, Reports, and Settings.",
      image: "/Screenshot 2025-02-26 104130.png",
      github: "https://github.com/Sabelodone/cubenotes-system",
      demo: "https://cubenotes-system.vercel.app/",
      features: ["Student Management", "Tutor Management", "Billing", "Reports Dashboard"],
    },
    
    // 6. Cube Notes (Original)
    {
      title: "Cube Notes",
      description:
        "A sleek, modern, and fully responsive website for Cube Notes—an online tutoring platform that offers expert tutoring across multiple subjects.",
      image: "/Screenshot 2025-01-02 113100.png",
      github: "https://github.com/Sabelodone/cube-notes-website/tree/masterr",
      demo: "https://cube-notes-website.vercel.app/",
      features: ["Responsive Design", "Modern UI", "Tutoring Platform"],
    },
    
    // 7. Suits-systems
    {
      title: "Suits-systems",
      description:
        "Suits Systems is a responsive web application tailored for law firms, focusing on seamless document management, case management, and time tracking.",
      image: "/Screenshot 2024-09-20 075900.png",
      github: "https://github.com/Sabelodone/law-firm_software/tree/master/suits-systems",
      demo: "https://suits-systems.vercel.app/",
      features: ["Document Management", "Case Tracking", "Time Tracking", "Law Firm Portal"],
    },
  ]

  // Helper function to get icon for feature
  const getFeatureIcon = (feature) => {
    if (feature.includes("Payment") || feature.includes("PayFast")) return <CreditCard className="h-3 w-3 mr-1" />
    if (feature.includes("Email")) return <Mail className="h-3 w-3 mr-1" />
    if (feature.includes("Auth")) return <Shield className="h-3 w-3 mr-1" />
    if (feature.includes("Student") || feature.includes("Management")) return <Users className="h-3 w-3 mr-1" />
    if (feature.includes("Dashboard") || feature.includes("Tracking")) return <TrendingUp className="h-3 w-3 mr-1" />
    if (feature.includes("Bookkeeping") || feature.includes("Tax")) return <BarChart className="h-3 w-3 mr-1" />
    if (feature.includes("Film") || feature.includes("Cinematography")) return <Film className="h-3 w-3 mr-1" />
    if (feature.includes("Production")) return <Video className="h-3 w-3 mr-1" />
    if (feature.includes("Direction") || feature.includes("Coaching")) return <Play className="h-3 w-3 mr-1" />
    if (feature.includes("Translation")) return <Mic className="h-3 w-3 mr-1" />
    return <Award className="h-3 w-3 mr-1" />
  }

  return (
    <section id="projects" ref={ref} className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 opacity-50 mix-blend-multiply"></div>
      <motion.div
        variants={fadeInBounceVariants}
        initial="hidden"
        animate={mainControls}
        className="relative z-10 bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg text-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInBounceVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden h-full flex flex-col bg-gray-700 bg-opacity-60 hover:bg-opacity-80 transition-all duration-300 rounded-lg shadow-md group relative"
            >
              {/* Featured Badge for CubeNotes */}
              {index === 0 && (
                <div className="absolute top-2 left-2 z-20">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full flex items-center shadow-lg">
                    <Award className="h-3 w-3 mr-1" /> Featured Project
                  </span>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                {/* Stats overlay for projects with stats */}
                {project.stats && (
                  <div className="absolute top-2 right-2 flex gap-1 z-20">
                    {project.stats.students && (
                      <span className="bg-purple-600 text-xs px-2 py-1 rounded-full flex items-center">
                        <Users className="h-3 w-3 mr-1" /> {project.stats.students}
                      </span>
                    )}
                    {project.stats.success && (
                      <span className="bg-green-600 text-xs px-2 py-1 rounded-full flex items-center">
                        <Award className="h-3 w-3 mr-1" /> {project.stats.success}
                      </span>
                    )}
                  </div>
                )}
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.live && (
                    <span className="bg-green-600 text-xs px-2 py-1 rounded-full flex items-center">
                      <span className="relative flex h-2 w-2 mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Live
                    </span>
                  )}
                </div>
                
                {/* Feature badges */}
                {project.features && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-xs bg-purple-900/50 px-2 py-1 rounded-full flex items-center">
                        {getFeatureIcon(feature)}
                        {feature.length > 15 ? feature.substring(0, 12) + "..." : feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                        +{project.features.length - 3}
                      </span>
                    )}
                  </div>
                )}
                
                <p className="text-gray-300 text-sm flex-grow">{project.description}</p>
                
                {/* Stats display for projects with stats */}
                {project.stats && (
                  <div className="grid grid-cols-3 gap-2 my-3 p-2 bg-gray-800 rounded-lg">
                    {project.stats.students && (
                      <>
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Students</div>
                          <div className="text-sm font-bold text-purple-400">{project.stats.students}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Pass Rate</div>
                          <div className="text-sm font-bold text-green-400">{project.stats.passRate}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Boost</div>
                          <div className="text-sm font-bold text-blue-400">{project.stats.gradeBoost}</div>
                        </div>
                      </>
                    )}
                    {project.stats.success && (
                      <>
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Success</div>
                          <div className="text-sm font-bold text-green-400">{project.stats.success}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Revenue</div>
                          <div className="text-sm font-bold text-blue-400">{project.stats.revenue}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Years</div>
                          <div className="text-sm font-bold text-purple-400">{project.stats.years}</div>
                        </div>
                      </>
                    )}
                    {project.stats.founded && (
                      <>
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Founded</div>
                          <div className="text-sm font-bold text-green-400">{project.stats.founded}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Ownership</div>
                          <div className="text-sm font-bold text-blue-400">{project.stats.ownership}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Productions</div>
                          <div className="text-sm font-bold text-purple-400">{project.stats.productions}</div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
              
              <div className="p-4 pt-0 mt-auto flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 mr-2 text-center py-2 bg-transparent border-2 border-gray-300 text-gray-300 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <Github className="mr-2 h-4 w-4" /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 ml-2 text-center py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects