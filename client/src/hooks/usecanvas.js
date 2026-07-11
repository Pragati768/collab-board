 import { useRef, useEffect, useState, useCallback } from 'react'

export const useCanvas = () => {
  const canvasRef = useRef(null)
  const isDrawing = useRef(false)
  const toolRef = useRef('pencil')
  const colorRef = useRef('#000000')
  const brushSizeRef = useRef(4)

  const [tool, setToolState] = useState('pencil')
  const [color, setColorState] = useState('#000000')
  const [brushSize, setBrushSizeState] = useState(4)

  const setTool = (val) => {
    toolRef.current = val
    setToolState(val)
  }

  const setColor = (val) => {
    colorRef.current = val
    setColorState(val)
  }

  const setBrushSize = (val) => {
    brushSizeRef.current = val
    setBrushSizeState(val)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      const imageData = canvas
        .getContext('2d')
        .getImageData(0, 0, canvas.width, canvas.height)

      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.putImageData(imageData, 0, 0)
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  const getPosition = (e) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }

  const startDrawing = (e) => {
    const pos = getPosition(e)
    isDrawing.current = true

    const ctx = canvasRef.current.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(pos.x, pos.y)
  }

  const draw = (e) => {
    if (!isDrawing.current) return

    const pos = getPosition(e)
    const ctx = canvasRef.current.getContext('2d')

    if (toolRef.current === 'eraser') {
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = brushSizeRef.current * 3
    } else {
      ctx.strokeStyle = colorRef.current
      ctx.lineWidth = brushSizeRef.current
    }

    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()
  }

  const stopDrawing = () => {
    if (!isDrawing.current) return
    isDrawing.current = false
    canvasRef.current.getContext('2d').closePath()
  }

  return {
    canvasRef,
    tool, setTool,
    color, setColor,
    brushSize, setBrushSize,
    startDrawing,
    draw,
    stopDrawing
  }
}