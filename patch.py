import re

filepath = r"c:\Users\abbha\Antigravity Projects\Math4ML\src\components\MathematicalVisualizations.tsx"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update GridBackground
new_grid = """const GridBackground = () => (
  <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }} viewBox="-200 -200 400 400" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse" x="-10" y="-10">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect x="-400" y="-400" width="800" height="800" fill="url(#grid)" />
    {/* Global X and Y Axes */}
    <line x1="-400" y1="0" x2="400" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <line x1="0" y1="-400" x2="0" y2="400" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
  </svg>
);"""
content = re.sub(r'const GridBackground = \(\) => \(.*?\);\n', new_grid + '\n', content, flags=re.DOTALL)

# 2. Update Flat Axis lines drawn individually (we can make them fully transparent to avoid double drawing)
content = content.replace('stroke="#cbd5e1"', 'stroke="rgba(255,255,255,0.0)"')
# Or just remove them entirely where they appear, but the above hides them while keeping DOM intact.

# 3. Update Colors to Neon Palette
content = content.replace('#3b82f6', '#3399ff') # Blue
content = content.replace('bg-blue-500', 'bg-[#3399ff]')
content = content.replace('border-blue-500', 'border-[#3399ff]')
content = content.replace('text-blue-600', 'text-[#3399ff]')
content = content.replace('text-blue-500', 'text-[#3399ff]')

content = content.replace('#ec4899', '#ff33cc') # Pink
content = content.replace('bg-pink-500', 'bg-[#ff33cc]')
content = content.replace('border-pink-500', 'border-[#ff33cc]')
content = content.replace('text-pink-600', 'text-[#ff33cc]')
content = content.replace('text-pink-300', 'text-[#ff99cc]')

content = content.replace('#10b981', '#33cc33') # Green

content = content.replace('#eab308', '#ff9933') # Amber/Orange

content = content.replace('#8b5cf6', '#cc33ff') # Purple
content = content.replace('#c4b5fd', '#e699ff')
content = content.replace('#a78bfa', '#d966ff')

# 4. Update Fills for shapes (e.g., VectorSpacesVisual background, SetsFunctions)
# Replace flat bg with fully transparent or slightly visible versions
content = content.replace('fill="#111827"', 'fill="#ffffff"') # MaxNorm destinations to white
content = content.replace('color: ["#111827",', 'color: ["#ffffff",')
content = content.replace(', "#111827"]', ', "#ffffff"]')
content = content.replace('rgba(59, 130, 246', 'rgba(51, 153, 255')
content = content.replace('rgba(236, 72, 153', 'rgba(255, 51, 204')

# 5. Fallback styles (FundamentalSubspaces, AffineMappings, default)
# Instead of bg-white, use transparent. Instead of text-gray-800 use text-gray-100
content = content.replace('bg-white', 'bg-transparent')
content = content.replace('bg-white/80', 'bg-black/50')
content = content.replace('text-gray-800', 'text-gray-100')
content = content.replace('text-gray-900', 'text-gray-100')
content = content.replace('text-gray-500', 'text-gray-300')
content = content.replace('text-gray-300', 'text-gray-100')
content = content.replace('border-gray-100', 'border-gray-700')
content = content.replace('border-gray-200', 'border-gray-700')
content = content.replace('border-gray-300', 'border-gray-700')

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("File patched successfully!")
