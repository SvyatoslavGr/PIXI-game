import { Container, Sprite } from "pixi.js";
import { App } from "./index.js";
import { createAnimatedCircle } from "./circle.js";

export class Dog extends Container {
  constructor(data) {
      super();
      this.sprite = Sprite.from("doggy");
      this.sprite.scale.set(0.7);
      if (data.rotate) {
         this.sprite.scale.x = -0.7;
      }
      this.sprite.anchor.set(0.5);
      this.sprite.x = 0;
      this.sprite.y = 0;
      this.x = data.x_landscape;
      this.y = data.y_landscape;
      this.animatedSprite = createAnimatedCircle();
      this.addChild(this.sprite, this.animatedSprite);
      this.eventMode = 'dynamic';
      this.on("pointertap", this.showAnimation);
    }

    showAnimation() {
      if (this.animatedSprite.renderable === true) return;
      App.dogsFound += 1;
      // if (App.dogsFound === 5) {
      //     App.stage.scene.fadeIn(2000, true);
      // }
      this.animatedSprite.renderable = true;
      this.animatedSprite.gotoAndPlay(0);
    }
}
