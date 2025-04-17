import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { TextureLoader, Mesh, Texture } from 'three';

function AnimatedEarth() {
  const meshRef = useRef<Mesh>(null);
  const earthTexture = useLoader(TextureLoader, '/images/images/earth.png') as Texture;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
}

const Earth = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <AnimatedEarth />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enablePan={false}
          minDistance={3}
          maxDistance={5}
        />
      </Suspense>
    </Canvas>
  );
};

export default Earth;