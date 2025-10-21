import { ModelProps } from "../types";
import Floor from "./models/Floor";
import Walls from "./models/Walls";
import Cabinet from "./models/Cabinet";
import CounterTop from "./models/CounterTop";
import Sink from "./models/Sink";
import Stove from "./models/Stove";
import Refrigerator from "./models/Refrigerator";
import Microwave from "./models/Microwave";
import {
  Kettle,
  CuttingBoard,
  KnifeBlock,
  Bowls,
  ToasterOven,
  CoffeeMaker,
  Fruit,
} from "./models/KitchenAccessories";

export default function KitchenScene({ config }: ModelProps) {
  return (
    <group>
      {/* Floor */}
      <Floor color={config.floorColor} />

      {/* Walls */}
      <Walls color={config.wallColor} />

      {/* Base Cabinets - Back Wall */}
      <Cabinet position={[-2.5, 0, -4.4]} color={config.cabinetColor} />
      <Cabinet position={[-1, 0, -4.4]} color={config.cabinetColor} />
      <Cabinet position={[0.5, 0, -4.4]} color={config.cabinetColor} />
      <Cabinet position={[2, 0, -4.4]} color={config.cabinetColor} />

      {/* Counter Top - Back Wall */}
      <CounterTop position={[0, 0.85, -4.35]} color={config.counterTopColor} />

      {/* Counter Top - Left Wall (manual mesh to avoid white block) */}
      <mesh position={[-4.35, 0.85, 1.25]} castShadow receiveShadow>
        <boxGeometry args={[0.6, 0.1, 3.8]} />
        <meshStandardMaterial
          color={config.counterTopColor}
          roughness={0.15}
          metalness={0.3}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* Sink */}
      <Sink position={[-1, 0.9, -4.35]} />

      {/* Stove */}
      <Stove position={[2, 0.9, -4.35]} />

      {/* Wall Cabinets - Back Wall */}
      <Cabinet
        position={[-2.5, 2, -4.45]}
        color={config.cabinetColor}
        scale={[1, 0.6, 0.5]}
      />
      <Cabinet
        position={[-1, 2, -4.45]}
        color={config.cabinetColor}
        scale={[1, 0.6, 0.5]}
      />
      <Cabinet
        position={[0.5, 2, -4.45]}
        color={config.cabinetColor}
        scale={[1, 0.6, 0.5]}
      />

      {/* Microwave above counter (right side) */}
      <Microwave position={[2, 2.1, -4.25]} />

      {/* Refrigerator - Left wall, near corner */}
      <Refrigerator position={[-4.4, 0, -3.5]} />

      {/* Side Base Cabinets - Left Wall */}
      <Cabinet
        position={[-4.4, 0, -1]}
        color={config.cabinetColor}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Cabinet
        position={[-4.4, 0, 0.5]}
        color={config.cabinetColor}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Cabinet
        position={[-4.4, 0, 2]}
        color={config.cabinetColor}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Cabinet
        position={[-4.4, 0, 3.5]}
        color={config.cabinetColor}
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* Side Wall Cabinets - Left Wall */}
      <Cabinet
        position={[-4.45, 2, 0.5]}
        color={config.cabinetColor}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 0.6, 0.5]}
      />
      <Cabinet
        position={[-4.45, 2, 2]}
        color={config.cabinetColor}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 0.6, 0.5]}
      />
      <Cabinet
        position={[-4.45, 2, 3.5]}
        color={config.cabinetColor}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 0.6, 0.5]}
      />

      {/* Kitchen Accessories - Back Counter Items */}
      <Kettle position={[-2.5, 0.95, -4.2]} />
      <CuttingBoard position={[-0.3, 0.95, -4.2]} />
      <KnifeBlock position={[-1.8, 0.95, -4.2]} />
      <ToasterOven position={[0.5, 0.95, -4.2]} />
      <CoffeeMaker position={[3, 0.95, -4.2]} />

      {/* Side counter items - Left Wall */}
      <Bowls position={[-4.3, 0.95, 2]} />
      <Fruit position={[-4.3, 0.95, 3.5]} />
    </group>
  );
}
