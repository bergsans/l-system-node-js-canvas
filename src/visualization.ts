import { Canvas, createCanvas } from 'canvas';
import { writeFileSync } from 'fs';
import {
    LRules,
    Visualization,
    LRulesInstructions,
    Axiom,
} from '../typings/typings';
import { makeLSystem } from './make-l-system';
import { parseLSystem } from './parse';

const id = <T>(v: T): T => v;

const transformCharacter =
    (instructions: LRulesInstructions) => (axiom: Axiom) => (v: Visualization) =>
        (instructions.get(axiom) ?? id)(v);

const transformReducer =
    (instructions: LRulesInstructions) => (acc: Visualization, v: Axiom) =>
        transformCharacter(instructions)(v)(acc);

export const createLSystemVisualization = (
    axiom: Axiom,
    v: Visualization,
    instructions: LRulesInstructions
): CanvasRenderingContext2D =>
    axiom.split('').reduce(transformReducer(instructions), v).ctx;

export function drawLSystem(
    filename: string,
    rules: LRules,
    generations: number,
    initialAxiom: Axiom,
    lineLn: number,
    degrees: number,
    x = 1024 / 2,
    y = 768 / 2,
    width = 1024,
    height = 768
): void {
    const canvas: Canvas = createCanvas(width, height);
    const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
    if (!ctx) return;
    //ctx.fillStyle = '#F6F5F1';
    ctx.fillStyle = '#ece9e1';
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = '#6A0917';
    ctx.translate(x, y);
    const axioms = makeLSystem(generations, initialAxiom, rules);
    const visualization: Visualization = {
        ctx,
        lineLn,
        degrees,
    };
    const img: CanvasRenderingContext2D = createLSystemVisualization(
        axioms,
        visualization,
        parseLSystem
    );
    img.stroke();
    const buffer = canvas.toBuffer('image/png');
    writeFileSync(`./output/${filename}.png`, buffer);
}
