import { App } from "./index.js";
import { Container, Sprite } from "pixi.js";
import { successText_1, successText_2, successTitle } from "./texts";

export class SuccessScreen extends Container {
  constructor() {
    super();
    this.title = successTitle;
    this.text_1 = successText_1;
    this.text_2 = successText_2;
    this.logo = Sprite.from("logo");
    this.characterLandscape = Sprite.from("char");
    this.characterPortrait = Sprite.from("char");
    this.logo.anchor.set(0.5);
    this.characterPortrait.scale.set(-0.5, 0.5);
    this.characterPortrait.anchor.set(0.5);
    this.characterPortrait.position.set(0, -20);
    this.characterLandscape.scale.set(0.9);
    this.characterLandscape.anchor.set(0.5, 0.5);
    this.characterLandscape.position.set(-390, 10);
    this.title.anchor.set(0.5);
    this.text_1.anchor.set(0.5);
    this.text_2.anchor.set(0.5);
    this.addChild(this.characterLandscape, this.characterPortrait, this.logo, this.title, this.text_1, this.text_2);
    this.renderable = false;
    this.position.set(App.screen.width / 2, App.screen.height / 2);
  }
}