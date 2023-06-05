/* const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const { Pane } = require('tweakpane');
//const Tweakpane = require('tweakpane')


const settings = {
  dimensions: [ 1080, 1080 ]
};

let manager;

const params = {
    star: true,
    dash: true,
    dot: true,
};

let text = 'A';
let fontSize = 1200;
let fontFamily = 'serif';

const typeCanvas = document.createElement('canvas');
const typeContext = typeCanvas.getContext('2d');


const getGlyph = ({ star, dash, dot }) => {
    if (star) return '*';
    if (dash) return '-';
    if (dot) return '.';

   
    // Return a default glyph if none of the parameters match
    return '#';
}  

const sketch = ({ context, width, height }) => {
	const cell = 20;
	const cols = Math.floor(width  / cell);
	const rows = Math.floor(height / cell);
	const numCells = cols * rows;

	typeCanvas.width  = cols;
	typeCanvas.height = rows;


  return ({ context, width, height }) => {
		typeContext.fillStyle = 'black';
		typeContext.fillRect(0, 0, cols, rows);

		fontSize = cols * 1.2; //increasing the size of the main glyph

    typeContext.fillStyle = 'white';
		typeContext.font = `${fontSize}px ${fontFamily}`;
		typeContext.textBaseline = 'top';

    const metrics = typeContext.measureText(text);
		const mx = metrics.actualBoundingBoxLeft * -1;
		const my = metrics.actualBoundingBoxAscent * -1;
		const mw = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
		const mh = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

		const tx = (cols - mw) * 0.5 - mx;
		const ty = (rows - mh) * 0.5 - my;

		typeContext.save();
		typeContext.translate(tx, ty);

    typeContext.beginPath();
    typeContext.rect(mx, my, mw, mh);
    typeContext.stroke();

    typeContext.fillText(text, 0, 0);
    typeContext.restore();
  
    const typeData = typeContext.getImageData(0,0, cols, rows).data;

    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    //aligning the glyphs
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    
    //context.drawImage(typeCanvas, 0, 0);
    //we can stp drawing the small canvas

    for(let i = 0; i < numCells; i++) {
        const col = i % cols; 
        const row = Math.floor(i / cols);
      
        const x = col * cell;
        const y = row * cell;
      
        const r = typeData[ i * 4 + 0];
        const g = typeData[ i * 4 + 1];
        const b = typeData[ i * 4 + 2];
        const a = typeData[ i * 4 + 3];
      
        const glyph = getGlyph({ star: params.star, dash: params.dash, dot: params.dot }); // Call getGlyph function
      
        context.font = `${cell * 2}px ${fontFamily}`;
        if (Math.random() < 0.1) context.font = `${cell * 6}px ${fontFamily}`;
        //increasing the font to six times
      
        context.fillStyle = 'white';
      
        context.save();
        context.translate(x,y);
        context.translate(cell * 0.5, cell * 0.5);
      
        //context.fillRect(0f, 0, cell, cell);
      
        context.fillText(glyph, 0, 0);
        context.restore();
    }
  };
};

const onKeyUp = (e) => {
  text = e.key.toUpperCase();
  manager.render();
}

document.addEventListener('keyup', onKeyUp);

const start = async () => {
  manager = await canvasSketch(sketch, settings);
}


const createPane = () => {
    const pane = new Pane();
    let folder;
  
    folder = pane.addFolder({ title: 'Choose glyph' });
    folder.addInput(params, 'star');
    folder.addInput(params, 'dash');
    folder.addInput(params, 'dot');
  
    // Add a change event listener to update the canvas when inputs change
    folder.on('change', () => {
      manager.render(); // Render the canvas with updated parameters
    });
  };
  

createPane() 
start();
 */

//npx canvas-sketch sketch-project-glyph-and-pane.js --open


/* 

const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const { Pane } = require('tweakpane');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const params = {
    glyph: {
      star: '*',
      dash: '-',
      dot: '.'
    }
  };

let manager;

let text = 'A';
let fontSize = 1200;
let fontFamily = 'serif';

const typeCanvas = document.createElement('canvas');
const typeContext = typeCanvas.getContext('2d');

const sketch = ({ context, width, height }) => {
	const cell = 20;
	const cols = Math.floor(width  / cell);
	const rows = Math.floor(height / cell);
	const numCells = cols * rows;

	typeCanvas.width  = cols;
	typeCanvas.height = rows;


  return ({ context, width, height }) => {
		typeContext.fillStyle = 'black';
		typeContext.fillRect(0, 0, cols, rows);

		fontSize = cols * 1.2; //increasing the size of the main glyph

    typeContext.fillStyle = 'white';
		typeContext.font = `${fontSize}px ${fontFamily}`;
		typeContext.textBaseline = 'top';

    const metrics = typeContext.measureText(text);
		const mx = metrics.actualBoundingBoxLeft * -1;
		const my = metrics.actualBoundingBoxAscent * -1;
		const mw = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
		const mh = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

		const tx = (cols - mw) * 0.5 - mx;
		const ty = (rows - mh) * 0.5 - my;

		typeContext.save();
		typeContext.translate(tx, ty);

    typeContext.beginPath();
    typeContext.rect(mx, my, mw, mh);
    typeContext.stroke();

    typeContext.fillText(text, 0, 0);
    typeContext.restore();
  
    const typeData = typeContext.getImageData(0,0, cols, rows).data;

    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    //aligning the glyphs
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    
    //context.drawImage(typeCanvas, 0, 0);
    //we can stp drawing the small canvas

    for(let i = 0; i < numCells; i++) {
      const col = i % cols; 
      const row = Math.floor(i / cols);

      const x = col * cell;
      const y = row * cell;

      const r = typeData[ i * 4 + 0];
      const g = typeData[ i * 4 + 1];
      const b = typeData[ i * 4 + 2];
      const a = typeData[ i * 4 + 3];
      

      //const glyph = getGlyph(r); // any would do
      context.font = `${cell * 2}px ${fontFamily}`;
      if (Math.random() < 0.1) context.font = `${cell * 6}px ${fontFamily}`;
      //increasing the font to six times
      
      context.fillStyle = 'white';

      context.save();
      context.translate(x,y);
      context.translate(cell * 0.5, cell * 0.5);

      //context.fillRect(0f, 0, cell, cell);

      context.fillText(glyph, 0, 0);
      context.restore();
    }
  };
};

const getGlyph = (v, params) => { // depending on how brigth the pixel is, i want to return different glyphs
 if (v < 50) return '';
 if (v < 100) return '.';
 if (v < 150) return '-';
 if (v < 200) return '+';

 //const glyphs = '_= /'.split('');
 //splits a string into an array of substrings, and returns the array

 //return random.pick(params);
 //Picks a random element from the specified array.
} 

const onKeyUp = (e) => {
  text = e.key.toUpperCase();
  manager.render();
}

document.addEventListener('keyup', onKeyUp);

const start = async () => {
  manager = await canvasSketch(sketch, settings);
}


 const createPane = () => {
    const pane = new Pane();
    let folder;
  
    folder = pane.addFolder({ title: 'Choose glyph' });
    folder.addInput(params, 'glyph', { options: { star: '*', dash: '-', dot: '.'}});
  
  };

 createPane(); 
start();

*/




