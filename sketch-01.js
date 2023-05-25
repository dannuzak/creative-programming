
const canvasSketch = require('canvas-sketch');

const settings = {
/*   dimensions: 'A4',   // [ 600, 600 ],
  pixelsPerInch: 300,
  orientation: 'landscape'	 */
  dimensions: [ 1000, 1000 ],
  //animate: true,
};

const sketch = () => {
  return ({ context, width, height }) => {  // drawing a big white rectangle
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
	
/* 
	const w = 60;
	const h = 60; 
	const gap = 20; */
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

			if (Math.random() > 0.5) { //adding random inner squares
				context.beginPath();
				context.rect(x + off / 2, y + off / 2, w - off, h - off);
			
				context.stroke();
			}
		}
	}

  };
};

canvasSketch(sketch, settings);

//npx canvas-sketch sketch-01.js --open