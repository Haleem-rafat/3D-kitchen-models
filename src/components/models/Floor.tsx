import { useMemo } from "react";
import * as THREE from "three";

interface FloorProps {
  color: string;
}

export default function Floor({ color }: FloorProps) {
  const floorTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;

    // Create enhanced wood plank pattern
    const plankHeight = 64;
    const numPlanks = 8;

    for (let i = 0; i < numPlanks; i++) {
      const y = i * plankHeight;

      // Base plank color with variation
      const variation = Math.random() * 20 - 10;
      const plankColor = adjustColor(color, variation);
      ctx.fillStyle = plankColor;
      ctx.fillRect(0, y, 512, plankHeight);

      // Wood grain
      ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
      ctx.lineWidth = 1;
      for (let j = 0; j < 5; j++) {
        ctx.beginPath();
        ctx.moveTo(0, y + Math.random() * plankHeight);
        const controlY = y + Math.random() * plankHeight;
        ctx.quadraticCurveTo(
          256,
          controlY,
          512,
          y + Math.random() * plankHeight
        );
        ctx.stroke();
      }

      // Plank border
      ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();

      // Knots and imperfections
      if (Math.random() > 0.5) {
        const knotX = Math.random() * 512;
        const knotY = y + Math.random() * plankHeight;
        ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
        ctx.beginPath();
        ctx.ellipse(
          knotX,
          knotY,
          8,
          12,
          Math.random() * Math.PI,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }

    function adjustColor(hexColor: string, amount: number): string {
      const num = parseInt(hexColor.replace("#", ""), 16);
      const r = Math.max(0, Math.min(255, (num >> 16) + amount));
      const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amount));
      const b = Math.max(0, Math.min(255, (num & 0x0000ff) + amount));
      return `rgb(${r}, ${g}, ${b})`;
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(5, 5);
    return texture;
  }, [color]);

  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial
        map={floorTexture}
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
}
