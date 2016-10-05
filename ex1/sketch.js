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
var cnv;
var dx = 700;
var dy = 400;
var sb = 5;
var onlink = false;
var numSegments = 14,
  x = [],
  y = [],
  angle = [],
  segLength = 26,
  targetX, targetY;

for (var i = 0; i < numSegments; i++) {
  x[i] = 0;
  y[i] = 0;
  angle[i] = 0;
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(700, 400);
  centerCanvas();
  background(255, 0, 200);
  strokeWeight(20);
  stroke(255, 100);

  x[x.length-1] = width/2; // Set base x-coordinate
  y[x.length-1] = height/2;  // Set base y-coordinate
}

function windowResized() {
  centerCanvas();
}

function draw() {

background(0,30,0);
	fill(200);


  if ((mouseX>60) && (mouseX<160) && (mouseY>53) && (mouseY<68)) {
	onlink = true;
  } else {
	onlink = false;
  }

  if (onlink) {
  	strokeWeight(4);
  } else {
	strokeWeight(2);
  }
  stroke(255, 100);
   

  if ((mouseIsPressed) && (onlink)) {
	link("http://users.ics.aalto.fi/talonen/","_new","");
  }

	text("jaakko.me",60,60);

  strokeWeight(20);
  stroke(255, 100);

  reachSegment(0, mouseX, mouseY);
  for(var i=1; i<numSegments; i++) {
    reachSegment(i, targetX, targetY);
  }
  for(var j=x.length-1; j>=1; j--) {
    positionSegment(j, j-1);
  }
  for(var k=0; k<x.length; k++) {
    segment(x[k], y[k], angle[k], (k+1)*2);
  }

 stroke(0);
 fill(0);
 rect(0,0,dx,sb);
 rect(0,dy-sb,dx,dy);
 rect(0,0,sb,dy);
 rect(dx-sb,0,dx,dy);

}

function positionSegment(a, b) {
  x[b] = x[a] + cos(angle[a]) * segLength;
  y[b] = y[a] + sin(angle[a]) * segLength;
}

function reachSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  angle[i] = atan2(dy, dx);
  targetX = xin - cos(angle[i]) * segLength;
  targetY = yin - sin(angle[i]) * segLength;
}

function segment(x, y, a, sw) {
  strokeWeight(sw);
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}


function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}
