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

const brown = '#7E1717';
const darkBlue = '#068DA9';
const lightBlue = '#ECF8F9';
const orange ='#E55807';

class Square {
	constructor(w, h, gap, ix, iy, off, x, y){
		this.grid = new Grid(w, h, gap, ix, iy, off);
		this.x = x;
		this.y = y;
	}
 
	draw(context){
		context.save();
		context.beginPath(); //the number after the + is where the next square will start
		context.strokeStyle = lightBlue;
		context.fillStyle = darkBlue;

		context.rect(this.x, this.y, this.grid.w, this.grid.h);
		context.fillStyle = darkBlue;
		context.stroke();
		

		if (Math.random() > 0.5) { 
			context.beginPath();
			//context.strokeStyle = lightBlue;
			//context.strokeStyle = darkBlue;
			context.fillStyle = orange;
			context.rect(this.x + this.grid.off / 2, this.y + this.grid.off / 2, this.grid.w - this.grid.off, this.grid.h - this.grid.off);
		
			context.stroke();
			
			context.fill();
			context.restore();
		}
	}
}

const sketch = () => {
  return ({ context, width, height }) => {  
    context.fillStyle = brown; 
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
 
 
//npx canvas-sketch sketch-01.01-grid-squares-animated.js --open