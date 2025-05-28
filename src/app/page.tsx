"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import data from "@/data/data.json";

type PortfolioData = {
  name: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  education: {
    institution: string;
    location: string;
    degree: string;
    duration: string;
  }[];
  experience: {
    title: string;
    organization: string;
    location: string;
    duration: string;
    responsibilities: string[];
  }[];
  projects: {
    name: string;
    tech_stack: string[];
    duration: string;
    description: string[];
    links: {
      live_demo?: string;
      code?: string | null;
    };
  }[];
  technical_skills: {
    languages: string[];
    frameworks: string[];
    developer_tools: string[];
    libraries: string[];
  };
  summary: string;
  headingLine: string;
  project: {
    name: string;
    tech_stack: string[];
    duration: string;
    description: string[];
    links: {
      live_demo?: string;
      code?: string | null;
    };
  }[];
  heading: string;
};

const Model = dynamic(() => import("./components/Model"), { ssr: false });

export default function Home() {
  const portfolioData: PortfolioData = data;

  return (
    <main className="fade-in min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent/30 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      
      {/* Social Links */}
      <div className="absolute top-8 right-8 flex gap-4 z-20">
        <Link
          href={portfolioData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 border border-primary/20"
          aria-label="LinkedIn Profile"
        >
          <svg 
            className="w-6 h-6 text-primary" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </Link>
        <Link
          href={portfolioData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 border border-primary/20"
          aria-label="GitHub Profile"
        >
          <svg 
            className="w-6 h-6 text-primary" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </Link>
      </div>

      {ModelContainer()}

      <div className="relative z-10 w-full max-w-4xl mt-24 md:mt-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x text-white">
          Hi! I am Aditya
        </h1>
        <p className="mb-12 text-lg md:text-xl text-center max-w-xl mx-auto text-muted-foreground">
          {portfolioData.summary}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
          <Link 
            href="/web" 
            className="group relative px-8 py-4 rounded-lg bg-primary/5 font-semibold text-lg text-white hover:shadow-neon transition-all duration-300 hover:scale-105 text-center overflow-hidden border border-primary/20"
          >
            <span className="relative z-10 group-hover:animate-neon-pulse">Web Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link 
            href="/game" 
            className="group relative px-8 py-4 rounded-lg bg-primary/5 font-semibold text-lg text-white hover:shadow-neon transition-all duration-300 hover:scale-105 text-center overflow-hidden border border-primary/20"
          >
            <span className="relative z-10 group-hover:animate-neon-pulse">Game Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link 
            href="/experience" 
            className="group relative px-8 py-4 rounded-lg bg-primary/5 font-semibold text-lg text-white hover:shadow-neon transition-all duration-300 hover:scale-105 text-center overflow-hidden border border-primary/20"
          >
            <span className="relative z-10 group-hover:animate-neon-pulse">Experience</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {SkillsSection(portfolioData.technical_skills)}
      </div>
    </main>
  );

  function ModelContainer() {
    return (
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <div className="w-[250px] h-[350px] md:w-[350px] md:h-[450px] lg:w-[450px] lg:h-[550px] fixed right-4 bottom-4">
          <Canvas>
            <Suspense fallback={null}>
              <PerspectiveCamera 
                makeDefault 
                zoom={5.2} 
                translateX={10} 
                position={[-12, 0, -3]} 
              />
              <ambientLight intensity={0.7} />
              <pointLight position={[10, 10, 10]} />
              <Model />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                minDistance={3}
                maxDistance={10}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    );
  }

  function SkillsSection(skills: PortfolioData['technical_skills']) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-neon-pulse">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-lg bg-primary/5 backdrop-blur-sm border border-primary/20 hover:shadow-neon transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary animate-neon-pulse">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:shadow-neon transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-lg bg-primary/5 backdrop-blur-sm border border-primary/20 hover:shadow-neon transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary animate-neon-pulse">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:shadow-neon transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-lg bg-primary/5 backdrop-blur-sm border border-primary/20 hover:shadow-neon transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary animate-neon-pulse">Developer Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.developer_tools.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:shadow-neon transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 rounded-lg bg-primary/5 backdrop-blur-sm border border-primary/20 hover:shadow-neon transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary animate-neon-pulse">Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {skills.libraries.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:shadow-neon transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p-6 rounded-lg bg-primary/5 backdrop-blur-sm border border-primary/20 hover:shadow-neon transition-all duration-300 md:col-span-2"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary animate-neon-pulse">Game Development</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Unreal Engine",
                "Unity",
                "C++",
                "Blueprints",
                "3D Modeling",
                "Game Design",
                "Physics",
                "Animation",
                "Particle Systems",
                "AI Programming",
                "Networking",
                "Performance Optimization"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:shadow-neon transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }


}
