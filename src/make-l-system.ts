import { Axiom, LRules, Instruction } from '../typings/typings';

const nextGeneration = (rules:LRules) => (
	acc:Axiom,
	str:Axiom
) => acc.concat(rules.get(str) ?? str);

const makeGeneration = (prevGenerations:Axiom, rules:LRules) =>
	prevGenerations
		.split('')
		.reduce(nextGeneration(rules), '');

export const makeLSystem = (
	generations: number,
	firstAxiom: Axiom,
	lrules: LRules
): Instruction => {
	const mLS = (generation: number, axiom: Axiom): Axiom =>
		generation === generations
			? axiom
			: mLS(generation + 1, makeGeneration(axiom, lrules));
	return mLS(0, firstAxiom);
};
