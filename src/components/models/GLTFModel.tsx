import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

interface GLTFModelProps {
  modelPath: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

/**
 * Example component demonstrating useGLTF hook usage
 *
 * Usage:
 * 1. Place your .gltf or .glb file in the /public folder
 * 2. Import this component: <GLTFModel modelPath="/models/kitchen-item.glb" />
 *
 * You can find free kitchen 3D models at:
 * - Sketchfab: https://sketchfab.com/
 * - Poly Pizza: https://poly.pizza/
 * - Quaternius: https://quaternius.com/
 */
export default function GLTFModel({
  modelPath,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
}: GLTFModelProps) {
  // Load the GLTF model
  const gltf = useGLTF(modelPath) as GLTF;

  return (
    <primitive
      object={gltf.scene}
      position={position}
      rotation={rotation}
      scale={scale}
      castShadow
      receiveShadow
    />
  );
}

// Preload the model for better performance
// Uncomment and add your model path here:
// useGLTF.preload('/models/your-model.glb');
