import Phaser from "phaser";

export default class AmongUsScene extends Phaser.Scene {
  constructor() {
    super('among-us-scene')
  }

  preload() {
    // INPUT Gambar Disini
    this.load.image('maps', 'images/Maps.png')
    this.load.image('playerRed', 'images/Red.png')
    this.load.image('playerGreen', 'images/Green.png')
    this.load.image('playerCyan', 'images/Cyan.png')
    this.load.image('playerOrange', 'images/Orange.png')
    this.load.image('playerPink', 'images/Pink.png')
  }

  create() {
    // MENAMPILKAN Gambar Disini
    this.add.image(960, 540, 'maps')
    this.add.image(1000, 400, 'playerRed')
    this.add.image(1750, 520, 'playerGreen').setScale(0.7)
    this.add.image(340, 280, 'playerPink').setScale(0.7)
    this.add.image(340, 800, 'playerOrange').setScale(0.7)
    this.add.image(950, 850, 'playerCyan').setScale(0.3)


  }
}