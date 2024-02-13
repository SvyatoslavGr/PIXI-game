import { Background } from "./Background";
import { Container, Graphics, Ticker } from "pixi.js";
import { Dog } from "./Dog.js";
import { Button } from "./Button";
import { SuccessScreen } from "./SuccessScreen.js";
import { StartScreen } from "./StartScreen.js";
import { config } from "./config.js";

export class Scene extends Container {
  constructor() {
    super();
    this.create();
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  create() {
    this.createBackground();
    this.createDogs();
    this.createOverlay();
    this.createStartScreen();
    this.createSuccessScreen();
    this.createButton();
  }

  createBackground() {
    this.background = new Background();
    this.addChild(this.background);
    this.resize();
  }

  createDogs() {
    this.dogs = [];
    for (let i = 0; i < 5; i++) {
      const dog = new Dog(config.dogsOptions[i])
      this.dogs.push(dog);
      this.addChild(dog);
    }
    this.resize()
  }

  createOverlay() {
    this.overlay = new Graphics();
    this.overlay.alpha = 0;
    this.overlay.beginFill(0x000000);
    this.overlay.drawRect(0, 0, window.innerWidth, window.innerHeight);
    this.overlay.endFill();
    this.addChild(this.overlay);
    this.resize();
  }

  createStartScreen() {
    this.startScreen = new StartScreen();
    this.fadeIn(2000, false);
    this.startScreen.showAnimation();
    this.addChild(this.startScreen);
    this.resize();
  }

  createSuccessScreen() {
    this.successScreen = new SuccessScreen();
    this.addChild(this.successScreen);
    this.resize();
  }

  createButton() {
    this.button = new Button();
    this.addChild(this.button);
    this.resize();
  }

  fadeIn(duration, successScreen) {
    this.overlay.renderable = true;
    this.overlay.alpha = 0;
    if (!successScreen) {
      this.startScreen.renderable = true;
      this.startScreen.alpha = 0;
    } else {
      this.successScreen.renderable = true;
      this.successScreen.alpha = 0;
      this.button.showAnimation();
    }
    const ticker = Ticker.shared;
    const onTick = (delta) => {
      this.overlay.alpha += delta / Ticker.targetFPMS / duration;
      if (!successScreen) {
        this.startScreen.alpha += delta / Ticker.targetFPMS / duration;
      } else {
        this.successScreen.alpha += delta / Ticker.targetFPMS / duration;
      }
      if (this.overlay.alpha > 0.9) {
        ticker.remove(onTick);
        if (!successScreen) {
          setTimeout(() => this.fadeOut(2000), 3000);
        }
      }
    };
    ticker.add(onTick);
  }

  fadeOut(duration) {
    this.overlay.alpha = 0.9;
    this.startScreen.alpha = 0.9;
    const ticker = Ticker.shared;
    const onTick = (delta) => {
      this.overlay.alpha -= delta / Ticker.targetFPMS / duration;
      this.startScreen.alpha -= delta / Ticker.targetFPMS / duration;
      if (this.overlay.alpha < 0) {
        ticker.remove(onTick);
        this.dogs.map((el) => el.eventMode = 'dynamic');
        this.overlay.renderable = false;
        this.startScreen.renderable = false;
        this.resize();
      }
    };
    ticker.add(onTick);
  }

  resize() {
    if (this.overlay) {
      this.overlay.width = window.innerWidth;
      this.overlay.height = window.innerHeight;
    }
    this.button?.resize();
    this.startScreen?.resize();
    this.successScreen?.resize();
    this.dogs?.map((el) => el.resize());
  }
}