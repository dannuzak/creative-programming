

// TASKS:
// using simplex noise algorythm
const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

// we need some vars, columns, rows and number of cells. Width and height for grid and cell, and pos x and y for margin.

const sketch = () => {
  return ({ context, width, height }) => {
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
    const margy = (height - gridh) * 0.5;

// we need to go over each cell of the grid, we are not going to use 2 for loops this time but maths, 

for (let i = 0; i < numCells; i++) {
// cols = 4 and rows = 3
const col = i % cols; // while i increases in steps of 1, the value of col is modulating between 0 and 3, which is what we need to find the grid cells in the x axis
const row = Math.floor(i / cols);
// every 4 steps the value of rows is increasing by 1


 const x = col * cellw;
 const y = row * cellh;
 const w = cellw * 0.8;
 const h = cellh * 0.8;

 context.save();
 //context.translate(x, y); 
 //context.translate(margx, margy); // we need to take the margins into account when trasnlating the context
 //context.translate(cellw * 0.5, cellh * 0.5);
 // w/o this one we are drawing the lines from the center of each grid cell

 //OR

 context.translate(x + margx + cellw * 0.5, y + margy+ cellh * 0.5);

 context.lineWidth = 4;

 context.beginPath();
 context.moveTo(w * -0.5, 0);
 context.lineTo(w * 0.5, 0);
 context.stroke();

 context.restore();
}

  };
};

canvasSketch(sketch, settings);


//npx canvas-sketch sketch-noise-05.js --open

