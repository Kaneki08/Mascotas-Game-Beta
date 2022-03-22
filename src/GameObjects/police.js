import Phaser from "phaser";

export default class Police extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.image = scene.add.existing(this);
    //adding
  }

  preload() {}

  create() {}

  update() {}

  CollideWith(object) {
    this.scene.physics.add.collider(this.image, object);
    return this; 
  }

  lose(object){
      if(this.enemyCollideWith(object)){
          this.scene.start("GameOver");
      }
  }
}