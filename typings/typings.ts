import { ImageData } from 'canvas';

export type Turn = 'L' | 'R';

export type AxiomHandler = (s:State) => State;

export type LRules = Map<Axiom, Axiom>;

export type LRulesInstructions = Map<Instruction, AxiomHandler>;

export type Axiom = string;

export type Instruction = string;

export enum Direction {
  N,
  E,
  S,
  W
}

export interface Point {
  y: number;
  x: number;
}

export interface State {
  point: Point;
  ctx: CanvasRenderingContext2D;
  dir: Direction;
  dirs: Direction[],
  mods: DirectionModifiers
}

export type DirectionModifiers = {
  [key in Direction]: [number, number];
};
