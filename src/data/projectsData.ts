import { Project } from '../types';

// Load all images from all project subfolders using a single static glob.
// We then filter by folder name which keeps the glob pattern static for Vite.
const ALL_PROJECT_IMAGE_MODULES = import.meta.glob('../assets/images/*/*', { eager: true });

const loadProjectImages = (folderName: string) => {
  try {
    const modules = ALL_PROJECT_IMAGE_MODULES as Record<string, { default: string }>;
    const paths = Object.keys(modules)
      .filter((k) => k.includes(`/${folderName}/`))
      .sort()
      .map((k) => modules[k].default);
    return paths;
  } catch (err) {
    return [] as string[];
  }
};

// DEV: Log discovered project folders and counts to help debugging
if (import.meta.env && import.meta.env.DEV) {
  try {
    const modules = ALL_PROJECT_IMAGE_MODULES as Record<string, { default: string }>;
    const counts: Record<string, number> = {};
    Object.keys(modules).forEach((k) => {
      const m = k.split('/').slice(-2, -1)[0];
      counts[m] = (counts[m] || 0) + 1;
    });
    // eslint-disable-next-line no-console
    console.info('project images discovered:', counts);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('project image discovery failed', e);
  }
}

/**
 * ====================================================================
 * PROJECT CONFIGURATION FILE: /src/data/projectsData.ts
 * ====================================================================
 * 
 * Edit this file to add, modify, or update projects shown on your portfolio.
 * 
 * Instructions:
 * 1. githubUrl: Paste your GitHub repository URL here (e.g., "https://github.com/your-username/repo-name").
 *    If left empty (""), the "GitHub Code" button will safely display as disabled.
 * 
 * 2. liveDemoUrl: Paste your deployed website URL here (e.g., "https://your-app.vercel.app").
 *    If left empty (""), the "Live Demo" button will safely display as disabled or open preview.
 * 
 * 3. images: Array of screenshot image paths (e.g., ["/images/project1-1.png", "/images/project1-2.png"]).
 *    You can add multiple screenshots for the interactive image carousel slider.
 * 
 * 4. technologies: Array of technology tags (e.g., ["React.js", "Node.js", "MongoDB"]).
 * 
 * 5. features: Compact bullet point list of key application features.
 * ====================================================================
 */

