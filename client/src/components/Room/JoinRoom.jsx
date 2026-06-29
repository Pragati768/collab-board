import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function JoinRoom() {
  const [userName, setUserName] = useState('')
  const [roomId, setRoomId] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleJoinRoom = () => {
    if (!userName.trim()) {
      alert('Please enter your name')
      return
    }
    if (!roomId.trim()) {
      alert('Please enter a Room ID')
      return
    }

    setLoading(true)

    setTimeout(() => {
      navigate(`/board/${roomId.toUpperCase()}`, {
        state: { userName, isOwner: false }
      })
    }, 500)
  }

  return (
    <div className="flex-1 bg-gray-900 border border-gray-800 rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-xl">
          🔗
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Join Room</h2>
          <p className="text-gray-500 text-sm">Enter an existing room</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-gray-400 text-sm block mb-1">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        <div>
          <label className="text-gray-400 text-sm block mb-1">Room ID</label>
          <input
            type="text"
            placeholder="Enter Room ID e.g. ABC123"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        <button
          onClick={handleJoinRoom}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition duration-200"
        >
          {loading ? 'Joining...' : 'Join Room'}
        </button>
      </div>

    </div>
  )
}

export default JoinRoom