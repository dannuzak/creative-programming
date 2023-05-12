const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    //const point = { x: 800, y: 400, radius: 10 };
    
    //Creating several points based on the class Point
    const pointA = new Point(800,400,10);
    const pointB = new Point(300,700,10);
    
    context.beginPath();
    context.arc(pointA.x, pointA.y, pointA.radius, 0, Math.PI * 2);
    context.fillStyle = 'black';
    context.fill();

    context.beginPath();
    context.arc(pointB.x, pointB.y, pointB.radius, 0, Math.PI * 2);
    context.fillStyle = 'black';
    context.fill();
  };

};

canvasSketch(sketch, settings);

//whenever we need multiple instances of the same classes we can use classes
//constructor method and we can pass params
//with this we are referring to the scope of this class
class Point {
  constructor(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}
