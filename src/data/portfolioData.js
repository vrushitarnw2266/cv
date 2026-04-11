// 📌 PORTFOLIO DATA - Complete content for the portfolio

export const personalInfo = {
  name: "Vrushita Panchal",
  title: "Aspiring Full-Stack Developer",
  subtitle: "Crafting beautiful, performant frontend experiences while building my backend skills",
  email: "vrushitapanchal@gmail.com",
  phone: "+91 XXXXX XXXXX",
  location: "India",
  bio: {
    short: "Passionate frontend developer with strong skills in React and Tailwind, currently transitioning to full-stack.",
    long: "I'm an aspiring full-stack developer who has mastered frontend technologies including HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap. Currently, I am actively building my backend skills with Node.js and MongoDB to become a complete full-stack developer. My passion lies in creating seamless, responsive user experiences while continually expanding my technical horizons."
  },
  socials: {
    github: "https://github.com/vrushitarnw2266",
    linkedin: "https://linkedin.com/in/vrushita-panchal",
    twitter: "https://twitter.com/yourusername",
    portfolio: "https://your-portfolio.com"
  }
};

export const experience = [
  {
    id: 1,
    role: "Frontend Web Developer (Personal)",
    company: "Freelance / Projects",
    duration: "2023 - Present",
    location: "Remote",
    description: "Building responsive, modern, and interactive frontend web applications.",
    achievements: [
      "Developed multiple complex UI components using React and Tailwind CSS",
      "Ensured mobile responsiveness and seamless user experiences across devices",
      "Integrated Bootstrap for rapid UI prototyping"
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML/CSS"]
  },
  {
    id: 2,
    role: "Full-Stack Development Learner",
    company: "Self-Taught Focus",
    duration: "2024 - Present",
    location: "Remote",
    description: "Transitioning skills from frontend to backend to build full applications.",
    achievements: [
      "Learning to build REST APIs to serve frontend applications",
      "Understanding database schemas and CRUD operations",
      "Connecting React frontends to Node.js & MongoDB backends"
    ],
    tech: ["Node.js", "Express", "MongoDB", "REST APIs"]
  }
];

export const projects = [
  {
    id: 1,
    title: "React Modern Portfolio",
    description: "A highly interactive, animated portfolio demonstrating modern frontend capabilities.",
    longDescription: "A complete professional portfolio built with React, styled using Tailwind CSS, and animated using Framer Motion. This project showcases my capability to build stunning user interfaces and responsive layouts.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1555092918-03e89923d366?w=600&h=400&fit=crop",
    demoUrl: "#",
    codeUrl: "https://github.com/vrushitarnw22",
    features: [
      "Responsive design across all devices",
      "Dynamic data rendering",
      "Page transition animations",
      "Modern aesthetic"
    ],
    category: "Frontend",
    status: "Completed"
  },
  {
    id: 2,
    title: "React Crud App",
    description: "A functional CRUD application managing resources with React and JSON server.",
    longDescription: "Built a React JS application with Axios to handle API requests. The platform supports Create, Read, Update, and Delete operations along with searching, pagination, and form validation.",
    tech: ["React", "JavaScript", "Axios", "Bootstrap", "JSON Server"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    demoUrl: "#",
    codeUrl: "https://github.com/vrushitarnw22",
    features: [
      "Full CRUD operations",
      "Client-side form validation",
      "Pagination & Searching",
      "Real-time state updates"
    ],
    category: "Frontend",
    status: "Completed"
  },
  {
    id: 3,
    title: "Full-Stack Task Manager (Ongoing)",
    description: "A full-stack project in progress to solidify my backend skills with Node.js.",
    longDescription: "Currently developing a full-stack application leveraging my React frontend skills and integrating it with a Node.js/Express backend and MongoDB. Focused on creating a secure, functioning API.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1677442d019cecf8287d5b8a5eca3cf2187f4748c?w=600&h=400&fit=crop",
    demoUrl: "#",
    codeUrl: "https://github.com/vrushitarnw22",
    features: [
      "User Authentication (Soon)",
      "Database Integration",
      "API Development",
      "Frontend-Backend Connection"
    ],
    category: "Full-Stack",
    status: "In Progress"
  }
];

export const skills = {
  frontend: [
    { name: "HTML/CSS", level: 95, category: "Markup" },
    { name: "JavaScript", level: 90, category: "Language" },
    { name: "React", level: 90, category: "Framework" },
    { name: "Tailwind CSS", level: 90, category: "Styling" },
    { name: "Bootstrap", level: 85, category: "Styling" },
    { name: "Framer Motion", level: 75, category: "Animation" },
  ],
  backend: [
    { name: "Node.js", level: 50, category: "Runtime" },
    { name: "Express.js", level: 45, category: "Framework" },
    { name: "MongoDB", level: 40, category: "Database" },
    { name: "REST APIs", level: 55, category: "Architecture" },
  ],
  tools: [
    { name: "Git & GitHub", level: 85, category: "Version Control" },
    { name: "VS Code", level: 95, category: "IDE" },
    { name: "NPM", level: 85, category: "Package Manager" },
    { name: "Postman", level: 60, category: "API Testing" },
  ]
};

export const education = [
  {
    degree: "Software Engineering Studies",
    field: "Computer Science",
    institution: "University/College Name",
    year: "Ongoing",
    cgpa: "N/A",
    highlights: ["Frontend Specialization", "Self-Taught Backend"]
  }
];

export const testimonials = [];

export const coreCompetencies = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible web interfaces utilizing React, Tailwind, and Bootstrap",
    icon: "Code"
  },
  {
    title: "Responsive Design",
    description: "Creating fluid layouts that adapt seamlessly to mobile, tablet, and desktop screens",
    icon: "Layout"
  },
  {
    title: "Backend Integration (Learning)",
    description: "Transitioning to full-stack by learning how to connect frontends to Node.js backends",
    icon: "Server"
  },
  {
    title: "Modern JavaScript",
    description: "Leveraging ES6+ features for clean, efficient, and maintainable frontend logic",
    icon: "FileCode"
  }
];

export const blogPosts = [];

export const stats = {
  projectsCompleted: 8,
  yearsExperience: 1,
  clientsSatisfied: 0,
  openSourceContributions: 5
};
