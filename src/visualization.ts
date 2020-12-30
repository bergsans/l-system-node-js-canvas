import { Canvas, createCanvas } from 'canvas';
import { writeFileSync } from 'fs';
import { LRules, Visualization, LRulesInstructions, Axiom } from '../typings/typings';
import { makeLSystem } from './make-l-system';
import { parseLSystem } from './parse';

const id = <T>(v:T):T => v;

const transformCharacter = (
	instructions:LRulesInstructions
) => (axiom: Axiom) => (state:Visualization) => (instructions.get(axiom) ?? id)(state);

const transformReducer = (
	instructions:LRulesInstructions
) => (acc:Visualization, v:Axiom) => transformCharacter(instructions)(v)(acc);

export const createLSystemVisualization = (
	axiom:Axiom,
	state:Visualization,
	instructions:LRulesInstructions
):CanvasRenderingContext2D => axiom
	.split('')
	.reduce(transformReducer(instructions), state)
	.ctx;

export function drawLSystem(
	filename:string,
	rules:LRules,
	generations:number,
	initialAxiom:Axiom,
	lineLn:number,
	degrees:number,
	x = 1024/2,
	y = 768/2,
	width = 1024,
	height = 768
):void {
	const canvas:Canvas = createCanvas(width, height);
	const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
	if(!ctx) return;
	ctx.fillStyle = '#fffff8';
	ctx.fillRect(0, 0, width, height);
	ctx.strokeStyle ='#6A0917';
	ctx.translate(x, y);
	const axioms = makeLSystem(generations, initialAxiom, rules);
	const visualization:Visualization = {
		ctx,
		lineLn,
		degrees
	};
	const img:CanvasRenderingContext2D = createLSystemVisualization(
		axioms,
		visualization,
		parseLSystem
	);
	img.stroke();
	const buffer = canvas.toBuffer('image/png');
	writeFileSync(`./output/${filename}.png`, buffer);
}
