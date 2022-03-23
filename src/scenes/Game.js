import Phaser from "phaser";
// Images
import bg from "../assets/img/road-background.png";
import dogImg from "../assets/img/dog.png";
import policeimg from "../assets/img/police_edited.png";
// Classes
import Dog from "../GameObjects/Dog";
import Ball from "../GameObjects/ball";
import Ballimg from "../assets/img/Ball.png";
import police from "../GameObjects/police";

export default class Game extends Phaser.Scene {
  // set our timer to null
  triggerTimer = null;
  // the users score
  score = 0;
  // this references the score text - use this varaible to update the score text
  scoreText = null;
  // boundary container
  boundary = null;
  // game current level
  level = 1;
  // game width
  width = 800;
  // game height
  height = 600;
  // list of x values for each lane
  lanes = [200, 400, 600];

  constructor() {
    super("playGame");
  }

  preload() {
    // Load background
    this.load.image("background", `${bg}`);
    // Load Player - image file and Atlas
    this.load.image("player", `${dogImg}`);
    // load ball
    this.load.image("ball", `${Ballimg}`);
    // load police
    this.load.image("pol", `${policeimg}`);
  }

  create() {
    // Set Background
    const background = this.add.image(0, 0, "background");
    background.setOrigin(0, 0);
    background.setDisplaySize(800, 600);

    // score text
    this.scoreText = this.add.text(16, 16, `Score: ${this.score}`, {
      fontSize: "15px",
      fill: "#FFBF02",
    });

    //police
    this.badcar = new police(this, -1000, -1000, "pol");
    this.badcar.setScale(0.5);
    this.physics.add.existing(this.badcar);
    this.badcar.body.setBounce(1, 1);
    this.badcar.body.setVelocityY(500);

    //set ball 1 to spawn in lane
    this.badball = new Ball(this, this.lanes[0], -300, "ball");
    this.physics.add.existing(this.badball);
    this.badball.setScale(1.4);
    this.badball.setSize(8, 12, true);
    this.badball.body.setBounce(1, 1);
    this.badball.body.setVelocityY(300); // change back to 300,300

    // create ball number 2
    this.badball2 = new Ball(this, -1000, -1000, "ball");
    this.physics.add.existing(this.badball2);
    this.badball2.body.setBounce(1, 1);

    // create ball number 3
    this.badball3 = new Ball(this, -1000, -1000, "ball");
    this.physics.add.existing(this.badball3);
    this.badball3.body.setBounce(1, 1);

    // this.physics.add.collider(this.dog, this.badball, () => {
    //   if (true) {

    //     console.log("Collide ");
    //   }
    // });

    // Add player
    this.dog = new Dog(this, 0, 100, "player");
    this.physics.add.sprite(this.dog);
    this.dog.setPosition(400, 550).setScale(0.3).setBounce(1, 1);
    // setting a boundary on the dog - the dimensions are specified by the phaser rectable
    this.dog.body.setBoundsRectangle(
      new Phaser.Geom.Rectangle(120, 300, 560, 300),
      
    )
    
    

    // // Invisible walls
    // this.boundOne = this.add.rectangle(230, 550, 50, 100, 0xffffff, 1);
    // this.physics.add.existing(this.boundOne);
    // this.boundOne.body.setBounce(1, 1);

    // // set boundary
    // this.physics.add.collider(this.dog, this.boundOne, () => {
    //   if (true) {
    //     this.dog.body.x = 400;
    //     console.log("Collide ");
    //   }
    // });

    //collide
    this.physics.add.collider(this.dog, this.badball, () => {
      if (true) {
        this.scene.start("GameOver");

        // gameState.score += 10;
        // gameState.scoreText.setText(`Score: ${gameState.score}`);
      }
    });
    this.physics.add.collider(this.dog, this.badball2, () => {
      if (true) {
        this.scene.start("GameOver");

        // gameState.score += 10;
        // gameState.scoreText.setText(`Score: ${gameState.score}`);
      }
    });
    this.physics.add.collider(this.dog, this.badcar, () => {
      if (true) {
        this.scene.start("GameOver");
      }
    });

    // Get Inputs
    this.input = this.input.keyboard.createCursorKeys();

    /**
     * create timer object
     *
     * We want to run the timerEvent function
     * everytime a second has elapsed
     *
     * The timer function willl update the user score
     */
    this.triggerTimer = this.time.addEvent({
      callback: this.timerEvent, // run this function
      callbackScope: this,
      delay: 1000, // 1000 = 1 second
      loop: true,
    });
  }

  update() {
    this.dog.update(this.input);

    // handle ball 1 loop
    if (this.badball.body.y > this.height + this.badball.body.height) {
      this.badball.setPosition(this.lanes[this.getLane()], -300);
    }

    // if level 2, handle ball 2 loop
    if (
      this.level === 2 &&
      this.badball2.body.y > this.height + this.badball2.body.height
    ) {
      this.badball2.setPosition(this.lanes[this.getLane()], -300);
    }
    if (
      this.level === 3 &&
      this.badcar.body.y > this.height + this.badcar.body.height
    ) {
      this.badcar.setPosition(this.lanes[this.getLane()], -300);
      this.badball2.setPosition(this.lanes[this.getLane()], -300);
    }

    // check if score is above 20
    if (this.level === 1 && this.score > 20) {
      // move ball into the game
      this.badball2.setPosition(this.lanes[this.getLane()], -300); // spawn for ball 2
      // add velocity to the ball number 2
      this.badball2.body.setVelocityY(450); // change back to 300,300
      // go to level 2
      this.level = 2;
    }

    if (this.level === 2 && this.score > 50) {
      // move ball into the game
      this.badcar.setPosition(this.lanes[this.getLane()], -400); // spawn for ball 2
      // add velocity to the ball number 2
      this.badcar.body.setVelocityY(550); // change back to 300,300
      
      // go to level 2
      this.level = 3;
    }
    
  }

  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * The value is no lower than min (or the next integer greater than min
   * if min isn't an integer) and no greater than max (or the next integer
   * lower than max if max isn't an integer).
   * Using Math.round() will give you a non-uniform distribution!
   */
  getRandomInt(min, max) {
    min = Math.ceil(min); // 1.5 -> 2
    max = Math.floor(max); // 1.5 -> 1
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /***
   * The timerEvent function runs every second
   * if the game is running, we want to update the users
   * score by 5 points
   */
  timerEvent() {
    // increase score
    this.score = this.score + 5;
    // update the score text
    this.scoreText.setText(`Score: ${this.score}`);
  }

  /**
   * This function generates a number between the min and
   * max (incluive)
   * @param {number} min
   * @param {number} max
   * @returns
   */
  getLane() {
    const min = 1;
    const max = 3;
    const lane = Math.round(Math.random() * (max - min) + min);

    console.log(lane);

    return lane - 1;
  }
}
