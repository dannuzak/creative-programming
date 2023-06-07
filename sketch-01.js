/* 
const canvasSketch = require('canvas-sketch');

const settings = {
//  dimensions: 'A4',   // [ 600, 600 ],
//   pixelsPerInch: 300,
//   orientation: 'landscape'	 
  dimensions: [ 1000, 1000 ],
  //animate: true,
};

const sketch = () => {
  return ({ context, width, height }) => {  // drawing a big white rectangle
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
	
	// const w = 60;
	// const h = 60; 
	// const gap = 20; 
	const w = width * 0.10;  // 10% of whatever the width of the canvas is
	const h = height * 0.10;  // making them relative to the size of the canvas
	const gap = width * 0.03; //about 3%
	const ix = width * 0.17; //100 divided by 600 is about 17%
	const iy = height * 0.17;
	
	context.lineWidth = width * 0.01;
	
	const off = width * 0.02; 
	let x, y;

	for (let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++) {
			x = ix + (w + gap) * i;
			y = iy + (h + gap) * j;

			context.beginPath(); //the number after the + is where the next square will start
			context.rect(x,y,w,h);
			context.stroke();

			if (Math.random() > 0.5) { //adding blue random inner squares
				context.beginPath();
				context.rect(x + off / 2, y + off / 2, w - off, h - off);
			
				context.stroke();
			}
		}
	}

  };
};

canvasSketch(sketch, settings); 
 */

const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1000, 1000 ],
};

class Grid {
	constructor(w, h, gap, ix, iy, off) {
		this.w = w;
		this.h = h;
		this.gap = gap;
		this.ix = ix;
		this.iy = iy;
		this.off = off;
	}
}

class Square {
	constructor(w, h, gap, ix, iy, off, x, y){
		this.grid = new Grid(w, h, gap, ix, iy, off);
		this.x = x;
		this.y = y;
	}

	draw(context){
		context.save();
		context.beginPath(); //the number after the + is where the next square will start
		context.rect(this.x, this.y, this.grid.w, this.grid.h);
		context.stroke();

		if (Math.random() > 0.5) { //adding blue random inner squares
			context.beginPath();
			context.rect(this.x + this.grid.off / 2, this.y + this.grid.off / 2, this.grid.w - this.grid.off, this.grid.h - this.grid.off);
		
			context.stroke();
			context.restore();
		}
	}
}

const sketch = () => {
  return ({ context, width, height }) => {  
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

	const w = width * 0.10;  
	const h = height * 0.10;  
	const gap = width * 0.03; 
	const ix = width * 0.17; 
	const iy = height * 0.17;

	const off = width * 0.02; 
	
	context.lineWidth = width * 0.01;
		
	let x, y;

	for (let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++) {
			x = ix + (w + gap) * i;
			y = iy + (h + gap) * j;

			const squares = [];
			squares.push(new Square(w, h, gap, ix, iy, off, x, y));	

			squares.forEach(square => {
				square.draw(context);
			});

		}
	}
  };
};

canvasSketch(sketch, settings);
 


//npx canvas-sketch sketch-01.js --open