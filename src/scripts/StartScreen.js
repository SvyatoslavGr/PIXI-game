import { Container, Sprite } from "pixi.js";
import gsap from "gsap";
import { startText_1, startText_2 } from "./texts";

export class StartScreen extends Container {
  constructor() {
    super();
    this.text_1 = startText_1;
    this.text_2 = startText_2;
    this.image = Sprite.from("doggy");
    this.image.anchor.set(0.5, 0.5);
    this.text_1.addChild(this.image);
    this.addChild(this.text_1, this.text_2);
    this.resize();
  }

  positionElements() {
    this.image.scale.x = -1;
    this.image.x = this.text_1.width / 2 + 70;

    this.text_1.pivot.x = this.image.width / 2;
    this.text_1.x = 0;
    this.text_1.anchor.set(0.5, 0.5);

    this.text_2.anchor.set(0.5, 0.5);
    this.text_2.position.set(0, 120);

    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2 - 100;
  }

  showAnimation() {
    const tween = gsap.timeline();
    tween.fromTo(
      this.scale,
      7,
      { x: this.scale.x, y: this.scale.y },
      { x: this.scale.x * 1.1, y: this.scale.y * 1.1, repeat: 0 }
    );
  }

  resize() {
    if (window.innerWidth < window.innerHeight) {
      this.text_1.style.fontSize = 74;
      this.text_2.style.fontSize = 74;
      this.scale.set(window.innerWidth / 1075)
    } else {
      this.text_1.style.fontSize = 80;
      this.text_2.style.fontSize = 80;
      this.scale.set(1);
    }
    this.positionElements();
  }
}