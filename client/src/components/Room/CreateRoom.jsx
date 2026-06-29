import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateRoom() {
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleCreateRoom = () => {
    // Basic validation
    if (!userName.trim()) {
      alert('Please enter your name')
      return
    }

    setLoading(true)

    // Generate a random room ID for now
    // On Day 3 this will call the backend API instead
    const roomId = Math.random().toString(36).substring(2, 8).toUpperCase()

    // Small delay to simulate loading
    setTimeout(() => {
      navigate(`/board/${roomId}`, {
        state: { userName, isOwner: true }
      })
    }, 500)
  }

  return (
    <div className="flex-1 bg-gray-900 border border-gray-800 rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-xl">
          ✏️
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Create Room</h2>
          <p className="text-gray-500 text-sm">Start a new whiteboard</p>
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

        <button
          onClick={handleCreateRoom}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition duration-200"
        >
          {loading ? 'Creating...' : 'Create Room'}
        </button>
      </div>

    </div>
  )
}

export default CreateRoom