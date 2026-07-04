import CreateRoom from '../components/Room/CreateRoom'
import JoinRoom from '../components/Room/JoinRoom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Collab<span className="text-blue-500">Board</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-md">
          A shared canvas for your team. Draw, explain, and brainstorm together in real time.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
        <CreateRoom />
        <JoinRoom />
      </div>

      {/* Footer */}
      <p className="text-gray-600 text-sm mt-12">
        No sign up required. Create a room and share the link.
      </p>

    </div>
  )
}

export default LandingPage