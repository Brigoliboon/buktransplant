"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Float } from "@react-three/drei";
import Kw4 from "./Kw4";

function ModelWrapper() {
  return (
    <Float scale={2} floatIntensity={0.5} rotationIntensity={0.4}>
      <Kw4 />
    </Float>
  );
}

export default function SceneView() {
  return (
    <Canvas
      shadows
      camera={{ position: [4, 2.5, 5], fov: 35 }}
      gl={{ antialias: true }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-3, 4, -2]} intensity={0.4} />
        <pointLight position={[0, 3, 4]} intensity={0.5} />
        <hemisphereLight args={["#ffffff", "#79AE6F", 0.3]} />

        <ModelWrapper />

        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.5}
          scale={6}
          blur={2.5}
          far={4}
        />

        <Environment preset="studio" />
        <OrbitControls
          enableZoom={false}
          enablePan={true}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI / 2.2}
          // autoRotate
          // autoRotateSpeed={1.5}
        />
      </Suspense>
    </Canvas>
  );
}
