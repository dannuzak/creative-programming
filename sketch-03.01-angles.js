// TOPICS:
// - rotation
// - conv degrees to radians
// - using trigonometry to distribute shapes around a circle

const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

    const settings = {
      dimensions: [ 1080, 1080 ]
    };
    
    const randomRange = (min, max) => {
      return Math.random() * (max - min) + min;
    }

    const degToRad = degrees => {
      return degrees / 180 * Math.PI;
    }

    const sketch = () => {
      return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);
    
        context.fillStyle = 'black';

    /*     // creating a little star
        const x = width * 0.5;
        const y = height * 0.5;
        const w = width * 0.01; // we change the width
        const h = height * 0.1;

        const num = 12; // we want 12 slices

        for (let i = 0; i < num; i++) { // we need to change the angle of rotation based on the index of the loop
          const slice = degToRad(360 / num); // we divide 360 among # slices
          console.log('slice', slice);
          const angle = slice * i;
          console.log('angle', angle);
    
          context.save();
          context.translate(x,y); 
          //context.rotate(0.3); // we are using radians not degrees
          context.rotate(angle); // we are using radians not degrees
          //context.rotate(45 / 180 * Math.PI); converting degrees to radians
       
          context.beginPath();
          context.rect(-w * 0.5, -h * 0.5, w, h); 
          context.fill();
          context.restore();
   
        } */

// creating a clock with the slices

        const cx = width * 0.5;  // the center of our circle, we rename
        const cy = height * 0.5;
    
        const w = width * 0.01;
        const h = height * 0.1;
        let x, y; // we declare them with let cause we will modify their values within the loop
        
        const num = 12;
        const radius = width * 0.3; // space between the slices

        for (let i = 0; i < num; i++) { // we need to change the angle of rotation based on the index of the loop
          const slice = degToRad(360 / num);
          const angle = slice * i;

          x = cx + radius * Math.sin(angle);
          y = cy + radius * Math.cos(angle); 

          context.save();
          context.translate(x,y);
          context.rotate(-angle);

          context.beginPath();
          context.rect(-w * 0.5, -h * 0.5, w, h);
          context.fill();
          context.restore();
        } 
  /*       
  

        const num = 40;
        const radius = width * 0.3;
    
        for (let i = 0; i < num; i++) { // we need to change the angle of rotation based on the index of the loop
          const slice = math.degToRad(360 / num);
          const angle = slice * i;
    
          x = cx + radius * Math.sin(angle);
          y = cy + radius * Math.cos(angle);
    
          context.save();
          context.translate(x,y);
          context.rotate(-angle);
          context.scale(random.range(0.1, 2), random.range(0.2, 0.5)) // for numbers between 1 and 3
      
          context.beginPath();
          context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
          context.fill();
          context.restore();

          context.save();
          context.translate(cx,cy);
          context.rotate(-angle);

          context.lineWidth = random.range(5, 20);
          context.beginPath();
          context.arc(0,0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
          context.stroke();

          context.restore();
        }   */
  };
}; 

canvasSketch(sketch, settings); 
/* 
const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

    const settings = {
      dimensions: [ 1080, 1080 ],
      //animate: true,
    };
    
    const randomRange = (min, max) => {
      return Math.random() * (max - min) + min;
    }

    const degToRad = degrees => {
      return degrees / 180 * Math.PI;
    }
    
    const sketch = () => {
      return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);
    
        context.fillStyle = 'black';
    
        const cx = width * 0.5;
        const cy = height * 0.5;
    
        const w = width * 0.01;
        const h = height * 0.1;
        let x, y;
        
        const num = 40;
        const radius = width * 0.3;
    
        for (let i = 0; i < num; i++) { // we need to change the angle of rotation based on the index of the loop
          const slice = math.degToRad(360 / num);
          const angle = slice * i;
    
          x = cx + radius * Math.sin(angle);
          y = cy + radius * Math.cos(angle);
    
          context.save();
          context.translate(x,y);
          context.rotate(-angle);
          context.scale(random.range(0.1, 2), random.range(0.2, 0.5)) // for numbers between 1 and 3
      
          context.beginPath();
          context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
          context.fill();
          context.restore();

          context.save();
          context.translate(cx,cy);
          context.rotate(-angle);

          context.lineWidth = random.range(3, 10);
          context.beginPath();
          context.arc(0,0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
          context.stroke();

          context.restore();
        } 
  };
};

canvasSketch(sketch, settings);
*/
//npx canvas-sketch sketch-03-angles.js --open