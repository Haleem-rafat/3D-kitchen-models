# ⚡ Quick Start Guide

## 🚀 Your App is Running!

The development server should now be running at: **http://localhost:3000**

If the browser didn't open automatically, click the link above or copy-paste it into your browser.

---

## 📋 What You Can Do Right Now

### 1. Change Colors
- **Cabinet Color** - Try `#FF5733` for orange cabinets
- **Counter Color** - Try `#000000` for black granite
- **Wall Color** - Try `#87CEEB` for sky blue walls
- **Floor Color** - Try `#CD853F` for Peru wood

### 2. Try Presets
Click any preset button:
- 🪵 **Classic Wood** - Traditional kitchen
- ⚪ **Modern White** - Contemporary design
- 🏭 **Industrial** - Urban loft style
- 🌿 **Natural** - Eco-friendly look

### 3. Control the Camera
- **Left Click + Drag** - Rotate around the kitchen
- **Right Click + Drag** - Pan the view
- **Scroll Wheel** - Zoom in/out

### 4. Adjust Lighting
Use the dropdown to switch between:
- **Dim** - Cozy evening lighting
- **Normal** - Balanced daytime
- **Bright** - Maximum visibility

### 5. Toggle Grid
Uncheck "Show Grid" to hide the floor grid for a cleaner view.

---

## 🎯 Next: Add Your Own 3D Models

### Step 1: Get a Free Model
Visit [Poly Pizza](https://poly.pizza/) and download a kitchen model (GLB format)

### Step 2: Add to Project
```bash
# Create models folder
mkdir -p public/models

# Copy your downloaded model
cp ~/Downloads/your-model.glb public/models/
```

### Step 3: Use in Code
Open `src/components/KitchenScene.tsx` and add:

```tsx
import GLTFModel from './models/GLTFModel';

// Inside the <group> component, add:
<GLTFModel 
  modelPath="/models/your-model.glb" 
  position={[0, 0, 0]}
  scale={1}
/>
```

---

## 🛠️ Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new dependencies
npm install package-name

# Check for errors
npm run build
```

---

## 📱 Current Project Status

✅ All files created successfully
✅ Dependencies installed
✅ TypeScript configured
✅ Tailwind CSS setup
✅ Development server running
✅ Ready to edit and customize!

---

## 🐛 If Something Goes Wrong

### Server Won't Start?
```bash
# Kill any process on port 3000
lsof -ti:3000 | xargs kill -9

# Try again
npm run dev
```

### TypeScript Errors in Editor?
1. Press `Ctrl+Shift+P` in Cursor
2. Type "TypeScript: Restart TS Server"
3. Press Enter

### Build Errors?
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📚 Files to Explore

1. **`src/App.tsx`** - Main application setup
2. **`src/components/KitchenScene.tsx`** - 3D scene layout
3. **`src/components/ControlPanel.tsx`** - UI controls
4. **`src/components/models/`** - Individual 3D components
5. **`README.md`** - Complete documentation

---

## 💡 Pro Tips

1. **Keep the grid on** while positioning objects - it helps with alignment
2. **Use console logs** - Click cabinets to see their positions logged
3. **Experiment freely** - Nothing you do in the UI will break the code
4. **Save your colors** - Write down hex codes you like
5. **Test on different screens** - The UI is responsive!

---

## 🎨 Sample Color Combinations

### Scandinavian Minimalist
- Cabinet: `#FFFFFF`
- Counter: `#E0E0E0`
- Wall: `#F5F5F5`
- Floor: `#D4C5B9`

### Rustic Farmhouse
- Cabinet: `#F5F5DC`
- Counter: `#8B7355`
- Wall: `#FAFAFA`
- Floor: `#C19A6B`

### Bold Modern
- Cabinet: `#000000`
- Counter: `#FFFFFF`
- Wall: `#F0F0F0`
- Floor: `#808080`

### Coastal Beach
- Cabinet: `#FFFFFF`
- Counter: `#87CEEB`
- Wall: `#F0F8FF`
- Floor: `#D2B48C`

---

**Enjoy building your 3D kitchen! 🎉**

For detailed documentation, see `README.md`

