const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white'; //canvas color
    context.fillRect(0, 0, width, height); //canvas
  
    context.beginPath();
    context.arc(300, 300, 100, 0, Math.PI * 2);
    context.stroke();

    context.beginPath();
    context.rect(100, 100, 400, 400);
    //context.fill();
    context.stroke();
   
    for (let i = 0; i < 5; i++) {
      context.beginPath();
      context.rect(100 + 80 * i, 100, 60, 60); //x, y, w, h   60 in x times the number of iterations is where the next square will start
      context.stroke();
    }
  
  };

    
};

canvasSketch(sketch, settings);
