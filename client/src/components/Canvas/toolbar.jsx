function Toolbar({ tool, setTool, color, setColor, brushSize, setBrushSize }) {
  const tools = [
    { name: 'pencil', label: '✏️' },
    { name: 'eraser', label: '⬜' },
  ]

  const sizes = [2, 4, 8, 16]

  return (
    <div className="flex items-center gap-3 bg-gray-800 border-b border-gray-700 px-4 py-2">

      {/* Tool Buttons */}
      <div className="flex gap-2">
        {tools.map((t) => (
          <button
            key={t.name}
            onClick={() => setTool(t.name)}
            className={`w-9 h-9 rounded-lg text-lg flex items-center justify-center transition
              ${tool === t.name
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-gray-600" />

      {/* Color Picker */}
      <div className="flex items-center gap-2">
        <label className="text-gray-400 text-sm">Color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent"
        />
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-gray-600" />

      {/* Brush Size */}
      <div className="flex items-center gap-2">
        <label className="text-gray-400 text-sm">Size</label>
        <div className="flex gap-1">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setBrushSize(size)}
              className={`rounded-full flex items-center justify-center transition
                ${brushSize === size
                  ? 'bg-blue-600'
                  : 'bg-gray-600 hover:bg-gray-500'
                }`}
              style={{
                width: `${size + 12}px`,
                height: `${size + 12}px`
              }}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Toolbar