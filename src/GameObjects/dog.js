import Phaser from "phaser";

export default class Dog extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);
  }

  preload() {}

  create() {}

  update(input) {
    // move right
    if (input.right.isDown) {
      this.x += 10;
      
    }
    // move left
    if (input.left.isDown) {
      this.x -= 10;
    }
  }

  //adding player collision
  playerCollideWith(object) {
    this.scene.physics.add.collider(this.image, object);
    return this;
  }

  lose() {}
}
