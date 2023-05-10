const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = ({context, width, height}) => {
  const agents = [];

  for(let i = 0; i < 40; i++){
    const x = random.range(0, width);
    const y = random.range(0, width);

    agents.push(new Agent(x,y));
  }

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    agents.forEach(agent => {
      agent.draw(context);
    });

   /*  const pointA = new Point(800, 400, 10 );
    const pointB = new Point(300, 700, 10 );

    agentA.draw(context);
    agentB.draw(context); */
    
    /* context.beginPath();
    context.arc(pointA.x, pointA.y, pointA.radius, 0, Math.PI * 2);
    context.fillStyle = 'black';
    context.fill();

    context.beginPath();
    context.arc(pointB.x, pointB.y, pointB.radius, 0, Math.PI * 2);
    context.fill(); */

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

class Agent { // use agent for anything that we want to draw, only y x, radius is not needed
  constructor() {
    this.pos = new Point();
    this.radius = 10;
  }

  draw(context) {
    context.fillStyle = 'black';
    context.beginPath();
    context.arc(this.pos.x, this.radius, 0, Math.PI * 2);
    context.fill();
  }
}

