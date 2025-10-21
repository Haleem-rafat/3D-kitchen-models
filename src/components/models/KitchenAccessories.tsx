// Kitchen accessories to make it look more realistic

export function Kettle({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Kettle body */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.15, 0.2, 32]} />
        <meshStandardMaterial color="#E8E8E8" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Lid */}
      <mesh position={[0, 0.22, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.12, 0.04, 32]} />
        <meshStandardMaterial color="#D0D0D0" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Handle */}
      <mesh
        position={[0.15, 0.12, 0]}
        rotation={[0, 0, Math.PI / 4]}
        castShadow
      >
        <torusGeometry args={[0.08, 0.015, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#303030" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
}

export function CuttingBoard({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} castShadow>
      <boxGeometry args={[0.3, 0.4, 0.02]} />
      <meshStandardMaterial color="#8B6F47" roughness={0.7} metalness={0.1} />
    </mesh>
  );
}

export function KnifeBlock({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      {/* Block */}
      <mesh castShadow>
        <boxGeometry args={[0.15, 0.2, 0.08]} />
        <meshStandardMaterial color="#654321" roughness={0.6} />
      </mesh>
      {/* Knife handles */}
      {[-0.04, 0, 0.04].map((x, i) => (
        <mesh key={i} position={[x, 0.12, 0]} castShadow>
          <cylinderGeometry args={[0.008, 0.008, 0.05, 8]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      ))}
    </group>
  );
}

export function Bowls({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {[0, 0.15, 0.3].map((z, i) => (
        <mesh key={i} position={[0, 0.03, z]} castShadow receiveShadow>
          <cylinderGeometry args={[0.08, 0.06, 0.06, 32]} />
          <meshStandardMaterial
            color={["#FFFFFF", "#E0E0E0", "#F5F5F5"][i]}
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

export function ToasterOven({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      {/* Body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.4, 0.25, 0.3]} />
        <meshStandardMaterial color="#2C2C2C" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Glass door */}
      <mesh position={[0, 0, 0.16]} castShadow>
        <boxGeometry args={[0.35, 0.2, 0.02]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.3}
        />
      </mesh>
      {/* Handle */}
      <mesh position={[0, -0.1, 0.18]} castShadow>
        <boxGeometry args={[0.25, 0.02, 0.02]} />
        <meshStandardMaterial
          color="#C0C0C0"
          metalness={0.9}
          roughness={0.05}
        />
      </mesh>
    </group>
  );
}

export function CoffeeMaker({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      {/* Base */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <boxGeometry args={[0.2, 0.1, 0.25]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* Water tank */}
      <mesh position={[0, 0.15, -0.05]} castShadow>
        <boxGeometry args={[0.18, 0.15, 0.1]} />
        <meshStandardMaterial
          color="#404040"
          transparent
          opacity={0.5}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
      {/* Carafe */}
      <mesh position={[0, 0.08, 0.08]} castShadow>
        <cylinderGeometry args={[0.06, 0.05, 0.15, 16]} />
        <meshStandardMaterial
          color="#2a2a2a"
          transparent
          opacity={0.6}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

export function Fruit({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Fruit bowl */}
      <mesh position={[0, 0.03, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.12, 0.06, 32]} />
        <meshStandardMaterial color="#8B7355" roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Apples/fruits */}
      <mesh position={[-0.05, 0.08, 0]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#DC143C" roughness={0.3} />
      </mesh>
      <mesh position={[0.05, 0.08, 0]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#FFD700" roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.12, 0]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#FF8C00" roughness={0.3} />
      </mesh>
    </group>
  );
}
