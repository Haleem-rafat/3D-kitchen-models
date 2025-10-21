interface WallsProps {
  color: string;
}

export default function Walls({ color }: WallsProps) {
  return (
    <group>
      {/* Back Wall - Aligned with floor back edge */}
      <mesh position={[0, 2.5, -5]} receiveShadow>
        <boxGeometry args={[10, 5, 0.1]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>

      {/* Left Wall - Aligned with floor edge */}
      <mesh position={[-5, 2.5, 0]} receiveShadow>
        <boxGeometry args={[0.1, 5, 10]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
    </group>
  );
}
