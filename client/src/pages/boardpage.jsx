 import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useSocket } from '../hooks/useSocket'
import { useCanvas } from '../hooks/useCanvas'
import Canvas from '../components/Canvas/Canvas'
import Toolbar from '../components/Canvas/Toolbar'
import UsersList from '../components/Room/UsersList'

function BoardPage() {
  const { roomId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const userName = location.state?.userName || 'Guest'
  const isOwner = location.state?.isOwner || false

  const { onlineUsers } = useSocket(roomId, userName)

  const {
    canvasRef,
    tool, setTool,
    color, setColor,
    brushSize, setBrushSize,
    startDrawing,
    draw,
    stopDrawing
  } = useCanvas()

  return (
    <div className="h-screen bg-gray-900 flex flex-col overflow-hidden">

      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <span className="text-white font-semibold">CollabBoard</span>
          <span className="text-gray-500 text-sm">Room: {roomId}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm">Hi, {userName}</span>
          <button
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-white text-sm transition"
          >
            Leave
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <Toolbar
        tool={tool}
        setTool={setTool}
        color={color}
        setColor={setColor}
        brushSize={brushSize}
        setBrushSize={setBrushSize}
      />

      {/* Main Area */}
      <div className="flex flex-1 overflow-hidden">

        {/* Canvas */}
        <div className="flex-1 overflow-hidden">
          <Canvas
            canvasRef={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
          />
        </div>

        {/* Users Panel */}
        <div className="p-3 bg-gray-800 border-l border-gray-700">
          <UsersList users={onlineUsers} />
        </div>

      </div>

    </div>
  )
}

export default BoardPage