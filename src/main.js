import Phaser from "phaser";
//import Scenes
import TitleScreen from "./scenes/TitleScreen";
import CustomButton from "./scenes/CustomButton";
import Game from "./scenes/Game";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [TitleScreen, Game],
};

const game = new Phaser.Game(config);

// game.scene.add("titlescreen", TitleScreen);
// game.scene.add("custombutton", CustomButton);

// game.scene.add("game", Game);

// // Render this scene
// game.scene.start("game");
