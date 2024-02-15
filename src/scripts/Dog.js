import { Container, Sprite } from "pixi.js";
import { App } from "../index.js";
import { createAnimatedCircle } from "./circle.js";

export class Dog extends Container {
  constructor(props) {
    super();
    this.props = props;
    this.sprite = Sprite.from("doggy");
    this.sprite.anchor.set(0.5);
    this.animatedSprite = createAnimatedCircle();
    this.sprite.addChild(this.animatedSprite);
    this.addChild(this.sprite);
    this.eventMode = 'none';
    this.on("pointertap", this.showAnimation);
    this.resize();
  }

  showAnimation() {
    if (this.animatedSprite.renderable === true) return;
    App.dogsFound += 1;
    if (App.dogsFound === 5) {
      App.stage.children[0].fadeIn(2000, true);
    }
    this.animatedSprite.renderable = true;
    this.animatedSprite.gotoAndPlay(0);
  }

  resize() {
    if (window.innerWidth > window.innerHeight) {
      this.x = this.props.x_landscape;
      this.y = this.props.y_landscape;
      this.sprite.scale.y = this.props.scale;
      this.sprite.scale.x = this.props.rotate ? this.props.scale * -1 : this.props.scale;
    } else {
      this.x = this.props.x_portrait
      this.y = this.props.y_portrait
      this.sprite.scale.y = this.props.scale_portrait;
      this.sprite.scale.x = this.props.rotate_portrait ? this.props.scale_portrait * -1 : this.props.scale_portrait;
    }
  }
}
