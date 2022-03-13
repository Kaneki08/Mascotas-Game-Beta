import Phaser from "phaser";
import bg from "../../assets/lol.png";
import dogimg from "../../assets/dog.png";
import Dog from "../GameObjects/dog";
import Ballimg from "../../assets/Ball.png";
import Ball from "../GameObjects/ball";

export default class Game extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  preload() {
    // Load background
    this.load.image("background", `${bg}`);
    this.load.image("dog", `${dogimg}`);
    this.load.image("ball", `${Ballimg}`);
  }

  create() {
    // Set Background
    const background = this.add.image(0, 0, "background");
    background.setOrigin(0, 0);
    // background.setDisplaySize(800, 500);

    //add ball
    this.badball = new Ball(this, 10, 100, "ball");
    this.physics.add.existing(this.badball);
    this.badball.body.setBounce(1, 1);
    this.badball.body.setCollideWorldBounds(true, 1, 1);
    this.badball.body.setVelocity(300, 300);
    this.badball.enemyCollideWith(this.player);

    // Add character Moose
    this.player = new Dog(this, 0, 100, "dog");
    this.player.setScale(0.3);
    this.physics.add.existing(this.player);
    this.physics.world.setBounds(
      0,
      0,
      background.displayWidth,
      background.displayHeight
    );
    this.player.body.setCollideWorldBounds(true);
    this.player.playerCollideWith(this.badball);
    // comment
    this.cameras.main
      .setBounds(0, 0, background.displayWidth, background.displayHeight)
      .startFollow(this.player);

    // Get Inputs
    this.input = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.player.update(this.input);
  }
}
