import { useMemo } from "react";
import * as THREE from "three";

export default function Backsplash() {
  // Create subway tile pattern
  const tileTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;

    // Base color - white/cream
    ctx.fillStyle = "#F5F5F0";
    ctx.fillRect(0, 0, 512, 512);

    // Tile pattern
    const tileWidth = 64;
    const tileHeight = 32;
    const groutWidth = 2;

    ctx.strokeStyle = "#D0D0C8";
    ctx.lineWidth = groutWidth;

    // Draw horizontal lines
    for (let y = 0; y < 512; y += tileHeight) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    // Draw vertical lines (offset pattern for subway tiles)
    for (let y = 0; y < 512; y += tileHeight * 2) {
      for (let x = 0; x < 512; x += tileWidth) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + tileHeight);
        ctx.stroke();
      }
    }

    for (let y = tileHeight; y < 512; y += tileHeight * 2) {
      for (let x = tileWidth / 2; x < 512; x += tileWidth) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + tileHeight);
        ctx.stroke();
      }
    }

    // Add slight variation to tiles
    ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      ctx.fillRect(x, y, 8, 8);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 1.5);
    return texture;
  }, []);

  return (
    <group>
      {/* Back wall backsplash */}
      <mesh position={[0, 1.5, -4.94]} receiveShadow>
        <planeGeometry args={[6.5, 1.2]} />
        <meshStandardMaterial
          map={tileTexture}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* Side wall backsplash - Left Wall */}
      <mesh
        position={[-4.94, 1.5, 1]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      >
        <planeGeometry args={[4, 1.2]} />
        <meshStandardMaterial
          map={tileTexture}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}
