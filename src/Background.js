import { App } from "./index.js";
import { Container, Sprite } from "pixi.js";

export class Background extends Container {
    constructor() {
      super();
      this.sprite = Sprite.from("back_five_dogs");
      this.sprite.anchor.set(0.5);
      this.sprite.position.set(App.screen.width/2, App.screen.height/2);
      this.addChild(this.sprite);
        // window.addEventListener("resize", () => this.resize())
    }
}
