// Stores room data in memory
// Key = roomId, Value = array of users
const rooms = {}

export const socketHandler = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id)

    // User joins a room
    socket.on('join-room', ({ roomId, userName }) => {
      // Add user to the room
      socket.join(roomId)

      // Store user in rooms object
      if (!rooms[roomId]) {
        rooms[roomId] = []
      }

      rooms[roomId].push({
        socketId: socket.id,
        userName
      })

      console.log(`${userName} joined room ${roomId}`)

      // Send updated users list to everyone in the room
      io.to(roomId).emit('room-users', rooms[roomId])
    })

    // User disconnects
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id)

      // Find which room this user was in and remove them
      for (const roomId in rooms) {
        const before = rooms[roomId].length

        rooms[roomId] = rooms[roomId].filter(
          (user) => user.socketId !== socket.id
        )

        // If user was removed from this room
        if (rooms[roomId].length < before) {
          // Send updated list to remaining users
          io.to(roomId).emit('room-users', rooms[roomId])

          // Clean up empty rooms
          if (rooms[roomId].length === 0) {
            delete rooms[roomId]
          }
        }
      }
    })
  })
}