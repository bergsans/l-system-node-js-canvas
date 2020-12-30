import {
	quadraticKochIsland,
	kochCurve1,
	kochCurve2,
	kochCurve3,
	kochCurve4,
	islandAndLake,
	snowflakeModified,
	dragonCurve,
	gosperCurve,
	roundStar,
	pentadendrite,
	tree1,
	tree2,
	tree3,
	tree4
} from './rule-sets';
import { drawLSystem } from './visualization';

const patterns = [
	{ name: 'quadratic-koch-island', rules: quadraticKochIsland, generations: 3, initialAxiom: 'F-F-F-F', lineLn: 7, degrees: 90, x: 750, y:600},
	{ name: 'snow-flake-modified', rules: snowflakeModified, generations: 4, initialAxiom: '-F', lineLn: 10, degrees: 90, x: 900, y: 500 },
	{ name: 'island-and-lake',rules: islandAndLake, generations: 2, initialAxiom: 'F+F+F+F', lineLn: 10, degrees: 90, x: 300, y:600 },
	{ name: 'koch-curve-1',   rules: kochCurve1, generations: 4, initialAxiom: 'F-F-F-F', lineLn: 7, degrees: 90, x: 800, y: 650 },
	{ name: 'koch-curve-2',   rules: kochCurve2, generations: 4, initialAxiom: 'F-F-F-F', lineLn: 7, degrees: 90, x: 800,y: 650 },
	{ name: 'koch-curve-3',   rules: kochCurve3, generations: 4, initialAxiom: 'F-F-F-F', lineLn:5, degrees: 90, x: 800,y: 200 },
	{ name: 'koch-curve-4', rules: kochCurve4, generations: 3, initialAxiom: 'F-F-F-F', lineLn:30, degrees: 90, x: 400,y: 150},
	{ name: 'dragon-curve',   rules: dragonCurve, generations: 9, initialAxiom: 'F-H', lineLn:15, degrees: 90, x: 700, y: 400 },
	{ name: 'gosper-curve', rules: gosperCurve, generations: 4, initialAxiom: 'F', lineLn:10, degrees: 60, x: 700, y: 300 },
	{ name: 'round-star', rules: roundStar, generations: 7, initialAxiom: 'F', lineLn:500, degrees: 77, x: 400, y: 600 },
	{ name: 'pentadendrite', rules: pentadendrite, generations: 4, initialAxiom: 'F-F-F-F-F', lineLn: 5, degrees: 72, x: 800, y: 300 },
	{ name: 'tree-1', rules: tree1, generations: 7, initialAxiom: 'X', lineLn: 3, degrees: 20, x: 400, y: 768 },
	{ name: 'tree-2', rules: tree2, generations: 5, initialAxiom: 'F', lineLn: 10, degrees: 20, x: 400, y: 700 },
	{ name: 'tree-3', rules: tree3, generations: 4, initialAxiom: 'F', lineLn: 10, degrees: 22.5, x: 400, y: 700 },
	{ name: 'tree-4', rules: tree4, generations: 7, initialAxiom: 'X', lineLn: 3, degrees: 25.7, x: 400, y: 768 }
];

for(const { name, rules, generations, initialAxiom, lineLn, degrees, x, y } of patterns) {
	drawLSystem(name, rules, generations, initialAxiom, lineLn, degrees, x, y);
}
