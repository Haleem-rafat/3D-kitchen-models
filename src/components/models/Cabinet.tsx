import { useRef, useState } from "react";
import { Mesh } from "three";
import { ThreeEvent } from "@react-three/fiber";

interface CabinetProps {
  position: [number, number, number];
  color: string;
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export default function Cabinet({
  position,
  color,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
}: CabinetProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    console.log("Cabinet clicked at position:", position);
  };

  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Cabinet Body */}
      <mesh
        ref={meshRef}
        position={[0, 0.5, 0]}
        castShadow
        receiveShadow
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[0.8, 0.9, 0.5]} />
        <meshStandardMaterial
          color={hovered ? "#A0522D" : color}
          roughness={0.6}
          metalness={0.05}
          envMapIntensity={0.5}
        />
      </mesh>

      {/* Cabinet Door Frame */}
      <mesh position={[0, 0.5, 0.26]} castShadow>
        <boxGeometry args={[0.75, 0.85, 0.02]} />
        <meshStandardMaterial
          color={hovered ? "#8B6914" : color}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* Door Panel Inset */}
      <mesh position={[0, 0.5, 0.27]} castShadow>
        <boxGeometry args={[0.65, 0.75, 0.01]} />
        <meshStandardMaterial
          color={hovered ? "#6B5014" : color}
          roughness={0.5}
          metalness={0.05}
        />
      </mesh>

      {/* Modern Bar Handle */}
      <mesh position={[0.25, 0.5, 0.29]} castShadow>
        <boxGeometry args={[0.02, 0.3, 0.02]} />
        <meshStandardMaterial
          color="#8C8C8C"
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Handle connector */}
      <mesh position={[0.25, 0.65, 0.285]} castShadow>
        <boxGeometry args={[0.025, 0.02, 0.03]} />
        <meshStandardMaterial
          color="#8C8C8C"
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>
      <mesh position={[0.25, 0.35, 0.285]} castShadow>
        <boxGeometry args={[0.025, 0.02, 0.03]} />
        <meshStandardMaterial
          color="#8C8C8C"
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>
    </group>
  );
}