//npx canvas-sketch sketch-project-glyph-and-pane.js --open

/* const params = {
    glyph: {
      star: '*',
      dash: '-',
      dot: '.'
    }
  }; */

// TASK:
// - using getGlyph method

const canvasSketch = require('canvas-sketch');
const { Pane } = require('tweakpane')

const settings = {
  dimensions: [ 1080, 1080 ]
};

const params = {
    glyph: '*'
};

let manager;
let text = 'A';
let fontSize = 1200;
let fontFamily = 'serif';

const typeCanvas = document.createElement('canvas');
const typeContext = typeCanvas.getContext('2d');

const sketch = ({ context, width, height }) => {
	const cell = 20;
	const cols = Math.floor(width  / cell);
	const rows = Math.floor(height / cell);
	const numCells = cols * rows;
	typeCanvas.width  = cols;
	typeCanvas.height = rows;

  return ({ context, width, height }) => {
		typeContext.fillStyle = 'black';
		typeContext.fillRect(0, 0, cols, rows);
		fontSize = cols;

    typeContext.fillStyle = 'white';
		typeContext.font = `${fontSize}px ${fontFamily}`;

		typeContext.textBaseline = 'top';

    const metrics = typeContext.measureText(text);
		const mx = metrics.actualBoundingBoxLeft * -1;
		const my = metrics.actualBoundingBoxAscent * -1;
		const mw = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
		const mh = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
		const tx = (cols - mw) * 0.5 - mx;
		const ty = (rows - mh) * 0.5 - my;
		typeContext.save();
		typeContext.translate(tx, ty);

    typeContext.beginPath();
    typeContext.rect(mx, my, mw, mh);
    typeContext.stroke();
    typeContext.fillText(text, 0, 0);
    typeContext.restore();
  
    const typeData = typeContext.getImageData(0,0, cols, rows).data;
    console.log(typeData);

    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    
    context.textBaseline = 'middle';
    context.textAlign = 'center';

    context.drawImage(typeCanvas, 0, 0);

    for(let i = 0; i < numCells; i++) {

      const col = i % cols; 
      const row = Math.floor(i / cols);
      const x = col * cell;
      const y = row * cell;

      const r = typeData[ i * 4 + 0];
      const g = typeData[ i * 4 + 1];
      const b = typeData[ i * 4 + 2];
      const a = typeData[ i * 4 + 3];

      

      const glyph = getGlyph(r, params);

      context.font = `${cell * 2}px ${fontFamily}`;
      
      //context.fillStyle = `rgb(${r}, ${g}, ${b})`; we dont ned the gray colors anymore
      context.fillStyle = 'white';
      context.save();
      context.translate(x,y);
      context.translate(cell * 0.5, cell * 0.5);

      //context.fillRect(0, 0, cell, cell);

      context.fillText(glyph, 0, 0);
      context.restore();
    }
  };
};

const getGlyph = (v, params) => {
  if(v < 50) return '';
  // Check the selected glyph from the params object
  const selectedGlyph = params.glyph;

  // Return the corresponding glyph based on the user selection
  if (selectedGlyph === '*') {
    return '*';
  } else if (selectedGlyph === '-') {
    return '-';
  } else if (selectedGlyph === '.') {
    return '.';
  }

  // Return a default glyph if none of the options match
  return '';

}

const createPane = () => {
    const pane = new Pane();
    let folder;
  
    folder = pane.addFolder({ title: 'Choose glyph' });
    folder.addInput(params, 'glyph', { options: { '*': '*', '-': '-', '.': '.' } });

  }
  
  
  createPane();

const onKeyUp = (e) => {
  text = e.key.toUpperCase();
  manager.render();
}

document.addEventListener('keyup', onKeyUp);
const start = async () => {
  manager = await canvasSketch(sketch, settings);
}

start();