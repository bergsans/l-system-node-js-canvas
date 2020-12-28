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

export const interpretKochLSystem:LRulesInstructions = new Map()
	.set('+', (state:State) => turn(state, 'L'))
	.set('-', (state:State) => turn(state, 'R'))
	.set('F', (state:State) => move(state, 'F'))
	.set('f', (state:State) => move(state, 'f'));
