export const rotate = (ctx:CanvasRenderingContext2D, degrees:number):CanvasRenderingContext2D => {
	ctx.rotate(degrees * Math.PI / 180);
	return ctx;
};

export const line = (ctx:CanvasRenderingContext2D, lineLn:number):CanvasRenderingContext2D => {
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(0, -lineLn);
	ctx.stroke();
	ctx.translate(0, -lineLn);
	return ctx;
};

export const move = (ctx:CanvasRenderingContext2D, lineLn:number):CanvasRenderingContext2D => {
	ctx.moveTo(0, -lineLn);
	ctx.translate(0, -lineLn);
	return ctx;
};

export const pushContext = (ctx:CanvasRenderingContext2D):CanvasRenderingContext2D => {
	ctx.save();
	return ctx;
};

export const popContext = (ctx:CanvasRenderingContext2D):CanvasRenderingContext2D => {
	ctx.restore();
	return ctx;
};
