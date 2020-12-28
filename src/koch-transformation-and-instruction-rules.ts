import { LRulesInstructions, State, LRules } from '../typings/typings';
import { turn, move } from './interpret-instructions';

export const quadraticKochIsland:LRules = new Map()
	.set('F', 'F-F+F+FF-F-F+F');

export const kochCurve1:LRules = new Map()
	.set('F', 'FF-F--F-F');

export const kochCurve2:LRules = new Map()
	.set('F', 'FF-F-F-F-FF');

export const kochCurve3:LRules = new Map()
	.set('F', 'FF-F-F-F-F-F+F');

export const kochCurve4:LRules = new Map()
	.set('F', 'FF-F+F-F-FF');

export const islandAndLake = new Map()
	.set('F', 'F+f-FF+F+FF+Ff+FF-f+FF-F-FF-Ff-FFF')
	.set('f', 'ffffff');

export const snowflakeModified = new Map()
	.set('F', 'F+F-F-F+F');

export const dragonCurve = new Map()
	.set('F', 'F-H')
	.set('H', 'F+H');

export const interpretKochLSystem:LRulesInstructions = new Map()
	.set('+', (state:State) => turn(state, 'L'))
	.set('-', (state:State) => turn(state, 'R'))
	.set('F', (state:State) => move(state, 'F'))
	.set('H', (state:State) => move(state, 'F'))
	.set('f', (state:State) => move(state, 'f'));
