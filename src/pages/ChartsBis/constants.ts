import { Dimensions } from 'react-native';

export const dataset = {
  labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  data: [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 200,
    Math.random() * 200,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 200,
  ],
};

export const { width } = Dimensions.get('window');
export const MARGINS = 10;
export const graphWidth = width - 50;
export const graphHeight = 250;
export const barWidth = graphWidth / 12 - MARGINS;
export const lerp = (v0: number, v1: number, t: number) =>
  (1 - t) * v0 + t * v1;
