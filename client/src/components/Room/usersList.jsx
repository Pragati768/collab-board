function UsersList({ users }) {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-red-500',
    'bg-purple-500',
    'bg-pink-500'
  ]

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 w-48">
      <h3 className="text-gray-400 text-sm font-semibold mb-3">
        Online — {users.length}
      </h3>

      <div className="space-y-2">
        {users.map((user, index) => (
          <div key={user.socketId} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${colors[index % colors.length]}`} />
            <span className="text-white text-sm truncate">{user.userName}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersList