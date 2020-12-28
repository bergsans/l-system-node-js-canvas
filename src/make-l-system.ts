import { Axiom, LRules, Instruction } from '../typings/typings';
import { inc } from './helpers';

const nextGeneration = (rules:LRules) => (
	acc:Axiom,
	str:Axiom
) => acc.concat(rules.get(str) ?? str);

const makeGeneration = (prevGenerations:Axiom, rules:LRules) =>
	prevGenerations
		.split('')
		.reduce(nextGeneration(rules), '');

export const makeLSystem = (
	generations = 0,
	axiom:Axiom = '',
	lrules:LRules
):Instruction => {
	if(generations === 0) return axiom;
	const mLS = (generation = 0, newAxiom:Axiom = ''):Axiom =>
		generation === generations
			? newAxiom
			: generation === 0
				? mLS(inc(generation), makeGeneration(axiom, lrules))
				: mLS(inc(generation), makeGeneration(newAxiom, lrules));
	return mLS();
};
