import { Direction, DirectionModifiers } from '../typings/typings';

export const directions:Direction[] = [
	Direction.N,
	Direction.E,
	Direction.S,
	Direction.W
];

export const directionModifiers:DirectionModifiers = {
	[Direction.N]: [0,-1],
	[Direction.E]: [1, 0],
	[Direction.S]: [0, 1],
	[Direction.W]: [-1,0]
};
