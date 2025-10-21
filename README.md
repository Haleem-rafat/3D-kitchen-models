# 🏠 3D Kitchen Model Editor

A modern, interactive 3D kitchen visualization and editing tool built with React, TypeScript, Three.js, and Tailwind CSS.

![Made with React](https://img.shields.io/badge/React-18.2-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178c6?style=flat-square&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-0.158-black?style=flat-square&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=flat-square&logo=tailwind-css)

---

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [How to Use](#-how-to-use)
- [Adding GLTF Models](#-adding-gltf-models)
- [Customization Guide](#-customization-guide)
- [Component Details](#-component-details)
- [Troubleshooting](#-troubleshooting)
- [Performance Optimization](#-performance-optimization)
- [Resources](#-resources)

---

## ✨ Features

### Core Features
- 🎨 **Real-time Color Customization** - Change cabinet, countertop, wall, and floor colors instantly
- 🔦 **Adjustable Lighting** - Switch between dim, normal, and bright lighting modes
- 🎯 **Interactive 3D Controls** - Orbit, zoom, and pan with intuitive mouse controls
- 🏠 **Pre-built Kitchen Components** - Cabinets, countertops, sink, stove, and more
- 📦 **GLTF Model Support** - Load external 3D models using the `useGLTF` hook
- ⚡ **Fast Performance** - Optimized rendering with React Three Fiber

### UI Features
- 🎨 **Quick Presets** - Four pre-configured themes:
  - Classic Wood
  - Modern White
  - Industrial
  - Natural
- 🖱️ **Hover Effects** - Visual feedback when hovering over interactive elements
- 📱 **Responsive Controls** - Clean, modern UI built with Tailwind CSS
- 🔲 **Toggle Grid** - Show/hide floor grid for better spatial reference

---

## 🚀 Quick Start

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd /home/haleem_axis/personal/3D-kitchen-models
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The app will automatically open at `http://localhost:3000`
   - If it doesn't, manually navigate to the URL shown in the terminal

### Building for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
3D-kitchen-models/
├── public/                     # Static assets
│   └── models/                # Place your .gltf/.glb files here
│
├── src/
│   ├── components/
│   │   ├── models/            # 3D model components
│   │   │   ├── Cabinet.tsx    # Interactive cabinet with hover effects
│   │   │   ├── CounterTop.tsx # Kitchen countertop surface
│   │   │   ├── Floor.tsx      # Textured floor with wood grain
│   │   │   ├── GLTFModel.tsx  # Example GLTF loader component
│   │   │   ├── Sink.tsx       # Kitchen sink with faucet
│   │   │   ├── Stove.tsx      # 4-burner stove with controls
│   │   │   └── Walls.tsx      # Back and side walls
│   │   │
│   │   ├── ControlPanel.tsx   # UI control panel (Tailwind CSS)
│   │   └── KitchenScene.tsx   # Main 3D scene composition
│   │
│   ├── types.ts               # TypeScript type definitions
│   ├── App.tsx                # Root application component
│   ├── main.tsx               # Application entry point
│   ├── index.css              # Global styles + Tailwind imports
│   └── vite-env.d.ts          # Vite environment types
│
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── tsconfig.node.json         # TypeScript config for Node
├── vite.config.ts             # Vite build configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

---

## 🎮 How to Use

### Mouse Controls

| Action | Control |
|--------|---------|
| **Rotate Camera** | Left mouse button + drag |
| **Pan Camera** | Right mouse button + drag |
| **Zoom In/Out** | Mouse wheel scroll |
| **Interact with Objects** | Click on cabinets (logs to console) |

### Color Customization

1. **Using Color Picker:**
   - Click the colored square next to any option
   - Choose your desired color

2. **Using Hex Input:**
   - Type a hex color code directly (e.g., `#FF5733`)
   - The preview updates in real-time

3. **Using Presets:**
   - Click any preset button for instant theme change
   - Presets update cabinet, countertop, wall, and floor colors

### Lighting Control

Choose from three lighting modes:
- **Dim** - Softer, ambient lighting
- **Normal** - Balanced illumination (default)
- **Bright** - Enhanced lighting for better visibility

### Grid Toggle

Toggle the floor grid on/off for better spatial reference during editing.

---

## 📦 Adding GLTF Models

### Why Use GLTF Models?

GLTF (GL Transmission Format) is the standard for 3D models on the web. It allows you to:
- Load high-quality, professionally designed 3D assets
- Use animations and complex materials
- Add realistic kitchen appliances, furniture, and decorations

### Method 1: Using the GLTFModel Component

**Step 1:** Download a GLTF model (`.gltf` or `.glb` file)

**Step 2:** Create a `models` folder in `public/`:
```bash
mkdir -p public/models
```

**Step 3:** Place your model in `public/models/`

**Step 4:** Import and use in `KitchenScene.tsx`:

```tsx
import GLTFModel from './models/GLTFModel';

// Inside KitchenScene component:
<GLTFModel 
  modelPath="/models/refrigerator.glb" 
  position={[3, 0, -1.5]}
  scale={0.5}
/>
```

### Method 2: Direct useGLTF Hook

For more control, use the hook directly:

```tsx
import { useGLTF } from '@react-three/drei';

function Refrigerator() {
  const { scene } = useGLTF('/models/fridge.glb');
  
  return (
    <primitive 
      object={scene} 
      position={[3, 0, -1.5]}
      scale={0.5}
      castShadow
      receiveShadow
    />
  );
}

// Preload for better performance
useGLTF.preload('/models/fridge.glb');
```

### Where to Find Free 3D Kitchen Models

| Website | URL | Notes |
|---------|-----|-------|
| **Sketchfab** | [sketchfab.com](https://sketchfab.com/3d-models?features=downloadable&sort_by=-likeCount&q=kitchen) | Largest collection, check license |
| **Poly Pizza** | [poly.pizza](https://poly.pizza/) | Free, CC0 licensed models |
| **Quaternius** | [quaternius.com](https://quaternius.com/) | High-quality, free models |
| **Free3D** | [free3d.com](https://free3d.com/) | Various free models |
| **CGTrader** | [cgtrader.com](https://www.cgtrader.com/free-3d-models) | Free section available |
| **TurboSquid** | [turbosquid.com](https://www.turbosquid.com/Search/3D-Models/free/kitchen) | Free models section |

### Model Optimization Tips

1. **Size:** Keep models under 5MB when possible
2. **Format:** Prefer `.glb` (binary) over `.gltf` for smaller size
3. **Textures:** Optimize textures to 1024x1024 or smaller
4. **Polygons:** Use low-poly models for better performance
5. **Draco Compression:** Use compressed models when available

---

## 🎨 Customization Guide

### Adding a New Kitchen Component

**Step 1:** Create a new component file

```tsx
// src/components/models/Refrigerator.tsx
interface RefrigeratorProps {
  position: [number, number, number];
  color?: string;
}

export default function Refrigerator({ position, color = '#FFFFFF' }: RefrigeratorProps) {
  return (
    <group position={position}>
      {/* Main Body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 2, 0.8]} />
        <meshStandardMaterial color={color} metalness={0.4} roughness={0.6} />
      </mesh>
      
      {/* Door Handle */}
      <mesh position={[0.51, 0.5, 0]} castShadow>
        <boxGeometry args={[0.02, 0.3, 0.05]} />
        <meshStandardMaterial color="#C0C0C0" metalness={0.9} />
      </mesh>
    </group>
  );
}
```

**Step 2:** Add to `KitchenScene.tsx`

```tsx
import Refrigerator from './models/Refrigerator';

// Inside the component:
<Refrigerator position={[3, 1, -1.5]} color="#F0F0F0" />
```

### Creating Custom Presets

Edit `src/components/ControlPanel.tsx`:

```tsx
<button
  onClick={() => setConfig({
    ...config,
    cabinetColor: '#YOUR_COLOR',
    counterTopColor: '#YOUR_COLOR',
    wallColor: '#YOUR_COLOR',
    floorColor: '#YOUR_COLOR'
  })}
  className="px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm font-medium"
>
  My Custom Theme
</button>
```

### Modifying Scene Layout

In `src/components/KitchenScene.tsx`, adjust positions:

```tsx
{/* Example: Add more cabinets */}
<Cabinet position={[4, 0, -1.9]} color={config.cabinetColor} />
<Cabinet position={[-4, 0, -1.9]} color={config.cabinetColor} />

{/* Example: Change counter position */}
<CounterTop position={[0, 0.85, -1.85]} color={config.counterTopColor} />
```

---

## 🧩 Component Details

### App.tsx
- **Purpose:** Root component, manages global state
- **State:** Kitchen configuration (colors, lighting, grid)
- **Renders:** Canvas with 3D scene + Control Panel

### KitchenScene.tsx
- **Purpose:** Composes all 3D models into a complete kitchen
- **Components:** Floor, Walls, Cabinets, CounterTop, Sink, Stove
- **Layout:** Configurable positions and rotations

### ControlPanel.tsx
- **Purpose:** User interface for editing the kitchen
- **Features:** Color pickers, lighting control, presets, grid toggle
- **Styling:** Tailwind CSS with glassmorphism effect

### 3D Model Components

| Component | Description | Props |
|-----------|-------------|-------|
| **Cabinet** | Interactive cabinet with door and handle | position, color, rotation, scale |
| **CounterTop** | Kitchen countertop surface | position, color |
| **Floor** | Textured floor with wood grain | color |
| **Walls** | Back and left walls | color |
| **Sink** | Sink basin with faucet | position |
| **Stove** | 4-burner stovetop | position |
| **GLTFModel** | Load external 3D models | modelPath, position, rotation, scale |

---

## 🐛 Troubleshooting

### TypeScript Errors: "Cannot find module"

**Solution 1:** Restart TypeScript Server
- In Cursor: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

**Solution 2:** Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

**Solution 3:** Clear cache
```bash
rm -rf node_modules/.vite
npm run dev
```

### GLTF Models Not Loading

**Check:**
1. ✅ Model is in `public/models/` folder
2. ✅ Path starts with `/models/` (not `./models/`)
3. ✅ File extension is `.gltf` or `.glb`
4. ✅ Check browser console for errors

**Example:**
```tsx
// ❌ Wrong
<GLTFModel modelPath="./models/item.glb" />

// ✅ Correct
<GLTFModel modelPath="/models/item.glb" />
```

### Performance Issues / Low FPS

**Solutions:**
1. **Reduce shadow quality** in `App.tsx`:
   ```tsx
   shadow-mapSize={[1024, 1024]}  // Instead of [2048, 2048]
   ```

2. **Disable shadows on some objects:**
   ```tsx
   <mesh castShadow={false} receiveShadow={false}>
   ```

3. **Optimize models:**
   - Use low-poly versions
   - Compress textures
   - Enable Draco compression

4. **Limit lighting:**
   - Reduce number of lights
   - Lower light intensity

### Colors Not Updating

**Check:**
1. Props are passed correctly to child components
2. Color format is valid hex (e.g., `#FF5733`)
3. State is updating (check React DevTools)

### Black Screen / Nothing Renders

**Check:**
1. All dependencies installed: `npm install`
2. Camera position is correct
3. Lighting is enabled
4. No console errors

---

## ⚡ Performance Optimization

### Preload Models

```tsx
// At the bottom of your component file
useGLTF.preload('/models/model1.glb');
useGLTF.preload('/models/model2.glb');
```

### Use LOD (Level of Detail)

```tsx
import { Detailed } from '@react-three/drei';

<Detailed distances={[0, 10, 20]}>
  <mesh>/* High detail */</mesh>
  <mesh>/* Medium detail */</mesh>
  <mesh>/* Low detail */</mesh>
</Detailed>
```

### Optimize Textures

- Max size: 1024x1024 (2048x2048 for large surfaces)
- Format: Use compressed formats (KTX2, Basis)
- Mipmaps: Enable for better performance

### Use Instancing for Repeated Objects

```tsx
import { Instances, Instance } from '@react-three/drei';

<Instances>
  <boxGeometry />
  <meshStandardMaterial />
  <Instance position={[0, 0, 0]} />
  <Instance position={[2, 0, 0]} />
  <Instance position={[4, 0, 0]} />
</Instances>
```

---

## 📚 Resources

### Official Documentation
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Drei (React Three Helpers)](https://github.com/pmndrs/drei)
- [Three.js](https://threejs.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Learning Resources
- [Three.js Journey](https://threejs-journey.com/) - Comprehensive Three.js course
- [Discover Three.js](https://discoverthreejs.com/) - Free online book
- [React Three Fiber Examples](https://docs.pmnd.rs/react-three-fiber/getting-started/examples)

### Community
- [Poimandres Discord](https://discord.gg/poimandres) - R3F community
- [Three.js Discord](https://discord.gg/threejs)
- [Stack Overflow - Three.js](https://stackoverflow.com/questions/tagged/three.js)

### Tools
- [GLTF Viewer](https://gltf-viewer.donmccurdy.com/) - Preview GLTF models
- [glTF Transform](https://gltf-transform.donmccurdy.com/) - Optimize GLTF files
- [Three.js Editor](https://threejs.org/editor/) - Visual scene editor

---

## 🎯 Next Steps

### Suggested Enhancements

1. **Add More Appliances:**
   - Refrigerator
   - Dishwasher
   - Microwave
   - Range hood

2. **Implement Drag & Drop:**
   - Use `@use-gesture/react` for draggable objects
   - Allow repositioning of cabinets and appliances

3. **Save/Load Configurations:**
   - Export to JSON
   - Import saved designs
   - localStorage persistence

4. **Multiple Views:**
   - Top-down view
   - Side view
   - Front view
   - Camera presets

5. **Advanced Materials:**
   - Wood grain textures
   - Marble countertops
   - Metallic finishes

6. **Export Options:**
   - Screenshot capture
   - GLTF export
   - 3D print-ready models

---

## 📝 License

MIT License - Feel free to use this project for learning or commercial purposes.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

---

## 💡 Tips & Tricks

1. **Use the Grid:** Enable it for better spatial awareness when positioning objects
2. **Experiment with Presets:** Use them as starting points for your custom designs
3. **Check the Console:** Click on cabinets to see position data in the console
4. **Performance Mode:** Disable shadows and reduce lighting for smoother performance
5. **Mobile Responsive:** The UI adapts to different screen sizes

---

## 🎓 Learn by Doing

### Exercise 1: Add a Window
Create a `Window.tsx` component with a frame and glass pane.

### Exercise 2: Create a Kitchen Island
Position cabinets in the center with a countertop on top.

### Exercise 3: Add Backsplash
Create a decorative backsplash between counter and wall cabinets.

### Exercise 4: Implement Night Mode
Add a "night mode" lighting preset with darker, warmer tones.

### Exercise 5: Load a Real Model
Download a free GLTF model and integrate it into your kitchen.

---

**Happy Coding! 🚀**

Built with ❤️ using React, Three.js, and Tailwind CSS
