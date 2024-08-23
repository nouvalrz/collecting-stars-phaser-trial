import Phaser from "phaser";

// TEMPAT MENAMBAHKAN GLOBAL VARIABLE
var platforms;
var player;
var cursors;
var stars;
var score = 0;
var scoreText;
export default class CollectingStarsScene extends Phaser.Scene {
    constructor() {
        super('collecting-stars-scene');
    }

    preload() {
        this.load.image('ground', 'images/platform.png');
        this.load.image('sky', 'images/sky.png');
        this.load.image('star', 'images/star.png');
        this.load.image('bomb', 'images/bomb.png');
        this.load.spritesheet('dude', 'images/dude.png', {
            frameWidth: 32, frameHeight: 48
        })
    }

    create() {
        this.add.image(400, 300, 'sky')
        // this.add.image(400, 300, 'star')

        platforms = this.physics.add.staticGroup()
        platforms.create(600, 400, 'ground')
        platforms.create(50, 250, 'ground')
        platforms.create(750, 220, 'ground')
        platforms.create(400, 568, 'ground').setScale(2).refreshBody()

        player = this.physics.add.sprite(100, 450, 'dude')
        player.setCollideWorldBounds(true)
        player.setBounce(0.2)

        // Animasi menghadap kiri
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        })

        // Animasi menghadap depan
        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20,
        })

        // Animasi menghadap kanan
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1,

        })

        this.physics.add.collider(player, platforms)

        cursors = this.input.keyboard.createCursorKeys()

        stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        })

        stars.children.iterate(function (chlid) {
            chlid.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
        })

        this.physics.add.collider(stars, platforms)

        this.physics.add.overlap(player, stars, this.collectStar, null, this)

        scoreText = this.add.text(16, 16, 'score : 0', {
            fontSize: '32px', fill: 'yellow'
        })

    }

    collectStar(player, star) {
        star.disableBody(true, true)
        score += 10
        scoreText.setText('score : ' + score)
    }

    update() {

    }
}