import { Application, Assets } from 'pixi.js';
import { Scene } from './scripts/Scene.js';
import { textures } from './scripts/assets.js';

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
  App.stage.addChild(scene);
});
