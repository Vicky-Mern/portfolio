import { Project, Achievement, AboutTrait, ContactInfo, SkillItem } from '../types';

import profileImg from '../assets/images/vickyprofile.png';

export const HERO_DATA = {
  name: "Vicky Kumar",
  title: "MERN Stack Developer",
  subtitle: "Full Stack Developer | React.js, Node.js, Express.js & MongoDB",
  profileImage: profileImg,
  typingRoles: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Software Developer"
  ],
  summary: "MERN Stack Developer with hands-on experience building full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Skilled in REST APIs, JWT authentication, responsive UI development, and database integration. Focused on building scalable and user-friendly web applications."
};

export const CONTACT_INFO: ContactInfo = {
  email: "vk0269584@gmail.com",
  phone: "+91-8292200151",
  location: "Bhopal, MP, India",
  github: "https://github.com/Vicky-Kr-Singh",
  linkedin: "https://linkedin.com/in/vickykumar2004",
  responseTime: "Usually replies within 24 hours"
};

export const ABOUT_TRAITS: AboutTrait[] = [
  { title: "Strong Communication", icon: "MessageSquare" },
  { title: "Team Collaboration", icon: "Users" },
  { title: "Problem Solving", icon: "Brain" },
  { title: "Leadership", icon: "Shield" },
  { title: "Adaptability", icon: "Compass" },
  { title: "Continuous Learning", icon: "BookOpen" },
  { title: "Time Management", icon: "Clock" },
  { title: "Positive Attitude", icon: "Smile" },
  { title: "Attention to Detail", icon: "CheckCircle2" }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "mca-top-10",
    title: "Top 10 Performer in MCA",
    description: "Ranked among top performers in Master of Computer Applications program at SIRT Bhopal with consistent academic excellence.",
    icon: "Trophy",
    badge: "Academic Honor"
  },
  {
    id: "fullstack-projects",
    title: "Built Multiple Full Stack Projects",
    description: "Engineered scalable full-stack applications in MERN and Python/Django with secure JWT auth, REST APIs, and database persistence.",
    icon: "Rocket",
    badge: "Engineering"
  },
  {
    id: "ai-saas-platform",
    title: "AI SaaS Platform Development",
    description: "Successfully engineered multi-modal AI tools including Text Summarizer, Paragraph Generator, AI Chatbot, JS Converter, and Sci-Fi Image Generation.",
    icon: "Sparkles",
    badge: "AI & Full Stack"
  },
  {
    id: "continuous-learner",
    title: "Continuous Learner of Modern Web Technologies",
    description: "Constantly enhancing technical expertise with React 18, Node.js microservices, AI-assisted workflows, and modern cloud DevOps.",
    icon: "Sparkles",
    badge: "Skill Development"
  }
];

import { PROJECTS_DATA } from './projectsData';

export const PROJECTS = PROJECTS_DATA;

export const SKILLS_DATA: SkillItem[] = [
  // Programming Languages
  { name: "JavaScript", category: "languages", icon: "SiJavascript", proficiency: "Advanced", badge: "Primary" },
  { name: "Python", category: "languages", icon: "SiPython", proficiency: "Intermediate", badge: "Secondary" },

  // Frontend
  { name: "React.js", category: "frontend", icon: "SiReact", proficiency: "Advanced" },
  { name: "HTML5", category: "frontend", icon: "SiHtml5", proficiency: "Advanced" },
  { name: "CSS3", category: "frontend", icon: "SiCss3", proficiency: "Advanced" },
  { name: "Tailwind CSS", category: "frontend", icon: "SiTailwindcss", proficiency: "Advanced" },
  { name: "Bootstrap", category: "frontend", icon: "SiBootstrap", proficiency: "Intermediate" },
  { name: "Context API", category: "frontend", icon: "SiReact", proficiency: "Advanced" },

  // Backend (Primary)
  { name: "Node.js", category: "backend_primary", icon: "SiNodedotjs", proficiency: "Advanced", badge: "Primary" },
  { name: "Express.js", category: "backend_primary", icon: "SiExpress", proficiency: "Advanced", badge: "Primary" },
  { name: "REST APIs", category: "backend_primary", icon: "SiOpenapi", proficiency: "Advanced" },
  { name: "JWT Authentication", category: "backend_primary", icon: "ShieldCheck", proficiency: "Advanced" },
  { name: "MVC Architecture", category: "backend_primary", icon: "Layers", proficiency: "Advanced" },

  // Backend (Secondary)
  { name: "Python", category: "backend_secondary", icon: "SiPython", proficiency: "Intermediate", badge: "Secondary" },
  { name: "Django", category: "backend_secondary", icon: "SiDjango", proficiency: "Intermediate", badge: "Secondary" },
  { name: "Django REST Framework", category: "backend_secondary", icon: "SiDjango", proficiency: "Intermediate" },
  { name: "Authentication", category: "backend_secondary", icon: "ShieldCheck", proficiency: "Advanced" },
  { name: "Stripe API Integration", category: "backend_secondary", icon: "CreditCard", proficiency: "Intermediate" },

  // Database
  { name: "MongoDB", category: "databases", icon: "SiMongodb", proficiency: "Advanced" },
  { name: "Mongoose", category: "databases", icon: "SiMongodb", proficiency: "Advanced" },
  { name: "MySQL", category: "databases", icon: "SiMysql", proficiency: "Intermediate" },

  // Tools
  { name: "Git", category: "tools", icon: "SiGit", proficiency: "Advanced" },
  { name: "GitHub", category: "tools", icon: "SiGithub", proficiency: "Advanced" },
  { name: "Postman", category: "tools", icon: "SiPostman", proficiency: "Advanced" },
  { name: "VS Code", category: "tools", icon: "SiVscodium", proficiency: "Advanced" },
  { name: "npm", category: "tools", icon: "SiNpm", proficiency: "Advanced" },
  { name: "Vite", category: "tools", icon: "SiVite", proficiency: "Advanced" },

  // Core Computer Science
  { name: "Data Structures & Algorithms", category: "core_cs", icon: "Cpu", proficiency: "Intermediate" },
  { name: "DBMS", category: "core_cs", icon: "Database", proficiency: "Intermediate" },
  { name: "OOP", category: "core_cs", icon: "Cubes", proficiency: "Advanced" },
  { name: "Problem Solving", category: "core_cs", icon: "Lightbulb", proficiency: "Advanced" },

  // AI Assisted Development (NEW)
  { name: "ChatGPT", category: "ai_assisted", icon: "Bot", proficiency: "Advanced" },
  { name: "Google AI Studio (Gemini)", category: "ai_assisted", icon: "Sparkles", proficiency: "Advanced" },
  { name: "GitHub Copilot", category: "ai_assisted", icon: "Code2", proficiency: "Advanced" },
  { name: "Cursor AI", category: "ai_assisted", icon: "Terminal", proficiency: "Intermediate" },
  { name: "Claude AI", category: "ai_assisted", icon: "Brain", proficiency: "Advanced" }
];

export const AI_ASSISTED_DESCRIPTION = "Experienced in using AI-powered development tools for rapid prototyping, debugging, documentation, UI generation, API development, testing assistance, and productivity improvement.";

