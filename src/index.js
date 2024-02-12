import { Application, Assets } from 'pixi.js';
import textures from './assets.js'
import { Button } from './Button.js';
import { Background } from './Background.js';
import { config } from './config.js';
import { Dog } from './Dog.js';
import { StartScreen } from './StartScreen.js';
import { SuccessScreen } from './SuccessScreen.js';
import { Scene } from './Scene.js';

export const App = new Application({
  view: document.getElementById("pixi-canvas"),
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x000000,
  resizeTo: window,
});

globalThis.__PIXI_APP__ = App;

Assets.load([...Object.keys(textures)]).then(() => {
  const scene = new Scene();
  App.dogsFound = 0;
  App.scene = scene;
  App.stage.addChild(scene);
});
