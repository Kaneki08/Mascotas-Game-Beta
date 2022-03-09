import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  create() {
    // Make a ball
    const ball = this.add.circle(420, 250, 10, 0xffffff, 1);
    this.physics.add.existing(ball);
    ball.body.setBounce(1, 1);

    // Add bounce effect
    ball.body.setCollideWorldBounds(true, 1, 1);

    // Add velocity
    ball.body.setVelocity(-200, 0);

    // Add the paddles for pong
    const paddleLeft = this.add.rectangle(30, 250, 20, 100, 0xffffff, 1);
    this.physics.add.existing(paddleLeft, true);

    // Add collide to paddle left
    this.physics.add.collider(paddleLeft, ball);
  }
}