export const PROJECTS_DATA: Project[] = [
  {
    id: "ecommerce-backend-api",
    title: "E-Commerce Web Application (Flipkart Plus Clone)",
    category: "Full Stack (MERN & Stripe)",
    description: "Full-stack e-commerce platform inspired by Flipkart Plus featuring category filtering, multi-step address checkout, Stripe payment sandbox integration, user profile management, admin sales dashboard, and live order tracking.",
    
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe API",
      "Tailwind CSS"
    ],

    features: [
      "Flipkart Plus Loyalty & Search Bar",
      "Product Detail Page with Bank Offers",
      "Stripe Card Payment Sandbox Integration",
      "Admin Analytics Dashboard",
      "Category & Price Filter Sidebar",
      "Multi-Step Address Checkout & Order Summary",
      "User Account Profile & Delivery Address Management",
      "Order Details Page with Delivery Status"
    ],

    // Screenshot Carousel Images: load all images from the project's folder
    images: loadProjectImages('e-commerce'),

    // PLACEHOLDERS (Add your URLs here when deployed)
    githubUrl: "https://github.com/Vicky-Kr-Singh/ecommerce-flipcart-clone",
    liveDemoUrl: "https://ecommerce-flipcart-clone.vercel.app/",

    // Fallbacks for legacy fields
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    keyFeatures: [
      "Flipkart Plus Loyalty & Search Bar",
      "Product Detail Page with Bank Offers",
      "Stripe Card Payment Sandbox Integration",
      "Admin Analytics Dashboard",
      "Category & Price Filter Sidebar",
      "Multi-Step Address Checkout & Order Summary"
    ],
    image: loadProjectImages('e-commerce')[0] || '',
    demoUrl: "https://ecommerce-flipcart-clone.vercel.app/",
    featured: true,
    architectureNotes: "Engineered with MERN stack, Express controller routes, JWT tokens, Mongoose MongoDB, Stripe API, and Tailwind CSS."
  },
  {
    id: "healthbooker",
    title: "HealthBooker (Doctor Appointment System)",
    category: "Full Stack (MERN)",
    description: "Full-stack healthcare booking platform enabling patients to browse verified doctors by specialization, schedule consultation appointments with date/time pickers, track real-time appointment status, manage user profiles, and access admin user/appointment controls.",
    
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "Tailwind CSS"
    ],

    features: [
      "Patient & Doctor Authentication with Profile Photo Uploads",
      "Doctor Directory with Specialization, Experience & Consultation Fees",
      "Interactive Appointment Booking Modal with Date & Time Selector",
      "Patient Appointments Dashboard with Live Status Tracking (Pending / Completed)",
      "User Profile Manager for Personal, Mobile & Address Details",
      "Admin Control Panel for User Accounts & Doctor Role Approvals",
      "Admin Appointment Status & Completion Management",
      "Contact Us Portal & Healthcare Impact Counter (1000+ Patients)"
    ],

    images: loadProjectImages('healthbooker'),

    githubUrl: "https://github.com/Vicky-Kr-Singh/HealthBooker",
    liveDemoUrl: "https://health-booker-phi.vercel.app/",

    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
    keyFeatures: [
      "Patient & Doctor Authentication with Avatar Uploads",
      "Doctor Listing with Specialization, Experience & Fees",
      "Interactive Appointment Booking Modal",
      "Patient Appointments Dashboard & Status Tracker",
      "User Profile Management",
      "Admin Control Panel for Users & Appointments"
    ],
    image: loadProjectImages('healthbooker')[0] || '',
    demoUrl: "https://health-booker-phi.vercel.app/",
    featured: true,
    architectureNotes: "Engineered with MERN stack, Express RESTful APIs, JWT authentication middleware, MongoDB Atlas schemas for users and appointments, and responsive Tailwind UI.",
    screenshots: [
      { id: "home", title: "1. Home Page & Hero Banner", description: "HealthBooker hero section 'Your Health, Our Responsibility', statistics counter (1000+ Satisfied Patients, 250+ Verified Doctors), and navigation bar.", category: "Home" },
      { id: "doctors", title: "2. Doctors Listing & Profiles", description: "Doctor profile cards (Dr. Priya Verma, Dr. Amit Singh, Dr. Neha Gupta) with specialization, experience, fees, and booking controls.", category: "Doctors" },
      { id: "booking", title: "3. Book Appointment Modal", description: "Interactive appointment booking modal with date selector, time picker, and instant booking submission.", category: "Booking Modal" },
      { id: "appointments", title: "4. Your Appointments & Status Tracker", description: "Patient appointment history table showing doctor name, patient name, appointment date/time, booking date/time, and pending status.", category: "Appointments" },
      { id: "profile", title: "5. User Profile Management", description: "User profile details manager for updating name, email, mobile number, age, address, and password.", category: "Profile" },
      { id: "admin-users", title: "6. Admin Panel – All Users", description: "Administrative dashboard listing all registered users, profile photos, doctor status (Is Doctor: Yes/No), and account removal controls.", category: "Admin Users" },
      { id: "admin-appointments", title: "7. Admin Panel – Appointment Management", description: "Admin appointment management table with completion actions and patient status tracking.", category: "Admin Panel" },
      { id: "auth", title: "8. Sign In / Sign Up", description: "Authentication forms supporting user registration, login, and profile picture avatar uploads.", category: "Authentication" }
    ]
  },
  {
    id: "ai-gpt3-clone",
    title: "AI GPT3 Clone (AI SaaS Platform)",
    category: "Full Stack (MERN & AI API)",
    description: "A comprehensive AI SaaS web application providing multiple AI-powered productivity tools including long-text summarization, paragraph generation, interactive chatbot assistant, natural language to JavaScript code converter, and AI Sci-Fi image generation.",
    
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI / Gemini API",
      "JWT Auth",
      "Tailwind CSS"
    ],

    features: [
      "Text Summarizer Tool (Summarizes long text into concise sentences)",
      "Paragraph Generator (Generates contextual paragraphs from topic prompts)",
      "AI Chatbot Assistant (Interactive conversational AI assistant)",
      "JavaScript Code Converter (Translates English prompts to clean JS code)",
      "AI Sci-Fi Image Generator (Generates futuristic artwork from text prompts)",
      "User Authentication & Session Management (JWT Sign-In / Register)",
      "Responsive UI Dashboard with Modern Green Theme & Developed By Credits"
    ],

    images: loadProjectImages('GptClone'),

    githubUrl: "https://github.com/Vicky-Kr-Singh/ChatGpt_Clone",
    liveDemoUrl: "https://chat-gpt-clone-delta-two.vercel.app/",

    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AI API", "Tailwind CSS"],
    keyFeatures: [
      "Text Summarizer & Paragraph Generator",
      "AI Chatbot & JS Code Converter",
      "AI Sci-Fi Image Generator",
      "JWT Authentication & Session Controls",
      "Responsive Dashboard with Green Theme"
    ],
    image: loadProjectImages('GptClone')[0] || '',
    demoUrl: "",
    featured: true,
    architectureNotes: "Engineered with MERN stack, Express REST API routes proxying AI API requests, JWT authentication, MongoDB Atlas user data store, and responsive Tailwind CSS interface.",
    screenshots: [
      { id: "dashboard", title: "1. Home / Tools Dashboard", description: "Central navigation hub displaying AI tools: Text Summarizer, Paragraph Generator, AI ChatBot, JavaScript Converter, and Sci-Fi Image Generator.", category: "Dashboard" },
      { id: "summarizer", title: "2. Text Summarizer Tool", description: "Input text area where users submit long articles or documents to generate concise AI-driven summaries.", category: "Text Generation" },
      { id: "paragraph", title: "3. Paragraph Generator", description: "AI content generation tool producing structured, contextual paragraphs based on user topic input.", category: "Paragraph Generation" },
      { id: "js-converter", title: "4. JavaScript Code Converter", description: "Translates natural language prompts (e.g. factorial calculation) into clean, executable JavaScript code snippets.", category: "JS Converter" },
      { id: "scifi-image", title: "5. Sci-Fi Image Generator", description: "Generates high-quality futuristic sci-fi visual artwork from descriptive text prompts.", category: "AI Image Generation" },
      { id: "auth", title: "6. User Authentication (Login)", description: "Secure sign-in form supporting user authentication, session security, and account management.", category: "Authentication" }
    ]
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    category: "Frontend & UI/UX",
    description: "A modern recruiter-ready developer portfolio website with glassmorphism dark theme, screenshot carousel sliders, dynamic category filters, and interactive project modals.",
    
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide Icons",
      "Vite"
    ],

    features: [
      "Responsive Dark Glassmorphism UI",
      "Interactive Screenshot Carousel Sliders",
      "Data-Driven Architecture for Easy Updates",
      "Contact Form & Direct Messaging Interface",
      "Smooth Layout Animations"
    ],

    images: loadProjectImages('portfolio'),

    githubUrl: "https://github.com/Vicky-Kr-Singh/portfolio",
    liveDemoUrl: "/",

    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    keyFeatures: [
      "Responsive Dark Glassmorphism UI",
      "Interactive Screenshot Carousel Sliders",
      "Data-Driven Architecture"
    ],
    image: loadProjectImages('portfolio')[0] || '',
    demoUrl: "",
    featured: true,
    architectureNotes: "Crafted with React 18, Tailwind CSS utility classes, Lucide vector icons, and Framer Motion layout animations."
  }
];

// Export alias for easy import
export const projects = PROJECTS_DATA;
