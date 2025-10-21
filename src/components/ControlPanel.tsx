import { useState } from "react";
import { KitchenConfig } from "../types";

interface ControlPanelProps {
  config: KitchenConfig;
  setConfig: React.Dispatch<React.SetStateAction<KitchenConfig>>;
}

export default function ControlPanel({ config, setConfig }: ControlPanelProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl w-72 sm:w-80 max-h-[calc(100vh-1rem)] sm:max-h-[calc(100vh-2rem)] flex flex-col overflow-hidden">
      {/* Header - Fixed */}
      <div className="flex items-center justify-between p-3 sm:p-6 pb-2 sm:pb-4 border-b border-gray-200 flex-shrink-0">
        <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
          <span className="hidden sm:inline">🏠 3D Kitchen Editor</span>
          <span className="sm:hidden">🏠 Kitchen</span>
        </h1>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-500 hover:text-gray-700 transition-colors p-1"
          title={isCollapsed ? "Expand" : "Collapse"}
        >
          <svg
            className={`w-5 h-5 transition-transform ${
              isCollapsed ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Content - Scrollable */}
      {!isCollapsed && (
        <div className="overflow-y-auto overflow-x-hidden p-3 sm:p-6 pt-2 sm:pt-4 flex-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <div className="space-y-4">
            {/* Cabinet Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cabinet Color
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={config.cabinetColor}
                  onChange={(e) =>
                    setConfig({ ...config, cabinetColor: e.target.value })
                  }
                  className="w-12 h-10 rounded cursor-pointer border-2 border-gray-300"
                />
                <input
                  type="text"
                  value={config.cabinetColor}
                  onChange={(e) =>
                    setConfig({ ...config, cabinetColor: e.target.value })
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Counter Top Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Counter Top Color
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={config.counterTopColor}
                  onChange={(e) =>
                    setConfig({ ...config, counterTopColor: e.target.value })
                  }
                  className="w-12 h-10 rounded cursor-pointer border-2 border-gray-300"
                />
                <input
                  type="text"
                  value={config.counterTopColor}
                  onChange={(e) =>
                    setConfig({ ...config, counterTopColor: e.target.value })
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Wall Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Wall Color
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={config.wallColor}
                  onChange={(e) =>
                    setConfig({ ...config, wallColor: e.target.value })
                  }
                  className="w-12 h-10 rounded cursor-pointer border-2 border-gray-300"
                />
                <input
                  type="text"
                  value={config.wallColor}
                  onChange={(e) =>
                    setConfig({ ...config, wallColor: e.target.value })
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Floor Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Floor Color
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={config.floorColor}
                  onChange={(e) =>
                    setConfig({ ...config, floorColor: e.target.value })
                  }
                  className="w-12 h-10 rounded cursor-pointer border-2 border-gray-300"
                />
                <input
                  type="text"
                  value={config.floorColor}
                  onChange={(e) =>
                    setConfig({ ...config, floorColor: e.target.value })
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Lighting */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lighting
              </label>
              <select
                value={config.lighting}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    lighting: e.target.value as "dim" | "normal" | "bright",
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="dim">Dim</option>
                <option value="normal">Normal</option>
                <option value="bright">Bright</option>
              </select>
            </div>

            {/* Show Grid */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="showGrid"
                checked={config.showGrid}
                onChange={(e) =>
                  setConfig({ ...config, showGrid: e.target.checked })
                }
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="showGrid"
                className="ml-2 text-sm font-medium text-gray-700"
              >
                Show Grid
              </label>
            </div>

            {/* Preset Buttons */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Quick Presets
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() =>
                    setConfig({
                      ...config,
                      cabinetColor: "#8B4513",
                      counterTopColor: "#2C2C2C",
                      wallColor: "#E8E8E8",
                      floorColor: "#D4A76A",
                    })
                  }
                  className="px-3 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-sm font-medium"
                >
                  Classic Wood
                </button>
                <button
                  onClick={() =>
                    setConfig({
                      ...config,
                      cabinetColor: "#FFFFFF",
                      counterTopColor: "#1A1A1A",
                      wallColor: "#F5F5F5",
                      floorColor: "#8B7355",
                    })
                  }
                  className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  Modern White
                </button>
                <button
                  onClick={() =>
                    setConfig({
                      ...config,
                      cabinetColor: "#2C3E50",
                      counterTopColor: "#34495E",
                      wallColor: "#ECF0F1",
                      floorColor: "#95A5A6",
                    })
                  }
                  className="px-3 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 transition-colors text-sm font-medium"
                >
                  Industrial
                </button>
                <button
                  onClick={() =>
                    setConfig({
                      ...config,
                      cabinetColor: "#4A7C59",
                      counterTopColor: "#F5F5DC",
                      wallColor: "#FAFAFA",
                      floorColor: "#C19A6B",
                    })
                  }
                  className="px-3 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors text-sm font-medium"
                >
                  Natural
                </button>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-600">
                💡 <strong>Tip:</strong> Use mouse to orbit, scroll to zoom, and
                click on cabinets to interact!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
