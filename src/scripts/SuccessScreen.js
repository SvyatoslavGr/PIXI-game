import { Container, Sprite, Texture } from "pixi.js";
import { successText_1, successText_2, successTitle } from "./texts";

export class SuccessScreen extends Container {
  constructor() {
    super();
    this.createTexts();
    this.createCharacters();
    this.createGradientSprite();
    this.addChild(this.characterLandscape, this.characterPortrait, this.gradientSprite, this.logo, this.title, this.text_1, this.text_2);
    this.renderable = false;
    this.resize();
  }
  
  createTexts() {
    this.title = successTitle;
    this.text_1 = successText_1;
    this.text_2 = successText_2;
    this.logo = Sprite.from("logo");
    
    this.logo.anchor.set(0.5);
    this.title.anchor.set(0.5);
    this.text_1.anchor.set(0.5);
    this.text_2.anchor.set(0.5);
  }
  
  createCharacters() {
    this.characterLandscape = Sprite.from("char");
    this.characterPortrait = Sprite.from("char");
  
    this.characterPortrait.scale.set(-0.5, 0.5);
    this.characterPortrait.anchor.set(0.5);
    this.characterPortrait.position.set(0, -20);
  
    this.characterLandscape.scale.set(0.9);
    this.characterLandscape.anchor.set(0.5, 0.5);
    this.characterLandscape.position.set(-380, 5);
  }

  createGradientTexture() {
    const quality = 256;
    const canvas = document.createElement('canvas');
    canvas.width = quality;
    canvas.height = 1;
    const ctx = canvas.getContext('2d');
    const grd = ctx.createLinearGradient(0, 0, quality, 0);
    grd.addColorStop(0, 'rgba(0, 0, 0, 0.0)');
    grd.addColorStop(1, 'rgba(0, 0, 0, 1)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, quality, 1);
    return Texture.from(canvas);
  }

  createGradientSprite() {
    const gradientSprite = new Sprite(this.createGradientTexture());
    this.gradientSprite = gradientSprite;
    this.gradientSprite.anchor.set(0.5);
    this.gradientSprite.pivot.set(0.5);
    this.gradientSprite.angle = 90;
    this.gradientSprite.width = 400;
    this.gradientSprite.height = window.innerWidth;
    this.gradientSprite.position.set(-this.gradientSprite.height / 2, this.characterPortrait.y + 20 + this.characterPortrait.height / 2 - this.gradientSprite.width / 2);
  }

  positionElementsLandscape() {
    this.characterLandscape.renderable = true;
    this.characterPortrait.renderable = false;
    this.gradientSprite.renderable = false;

    this.logo.scale.set(0.95);
    this.logo.y = -200;
    this.title.y = -40;
    this.text_1.y = 60;
    this.text_2.y = 130;

    this.title.style.fontSize = 88;
    this.text_1.style.fontSize = 50;
    this.text_2.style.fontSize = 50;
  }

  positionElementsPortrait() {
    this.characterLandscape.renderable = false;
    this.characterPortrait.renderable = true;
    this.gradientSprite.renderable = true;

    this.title.style.fontSize = 120;
    this.text_1.style.fontSize = 70;
    this.text_2.style.fontSize = 70;

    this.logo.scale.set(1);
    this.logo.y = -350;
    this.title.y = -10;
    this.text_1.y = 120;
    this.text_2.y = 220;
  }

  resize() {
    this.position.set(innerWidth / 2, window.innerHeight / 2);
    if (innerWidth < window.innerHeight) {
      this.positionElementsPortrait();
    } else {
      this.positionElementsLandscape();
    }
  }
}