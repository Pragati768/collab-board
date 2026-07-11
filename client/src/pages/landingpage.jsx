 import CreateRoom from '../components/Room/CreateRoom'
import JoinRoom from '../components/Room/JoinRoom'

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm">
            ✏️
          </div>
          <span className="font-bold text-lg">
            Collab<span className="text-blue-500">Board</span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
          No sign up required
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 text-blue-400 text-xs px-3 py-1 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
          Real-time collaboration
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Draw together,
          <br />
          <span className="text-blue-500">think together</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg mb-12">
          A shared whiteboard for teams, students, and developers.
          Create a room and start collaborating instantly.
        </p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
          <CreateRoom />
          <JoinRoom />
        </div>
      </div>

      {/* Features Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-10 border-t border-gray-800 mt-auto">
        <div className="flex items-center gap-3 text-gray-400">
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
            ⚡
          </div>
          <span className="text-sm">Real-time sync</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
            🎨
          </div>
          <span className="text-sm">Drawing tools</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
            👥
          </div>
          <span className="text-sm">Live cursors</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
            📥
          </div>
          <span className="text-sm">Export as PNG</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
            🔗
          </div>
          <span className="text-sm">Shareable link</span>
        </div>
      </div>

    </div>
  )
}

export default LandingPage