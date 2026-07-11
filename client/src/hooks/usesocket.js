 import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

export const useSocket = (roomId, userName) => {
  const [onlineUsers, setOnlineUsers] = useState([])
  const socketRef = useRef(null)

  useEffect(() => {
    if (!roomId || !userName) return
    if (socketRef.current) return

    const socket = io('http://localhost:3001', {
      transports: ['websocket'],
      reconnection: true
    })

    socketRef.current = socket

    socket.on('connect', () => {
      console.log('Socket connected:', socket.id)
      socket.emit('join-room', { roomId, userName })
    })

    socket.on('room-users', (users) => {
      console.log('Users updated:', users)
      setOnlineUsers(users)
    })

    socket.on('disconnect', () => {
      console.log('Socket disconnected')
    })

  }, [roomId, userName])

  return { onlineUsers, socket: socketRef.current }
}