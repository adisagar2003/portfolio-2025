'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import data from "@/data/data.json";

export default function Experience() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-12">
          <Link
            href="/"
            className="group relative px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-accent font-semibold text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 text-center overflow-hidden"
          >
            <span className="relative z-10">← Back</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x"
        >
          Experience
        </motion.h1>

        <div className="space-y-8">
          {data.experience.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-lg bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-2xl font-bold text-primary">{exp.title}</h2>
                <span className="text-muted-foreground">{exp.duration}</span>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{exp.organization}</h3>
                <p className="text-muted-foreground">{exp.location}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 