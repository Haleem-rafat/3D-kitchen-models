interface RefrigeratorProps {
  position: [number, number, number];
}

export default function Refrigerator({ position }: RefrigeratorProps) {
  return (
    <group position={position}>
      {/* Main Body */}
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.85, 2, 0.8]} />
        <meshStandardMaterial color="#E8E8E8" roughness={0.2} metalness={0.7} />
      </mesh>

      {/* Freezer Door (Top) */}
      <mesh position={[0, 1.5, 0.41]} castShadow>
        <boxGeometry args={[0.8, 0.9, 0.02]} />
        <meshStandardMaterial
          color="#F0F0F0"
          roughness={0.15}
          metalness={0.75}
        />
      </mesh>

      {/* Fridge Door (Bottom) */}
      <mesh position={[0, 0.5, 0.41]} castShadow>
        <boxGeometry args={[0.8, 0.9, 0.02]} />
        <meshStandardMaterial
          color="#F0F0F0"
          roughness={0.15}
          metalness={0.75}
        />
      </mesh>

      {/* Freezer Handle */}
      <mesh position={[0.35, 1.5, 0.43]} castShadow>
        <boxGeometry args={[0.03, 0.5, 0.03]} />
        <meshStandardMaterial color="#B0B0B0" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Fridge Handle */}
      <mesh position={[0.35, 0.5, 0.43]} castShadow>
        <boxGeometry args={[0.03, 0.5, 0.03]} />
        <meshStandardMaterial color="#B0B0B0" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Divider Line */}
      <mesh position={[0, 1, 0.415]} castShadow>
        <boxGeometry args={[0.82, 0.01, 0.015]} />
        <meshStandardMaterial color="#D0D0D0" metalness={0.6} />
      </mesh>

      {/* Base Grille */}
      <mesh position={[0, 0.05, 0.42]} castShadow>
        <boxGeometry args={[0.8, 0.08, 0.01]} />
        <meshStandardMaterial color="#2C2C2C" />
      </mesh>
    </group>
  );
}
