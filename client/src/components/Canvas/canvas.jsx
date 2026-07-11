import { useEffect, useRef } from 'react'

function Canvas({ canvasRef, onMouseDown, onMouseMove, onMouseUp }) {
  return (
    <canvas
      ref={canvasRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      className="cursor-crosshair"
      style={{
        background: 'white',
        display: 'block',
        width: '100%',
        height: '100%'
      }}
    />
  )
}

export default Canvas
