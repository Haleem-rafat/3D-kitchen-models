import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Grid,
} from "@react-three/drei";
import KitchenScene from "./components/KitchenScene";
import ControlPanel from "./components/ControlPanel";
import LoadingScreen from "./components/LoadingScreen";
import { KitchenConfig } from "./types";

function App() {
  const [kitchenConfig, setKitchenConfig] = useState<KitchenConfig>({
    cabinetColor: "#8B4513",
    counterTopColor: "#2C2C2C",
    wallColor: "#E8E8E8",
    floorColor: "#D4A76A",
    showGrid: true,
    lighting: "normal",
  });

  const [activeTab, setActiveTab] = useState<"custom" | "reference">("custom");
  const [isLoading, setIsLoading] = useState(true);
  const [iframeLoading, setIframeLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 3D assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // Reset iframe loading when switching to reference tab
  useEffect(() => {
    if (activeTab === "reference") {
      setIframeLoading(true);
    }
  }, [activeTab]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="w-screen h-screen bg-gray-900 relative">
      {/* Tab Navigation - Responsive */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 flex gap-1 sm:gap-2">
        <button
          onClick={() => setActiveTab("custom")}
          className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all text-xs sm:text-base ${
            activeTab === "custom"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          <span className="hidden sm:inline">🏠 Custom Kitchen</span>
          <span className="sm:hidden">🏠</span>
        </button>
        <button
          onClick={() => setActiveTab("reference")}
          className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all text-xs sm:text-base ${
            activeTab === "reference"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          <span className="hidden sm:inline">📐 Reference Model</span>
          <span className="sm:hidden">📐</span>
        </button>
      </div>

      {/* Control Panel - Only show on custom tab */}
      {activeTab === "custom" && (
        <ControlPanel config={kitchenConfig} setConfig={setKitchenConfig} />
      )}

      {/* Custom 3D Kitchen View */}
      {activeTab === "custom" && (
        <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
          <PerspectiveCamera makeDefault position={[7, 5, 7]} fov={55} />
          <OrbitControls
            enableDamping
            dampingFactor={0.05}
            minDistance={4}
            maxDistance={25}
            maxPolarAngle={Math.PI / 2.1}
            target={[0, 1.5, 0]}
          />

          {/* Lighting */}
          <ambientLight
            intensity={kitchenConfig.lighting === "dim" ? 0.3 : 0.4}
          />

          {/* Main directional light (sun/ceiling light) */}
          <directionalLight
            position={[5, 8, 5]}
            intensity={
              kitchenConfig.lighting === "bright"
                ? 1.8
                : kitchenConfig.lighting === "normal"
                ? 1.2
                : 0.8
            }
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            shadow-bias={-0.0001}
          />

          {/* Fill lights */}
          <pointLight
            position={[-3, 2.5, -1]}
            intensity={0.6}
            color="#FFF4E0"
          />
          <pointLight position={[2, 2.5, 2]} intensity={0.4} color="#FFF8F0" />
          <spotLight
            position={[0, 3.5, 0]}
            angle={0.6}
            penumbra={0.5}
            intensity={kitchenConfig.lighting === "bright" ? 0.8 : 0.4}
            castShadow
          />

          {/* Environment */}
          <Environment preset="apartment" background={false} />

          {/* Grid */}
          {kitchenConfig.showGrid && (
            <Grid
              args={[10, 10]}
              cellSize={0.5}
              cellThickness={0.5}
              cellColor="#6e6e6e"
              sectionSize={1}
              sectionThickness={1}
              sectionColor="#9d9d9d"
              fadeDistance={15}
              fadeStrength={1}
              followCamera={false}
            />
          )}

          {/* Kitchen Scene */}
          <KitchenScene config={kitchenConfig} />
        </Canvas>
      )}

      {/* Sketchfab Reference Model - Responsive */}
      {activeTab === "reference" && (
        <div className="w-full h-full flex flex-col items-center justify-center p-2 sm:p-8">
          <div className="w-full h-full bg-gray-800 rounded-lg shadow-2xl overflow-hidden relative">
            {/* Loading overlay for iframe */}
            {iframeLoading && (
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-white text-lg">
                    Loading Reference Model...
                  </p>
                </div>
              </div>
            )}
            <iframe
              title="Kitchen model room"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              className="w-full h-full"
              src="https://sketchfab.com/models/1207d0f361d74ea28990d344dfcd3f53/embed"
              onLoad={() => setIframeLoading(false)}
            />
          </div>
          <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-400 text-center px-4">
            <a
              href="https://sketchfab.com/3d-models/kitchen-model-room-1207d0f361d74ea28990d344dfcd3f53"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="font-bold text-blue-400 hover:text-blue-300"
            >
              Kitchen model room
            </a>{" "}
            by{" "}
            <a
              href="https://sketchfab.com/D.art"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="font-bold text-blue-400 hover:text-blue-300"
            >
              DailyArt
            </a>{" "}
            on{" "}
            <a
              href="https://sketchfab.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="font-bold text-blue-400 hover:text-blue-300"
            >
              Sketchfab
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
