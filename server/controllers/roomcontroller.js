import { nanoid } from 'nanoid'
import Room from '../models/Room.js'

export const createRoom = async (req, res) => {
  try {
    const { ownerName } = req.body

    if (!ownerName || ownerName.trim() === '') {
      return res.status(400).json({ message: 'Name is required' })
    }

    const roomId = nanoid(8).toUpperCase()

    const room = await Room.create({
      roomId,
      ownerName: ownerName.trim()
    })

    res.status(201).json({
      success: true,
      roomId: room.roomId,
      ownerName: room.ownerName
    })

  } catch (error) {
    console.error('Create room error:', error.message)
    res.status(500).json({ message: 'Server error' })
  }
}

export const joinRoom = async (req, res) => {
  try {
    const { roomId, userName } = req.body

    if (!roomId || !userName) {
      return res.status(400).json({ message: 'Room ID and name are required' })
    }

    const room = await Room.findOne({ roomId: roomId.toUpperCase() })

    if (!room) {
      return res.status(404).json({ message: 'Room not found. Check the Room ID.' })
    }

    res.status(200).json({
      success: true,
      roomId: room.roomId,
      userName: userName.trim()
    })

  } catch (error) {
    console.error('Join room error:', error.message)
    res.status(500).json({ message: 'Server error' })
  }
}