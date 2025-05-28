'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GameProjectCard from '../components/GameProjectCard';

interface GameProject {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  technologies: string[];
  year: string;
  githubUrl: string;
}

const gameProjects: GameProject[] = [
  {
    title: "Unreal Engine Platformer",
    description: "A 3D platformer game built with Unreal Engine 5, featuring advanced movement mechanics including double jump, wall running, and dash abilities. Includes dynamic level design with collectibles and environmental hazards.",
    imageUrl: "/platformer-unreal.png",
    projectUrl: "https://youtu.be/c9igLw17ESw?si=ncYB8PEiIsSLCGWQ",
    githubUrl: "https://github.com/adisagar2003/PlatformerUnrealC",
    technologies: ["Unreal Engine 5", "C++", "Blueprints", "3D Modeling", "Game Design", "Niagara VFX", "Animation Blueprints"],
    year: "2024"
  },
  {
    title: "PS1 Horror Game",
    description: "A retro-style horror game inspired by PS1 classics, featuring low-poly graphics and atmospheric gameplay. Built with Unity, implementing custom shaders and post-processing effects for authentic PS1 aesthetics.",
    imageUrl: "/ps1-horror.png",
    projectUrl: "https://www.youtube.com/watch?v=GZ6M1qrmO-4",
    githubUrl: "https://github.com/adisagar2003/Ps1_Horror-Game",
    technologies: ["Unity", "C#", "Blender", "ShaderLab", "Post Processing"],
    year: "2024"
  },
  {
    title: "BounceGun",
    description: "A fun 3D parkour FPS game where players can bounce and shoot their way through levels. Features unique movement mechanics and fast-paced combat.",
    imageUrl: "/bouncegun.png",
    githubUrl: "https://github.com/adisagar2003/BounceGun",
    technologies: ["Unity", "C#", "3D Modeling", "Animation", "Command Pattern", "SOLID Principles"],
    year: "2024"
  },
  {
    title: "Anomally",
    description: "A 2D hack and slash wave-based combat game. Features solid architecture principles and MVP pattern implementation for clean, maintainable code.",
    imageUrl: "/anomally.png",
    githubUrl: "https://github.com/adisagar2003/Anomally",
    technologies: ["Unity", "C#", "SOLID Principles", "MVP Architecture", "Aseprite"],
    year: "2023"
  },
  {
    title: "Rton",
    description: "A unique game project showcasing innovative gameplay mechanics and creative design solutions.",
    imageUrl: "/rton.png",
    githubUrl: "https://github.com/adisagar2003/Rton",
    technologies: ["Unity", "C#", "Game Design"],
    year: "2023"
  },
  {
    title: "Chicken Runner",
    description: "An endless runner game featuring a chicken protagonist. Includes various obstacles, power-ups, and increasing difficulty.",
    imageUrl: "/chicken-runner.png",
    githubUrl: "https://github.com/adisagar2003/ChickenRunner",
    technologies: ["Unity", "C#", "2D Animation", "Game Design"],
    year: "2023"
  }
];

const GameProjects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
            ← Back to Portfolio
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold"
          >
            Game Development
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gameProjects.map((project) => (
            <GameProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameProjects; 