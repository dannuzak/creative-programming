const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    context.font = '1200px serif';
    context.textBaseline = 'middle';
    context.textAlign = 'center';   

    context.save();
    context.translate(width * 0.5, height * 0.57);

    context.fillText('A', 0, 0);
    context.restore();
  
  };
};

//npx canvas-sketch sketch-type-07.js --open


canvasSketch(sketch, settings);
