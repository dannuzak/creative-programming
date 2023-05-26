// drawing a square and a circle, using transform and rotate 

const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    //one way of placing the square
    const x = width * 0.5;
    const y = height * 0.5;
    const w = width * 0.3;//30%
    const h = height * 0.3;

    /* context.beginPath()
    context.rect(x,y,w,h);
    context.fill(); */

    /* //another way, using translate
    context.translate(x,y);

    context.beginPath()
    context.rect(0, 0, w, h); //x and y to 0
    context.fill(); */

    /* //adding rotation
    context.translate(x,y); // without translate then the point of rotation is the upper left corner of the canvas
    context.rotate(0.3);

    context.beginPath();
    context.rect(0, 0, w, h); // with translate and x and y to 0, the point of rotation is from the square
    context.fill(); */

    /* //drawing the square from the center of the canvas
    context.translate(x,y); 
    context.rotate(0.3);

    context.beginPath();
    context.rect(-w * 0.5, -h * 0.5, w, h); // w and h need to be negative and we can divide by 2 as well
    context.fill(); */

    /*  //drawing the square from the center of the canvas
    context.translate(x,y); // without translate then the point of rotation is the upper left corner of the canvas
    context.rotate(0.3);

    context.beginPath();
    context.rect(-w * 0.5, -h * 0.5, w, h); // w and h need to be negative and we can divide by 2 as well
    context.fill(); */

    //function degrees to radians
    const degToRad = degrees => {
      return degrees / 180 * Math.PI;
    }

     //drawing the circle with reference to the canvas, not the square using save and restore, every transformation will be in blocks like this
    
    
     context.save();
     context.translate(x,y); 
     //context.rotate(0.3); // we are using radians not degrees
     context.rotate(degToRad(45)); // we are using radians not degrees
    //context.rotate(45 / 180 * Math.PI); converting degrees to radians
    
     context.beginPath();
     context.rect(-w * 0.5, -h * 0.5, w, h); 
     context.fill();
     context.restore();

     context.translate(100, 400);
     context.beginPath();
     context.arc( 0, 0, 50, 0, Math.PI * 2);
     context.fill();


  };
};

canvasSketch(sketch, settings);

// transformations are cumulative. we are changing the state of the context, once we move and rotate the paper, it stays there, if we were to draw another shape, it would start from where we left

