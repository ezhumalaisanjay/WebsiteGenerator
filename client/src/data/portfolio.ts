export const personalInfo = {
  name: "Ezhumalai P.",
  title: "Frontend Developer",
  location: "Chennai, India",
  phone: "+91 8754305360",
  email: "ezhumalaisanjay05@gmail.com",
  github: "https://github.com/ezhumalaisanjay",
  linkedin: "https://linkedin.com/in/ezhumalai-p-bb3531272",
  summary: "Results-driven Front-End Developer with a strong foundation in building modern, full-stack web applications using React, Next.js, and Node.js. Proven ability to translate complex business requirements into high-quality, scalable, and user-friendly code. Possesses hands-on experience in developing comprehensive HRMS and CRM platforms, with a special focus on enhancing user engagement through innovative features like real-time chat and AI integration."
};

export const skills = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "🚀", category: "Frontend" },
  { name: "JavaScript", icon: "🟨", category: "Frontend" },
  { name: "TypeScript", icon: "🔵", category: "Frontend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "GraphQL", icon: "🔺", category: "APIs" },
  { name: "REST APIs", icon: "🔗", category: "APIs" },
  { name: "AWS", icon: "☁️", category: "Cloud" },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
  { name: "Shadcn/ui", icon: "🎯", category: "Styling" },
  { name: "Git", icon: "📊", category: "Tools" },
  { name: "CI/CD", icon: "🔄", category: "DevOps" }
];

export const projects = [
  {
    id: 1,
    title: "OCSS & SOS HRMS Platform",
    description: "Comprehensive Human Resource Management System for managing staffing, scheduling, and employee data. Built with Next.js and featuring real-time chat, AI assistant integration, and responsive design.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "React", "TypeScript", "Shadcn/ui", "Tailwind CSS", "GraphQL"],
    features: [
      "Real-time chat module with instant communication",
      "AI assistant for automated query responses",
      "Reusable component library with Shadcn/ui",
      "Server-side rendering with Next.js",
      "Fully responsive and accessible design"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "AVANA - CRM Platform",
    description: "Feature-rich Customer Relationship Management platform for managing customer interactions, sales pipelines, and analytics. Modernized legacy jQuery codebase to React components.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "JavaScript", "REST APIs", "jQuery"],
    features: [
      "Contact management and lead tracking modules",
      "Legacy code refactoring to modern React",
      "API integration and endpoint collaboration",
      "Improved maintainability and performance"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Component Library",
    description: "Reusable component library built with Shadcn/ui and Tailwind CSS that accelerated development velocity by 30% and ensured UI consistency across projects.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Shadcn/ui", "Tailwind CSS", "TypeScript", "React"],
    features: [
      "30% faster development velocity",
      "Consistent UI across all projects",
      "TypeScript support",
      "Comprehensive documentation"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "AWS Deployment Pipeline",
    description: "Automated CI/CD pipeline setup for application deployment on AWS, improving deployment frequency and reliability with automated builds and testing.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["AWS", "CI/CD", "DevOps", "Node.js"],
    features: [
      "Automated deployment pipeline",
      "Improved deployment frequency",
      "Automated testing integration",
      "Enhanced reliability"
    ],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const experience = [
  {
    id: 1,
    position: "Associate Developer",
    company: "Sixty One Steps Advertising Pvt Ltd",
    location: "Chennai, India",
    period: "May 2023 - Present",
    description: "Contributing to the entire development lifecycle of enterprise-grade SaaS products, from UI/UX implementation and component architecture to backend integration and deployment.",
    achievements: [
      "Architected and implemented a reusable component library using Shadcn/ui and Tailwind CSS, which accelerated development velocity by an estimated 30% and ensured UI consistency across all company projects.",
      "Engineered a real-time chat module for the SOS platform, enabling instant communication between users and improving platform engagement.",
      "Spearheaded the integration of an AI assistant into the chat application, automating responses to common queries and significantly reducing the need for manual user support.",
      "Seamlessly integrated front-end applications with Node.js backend services by designing and consuming both GraphQL queries and RESTful APIs, ensuring efficient and reliable data fetching.",
      "Managed application deployment and infrastructure on AWS, utilizing a CI/CD pipeline to automate builds, testing, and releases, which improved deployment frequency and reliability."
    ],
    technologies: ["React", "Next.js", "TypeScript", "Shadcn/ui", "Tailwind CSS", "GraphQL", "Node.js", "AWS", "CI/CD"]
  }
];

export const stats = {
  experience: "2+",
  projects: "10+",
  technologies: "12+",
  clients: "5+"
};
