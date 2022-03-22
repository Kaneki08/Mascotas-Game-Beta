import Phaser from "phaser";
import start from "../assets/img/Play Button.png";
import fullscreen from "../assets/img/whiteFullscreen.png";

export default class TitleScreen extends Phaser.Scene {
  constructor() {
    super("startGame");
  }

  preload() {
    this.load.image("start", `${start}`);
    this.load.image("fullscreen", `${fullscreen}`);
  }

  create() {
    const title = this.add.text(400, 250, "Mascotas");
    title.setOrigin(0.5, 9);

    const button = this.add.image(400, 400, "start");
    button.setScale(0.4);
    // button.height(500);

    const fullScreenBtn = this.add
      .image(800 - 16, 16, "fullscreen", 0)
      .setScale(0.2)
      .setOrigin(1, 0)
      .setInteractive();

    // Click image
    button
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start("playGame");
      });

    // Full screen button
    fullScreenBtn.on(
      Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,
      () => {
        this.scale.startFullscreen();
      },
      this
    );
  }
}
