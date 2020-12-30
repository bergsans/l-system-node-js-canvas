import { LRules } from '../typings/typings';

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

export const gosperCurve = new Map()
	.set('F', 'F-H--H+F++FF+H-')
	.set('H', '+F-HH--H-F++F+H');

export const roundStar = new Map()
	.set('F', 'F++F');

export const pentadendrite = new Map()
	.set('F', 'F-F-F++F+F-F');

export const tree1 = new Map()
	.set('F', 'FF')
	.set('X', 'F[+X]F[-X]+X');

export const tree2 = new Map()
	.set('F', 'F[+F]F[-F][F]');

export const tree3 = new Map()
	.set('F', 'FF-[-F+F+F]+[+F-F-F]');

export const tree4 = new Map()
	.set('F', 'FF')
	.set('X', 'F[+X][-X]FX');
