import Phaser from "phaser";
import start from "../../assets/Play Button.png"


export default class TitleScreen extends Phaser.Scene {


constructor() {
  super("startGame");
}

preload() {
  this.load.image("start", `${start}`);
}

create() {
  const title = this.add.text(400, 250, "Mascotas");
  title.setOrigin(0.5, 9);

  const button = this.add.image(400, 400, "start");
  button.setScale(0.4);
  // button.height(500);


  // Click image
  button.setInteractive()
  .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
    this.scene.start("playGame");
  });
}
}