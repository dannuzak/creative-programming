// EXERCISE:
//Drawing arcs and a perimeter of lines
//

/* const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

    const settings = {
      dimensions: [ 1080, 1080 ]
    };

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
          context.arc(0,0, radius * random.range(0.5, 1.3), slice * random.range(0, -8), slice * random.range(0, 5));
          context.stroke();
          context.restore();
        }   
  };
}; 

canvasSketch(sketch, settings);  */

//npx canvas-sketch sketch-03.03-arcs.js --open

/* 

EXPERIMENT 1: adding random colors to the arcs

const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

    const settings = {
      dimensions: [ 1080, 1080 ]
    };

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
    

        const num = 40;
        const radius = width * 0.3;
        const randomColors = ['red', 'blue', 'green', 'orange', 'purple']; // Define your desired colors

    
        for (let i = 0; i < num; i++) { // we need to change the angle of rotation based on the index of the loop
          const slice = math.degToRad(360 / num);
          const angle = slice * i;
    
          x = cx + radius * Math.sin(angle);
          y = cy + radius * Math.cos(angle);

          const randomColor = random.pick(randomColors); // randomColors is an array of color values
          context.strokeStyle = randomColor;

    
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
          context.arc(0,0, radius * random.range(0.5, 1.3), slice * random.range(0, -8), slice * random.range(0, 5));
          context.stroke();
          context.restore();
        }   
  };
}; 

canvasSketch(sketch, settings);  */

//npx canvas-sketch sketch-03.03-arcs.js --open

//EXPERIMENT 2: adding random colors to the arcs
/* 
const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'white';

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const num = 40;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5));

      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      const gradient = context.createLinearGradient(-radius, 0, radius, 0);
      gradient.addColorStop(0, 'red');
      gradient.addColorStop(1, 'yellow');
     
      context.strokeStyle = gradient;

      context.lineWidth = random.range(5, 20);
      context.beginPath();
      context.arc(0, 0, radius * random.range(0.5, 1.3), slice * random.range(0, -8), slice * random.range(0, 5));
      context.stroke();
      context.restore();
    } 
  };
};
 
 

canvasSketch(sketch, settings);  
 */


const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'white';

    // centering the semicircles
    const cx = width * 0.5;
    const cy = height * 0.5;


    //width and height of the rectangles
    const w = width * 0.01;
    const h = height * 0.3;
    let x, y;

    //number of rectangles
    const num = 20;
    const radius = width * 0.4; // position from the center of the canvas

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      const radiusArc = width * 0.25;

      x = cx + radiusArc * Math.sin(angle);
      y = cy + radiusArc * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5));

      context.beginPath();
      context.rect(-w * 0.5,  -h * 0.5, w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      const gradient = context.createLinearGradient(0, 500, 0, 0);
      gradient.addColorStop(0, '#f2960c');
      gradient.addColorStop(1, 'blue');
     
      context.strokeStyle = gradient;

      context.lineWidth = random.range(5, 20);
      context.beginPath();
      context.arc(0, 0, radius * random.range(0.5, 1.3), slice * random.range(0, 0.4), slice * random.range(0, 1));
      context.stroke();
      context.restore();

      context.save();
      context.translate(cx,cy);
      context.rotate(-angle);
         
      context.beginPath();
      context.fillStyle = 'white';
      context.arc(0, 0, 20, 0, Math.PI * 2);
      context.fill();
      context.restore();
    } 

    const numCircles = 60;
    const minCircleRadius = width * 0.005;
    const maxCircleRadius = width * 0.02;

    const circleRadius = random.range(minCircleRadius, maxCircleRadius);

    for (let i = 0; i < numCircles; i++) {
      const angle = (i / numCircles) * Math.PI * 2;

      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);

      context.beginPath();
      context.arc(x, y, circleRadius, 0, Math.PI * 2);
      context.strokeStyle = 'white';
      context.lineWidth = 2;
      context.stroke();
    
    }


  };
};
 
 

canvasSketch(sketch, settings); 


// npx canvas-sketch sketch-03.03-arcs.js
