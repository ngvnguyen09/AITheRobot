import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function BotModel() {
  const { scene } = useGLTF('/model.glb');
  const modelRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (modelRef.current) {
      // Animate the bot to spin continuously
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  return <primitive object={scene} ref={modelRef} scale={1.5} position={[0, -1, 0]} />;
}
