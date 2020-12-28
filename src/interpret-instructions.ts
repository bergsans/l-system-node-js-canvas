import { State, Axiom, Turn } from '../typings/typings';
import { next, prev, getPos } from './helpers';
import { lineTo, moveTo } from './visualization';

export const move = (s:State, mv:Axiom):State => {
	const point = {
		x: s.point.x + (getPos(s.dir, s.dirs, s.mods).x * s.lineLn),
		y: s.point.y + (getPos(s.dir, s.dirs, s.mods).y * s.lineLn)
	};
	return {
		...s,
		ctx:  mv === 'F'
			? lineTo(s.ctx, point.x, point.y)
			: moveTo(s.ctx, point.x, point.y),
		point
	};
};

export const turn = (s:State, rotate: Turn):State => ({
	...s,
	dir: rotate === 'R'
		? next(s.dir, s.dirs)
		: prev(s.dir, s.dirs)
});
