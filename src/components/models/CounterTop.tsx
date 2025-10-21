import { useMemo } from "react";
import * as THREE from "three";

interface CounterTopProps {
  position: [number, number, number];
  color: string;
}

export default function CounterTop({ position, color }: CounterTopProps) {
  // Create marble/granite texture
  const counterTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;

    // Base color
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 512, 512);

    // Add marble veins
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
    ctx.lineWidth = 1;

    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * 512, Math.random() * 512);
      ctx.bezierCurveTo(
        Math.random() * 512,
        Math.random() * 512,
        Math.random() * 512,
        Math.random() * 512,
        Math.random() * 512,
        Math.random() * 512
      );
      ctx.stroke();
    }

    // Add darker veins
    ctx.strokeStyle = "rgba(0, 0, 0, 0.15)";
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * 512, Math.random() * 512);
      ctx.bezierCurveTo(
        Math.random() * 512,
        Math.random() * 512,
        Math.random() * 512,
        Math.random() * 512,
        Math.random() * 512,
        Math.random() * 512
      );
      ctx.stroke();
    }

    // Add specks
    ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
    for (let i = 0; i < 100; i++) {
      ctx.fillRect(Math.random() * 512, Math.random() * 512, 2, 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    return texture;
  }, [color]);

  return (
    <group position={position}>
      {/* Main Counter Surface */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[6.5, 0.1, 0.6]} />
        <meshStandardMaterial
          map={counterTexture}
          color={color}
          roughness={0.15}
          metalness={0.3}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* Counter Edge (bullnose) */}
      <mesh position={[0, -0.05, 0.31]} castShadow>
        <boxGeometry args={[6.5, 0.05, 0.03]} />
        <meshStandardMaterial color={color} roughness={0.15} metalness={0.3} />
      </mesh>
    </group>
  );
}
