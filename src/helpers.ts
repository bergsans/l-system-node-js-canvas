import { DirectionModifiers,Point, Direction } from '../typings/typings';

export const id = <T>(v:T):T => v;

export const dec = (x:number):number => x - 1;

export const inc = (x:number):number => x + 1;

const getDirIndex = (
	currDir:Direction,
	dirs:Direction[]
):number => dirs.findIndex((dir) => dir === currDir) ?? 0;

export const next = (currDir:Direction, dirs:Direction[]):Direction =>  {
	const dirIndex = getDirIndex(currDir, dirs);
	return dirIndex + 1 >= dirs.length
		? dirs[0]
		: dirs[dirIndex + 1];
};

export const prev = (currDir: Direction, dirs:Direction[]):Direction =>  {
	const dirIndex = getDirIndex(currDir, dirs);
	return dirIndex - 1 < 0
		? dirs[dirs.length - 1]
		: dirs[dirIndex - 1];
};

export const getPos = (
	currDir:Direction,
	dirs:Direction[],
	mods:DirectionModifiers
):Point => {
	const dirIndex = getDirIndex(currDir, dirs);
	return {
		x: mods[dirs[dirIndex]][0],
		y: mods[dirs[dirIndex]][1]
	};
};

