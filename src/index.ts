import { 
	quadraticKochIsland,
	kochCurve1,
	kochCurve2,
	kochCurve3,
	kochCurve4,
	islandAndLake,
	snowflakeModified,
	dragonCurve
} from './koch-transformation-and-instruction-rules';
import { drawLSystem } from './visualization';

const patterns = [
	{ name: 'quadratic-koch-island', rules: quadraticKochIsland, generations: 3, initialAxiom: 'F-F-F-F', lineLn: 7,x: 300, y:600},
	{ name: 'snow-flake-modified', rules: snowflakeModified, generations: 4, initialAxiom: '-F', lineLn: 10, x: 150, y: 500 },
	{ name: 'island-and-lake',rules: islandAndLake, generations: 2, initialAxiom: 'F+F+F+F', lineLn: 10, x:600, y:600 },
	{ name: 'koch-curve-1',   rules: kochCurve1, generations: 4, initialAxiom: 'F-F-F-F', lineLn: 7, x: 200, y: 700 },
	{ name: 'koch-curve-2',   rules: kochCurve2, generations: 4, initialAxiom: 'F-F-F-F', lineLn: 7,x:200,y:600  },
	{ name: 'koch-curve-3',   rules: kochCurve3, generations: 4, initialAxiom: 'F-F-F-F', lineLn:5,x:100,y:200 },
	{ name: 'koch-curve-4', rules: kochCurve4, generations: 3, initialAxiom: 'F-F-F-F', lineLn:10,x:400,y: 200},
	{ name: 'dragon-curve',   rules: dragonCurve, generations: 9, initialAxiom: 'F-H', lineLn:10,x:400,y:400 }
];
for(const { name, rules, generations, initialAxiom, lineLn,x,y } of patterns) {
	drawLSystem(name, rules, generations, initialAxiom, lineLn, x, y);
}
