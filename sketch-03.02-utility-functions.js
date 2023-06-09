// TOPICS:
// - drawing a watch with random sizes using degToRad and random.range
 
const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

    const settings = {
      dimensions: [ 1080, 1080 ]
    };

    const degToRad = (degrees) => {
        return degrees / 180 * Math.PI;
    }
    
    const randomRange = (min, max) => {
      return Math.random() * (max - min) + min;
    } 

    const sketch = () => {
      return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);
    
        context.fillStyle = 'black';

        const cx = width * 0.5;  // the center of our circle, we rename
        const cy = height * 0.5;
    
        const w = width * 0.01;
        const h = height * 0.1;
        let x, y; // we declare them with let cause we will modify their values within the loop
    

        const num = 12;
        const radius = width * 0.3;
    
        for (let i = 0; i < num; i++) { // we need to change the angle of rotation based on the index of the loop
          const slice = math.degToRad(360 / num);
          const angle = slice * i;
    
          x = cx + radius * Math.sin(angle);
          y = cy + radius * Math.cos(angle);
    
          context.save();
          context.translate(x,y);
          context.rotate(-angle);
          context.scale(random.range(1, 3), 1); // for numbers between 1 and 3
      
          context.beginPath();
          context.rect(-w * 0.5, -h * 0.5, w, h);
          context.fill();
          context.restore();

       
          
        }   
  };
}; 

canvasSketch(sketch, settings); 