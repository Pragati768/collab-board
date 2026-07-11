 import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useSocket } from '../hooks/useSocket'
import UsersList from '../components/Room/UsersList'

function BoardPage() {
  const { roomId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const userName = location.state?.userName || 'Guest'
  const isOwner = location.state?.isOwner || false

  // Connect to socket and join room
  const { onlineUsers } = useSocket(roomId, userName)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">

      {/* Main Board Area */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-1">Room: {roomId}</h2>
          <p className="text-gray-400 mb-1">Welcome, {userName}</p>
          <p className="text-gray-600 text-sm">
            {isOwner ? 'You created this room' : 'You joined this room'}
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-center">
          <p className="text-gray-400 text-sm">Canvas loads here on Day 5</p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="text-gray-500 hover:text-gray-300 text-sm transition"
        >
          ← Back to Home
        </button>
      </div>

      {/* Users Panel on Right Side */}
      <div className="p-4">
        <UsersList users={onlineUsers} />
      </div>

    </div>
  )
}

export default BoardPage