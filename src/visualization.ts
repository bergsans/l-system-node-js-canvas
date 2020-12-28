import { State, LRulesInstructions, Axiom } from '../typings/typings';
import { id } from './helpers';

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
