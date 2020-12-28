import {writeFileSync} from 'fs';
import { Direction } from '../typings/typings';
import { Canvas, createCanvas } from 'canvas';
import { makeLSystem } from './make-l-system';
import {
	interpretKochLSystem,
	quadraticKochIsland
} from './koch-transformation-and-instruction-rules';
import { directionModifiers, directions } from '../constants/constants';
import { createLSystemVisualization } from './visualization';

const width = 1024;
const height = 768;

const canvas:Canvas = createCanvas(width, height);
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

if(ctx) {
	ctx.fillStyle = '#fffff8';
	ctx.fillRect(0, 0, width, height);
	ctx.strokeStyle ='#BF616A';

	const interpretation = makeLSystem(
		3,
		'F+F+F+F',
		quadraticKochIsland
	);
	const img:CanvasRenderingContext2D = createLSystemVisualization(
		interpretation,
		{
			point: {
				x: width/2 + 100,
				y: height/2 + 100
			},
			ctx,
			dir: Direction.N,
			dirs: directions,
			mods: directionModifiers
		},
		interpretKochLSystem
	);
	img.stroke();
	const buffer = canvas.toBuffer('image/png');
	writeFileSync('./output/image.png', buffer);
}
