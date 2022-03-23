import Phaser from "phaser";
import Back from "../assets/img/Back Button.png";

export default class GameOver extends Phaser.Scene {
  video;


  constructor() {
    super("GameOver");
    
  }

  preload() {
    this.load.image("back", `${Back}`);
    this.load.video("end_video", `https://seals-ronjovi.s3.us-west-1.amazonaws.com/game_over.mp4`, false, true); // load start video

  }

  create() {

    this.video = this.add.video(400, 300, "end_video"); // add video
    this.video.setScale(2.9)
    // Prevents video freeze when game is out of focus (i.e. user changes tab on the browser)
    this.video.setPaused(false);
    this.video.setLoop(true)
    this.video.setMute(true);
    this.video.play();





    const title = this.add.text(400, 250, "the dog was distracted by the ball");
    title.setOrigin(0.5, 9);


    const middle = this.add.text(400, 250, "He didn't make it home", {color: '#FF0000'}) ;
    middle.setOrigin(0.5, 0.2);
    

    //   // Click image
    //   button.setInteractive()
    //   .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
    //     this.scene.start("playGame");
    //   });

    const button = this.add.image(400, 400, "back");
    button.setScale(0.4);
    button
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start("startGame");
        window.location.reload();
      });
  }
}
