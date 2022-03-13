import Phaser from "phaser";

export default class Ball extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture) {
      super(scene, x, y, texture);
      this.image = scene.add.existing(this);
    }
  


preload() { }

  create() {
    this.image.body.velocity.setTo(200, 200);

    //  This makes the game world bounce-able
    this.image.ball.body.collideWorldBounds = true;
  }

update() {
    
    
  }
}
