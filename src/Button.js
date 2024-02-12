import { Container, Text, Sprite } from "pixi.js";
import gsap from "gsap";
import { App } from "./index.js";

export class Button extends Container {
  constructor() {
    super();
    this.bg = Sprite.from('btn');
    this.text = new Text("Play Now", {
      fill: 0xFFFFCC,
      fontSize: 50,
      fontWeight: 'bold',
      strokeThickness: 2
    });
    this.bg.anchor.set(0.5);
    this.text.anchor.set(0.5);
    this.position.set(App.screen.width/2, 600);
    this.textContainer = new Container();
    this.addChild(this.bg, this.text, this.textContainer);
    this.eventMode = 'dynamic';
    this.on("pointertap", () => this.click());
  }

  click() {
    window.location.href = "https://www.g5.com/";
  }

  animate() {
    const tween = gsap.timeline({ repeat: -1, yoyo: true });
    tween.fromTo(this.textContainer.scale,
      1,
      { x: this.textContainer.scale.x, y: this.textContainer.scale.y },
      { x: this.textContainer.scale.x * 1.1, y: this.textContainer.scale.y * 1.1 },
    )
  }
}