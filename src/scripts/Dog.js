import { Container, Sprite } from "pixi.js";
import { App } from "../index.js";
import { createAnimatedCircle } from "./circle.js";

export class Dog extends Container {
  constructor(props) {
    super();
    this.props = props;
    this.sprite = Sprite.from("doggy");
    this.sprite.x = 0;
    this.sprite.y = 0;
    this.sprite.anchor.set(0.5);
    this.sprite.scale.set(0.7);
    if (props.rotate) {
      this.sprite.scale.x = -0.7;
    }
    this.animatedSprite = createAnimatedCircle();
    this.addChild(this.sprite, this.animatedSprite);
    this.eventMode = 'none';
    this.on("pointertap", this.showAnimation);
    this.resize();
  }

  showAnimation() {
    if (this.animatedSprite.renderable === true) return;
    App.dogsFound += 1;
    if (App.dogsFound === 5) {
      App.scene.fadeIn(2000, true);
    }
    this.animatedSprite.renderable = true;
    this.animatedSprite.gotoAndPlay(0);
  }

  resize() {
    const width = window.innerWidth
    const height = window.innerHeight
    const bgWidth = 1075;
    const bgHeight = 767;

    if (width > height) {
      this.x = width * this.props.x_landscape / bgWidth;
      this.y = height * this.props.y_landscape / bgHeight;

      if (width / height > bgWidth / bgHeight) {
        this.scale.set(width / bgWidth);
      } else {
        this.scale.set(height / bgHeight);
      }
    } else {
      this.x = width * this.props.x_portrait / bgHeight;
      this.y = height * this.props.y_portrait / bgWidth;

      if (width / height > bgWidth / bgHeight) {
        this.scale.set(width / bgWidth);
      } else {
        this.scale.set(height / bgHeight);
      }
    }
  }
}
