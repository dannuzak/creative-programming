/* const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white'; //canvas color
    context.fillRect(0, 0, width, height); //canvas
  
 */
    /* context.beginPath();
    context.fillStyle = 'yellow'; //rectangles color
    context.fillRect(100, 100, 400, 400); // it draws the rect, doesnt need fill or stroke
    //context.rect(100, 100, 400, 400); // needs context.fill and context.stroke
    //context.fill();
    //context.stroke(); */
    
/*     context.beginPath();
    context.arc(300, 300, 100, 0, Math.PI * 2);
    context.stroke();

    context.lineWidth = 3;
   
    for (let i = 0; i < 5; i++) {
      context.beginPath();
      context.arc(300 + 100 * i, 300, 50, 0, Math.PI * 2); //x, y, w, h   60 in x times the number of iterations is where the next square will start
      context.fillStyle = 'yellow';
      context.fill();
      context.stroke(); 

    } */

const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

    const settings = {
      dimensions: [ 1080, 1080 ]
    };
    
   

    const sketch = () => {
      return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);
    
        context.fillStyle = 'orange';

    /*     
    
    // creating a little star
        const x = width * 0.5;
        const y = height * 0.5;
        const w = width * 0.01; // we change the width
        const h = height * 0.1;

        const num = 12; // we want 12 slices

        for (let i = 0; i < num; i++) { // we need to change the angle of rotation based on the index of the loop
          const slice = degToRad(360 / num); // we divide 360 among # slices
          console.log('slice', slice);
          const angle = slice * i;
          console.log('angle', angle);
    
          context.save();
          context.translate(x,y); 
          //context.rotate(0.3); // we are using radians not degrees
          context.rotate(angle); // we are using radians not degrees
          //context.rotate(45 / 180 * Math.PI); converting degrees to radians
       
          context.beginPath();
          context.rect(-w * 0.5, -h * 0.5, w, h); 
          context.fill();
          context.restore();
   
        } */

// creating a sun with the slices

        const cx = width * 0.5;  // the center of our circle, we rename
        const cy = height * 0.5;
    
        const w = width * 0.01;
        const h = height * 0.2;
        let x, y; // we declare them with let cause we will modify their values within the loop
        
        const num = 40;
        const radius = width * 0.2; // space between the slices

        for (let i = 0; i < num; i++) { // we need to change the angle of rotation based on the index of the loop
          const slice = math.degToRad(360 / num);
          const angle = slice * i;

          x = cx + radius * Math.sin(angle);
          y = cy + radius * Math.cos(angle); 

          context.save();
          context.translate(x,y);
          context.rotate(-angle);
          context.scale(random.range(0.2, 2.5), random.range(1, 2));

          context.beginPath();
          context.rect(-w * 0.5, -h * 0.5, w, h);
          context.fill();
          context.restore();

          context.save();
          context.translate(cx,cy);
          context.rotate(-angle);
         
          context.beginPath();
          context.fillStyle = 'yellow';
          context.arc(0, 0, 200, 0, Math.PI * 2);
          context.fill();
          context.restore();

          
        }; 
  };  
};

canvasSketch(sketch, settings);

//npx canvas-sketch sketch-project-draft-10.js --open