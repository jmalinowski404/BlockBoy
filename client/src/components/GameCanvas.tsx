import React, { useEffect, useRef } from 'react'
import Phaser from 'phaser'
import GameScene from '../scenes/GameScene'

export default function GameCanvas() {
    const gameRef = useRef<Phaser.Game | null>(null)

    useEffect(() => {
        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            parent: 'game-container',
            scene: [GameScene],
            width: 800,
            height: 600
        }

        gameRef.current = new Phaser.Game(config)

        return () => {
            gameRef.current?.destroy(true)
        }
    }, [])

    return <div id="game-container" className="fixed inset-0" />
}