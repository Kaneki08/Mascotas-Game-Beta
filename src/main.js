import Phaser from "phaser";
//import Scenes
import TitleScreen from "./scenes/TitleScreen";
import GameOver from "./scenes/gameover";
import Game from "./scenes/Game";



const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true, // debug only id dev
    },
  },
  scene: [TitleScreen, Game, GameOver],
};

const game = new Phaser.Game(config);

// game.scene.add("titlescreen", TitleScreen);
// game.scene.add("custombutton", CustomButton);

// game.scene.add("game", Game);

// // Render this scene
// game.scene.start("game");
