// This file contains constants and data used across the portfolio template.
// Update the values to personalize your portfolio.

export const ABOUT_ME = {
  name: "Adhil Unnikrishnan P",
  title: "Full Stack Developer",
  location: "Irinjalakuda, Thrissur, Kerala, India",
  email: "adhilunnikrishnanofficial@gmail.com",
  description: [
    "Hi, I’m Adhil Unnikrishnan P, a Full Stack Developer with a strong focus on building reliable, scalable, and secure web applications. I enjoy solving complex problems and turning ideas into efficient systems.",
    "I’m passionate about developing secure authentication flows, robust RESTful APIs, and intelligent data-driven applications. I enjoy crafting backend systems that are scalable, maintainable, and built with clean, modern architecture.",
  ],
  profileImage: "/image.png", // Replace with your profile image
  profileGif: "/profile-gif.gif", // Replace with your personalised gif
};

export const USER_NAMES = {
  githubUsername: "adhilunnikrishnan",
  leetcodeUsername: "adhilunnikrishnan", // remove or keep blank if you don't have a LeetCode profile
  //   hashnodeUsername: "your-hashnode-username", // remove or keep blank if you don't have a Hashnode profile
};

export const SOCIAL_LINKS = {
  github: "https://github.com/adhilunnikrishnan",
  linkedin: "https://www.linkedin.com/in/adhilunnikrishnan/",
  // twitter: "https://twitter.com/your-twitter",
  leetcode: "https://leetcode.com/u/adhilunnikrishnan/",
  instagram: "",
  email: "mailto:adhilunnikrishnanofficial@gmail.com",
  // blog: "https://yourblog.com", // remove if you don't have a blog
  resume:
    "https://drive.google.com/file/d/1D4rKAjA6FZSOtt0g8Vs3W2ZltXEXLyWk/view?usp=drive_link",
  phone: "+91 7907933057",
  whatsapp: "https://wa.me/+917907933057",
};

// Contact form endpoint (update with your own Formspree endpoint)
export const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export const SKILLS = {
  languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  frontend: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Framer Motion",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Nest.js",
    "RESTful APIs",
    "JWT",
    "WebSocket",
    "Socket.io",
  ],
  databases: ["MongoDB", "PostgreSQL", "Redis", "Mongoose ODM", "Prisma ORM"],
  cloudDevOps: [
    "AWS",
    "Docker",
    "Nginx",
    "CI/CD",
    "GitHub Actions",
    "Vercel",
    "Render",
    "PM2",
    "Linux/Bash",
  ],
  testing: ["Jest", "Playwright", "Postman", "Supertest"],
  tools: [
    "Git",
    "GitHub",
    "Swagger",
    "Figma",
    "VS Code",
    "Cursor",
    "Jira",
    "Notion",
    "ESLint",
    "Prettier",
    "Vite",
    "npm",
    "yarn",
    "pnpm",
  ],
  "architecture Concepts": [
    "MVC",
    "SOLID Principles",
    "OOP",
    "Design Patterns",
    "Agile/Scrum",
    "System Design",
    "API Rate Limiting",
    "Load Balancing",
    "Data Structures & Algorithms",
  ],
};

export const PROJECTS = [
  {
    id: 1,
    name: "Modern Portfolio",
    category: "FRONTEND",
    description:
      "Crafted a responsive 9-section portfolio using Next.js 15, TypeScript, and Framer Motion with dark mode support.\nIntegrated GitHub and Leetcode APIs displaying 261+ solved problems and 64-day max streak.\nAchieved 90+ Lighthouse score via SEO, code splitting, and Open Graph meta tags.\nEnsured code quality with ESLint, Prettier, and Vercel Analytics.",
    tech: [
      "Node.js",
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "GitHub API",
      "LeetCode API",
    ],
    link: "",
    github: "https://github.com/adhilunnikrishnan/My-Nextjs-Portfolio",
    image: "/modern-portfolio.png",
    color: "#3178C6",
  },
  {
    id: 2,
    name: "node-rest-api-typescript",
    category: "BACKEND",
    description:
      "Traditional APIs often suffer from performance bottlenecks and weak type safety.\nThis leads to fragile codebases and poor developer experience.\nA scalable Node.js REST API built with TypeScript, featuring JWT-based authentication, MongoDB for data persistence, and Redis for caching. Dockerized for consistent deployment.",
    tech: [
      "Node.js",
      "TypeScript",
      "JWT",
      "Redis",
      "Docker",
      "MongoDB",
      "argon2",
    ],
    link: "",
    github: "https://github.com/adhilunnikrishnan/node-rest-api-typescript",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    color: "#3178C6",
  },
  {
    id: 3,
    name: "Moonlight-Reads-Ecommerce-WebApp",
    category: "Full Stack",
    description:
      "Many online bookshops lack an engaging and intuitive user experience.\nReaders struggle to discover content and manage their collections efficiently.\nMoonlight Reads offers a modern bookstore experience with wishlist management, effortless cart handling, and a robust admin dashboard for monitoring inventory and orders.",
    tech: [
      "Node.js",
      "JavaScript",
      "Bootstrap 5",
      "Handlebars",
      "Chart.js",
      "Express.js",
      "Multer",
      "MongoDBAtlas",
      "JWT",
    ],
    link: "https://moonlight-reads.onrender.com/",
    github: "https://github.com/adhilunnikrishnan/Moonlight-Reads-Ecommerce-WebApp",
    image: "/moonlight.png",
    color: "#00FF94",
  },
];

export const EXPERIENCE = [
  {
    company: "G-Tec Computer Education",
    companyLink: "",
    role: "Full Stack Development Intern",
    period: "Jul 2025 - Mar 2026",
    location: "Onsite",
    description:
      "Engineered and deployed MERN stack applications, reducing load times by 30% through lazy loading and component optimization. Enforced JWT authentication and role-based access control for 140+ REST APIs using Node.js, Express.js, Nest.js, and TypeScript, ensuring zero unauthorized access. Designed and optimized MongoDB and PostgreSQL database schemas using indexing strategies and query optimization, improving query performance by 40%. ",
    skills: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Nest.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "REST APIs",
      "Backend Architecture",
    ],
  },
];

export const EDUCATION = [
  // {
  //   degree: "Bachelor of Computer Applications (BCA) – Online Degree",
  //   institution: " Yenepoya University",
  //   institutionLink: "https://www.yenepoya.edu.in/",
  //   period: "Jul 2025 - Jul 2028  Expected",
  // },
  {
    degree: "Senior Secondary (Plus Two) ",
    institution: "National Higher Secondary School ",
    institutionLink: "",
    period: "Jul 2023 - Mar 2025",
  },
  {
    degree: "Secondary (SSLC)",
    institution: "St.Mary's Higher Secondary School ",
    institutionLink: "",
    period: "Jul 2022 - Mar 2023",
  },

  // Add more education as needed
];
