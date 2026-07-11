import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import roomRoutes from './routes/roomRoutes.js'
import { socketHandler } from './socket/socketHandler.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err))

const app = express()
const httpServer = createServer(app)

const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

app.use(cors({origin:'*'}))
app.use(express.json())
app.use('/api', roomRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'CollabBoard server is running' })
})

socketHandler(io)

const PORT = process.env.PORT || 5000

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})