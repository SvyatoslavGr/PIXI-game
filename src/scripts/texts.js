import { Text } from "pixi.js";

export const startText_1 = new Text("5 Hidden Dogs", {
  fill: "#FFFFFF",
  fontWeight: 'bold',
});

export const startText_2 = new Text("Can you spot them?", {
  fill: "#FFFFFF",
  fontWeight: 'bold',
});

export const successTitle = new Text("Great Job", {
  fill: [0xFFE9A6, 0xFFDE2E],
  fillGradientStops: [0, 0.8],
  fontWeight: 'bold',
  dropShadow: true,
  dropShadowAlpha: 0.9,
  dropShadowBlur: 5,
});

export const successText_1 = new Text("Can you solve", {
  fill: "#FFFFFF",
  fontWeight: 'bold',
});

export const successText_2 = new Text("every mystery?", {
  fill: "#FFFFFF",
  fontWeight: 'bold',
});
