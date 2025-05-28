'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group, Mesh, Material } from 'three';

interface ModelContainerProps {
  mousePosition: {
    x: number;
    y: number;
  };
}

interface GLTFResult {
  nodes: {
    Head: Mesh;
    Body: Mesh;
  };
  materials: {
    Head: Material;
    Body: Material;
  };
}

const ModelContainer = ({ mousePosition }: ModelContainerProps) => {
  const group = useRef<Group>(null);
  const { nodes, materials } = useGLTF('/robot.gltf') as unknown as GLTFResult;

  useFrame(() => {
    if (group.current) {
      // Smooth neck rotation based on mouse position
      group.current.rotation.y = mousePosition.x * 0.5;
      group.current.rotation.x = mousePosition.y * 0.3;
    }
  });

  return (
    <group ref={group} dispose={null}>
      <mesh
        geometry={nodes.Head.geometry}
        material={materials.Head}
        position={[0, 1.5, 0]}
      />
      <mesh
        geometry={nodes.Body.geometry}
        material={materials.Body}
        position={[0, 0, 0]}
      />
    </group>
  );
};

export default ModelContainer; 