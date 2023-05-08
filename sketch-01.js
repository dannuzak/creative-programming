const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {  // drawing a big white rectangle
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);	
  };
};

canvasSketch(sketch, settings);