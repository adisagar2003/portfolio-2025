"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { webProjects } from "@/data/webProjects";

export default function WebProjects() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Link 
            href="/"
            className="text-foreground hover:opacity-80 transition-opacity"
          >
            ← Back to Home
          </Link>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          Web Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 