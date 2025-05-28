export interface WebProject {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
  year: string;
  githubUrl?: string;
}

export const webProjects: WebProject[] = [
  {
    title: "Portfolio 2025",
    description: "A modern, interactive portfolio website featuring a 3D model that responds to user interaction. Built with React Three Fiber for immersive 3D graphics and Next.js for optimal performance. Includes smooth animations, responsive design, and a clean, professional layout.",
    imageUrl: "/portfolio.png",
    projectUrl: "https://portfolio-2025-de4g.vercel.app/",
    technologies: ["Next.js", "React Three Fiber", "Three.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    year: "2024",
    githubUrl: "https://github.com/adisagar2003/portfolio-2025"
  },
  {
    title: "Discover Charlottetown",
    description: "Solo-built a web app highlighting events, dining, and attractions in Charlottetown, PEI. Integrated MapLibre for interactive maps where users mark visited locations. 150+ commits; backend deployed on Fly.io with CI/CD; frontend hosted on Netlify.",
    imageUrl: "/charlottetown.png",
    projectUrl: "https://charlottetown.netlify.app",
    technologies: ["Express.ts", "React.ts", "TypeScript", "Redux", "Prisma", "MapLibre", "PostgreSQL", "Fly.io"],
    year: "2024",
    githubUrl: "https://github.com/adisagar2003/discover-charlottetown"
  },
  {
    title: "Real-time Social Media Platform",
    description: "Built a full-stack social media app with messaging, notifications, comments, and likes. Used Socket.io for real-time features and MongoDB aggregations for performance. Resolved backend data loss via improved query handling and async management.",
    imageUrl: "/realtimemedia.png",
    projectUrl: "https://spectacular-faun-3e4d91.netlify.app",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "Redux Toolkit", "JWT"],
    year: "2023",
    githubUrl: "https://github.com/adisagar2003/Vs-MERN-Social-media"
  }
]; 