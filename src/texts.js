import { Text } from "pixi.js";

export const startText_1 = new Text("5 Hidden Dogs", {
  fill: "#FFFFFF",
  fontSize: 80,
  fontWeight: 'bold',
});

export const startText_2 = new Text("Can you spot them?", {
  fill: "#FFFFFF",
  fontSize: 80,
  fontWeight: 'bold',
});

export const successTitle = new Text("Great Job", {
  fill: [0xEEE8AA, 0xFFA500],
  fillGradientStops: [0, 0.8],
  fontSize: 90,
  fontWeight: 'bold',
  stroke: "#1a1a1a",
  strokeThickness: 2
});

export const successText_1 = new Text("Can you solve", {
  fill: "#FFFFFF",
  fontSize: 55,
  fontWeight: 'bold',
  stroke: "#000000",
  strokeThickness: 2
});

export const successText_2 = new Text("every mystery?", {
  fill: "#FFFFFF",
  fontSize: 55,
  fontWeight: 'bold',
  stroke: "#000000",
  strokeThickness: 2
});
