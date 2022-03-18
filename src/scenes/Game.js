import Phaser from "phaser";
// Images
import bg from "../assets/img/lol.png";
import dogImg from "../assets/img/dog.png";
// Classes
import Dog from "../GameObjects/Dog";
import Ball from "../GameObjects/ball";
import Ballimg from "../assets/img/Ball.png";

export default class Game extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  preload() {
    // Load background
    this.load.image("background", `${bg}`);
    // Load Player - image file and Atlas
    this.load.image("player", `${dogImg}`);
    // load ball
    this.load.image("ball", `${Ballimg}`);
  }

  create() {
    // Set Background
    const background = this.add.image(0, 0, "background");
    background.setOrigin(0, 0);
    background.setDisplaySize(800, 600);

    //set ball
    this.badball = new Ball(this, 10, 100, "ball");
    this.physics.add.existing(this.badball);
    this.badball.body.setBounce(1, 1);
    this.badball.body.setCollideWorldBounds(true, 1, 1);
    this.badball.body.setVelocity(100, 100);
    // this.physics.add.collider(this.dog, this.badball, () => {
    //   if (true) {

    //     console.log("Collide ");
    //   }
    // });

    // Add player
    this.dog = new Dog(this, 0, 100, "player");
    this.physics.add.sprite(this.dog);
    this.dog.setPosition(400, 550).setScale(0.3).setBounce(1, 1);

    // // Invisible walls
    // this.boundOne = this.add.rectangle(230, 550, 50, 100, 0xffffff, 1);
    // this.physics.add.existing(this.boundOne);
    // this.boundOne.body.setBounce(1, 1);

    // // set boundary
    // this.physics.add.collider(this.dog, this.boundOne, () => {
    //   if (true) {
    //     this.dog.body.x = 400;
    //     console.log("Collide ");
    //   }
    // });

    //collide
    this.physics.add.collider(this.dog, this.badball, () => {
      if (true) {
        this.scene.start("GameOver");
      }
    });

    // Get Inputs
    this.input = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.dog.update(this.input);
  }
}
