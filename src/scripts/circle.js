import { AnimatedSprite, Texture } from "pixi.js";

export const createAnimatedCircle = () => {
  const textures = [];
  for (let i = 1; i < 9; i++) {
    const texture = Texture.from(`circle_${i}`);
    textures.push(texture);
  }
  const animatedCircle = new AnimatedSprite(textures);
  animatedCircle.animationSpeed = 0.4;
  animatedCircle.anchor.set(0.5);
  animatedCircle.scale.x = -1;
  animatedCircle.renderable = false;
  animatedCircle.loop = false;
  return animatedCircle;
}
