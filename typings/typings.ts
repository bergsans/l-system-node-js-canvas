export type AxiomHandler = (v:Visualization) => Visualization;

export type LRules = Map<Axiom, Axiom>;

export type LRulesInstructions = Map<Instruction, AxiomHandler>;

export type Axiom = string;

export type Instruction = string;

export interface Visualization {
  ctx: CanvasRenderingContext2D;
  lineLn: number;
  degrees: number;
}
