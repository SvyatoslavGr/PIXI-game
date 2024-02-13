import { Container, Sprite } from "pixi.js";

export class Background extends Container {
  constructor() {
    super();
    this.sprite = Sprite.from("back_five_dogs");
    this.sprite.position.set(window.innerWidth / 2, window.innerHeight / 2);
    this.sprite.anchor.set(0.5);
    this.addChild(this.sprite);
    window.addEventListener("resize", () => this.resize())
    this.resize();
  }

  resize() {
    const bgWidth = 1075;
    const bgHeight = 767;
    if (window.innerWidth / window.innerHeight >= bgWidth / bgHeight) {
      this.sprite.scale.set(window.innerWidth / bgWidth)
      this.sprite.position.set(window.innerWidth / 2, window.innerHeight / 2);
    } else {
      this.sprite.scale.set(window.innerHeight / bgHeight)
      if (window.innerWidth / window.innerHeight < 1.17) {
        this.sprite.position.set(window.innerWidth / 2 - 80, window.innerHeight / 2);
      } else {
        this.sprite.position.set(window.innerWidth / 2, window.innerHeight / 2);
      }
    }


    this.sprite.anchor.set(0.5);
  }
}
