// TASKS
// - using the simplex noise algorythm
// - using noise2D and noise 3D from canvas library

/* const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math')

const settings = {
  dimensions: [ 1080, 1080 ],
};

// we need some vars, columns, rows and number of cells. Width and height for grid and cell, and pos x and y for margin.

const sketch = () => {
  return ({ context, width, height, frame }) => {
    context.fillStyle = 'pink';
    context.fillRect(0, 0, width, height);

    const cols = 10;
    const rows = 10;
    const numCells = cols * rows;

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;

// we are not going to use 2 for loops this time but maths

for (let i = 0; i < numCells; i++) {  
  // cols = 4 and rows = 3
  const col = i % cols; // while i increases in steps of 1, the value of col is modulating between 0 and 3, which is what we need to find the grid cells in the x axis
  const row = Math.floor(i / cols);
  // every 4 steps the value of rows is increasing by 1

  const x = col * cellw;
  const y = row * cellh;
  const w = cellw * 0.8; // %80
  const h = cellh * 0.8;

  const n = random.noise2D(x, y, 0.001);
  // noise2d gives us a number between -1 and 1 and when multiplied by Math.PI we get the equivalent of - 180 degrees to 180 degrees and to see it we need to rotate our context by angle
  //Right now the frequency is too high, because of the big dif between x and y, we fix adding the 3rd param in noise which is frequency. 
  //We also add amplitud, not as 4th param of noise2D, but to const angle and the lines then start flowing nicely.

  const angle = n * Math.PI * 0.2; // 0.2 is amplitud  


// These formulas are doing the same thing 
//   const scale = (n + 1) / 2 * 30;
//   const scale = (n * 0.5 + 0.5) * 30;
  const scale = math.mapRange(n, -1, 1, 1, 30);
 //value, inputMin, inputMax, outputMin, outputMax, clamp = false)

  context.save();
  context.translate(x,y);
  context.translate(margx, margy);
  context.translate(cellw * 0.5, cellh * 0.5);
  context.rotate(angle);

  context.lineWidth = scale;
  context.beginPath();
  context.moveTo(w * -0.5, 0); // minus half of the width of the line
  context.lineTo(w * 0.5, 0);
  context.stroke();

  context.restore();
}

  };
};

canvasSketch(sketch, settings); 
 */
//npx canvas-sketch sketch-noise-05.01.js --open


// TASKS
// - animating the grid using frame

 
const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math')

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

const sketch = () => {
  return ({ context, width, height, frame }) => {
    context.fillStyle = 'pink';
    context.fillRect(0, 0, width, height);

    const cols = 4;
    const rows = 3;
    const numCells = cols * rows;

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;

for (let i = 0; i < numCells; i++) {    
  const col = i % cols; 
  const row = Math.floor(i / cols);

  const x = col * cellw;
  const y = row * cellh;
  const w = cellw * 0.8; // %80
  const h = cellh * 0.8;

  const n = random.noise2D(x + frame * 10, y, 0.001);
  //to animate we add that prop and also as param for the sketch. We add frame to x and multiply it for a bigger number so it is not too slow.

  const angle = n * Math.PI * 0.2; // 0.2 is amplitud  

  const scale = math.mapRange(n, -1, 1, 1, 30);

  context.save();
  context.translate(x,y);
  context.translate(margx, margy);
  context.translate(cellw * 0.5, cellh * 0.5);
  context.rotate(angle);

  context.lineWidth = scale;
  context.beginPath();
  context.moveTo(w * -0.5, 0); // minus half of the width of the line
  context.lineTo(w * 0.5, 0);
  context.stroke();

  context.restore();
}

  };
};

canvasSketch(sketch, settings); 

//npx canvas-sketch sketch-noise-05.01-noise-effect.js --open
