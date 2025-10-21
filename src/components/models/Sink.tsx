interface SinkProps {
  position: [number, number, number];
}

export default function Sink({ position }: SinkProps) {
  return (
    <group position={position}>
      {/* Sink Basin */}
      <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.25, 0.2, 0.15, 32]} />
        <meshStandardMaterial 
          color="#E8E8E8" 
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      {/* Faucet Base */}
      <mesh position={[0, 0.05, -0.3]} castShadow>
        <cylinderGeometry args={[0.02, 0.03, 0.05, 16]} />
        <meshStandardMaterial 
          color="#C0C0C0" 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Faucet Neck */}
      <mesh position={[0, 0.2, -0.3]} castShadow>
        <cylinderGeometry args={[0.015, 0.015, 0.3, 16]} />
        <meshStandardMaterial 
          color="#C0C0C0" 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Faucet Spout */}
      <mesh position={[0, 0.25, -0.15]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.015, 0.02, 0.15, 16]} />
        <meshStandardMaterial 
          color="#C0C0C0" 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

