const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white'; //canvas color
    context.fillRect(0, 0, width, height); //canvas
  

    /* context.beginPath();
    context.fillStyle = 'yellow'; //rectangles color
    context.fillRect(100, 100, 400, 400); // it draws the rect, doesnt need fill or stroke
    //context.rect(100, 100, 400, 400); // needs context.fill and context.stroke
    //context.fill();
    //context.stroke(); */
    
    context.beginPath();
    context.arc(300, 300, 100, 0, Math.PI * 2);
    context.stroke();

    context.lineWidth = 3;
   
    for (let i = 0; i < 5; i++) {
      context.beginPath();
      context.arc(300 + 100 * i, 300, 50, 0, Math.PI * 2); //x, y, w, h   60 in x times the number of iterations is where the next square will start
      context.fillStyle = 'yellow';
      context.fill();
      context.stroke();

    }
  
  };

    
};

canvasSketch(sketch, settings);

//npx canvas-sketch sketch-project-draft-10.js --open