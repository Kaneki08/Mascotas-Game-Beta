import Phaser from "phaser";

export default class CustomButton extends Phaser.Scene {
  constructor() {
    super("custom-button");
  }

  preload() {

    
  }
  create() {
    this.add
      .image(400, 300, "../../assets/blue_botton01.png")
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        console.log("pressed");
      });
  }
}
