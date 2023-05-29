const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const settings = {
	dimensions: [ 1080, 1080 ],
};

const sketch = ({ context, width, height }) => {
	const agents = [];

	for (let i = 0; i < 40; i++) {
		const x = random.range(0, width);
		const y = random.range(0, height);
      
		agents.push(new Agent(x, y, width, height));
		console.log('agents', agents)
	}

	return ({ context, width, height }) => {
		context.fillStyle = 'white';
		context.fillRect(0, 0, width, height);

		agents.forEach(agent => {
			agent.draw(context);
		});
	};
};

canvasSketch(sketch, settings);

class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}

class Agent {
  constructor(x,y, width, height) {
    this.pos = new Point(x,y);
    this.w = random.range( width * 0.01,  width * 0.03, );
    this.h = random.range( height * 0.01,  height * 0.03, );
  }




  draw(context) { 
    
    const randomColors = ['red', 'blue', 'green', 'orange', 'purple']; // Define your desired colors
    const randomColor = random.pick(randomColors); // randomColors is an array of color values
    
    context.fillStyle = randomColor;

 
    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.lineWidth = 4;
    context.beginPath();
    context.rect(0,0, this.w, this.h);
    //context.fillStyle = 'orange';
    context.fill();
    context.stroke();

    context.restore();
  }

}