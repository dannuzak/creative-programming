/* 

//TASKS:
1. animate agents
2. bounce agents

---
TASK 1

const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const settings = {
	dimensions: [ 1080, 1080 ],
	animate: true
};

const animate = () => {
	console.log('domestika');
	requestAnimationFrame(animate);
};
// animate(); this is what animate: true does, it calls the function in line 24

const sketch = ({ context, width, height }) => {
	const agents = [];
	for (let i = 0; i < 40; i++) {
		const x = random.range(0, width);
		const y = random.range(0, height);
		agents.push(new Agent(x, y));
	}
	return ({ context, width, height }) => {
		context.fillStyle = 'white';
		context.fillRect(0, 0, width, height);

		agents.forEach(agent => {
			agent.update();
			agent.draw(context);
			//agent.bounce(width, height);
		});
	};
};

canvasSketch(sketch, settings);

class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Agent {
	constructor(x, y) {
		this.pos = new Vector(x, y);
		this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
		this.radius = random.range(4, 12);
	}

  // to use the velocity we need to add it to the position
	update() {
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
	}

	draw(context) {
		context.save();
		context.translate(this.pos.x, this.pos.y);

		context.lineWidth = 4;

		context.beginPath();
		context.arc(0, 0, this.radius, 0, Math.PI * 2);
		context.fill();
		context.stroke();

		context.restore();
	}
} */

//npx canvas-sketch sketch-04.01-animated-agents.js

// TASK 2

const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const settings = {
	dimensions: [ 1080, 1080 ],
	animate: true
};

const animate = () => {
	console.log('domestika');
	requestAnimationFrame(animate);
};
// animate();

const sketch = ({ context, width, height }) => {
	const agents = [];

	for (let i = 0; i < 40; i++) {
		const x = random.range(0, width);
		const y = random.range(0, height);

		agents.push(new Agent(x, y));
	}

	return ({ context, width, height }) => {
		context.fillStyle = 'white';
		context.fillRect(0, 0, width, height);

		agents.forEach(agent => {
			agent.update();
			agent.draw(context);
			agent.bounce(width, height);
		});
	};
};

canvasSketch(sketch, settings);

class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Agent {
	constructor(x, y) {
		this.pos = new Vector(x, y);
		this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
		this.radius = random.range(4, 12);
	}

	bounce(width, height) {
		if (this.pos.x <= 0 || this.pos.x >= width)  this.vel.x *= -1;
		if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
	} 

  // to use the velocity we need to add it to the position
	update() {
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
	}

	draw(context) {
		context.save();
		context.translate(this.pos.x, this.pos.y);

		context.lineWidth = 4;

		context.beginPath();
		context.arc(0, 0, this.radius, 0, Math.PI * 2);
		context.fill();
		context.stroke();

		context.restore();
	}
} 

//npx canvas-sketch sketch-04.01-animated-agents.js --open