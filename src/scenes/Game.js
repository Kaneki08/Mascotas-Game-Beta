import Phaser from "phaser";
import bg from "../../assets/Houses.jpeg";
import dog from "../../assets/dog.png";

export default class Game extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  preload() {
    // Load background
    this.load.image("background", `${bg}`);
    // load character
    this.load.image("dog", `${dog}`);
  }

  create() {
    // Set Background
    const background = this.add.image(0, 0, "background");
    background.setOrigin(0, 0);
    background.setDisplaySize(800, 500);

    // Add an image
    const dog = this.add.image(100, 100, "dog");
    dog.setScale(0.2);
    dog.setOrigin(0.5,-4);

    // Set Bounce effect to moose
    this.physics.add.existing(dog);
    dog.body.setBounce(1, 1);
    dog.body.setCollideWorldBounds(true, 1, 1);
    dog.body.setVelocity(10, 0);

    /* 
      Code for the ball starts down here!
    */
    // Make a ball
    // const ball = this.add.circle(420, 250, 10, 0xffffff, 1);
    // this.physics.add.existing(ball);
    // ball.body.setBounce(1, 1);
    // Add bounce effect
    // ball.body.setCollideWorldBounds(true, 1, 1);
    // Add velocity
    // ball.body.setVelocity(200, 60);
    // Add the paddles for pong
    // const paddleLeft = this.add.rectangle(30, 250, 20, 100, 0xffffff, 1);
    // this.physics.add.existing(paddleLeft, true);
    // Add collide to paddle left
    // this.physics.add.collider(paddleLeft, ball);
    // this.leftKey = Game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    // this.rightKey = Game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  }

  update() {
    
    
    const cursors = this.input.keyboard.createCursorKeys();

    if(cursors.right.isDown){
      dog.body.setVelocityX(10)
    }

    // if (this.rightKey.isDown) {
    //   dog.velocity.x += 5;
    // }
    // if (cursors.left.isDown) {
    //   dog.x -= 5;
    // }
    // if (cursors.up.isDown) {
    //   dog.y -= 5;
    // }
    // if (cursors.down.isDown) {
    //   dog.y -= 5;
    // }
  }
}
