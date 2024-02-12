import { Application, Assets } from 'pixi.js';
import textures from './assets.js'
import { Button } from './Button.js';
import { Background } from './Background.js';
import { config } from './config.js';
import { Dog } from './Dog.js';
import { StartScreen } from './StartScreen.js';

export const App = new Application({
  view: document.getElementById("pixi-canvas"),
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x000000,
  resizeTo: window,
  dogsFound: 0,
});

globalThis.__PIXI_APP__ = App;

Assets.load([...Object.keys(textures)]).then(() => {
  App.stage.addChild(new Background, new Button);
  for (let i = 0; i < 5; i++){
    const dog = new Dog(config.dogsOptions[i])
    App.stage.addChild(dog);
  }
  App.stage.addChild(new StartScreen);
});
