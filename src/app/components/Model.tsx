"use client";

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import { Group, AnimationMixer, Object3D, Vector3 } from 'three';

interface ModelProps {
  scale?: number;
}

function logBones(object: Object3D, level = 0) {
  console.log('  '.repeat(level) + object.name);
  object.children.forEach(child => logBones(child, level + 1));
}

export default function Model({ scale = 0.5 }: ModelProps) {
  const { scene, animations } = useGLTF('/robot.gltf');
  const modelRef = useRef<Group>(null);
  const mixerRef = useRef<AnimationMixer | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const neckRef = useRef<Object3D | null>(null);

  useEffect(() => {
    console.log('Model bones structure:');
    logBones(scene);
    console.log('Available animations:', animations.map(anim => anim.name));

    // Find the neck bone
    scene.traverse((child) => {
      if (child.name === 'neck') {
        neckRef.current = child;
      }
    });

    // Track mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [scene, animations]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }

    if (neckRef.current) {
      // Convert mouse position to world space with reduced sensitivity and offset
      let target = new Vector3(
        mousePosition.x * 10 + 0.4,  // Reduced from 5 to 2, added 0.1 offset
        -mousePosition.y * 2+ 0.1, // Reduced from 5 to 2, added 0.1 offset
        5  // Reduced from 5 to 3 for closer look
      );
      
   
      // Make neck look at target
      target.clamp(new Vector3(
        -0.3,
        -0.15,
        5
      ), new Vector3(Infinity, Infinity, Infinity));
      neckRef.current.lookAt(target);
      
      // Limit rotation to prevent unnatural twisting
      neckRef.current.rotation.z = 0;
    }
  });

  // Set up animation mixer
  if (animations && animations.length && !mixerRef.current) {
    mixerRef.current = new AnimationMixer(scene);
    const action = mixerRef.current.clipAction(animations[0]);
    action.play();
  }

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={scale} 
      position={[0, -1, 0]} 
      rotation={[0, Math.PI / 4, 0]} 
    />
  );
}
