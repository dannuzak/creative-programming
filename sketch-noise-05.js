const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math')

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

// we need some vars, columns, rows and number of cells. Width and height for grid and cell, and pos x and y for margin.

const sketch = () => {
  return ({ context, width, height, frame }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cols = 10;
    const rows = 10;
    const numCells = cols * rows;

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;
    const margx = (width - gridw) * 0.5;
    const margy = (height -gridh) * 0.5;

// we are not going to use 2 for loops this time but maths

for (let i = 0; i < numCells; i++) {
  const col = i % cols;
  const row = Math.floor(i / cols);

  const x = col * cellw;
  const y = row * cellh;
  const w = cellw * 0.8;
  const h = cellh * 0.8;

  const n = random.noise2D(x + frame * 10,y, 0.001); // noise2d gives us anumber between -1 and 1 and when multiplied by Math.PI we get the equivalent of - 180 degrees to 180 degrees and to see it we need to rotate our context by angle
  //Right now the frequency is too high, because of the big dif between x and y, we fix adding the 3rd param in noise which is frequency. We also add amplitud, not as 4th param of noise, but to angle and the lines start flowing nicely.
  //to animate we add that prop and also as param for the sketch. We add frame to x and multiply it for a bigger number so it is not too slow.

  const angle = n * Math.PI * 0.2;  

  //const scale = (n + 1) / 2 * 30;
  //const scale = (n * 0.5 + 0.5) * 30;
  const scale = math.mapRange(n, -1, 1, 1, 30);

  context.save();
  context.translate(x,y);
  context.translate(margx, margy);
  context.translate(cellw * 0.5, cellh * 0.5);
  context.rotate(angle);

  context.lineWidth = scale;

  context.beginPath();
  context.moveTo(w * -0.5, 0);
  context.lineTo(w * 0.5, 0);
  context.stroke();

  context.restore();
}

  };
};

canvasSketch(sketch, settings);

//npx canvas-sketch sketch-pane-06.js --open