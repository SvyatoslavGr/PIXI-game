import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
  backgroundColor: '#000',
  resizeTo: window,
})

document.body.appendChild(app.view);