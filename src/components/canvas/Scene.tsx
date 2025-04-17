'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      
      <mesh>
        <meshStandardMaterial color="hotpink" roughness={0.2} metalness={0.8} />
        <OrbitControls enableZoom={false} autoRotate />
      </mesh>

      <EffectComposer>
        <Bloom luminanceThreshold={0.9} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
  )
}