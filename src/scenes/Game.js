import Phaser from "phaser";
// Images
import bg from "../assets/img/lol.png";
import dogImg from "../assets/img/dog.png";
// Classes
import Dog from "../GameObjects/Dog";
import Ball from "../GameObjects/ball";
import Ballimg from "../assets/img/Ball.png";

export default class Game extends Phaser.Scene {
  // set our timer to null
  triggerTimer = null;
  // the users score
  score = 0;
  // this references the score text - use this varaible to update the score text
  scoreText = null;
  // boundary container
  boundary = null;

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

    // score text
    this.scoreText = this.add.text(16, 16, `Score: ${this.score}`, {
      fontSize: "15px",
      fill: "#FFBF02",
    });

    //set ball
    this.badball = new Ball(this, 10, 100, "ball");
    this.physics.add.existing(this.badball);
    this.badball.body.setBounce(1, 1);
    this.badball.body.setCollideWorldBounds(true, 1, 1);
    this.badball.body.setVelocity(0, 0); // change back to 300,300

    // this.physics.add.collider(this.dog, this.badball, () => {
    //   if (true) {

    //     console.log("Collide ");
    //   }
    // });

    // Add player
    this.dog = new Dog(this, 0, 100, "player");
    this.physics.add.sprite(this.dog);
    this.dog.setPosition(400, 550).setScale(0.3).setBounce(1, 1);
    // setting a boundary on the dog - the dimensions are specified by the phaser rectable
    this.dog.body.setBoundsRectangle(new Phaser.Geom.Rectangle(200, 150, 400, 300));

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

        // gameState.score += 10;
        // gameState.scoreText.setText(`Score: ${gameState.score}`);
      }
    });

    // Get Inputs
    this.input = this.input.keyboard.createCursorKeys();

    /**
     * create timer object
     * 
     * We want to run the timerEvent function
     * everytime a second has elapsed
     * 
     * The timer function willl update the user score
     */
    this.triggerTimer = this.time.addEvent({
      callback: this.timerEvent, // run this function
      callbackScope: this,
      delay: 1000, // 1000 = 1 second
      loop: true,
    });


    this.add.graphics()
    .lineStyle(5, 0x00ffff, 0.5)
    .strokeRectShape(this.dog.body.customBoundsRectangle);
  }

  update() {
    this.dog.update(this.input);
  }

  /***
   * The timerEvent function runs every second
   * if the game is running, we want to update the users
   * score by 5 points
   */
  timerEvent() {
    // increase score
    this.score = this.score + 5;
    // update the score text
    this.scoreText.setText(`Score: ${this.score}`);
  }
}
