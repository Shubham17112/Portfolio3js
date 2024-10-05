import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {useGLTF } from "@react-three/drei";

const Computers = ({ isTablet, isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.95} groundColor="black" />
      <hemisphereLight intensity={1} groundColor="blue" />
      <hemisphereLight intensity={2} groundColor="black" />
      <spotLight
        position={[-40, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={6} />
      
      <group
        rotation={[0, 10.5 , -.05]} // Rotate the entire group
      >
        <group
          // Adjusting the position for right and bottom
          position={isMobile ? [0, -6, -0.8]  :isTablet?[0, -6, -1.5]: [0, -1.25, -5.5]}
          // Shifting 12 units to the right and bottom
        >
          <primitive
            object={computer.scene}
            scale={isMobile ? 0.65 : 0.95}
            position={[0, 0, 0]}  // Object stays centered in the inner group
          />
        </group>
      </group>
    </mesh>
  );
};
export default Computers;
