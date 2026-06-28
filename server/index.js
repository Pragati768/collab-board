import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const httpServer = createServer(app)

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',  // your React app URL
    methods: ['GET', 'POST']
  }
})

app.use(cors())
app.use(express.json())

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'CollabBoard server is running' })
})

// Socket connection
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id)

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id)
  })
})

const PORT = process.env.PORT || 5000

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})