import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls, Environment, ContactShadows, Stars } from '@react-three/drei';
import Model from './Cat'; 
import Second from './Second'
import './Scene.css'
export default function Scene() {

    return (
      <Canvas 
        
        shadows dpr={[1, 2]} 
        camera={{ position: [1, 6, 10], fov: 45 }}
      >
        <ambientLight 
          intensity={0.7} 
        />
        <spotLight 
          position={[0, 40, 30]} 
          angle={0.55} 
          penumbra={1} 
          shadow-mapSize={[512, 512]} 
          castShadow 
        />
        <spotLight 
          position={[20 ,20, -30]} 
          angle={0.55} 
          penumbra={1} 
          shadow-mapSize={[512, 512]} 
          castShadow 
        />
        <Second  
          position={[3  , -1, -1]} 
          scale={1} 
        />
        <OrbitControls  
          target={[3, 0, 0]}
          enablePan={false}
          autoRotate={true}
          enableZoom={false} 
          // minDistance={6}
          // maxDistance={10}
          maxPolarAngle={Math.PI / 3} 
          minPolarAngle={Math.PI / 3}
          // maxAzimuthAngle={Math.PI / 2}
          // minAzimuthAngle={Math.PI / 5}
          autoRotateSpeed={1}
        />
        <ContactShadows 
          position={[0, -1.4, 0]} 
          opacity={0.75} 
          scale={15} 
          blur={3} 
          far={5} 
        />
       
    </Canvas>
    );
 }