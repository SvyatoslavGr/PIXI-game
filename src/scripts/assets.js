import { Assets } from "pixi.js";

const assets = [];
const textures = {};

let req = require['context']('../assets/', true, /\.(png|jpg)$/);
req.keys().forEach(key => {
  assets.push({
    key
  });
});

for (const asset of assets) {
  let key = asset.key.slice(2, asset.key.lastIndexOf('.'));
  let path = asset.key.slice(1);
  textures[key] = path;
};

Object.entries(textures).forEach(([key, value]) => {
  Assets.add({ src: value, alias: key });
});

export { textures }