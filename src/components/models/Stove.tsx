interface StoveProps {
  position: [number, number, number];
}

export default function Stove({ position }: StoveProps) {
  return (
    <group position={position}>
      {/* Stove Top */}
      <mesh position={[0, -0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.6, 0.02, 0.5]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      
      {/* Burner 1 */}
      <mesh position={[-0.15, 0, -0.15]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.02, 32]} />
        <meshStandardMaterial color="#2C2C2C" />
      </mesh>
      
      {/* Burner 2 */}
      <mesh position={[0.15, 0, -0.15]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.02, 32]} />
        <meshStandardMaterial color="#2C2C2C" />
      </mesh>
      
      {/* Burner 3 */}
      <mesh position={[-0.15, 0, 0.15]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.02, 32]} />
        <meshStandardMaterial color="#2C2C2C" />
      </mesh>
      
      {/* Burner 4 */}
      <mesh position={[0.15, 0, 0.15]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.02, 32]} />
        <meshStandardMaterial color="#2C2C2C" />
      </mesh>
      
      {/* Control Knobs */}
      {[-0.2, -0.05, 0.1].map((x, i) => (
        <mesh key={i} position={[x, 0, 0.3]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.01, 16]} />
          <meshStandardMaterial color="#404040" metalness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

