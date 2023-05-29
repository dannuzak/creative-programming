const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const settings = {
	dimensions: [ 1080, 1080 ],
  animate: true
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
      agent.update();
			agent.draw(context);
		});
	};
};

canvasSketch(sketch, settings);

class Vector {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}

class Agent {
  constructor(x,y, width, height) {
    this.pos = new Vector(x,y);
    this.w = random.range( width * 0.01,  width * 0.03, );
    this.h = random.range( height * 0.01,  height * 0.03, );
    this.vel = random.range(1, 5);
  }

  //rectangles falling, the height is being passed to reset the position of the rectanle when it goes beyond the canvas height
  update(canvasHeight) {
    this.pos.y += this.vel;

    if (this.pos.y > canvasHeight) {
      this.pos.y = random.range(-100, 0);
    }
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