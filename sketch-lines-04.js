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

    for(let i = 0; i < agents.length; i++) {
      const agent = agents[i];
//before we were checking each pair of agents twice, when i = 0, we go over j = 0, 1, 2 ,3, etc and lines are being drwan twice (0 to 1, from 1 to 0). We were also checking 0 against 0, 1 to 1 and that's unneccessary. The second loop will run once.       
//now when i is 0, j is going to be 1
      for(let j = i + 1; j < agents.length; j++){
        const other = agents[j];


      //connecting the dots that are close to each other
      const dist = agent.pos.getDistance(other.pos);

        if(dist > 200) continue; 

        

        context.beginPath();
        context.moveTo(agent.pos.x, agent.pos.y);
        context.lineTo(other.pos.x, other.pos.y);
        context.stroke();
      }
     
    }

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


  getDistance(v){ // Pythagoras
    const dx = this.x -v.x;
    const dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy); //returning the distance
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