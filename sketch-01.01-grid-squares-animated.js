const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1000, 1000],
  animate: true,
};

class Grid {
  constructor(w, h, gap, ix, iy, off) {
    this.w = w;
    this.h = h;
    this.gap = gap;
    this.ix = ix;
    this.iy = iy;
    this.off = off;
  }
}

const brown = '#7E1717';
const darkBlue = '#068DA9';
const lightBlue = '#ECF8F9';
const orange = '#E55807';

class Square {
  constructor(grid, x, y) {
    this.grid = grid;
    this.x = x;
    this.y = y;
  }

  draw(context) {
    context.save();
    context.beginPath();
    context.strokeStyle = lightBlue;
    context.rect(this.x, this.y, this.grid.w, this.grid.h);
    context.fillStyle = darkBlue;
    context.fill();
    context.stroke();

    if (Math.random() > 0.5) {
      context.beginPath();
      context.fillStyle = orange;
      const offset = this.grid.off / 2;
      context.rect(
        this.x + offset,
        this.y + offset,
        this.grid.w - this.grid.off,
        this.grid.h - this.grid.off
      );
      context.stroke();
      context.fill();
    }

    context.restore();
  }
}

const sketch = () => {
  const squares = [];

  const w = settings.dimensions[0] * 0.1;
  const h = settings.dimensions[1] * 0.1;
  const gap = settings.dimensions[0] * 0.03;
  const ix = settings.dimensions[0] * 0.17;
  const iy = settings.dimensions[1] * 0.17;
  const off = settings.dimensions[0] * 0.02;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const x = ix + (w + gap) * i;
      const y = iy + (h + gap) * j;
      squares.push(new Square(new Grid(w, h, gap, ix, iy, off), x, y));
    }
  }

  return ({ context, width, height, time }) => {
    context.fillStyle = brown;
    context.fillRect(0, 0, width, height);

    context.lineWidth = width * 0.01;

    squares.forEach((square) => {
      square.draw(context, time * 0.2);
    });
  };
};

canvasSketch(sketch, settings);

 
//npx canvas-sketch sketch-01.01-grid-squares-animated.js --open