import { LRulesInstructions, Visualization } from '../typings/typings';
import { pushContext, popContext, rotate, line, move } from './visualization-helpers';

export const parseLSystem:LRulesInstructions = new Map()
	.set('+', (v:Visualization) => ({
		...v,
		ctx: rotate(v.ctx, v.degrees)
	}))
	.set('-', (v:Visualization) => ({
		...v,
		ctx: rotate(v.ctx, -v.degrees)
	}))
	.set('F', (v:Visualization) => ({
		...v,
		ctx: line(v.ctx, v.lineLn)
	}))
	.set('H', (v:Visualization) => ({
		...v,
		ctx: line(v.ctx, v.lineLn)
	}))
	.set('f', (v:Visualization) => ({
		...v,
		ctx: move(v.ctx, v.lineLn)
	}))
	.set('[', (v:Visualization) => ({
		...v,
		ctx: pushContext(v.ctx)
	}))
	.set(']', (v:Visualization) => ({
		...v,
		ctx: popContext(v.ctx)
	}));
