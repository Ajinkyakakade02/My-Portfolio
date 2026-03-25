// src/pages/EncryptionPage.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaUser, 
  FaFolderOpen, 
  FaGithub, 
  FaArrowLeft,
  FaReact,
  FaNodeJs,
  FaAws,
  FaCode,
  FaTrophy,
  FaGraduationCap,
  FaBriefcase
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";
import { useTheme } from "@/hooks/useTheme";

// ==================== TYPES ====================

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
  delay: number;
}

// ==================== CARD COMPONENT ====================

const Card = ({ title, description, icon, color, onClick, delay }: CardProps) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -10 }}
      onClick={onClick}
      className={`group relative backdrop-blur-md rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-white/5 border border-purple-500/30 hover:border-purple-500/60'
          : 'bg-black/5 border border-purple-400/30 hover:border-purple-500/60'
      }`}
    >
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        theme === 'dark'
          ? `bg-gradient-to-r from-${color}-500/20 to-cyan-500/20`
          : `bg-gradient-to-r from-${color}-400/20 to-cyan-400/20`
      }`} />
      
      <div className="relative z-10 text-center">
        <div className={`inline-flex p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 ${
          theme === 'dark' ? `bg-${color}-500/20` : `bg-${color}-400/20`
        }`}>
          <div className={`text-5xl ${theme === 'dark' ? `text-${color}-400` : `text-${color}-600`}`}>
            {icon}
          </div>
        </div>
        
        <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>
        
        <motion.div
          className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${
            theme === 'dark' ? `text-${color}-400` : `text-${color}-600`
          }`}
          whileHover={{ x: 5 }}
        >
          <span>Click to explore</span>
          <FaArrowLeft className="rotate-180" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// ==================== ABOUT ME CONTENT ====================

