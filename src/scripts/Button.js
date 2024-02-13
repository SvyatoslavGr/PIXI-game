import { Container, Text, Sprite } from "pixi.js";
import gsap from "gsap";

export class Button extends Container {
  constructor() {
    super();
    this.bg = Sprite.from('btn');
    this.text = new Text("Play Now", {
      fill: 0xFFFDD0,
      fontSize: 50,
      fontWeight: 'bold',
    });

    this.bg.anchor.set(0.5);
    this.text.anchor.set(0.5);
    this.addChild(this.bg, this.text);
    this.eventMode = 'dynamic';
    this.on("pointertap", () => this.click());
    this.resize();
  }

  click() {
    window.location.href = "https://www.g5.com/";
  }

  showAnimation() {
    const tween = gsap.timeline({ repeat: -1, yoyo: true });
    tween.fromTo(
      this.scale,
      1,
      { x: this.scale.x, y: this.scale.y },
      { x: this.scale.x * 1.1, y: this.scale.y * 1.1 },
    )
  }

  resize() {
    this.y = window.innerHeight - 100;
    this.x = window.innerWidth / 2;
    if (window.innerHeight < window.innerHeight) {
      this.scale.set(1.2);
    } else {
      this.scale.set(1);
    }
  }
}