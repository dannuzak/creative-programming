// TASK:
// - drawing a dot
// - drawing 2 dots using classes

/* const canvasSketch = require('canvas-sketch');

const settings = {
  //dimensions: [ 2048, 2048 ]
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const point = { x: 800, y: 400, radius: 10 };

    context.beginPath();
    context.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
    context.fillStyle = 'black';
    context.fill();

  };
};

canvasSketch(sketch, settings);

} */


// Drawing 2 dots using classes
/* 
const canvasSketch = require('canvas-sketch');
const settings = {
  dimensions: [ 1080, 1080 ]
};
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const pointA = new Point(800, 400, 10 );
    const pointB = new Point(300, 700, 10 );

    context.beginPath();
    context.arc(pointA.x, pointA.y, pointA.radius, 0, Math.PI * 2);
    context.fillStyle = 'black';
    context.fill();

    context.beginPath();
    context.arc(pointB.x, pointB.y, pointB.radius, 0, Math.PI * 2);
    context.fill();

  };
};

canvasSketch(sketch, settings);
//Classes are recipes for writting objects
class Point {
  constructor(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}

class Agent {
  constructor() {
    this.pos = new Point();
    //this.radius = 10;
  }
}
 */


//drawing 40 agents

 
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

		agents.push(new Agent(x, y));
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
  constructor(x,y) {
    this.pos = new Point(x,y);
    this.radius = random.range(4,12);
  }

  draw(context) {  
    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.lineWidth = 4;
    context.beginPath();
    context.arc(0,0, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();

    context.restore();
  }

}
 




//npx canvas-sketch sketch-04.00-objects-and-classes.js --open