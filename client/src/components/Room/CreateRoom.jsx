 import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateRoom() {
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleCreateRoom = async () => {
    if (!userName.trim()) {
      alert('Please enter your name')
      return
    }
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3001/api/create-room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ownerName: userName })
      })
      const data = await response.json()
      if (data.success) {
        navigate(`/board/${data.roomId}`, {
          state: { userName, isOwner: true }
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
    <div className="flex-1 bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-blue-700 transition duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-lg">
          ✏️
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Create Room</h2>
          <p className="text-gray-500 text-xs">Start a new whiteboard</p>
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
            onKeyDown={(e) => e.key === 'Enter' && handleCreateRoom()}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        <button
          onClick={handleCreateRoom}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 disabled:cursor-not-allowed text-white text-sm font-semibold py-2.5 rounded-xl transition duration-200"
        >
          {loading ? 'Creating...' : 'Create Room →'}
        </button>
      </div>
    </div>
  )
}

export default CreateRoom