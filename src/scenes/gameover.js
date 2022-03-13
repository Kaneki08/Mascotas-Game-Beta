import Phaser from "phaser";

export default class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  preload() {}

  create() {
    const title = this.add.text(400, 250, "Game Over");
    title.setOrigin(0.5, 9);

    //   // Click image
    //   button.setInteractive()
    //   .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
    //     this.scene.start("playGame");
    //   });
  }
}
