import Phaser from "phaser";

export default class Dog extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.image = scene.add.existing(this);
  }

  preload() {}

  create() {}

  update(input) {
    // move right
    if (input.right.isDown) {
      this.image.x += 5;
    }
    // move left
    if (input.left.isDown) {
      this.image.x -= 5;
    }
    // move up
    if (input.up.isDown) {
      this.image.y -= 5;
    }
    // move down
    if (input.down.isDown) {
      this.image.y += 5;
    }
  }
}