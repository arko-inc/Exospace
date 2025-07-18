"use client"; // This directive is crucial for client-side functionality

import React from "react"; // React is implicitly needed for JSX
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// This component uses a hook, so it must be rendered client-side.
function MarsModel() {
  // Ensure the path to your GLB/GLTF model is correct relative to the public directory
  const { scene } = useGLTF('/models-3d/mars.glb'); 
  return <primitive object={scene} scale={1} />; // Adjust scale as needed
}

const MarsSection = () => { // Fixed export default syntax
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Next Destination: Mars</h2>
          <p className="text-lg md:text-xl max-w-2xl text-gray-400 mb-8">
            Exospace is pioneering the next wave of interplanetary exploration with a focus on the Red Planet. Our upcoming missions aim to establish a sustainable human presence on Mars, leveraging cutting-edge technology to overcome the challenges of this new frontier.
          </p>
          <p className="text-lg md:text-xl max-w-2xl text-gray-400">
            From developing advanced life support systems to designing habitats for the Martian environment, we are committed to making humanity a multi-planetary species.
          </p>
        </div>
        <div style={{ height: '400px', width: '100%', position: 'relative' }}> {/* Added position: 'relative' for Canvas to fill */}
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <MarsModel />
            <OrbitControls autoRotate />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default MarsSection; // Corrected export statement