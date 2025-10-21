interface MicrowaveProps {
  position: [number, number, number];
}

export default function Microwave({ position }: MicrowaveProps) {
  return (
    <group position={position}>
      {/* Main Body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.6, 0.35, 0.4]} />
        <meshStandardMaterial color="#303030" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Door/Window */}
      <mesh position={[0, 0, 0.21]} castShadow>
        <boxGeometry args={[0.45, 0.28, 0.02]} />
        <meshStandardMaterial
          color="#1a1a1a"
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Door Frame */}
      <mesh position={[0, 0, 0.205]} castShadow>
        <boxGeometry args={[0.5, 0.32, 0.01]} />
        <meshStandardMaterial color="#404040" roughness={0.2} metalness={0.7} />
      </mesh>

      {/* Handle */}
      <mesh position={[0, -0.15, 0.215]} castShadow>
        <boxGeometry args={[0.25, 0.02, 0.02]} />
        <meshStandardMaterial
          color="#C0C0C0"
          metalness={0.9}
          roughness={0.05}
        />
      </mesh>

      {/* Control Panel */}
      <mesh position={[0.25, 0, 0.21]} castShadow>
        <boxGeometry args={[0.08, 0.28, 0.015]} />
        <meshStandardMaterial color="#1C1C1C" roughness={0.4} />
      </mesh>

      {/* Buttons (decorative) */}
      {[0.1, 0.05, 0, -0.05, -0.1].map((y, i) => (
        <mesh key={i} position={[0.25, y, 0.22]} castShadow>
          <boxGeometry args={[0.04, 0.03, 0.01]} />
          <meshStandardMaterial color="#2A2A2A" roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}
