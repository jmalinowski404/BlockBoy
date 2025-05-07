import { Server } from 'socket.io'

export function setupGameSockets(io: Server) {
    io.on('connection', (socket) => {
        console.log(`Player connected: ${socket.id}`)

        socket.on('start_mission', (missionType: string) => {
            const duration = Math.floor(Math.random() * 5000) + 2000
            setTimeout(() => {
                socket.emit('mission_complete', {
                    reward: 100,
                    newStats: { streetCred: 10 }
                })
            }, duration)
        })
    })
}