import { LRulesInstructions, Visualization } from '../typings/typings';
import { rotate, line, move } from './visualization-helpers';

export const interpretLSystem:LRulesInstructions = new Map()
	.set('+', (visualization:Visualization) => ({
		...visualization,
		ctx: rotate(visualization.ctx, visualization.degrees)
	}))
	.set('-', (visualization:Visualization) => ({
		...visualization,
		ctx: rotate(visualization.ctx, -visualization.degrees)
	}))
	.set('F', (visualization:Visualization) => ({
		...visualization,
		ctx: line(visualization.ctx, visualization.lineLn)
	}))
	.set('H', (visualization:Visualization) => ({
		...visualization,
		ctx: line(visualization.ctx, visualization.lineLn)
	}))
	.set('f', (visualization:Visualization) => ({
		...visualization,
		ctx: move(visualization.ctx, visualization.lineLn)
	}));
