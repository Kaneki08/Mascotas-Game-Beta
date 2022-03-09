import Phaser from "phaser";

export default class TitleScreen extends Phaser.Scene {
  create() {
    const text = this.add.text(400, 250, "Mascotas");
    text.setOrigin(0.5, 0.5);
  }
}
