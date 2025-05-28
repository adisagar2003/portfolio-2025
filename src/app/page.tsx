"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import data from "@/data/data.json";

type PortfolioData = {
  heading_line: string;
  summary: string;
};

const Model = dynamic(() => import("./components/Model"), { ssr: false });

export default function Home() {
  const portfolioData: PortfolioData = data;

  return (
    <main className="fade-in min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 relative">
      {ModelContainer()}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Hi! I am Aditya</h1>
        <p className="mb-12 text-lg md:text-xl text-center max-w-xl">
          {portfolioData.heading_line}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link href="/web" className="px-8 py-4 rounded-lg bg-foreground text-background font-semibold text-lg hover:bg-opacity-80 transition-colors text-center">
            Web Projects
          </Link>
          <Link href="/game" className="px-8 py-4 rounded-lg bg-foreground text-background font-semibold text-lg hover:bg-opacity-80 transition-colors text-center">
            Game Projects
          </Link>
        </div>
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
}