const AboutMeContent = () => {
  const { theme } = useTheme();

  const resumeData = {
    name: "Ajinkya Kakade",
    role: "Full Stack Developer",
    experience: "Fresher",
    location: "India",
    email: "ajinkyakakde510@gamil.com",
    phone: "+91 7498717236",
  };

  const techStack = [
    { name: "React", icon: FaReact, color: "#61dafb" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "Spring boot", icon: FaNodeJs, color: "#68a063" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "AWS", icon: FaAws, color: "#ff9900" },
  ];

  const achievements = [
    { icon: FaTrophy, title: "Smart india Hackathon winner", year: "2025", description: "Recognized for outstanding contributions" },
    { icon: FaCode, title: "10+ GitHub Stars", year: "2026", description: "Popular open-source contributions" },
    { icon: FaGraduationCap, title: "CS Degree", year: "2027", description: "Bachelor's in Computer Science" },
    { icon: FaBriefcase, title: "Lead a SIH team two times", year: "2024 & 2025", description: "Successful project" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className={`text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent`}>
          About Me
        </h1>
        <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Get to know me better
        </p>
      </div>

      <div className={`rounded-2xl p-8 mb-8 ${
        theme === 'dark' ? 'bg-white/5 border border-purple-500/30' : 'bg-black/5 border border-purple-400/30'
      }`}>
        <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
          Resume
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong>Name:</strong> {resumeData.name}
            </p>
            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong>Role:</strong> {resumeData.role}
            </p>
            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong>Experience:</strong> {resumeData.experience}
            </p>
          </div>
          <div>
            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong>Location:</strong> {resumeData.location}
            </p>
            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong>Email:</strong> {resumeData.email}
            </p>
            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong>Phone:</strong> {resumeData.phone}
            </p>
          </div>
        </div>
      </div>

      <div className={`rounded-2xl p-8 mb-8 ${
        theme === 'dark' ? 'bg-white/5 border border-purple-500/30' : 'bg-black/5 border border-purple-400/30'
      }`}>
        <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech) => (
            <motion.div key={tech.name} whileHover={{ scale: 1.1 }} className="text-center">
              <tech.icon className="text-4xl mx-auto mb-2" style={{ color: tech.color }} />
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={`rounded-2xl p-8 ${
        theme === 'dark' ? 'bg-white/5 border border-purple-500/30' : 'bg-black/5 border border-purple-400/30'
      }`}>
        <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <motion.div key={achievement.title} whileHover={{ scale: 1.05 }}
              className={`text-center p-4 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
              <achievement.icon className={`text-3xl mx-auto mb-2 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
              <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {achievement.title}
              </h3>
              <p className={`text-xs mb-1 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                {achievement.year}
              </p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== PROJECTS CONTENT ====================

const ProjectsContent = () => {
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      title: "E-Learning Platform",
      description: "Modern e-learning platform with interactive courses, video lectures, progress tracking, and certification system.",
      image: "/projects/project-1.webp",
      link: "https://elearn-pro-hyym.vercel.app",
      technologies: ["React", "Spring Boot", "MySQL", "Tailwind"],
      icon: "📚"
    },
    {
      id: 2,
      title: "Voice to Voice Translator",
      description: "Real-time voice translation app supporting 50+ languages with natural speech synthesis and accent detection.",
      image: "/projects/project-2.webp",
      link: "#",
      technologies: ["E-Speak", "WebRTC", "AI/ML", "Speech Recognition"],
      icon: "🎤"
    },
    {
      id: 3,
      title: "Chat Application",
      description: "Instant messaging app with group chats, file sharing, emoji reactions, and real-time notifications.",
      image: "/projects/project-3.webp",
      link: "#",
      technologies: ["WebSocket", "React", "TypeScript", "Node.js"],
      icon: "💬"
    },
    {
      id: 4,
      title: "Auto Email Extension",
      description: "AI-powered email generator that creates professional emails based on context, tone, and recipient.",
      image: "/projects/project-3.webp",
      link: "#",
      technologies: ["Gemini API", "React", "Spring Boot", "OAuth"],
      icon: "✉️"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className={`text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent`}>
          My Projects
        </h1>
        <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Click on any project to visit the live website
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => window.open(project.link, "_blank")}
            className={`group relative backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-white/5 border border-purple-500/30 hover:border-purple-500/60'
                : 'bg-black/5 border border-purple-400/30 hover:border-purple-500/60'
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400x200?text=Project";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-4xl">{project.icon}</div>
            </div>
            
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className={`text-xs px-2 py-1 rounded-full ${
                    theme === 'dark'
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      : 'bg-purple-400/20 text-purple-700 border border-purple-400/30'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ==================== GITHUB CONTENT ====================

const GitHubContent = () => {
  const { theme } = useTheme();
  const githubUrl = "https://github.com/Ajinkyakakade02";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
      <div className="mb-12">
        <h1 className={`text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent`}>
          GitHub Profile
        </h1>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Explore my open-source contributions and projects
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => window.open(githubUrl, "_blank")}
        className={`cursor-pointer rounded-2xl p-12 transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-white/5 border border-purple-500/30 hover:border-purple-500/60'
            : 'bg-black/5 border border-purple-400/30 hover:border-purple-500/60'
        }`}
      >
        <FaGithub className={`text-8xl mx-auto mb-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
        <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Visit My GitHub
        </h2>
        <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Check out my repositories, contributions, and open-source work
        </p>
        <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold ${
          theme === 'dark'
            ? 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30'
            : 'bg-purple-400/20 text-purple-700 hover:bg-purple-400/30'
        } transition-all duration-300`}>
          <FaGithub />
          <span>github.com/Ajinkyakakade02</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
          <div className="text-3xl font-bold text-purple-500">50+</div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Repositories</div>
        </div>
        <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
          <div className="text-3xl font-bold text-purple-500">100+</div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Stars</div>
        </div>
        <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
          <div className="text-3xl font-bold text-purple-500">20+</div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Followers</div>
        </div>
      </div>
    </div>
  );
};

// ==================== MAIN ENCRYPTION PAGE ====================

const EncryptionPage = () => {
  const [activeContent, setActiveContent] = useState<string | null>(null);
  const { theme } = useTheme();

  const cards = [
    {
      id: "about",
      title: "About Me",
      description: "View my resume, tech stack, and achievements",
      icon: <FaUser />,
      color: "purple",
    },
    {
      id: "projects",
      title: "My Projects",
      description: "Explore all my completed projects with live links",
      icon: <FaFolderOpen />,
      color: "cyan",
    },
    {
      id: "github",
      title: "GitHub Profile",
      description: "Visit my GitHub profile and see my code",
      icon: <FaGithub />,
      color: "purple",
    },
  ];

  const renderContent = () => {
    switch (activeContent) {
      case "about":
        return <AboutMeContent />;
      case "projects":
        return <ProjectsContent />;
      case "github":
        return <GitHubContent />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen py-20 ${theme === 'dark' ? 'bg-[#030014]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        
        {/* REMOVED: Back to Home Button - No longer here */}
        
        {!activeContent ? (
          <>
            {/* Header */}
            <div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  AES-256 Encryption Hub
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Secure access to my professional information
              </motion.p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {cards.map((card, index) => (
                <Card
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  color={card.color}
                  onClick={() => setActiveContent(card.id)}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Back button to return to cards menu */}
            <button
              onClick={() => setActiveContent(null)}
              className={`mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-white/10 text-purple-400 hover:bg-white/20'
                  : 'bg-black/5 text-purple-600 hover:bg-black/10'
              }`}
            >
              <FaArrowLeft />
              <span>Back to Menu</span>
            </button>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default EncryptionPage;