 import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function JoinRoom() {
  const [userName, setUserName] = useState('')
  const [roomId, setRoomId] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleJoinRoom = async () => {
    if (!userName.trim()) {
      alert('Please enter your name')
      return
    }
    if (!roomId.trim()) {
      alert('Please enter a Room ID')
      return
    }
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3001/api/join-room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId, userName })
      })
      const data = await response.json()
      if (data.success) {
        navigate(`/board/${data.roomId}`, {
          state: { userName, isOwner: false }
        })
      } else {
        alert(data.message)
      }
    } catch (error) {
      alert('Server error. Make sure backend is running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex-1 bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-purple-700 transition duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-lg">
          🔗
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Join Room</h2>
          <p className="text-gray-500 text-xs">Enter an existing room</p>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-gray-400 text-xs block mb-1">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500 transition"
          />
        </div>

        <div>
          <label className="text-gray-400 text-xs block mb-1">Room ID</label>
          <input
            type="text"
            placeholder="e.g. AB12CD34"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleJoinRoom()}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500 transition font-mono tracking-wider"
          />
        </div>

        <button
          onClick={handleJoinRoom}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-500 disabled:bg-purple-900 disabled:cursor-not-allowed text-white text-sm font-semibold py-2.5 rounded-xl transition duration-200"
        >
          {loading ? 'Joining...' : 'Join Room →'}
        </button>
      </div>
    </div>
  )
}

export default JoinRoom