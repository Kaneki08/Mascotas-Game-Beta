import Phaser from "phaser";
import Back from "../assets/img/Back Button.png";

export default class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  preload() {
    this.load.image("back", `${Back}`);
  }

  create() {
    const title = this.add.text(400, 250, "Game Over");
    title.setOrigin(0.5, 9);

    //   // Click image
    //   button.setInteractive()
    //   .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
    //     this.scene.start("playGame");
    //   });

    const button = this.add.image(400, 400, "back");
    button.setScale(0.4);
      button.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start("startGame");
      });
  }
}
