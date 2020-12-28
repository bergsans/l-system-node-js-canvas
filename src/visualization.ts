import { Canvas, createCanvas } from 'canvas';
import {writeFileSync} from 'fs';
import { Direction, State, LRulesInstructions, Axiom } from '../typings/typings';
import { id } from './helpers';
import { makeLSystem } from './make-l-system';
import { interpretKochLSystem, quadraticKochIsland } from './koch-transformation-and-instruction-rules';
import { directionModifiers, directions } from '../constants/constants';

export const lineTo = (ctx:CanvasRenderingContext2D, x:number, y:number):CanvasRenderingContext2D => {
	ctx.lineTo(x,y);
	return ctx;
};

export const moveTo = (ctx:CanvasRenderingContext2D, x:number, y:number):CanvasRenderingContext2D => {
	ctx.moveTo(x, y);
	return ctx;
};

const transformCharacter = (
	instructions:LRulesInstructions
) => (axiom: Axiom) => (state:State) => (instructions.get(axiom) ?? id)(state);

const transformReducer = (
	instructions:LRulesInstructions
) => (acc:State, v:Axiom) => transformCharacter(instructions)(v)(acc);

export const createLSystemVisualization = (
	axiom:Axiom,
	state:State,
	instructions:LRulesInstructions
):CanvasRenderingContext2D => axiom
	.split('')
	.reduce(transformReducer(instructions), state)
	.ctx;

export function drawLSystem(
	filename = 'quadraticKochIsland',
	rules = quadraticKochIsland,
	generations = 4,
	initialAxiom = 'F-F-F-F',
	lineLn = 5,
	x = 1024/2,
	y = 768/2,
	dir = Direction.N,
	dirs = directions,
	mods = directionModifiers,
	width =1024,
	height =768
):void {
	const canvas:Canvas = createCanvas(width, height);
	const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
	if(!ctx) return;
	ctx.fillStyle = '#fffff8';
	ctx.fillRect(0, 0, width, height);
	ctx.strokeStyle ='#6A0917';
	const interpretation = makeLSystem(
		generations,
		initialAxiom,
		rules
	);
	const img:CanvasRenderingContext2D = createLSystemVisualization(
		interpretation,
		{
			point: { x, y },
			ctx,
			dir,
			dirs,
			mods,
			lineLn
		},
		interpretKochLSystem
	);
	img.stroke();
	const buffer = canvas.toBuffer('image/png');
	writeFileSync(`./output/${filename}.png`, buffer);
}
