import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing 3D Kitchen...");

  const loadingSteps = [
    { progress: 20, text: "Loading 3D Engine..." },
    { progress: 40, text: "Preparing Kitchen Models..." },
    { progress: 60, text: "Setting up Lighting..." },
    { progress: 80, text: "Loading Textures..." },
    { progress: 100, text: "Ready to Cook! 🍳" },
  ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        setProgress(step.progress);
        setLoadingText(step.text);
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex items-center justify-center z-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-green-500/20 to-blue-500/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
            <span className="text-4xl">🏠</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          3D Kitchen
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Interactive Kitchen Designer
        </p>

        {/* Progress Bar */}
        <div className="w-80 max-w-full mx-auto mb-6">
          <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">{progress}%</p>
        </div>

        {/* Loading Text */}
        <p className="text-lg text-gray-300 animate-pulse">{loadingText}</p>

        {/* Spinning Loader */}
        <div className="mt-8">
          <div className="w-8 h-8 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 text-6xl opacity-20 animate-float">
        🍳
      </div>
      <div className="absolute top-40 right-20 text-5xl opacity-20 animate-float-delayed">
        🥄
      </div>
      <div className="absolute bottom-40 left-32 text-4xl opacity-20 animate-float-slow">
        🍽️
      </div>
      <div className="absolute bottom-20 right-32 text-5xl opacity-20 animate-float">
        🧽
      </div>
    </div>
  );
}
