/*
 * @name Objects
 * @description Create a Jitter class, instantiate an object,
 * and move it around the screen. Adapted from Getting Started with
 * Processing by Casey Reas and Ben Fry.
 
 * 160720:
 * objects example edited.
 * [ https://github.com/processing/p5.js/issues/193 ]
 * window.onresize added and canvas variable
 * see: ftp://talonen.asuscomm.com/sda1/public/objects/index.html
 
 
 */
var bug;  // Declare object
var canvas;
var pmillis;

function setup() {
  // createCanvas(710, 400);

  const canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('sketch-holder'); // https://happycoding.io/examples/p5js/fireworks
  // Create object
  bug = new Jitter();
  pmillis = 0;
}

function draw() {
  //background(50, 89, 100);
  stroke(110);
  rect(0,200,width,height);
  stroke(0);
  bug.move();
  bug.display();
  text(frameCount, width/2, height/2);
  var milli = millis();
  text(milli - pmillis, width/2, height/2+20);
  
  line(frameCount % width,0,(frameCount+1) % width,(milli - pmillis)*4);
  pmillis = milli;
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};

// 160720
// https://p5js.org/examples/demos/Hello_P5_Interactivity_1.php
// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  // var d = dist(mouseX, mouseY, 360, 200);
  //if (d < 100) {
    // Pick new random color values
  //  r = random(255);
  //  g = random(255);
  //  b = random(255);
  // }
  bug = new Jitter();
  
}


// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 3;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};
