const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {  // drawing a big white rectangle
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);	

	const w = 60;
	const h = 60; 
	const gap = 20;
	let x, y;

	for (let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++) {
			let x = 100 + (w + gap) * i;
			let y = 100 + (h + gap) * j;

			context.beginPath(); //the number after the + is where the next square will start
			context.rect(x,y,w,h);
			//context.rect(100 + 110 * i,100,50,50);
			context.stroke();

			if (Math.random() > 0.5) {
				context.beginPath();
				context.lineWidth = 2;
				context.rect(x + 8, y + 8, w - 16, h - 16);
				context.stroke();
			}
		}
	}

  };
};

canvasSketch(sketch, settings);