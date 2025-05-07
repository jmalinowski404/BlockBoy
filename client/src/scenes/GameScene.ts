import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene')
    }

    create() {
        this.game.events.emit('phaser-ready')
    }
}