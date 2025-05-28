"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface WebProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
  year: string;
  githubUrl?: string;
}

export default function WebProjectCard({ 
  title, 
  description, 
  imageUrl, 
  projectUrl, 
  technologies, 
  year,
  githubUrl
}: WebProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-card rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-primary">{title}</h2>
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent font-semibold text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 text-center overflow-hidden"
          >
            <span className="relative z-10">Live Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent font-semibold text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 text-center overflow-hidden"
            >
              <span className="relative z-10">GitHub Code</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
} 