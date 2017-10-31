// rain
// https://p5js.org/reference/


// https://www.youtube.com/watch?v=S1TQCi9axzg
// BASED ON : Guest Tutorial #4: Matrix Digital Rain in p5.js with Emily Xie

// ------------------------------------------------
// global variable
// ------------------------------------------------
// var symbol; // we can access this anywhere
var symbolSize = 14;
var i=0;
var streams = [];

function setup() {
var myCanvas = createCanvas(
window.innerWidth,
window.innerHeight,
);

myCanvas.position(0, 0);

// stream = new Stream();


var x = 0;
// we want that random value... var y= 0;

for (var i = 0; i <= width / symbolSize; i++) {
var stream = new Stream();
stream.generateSymbols(x,random(-1000,0));
streams.push(stream);
x += symbolSize;

}

stream.generateSymbols();

// symbol = new Symbol(width/2, 0, random(5,10) );
// symbol.setToRandomSymbol();
textSize(symbolSize);
}
// ------------------------------------------------

// ------------------------------------------------
// draw()
// ------------------------------------------------
function draw() {
// background(0,0,0);
background(255,255,255,200); // blurred effect
// background(0,0,0,3); // blurred effect huge....
// ellipse(5,6,20,30);
// symbol.render();
// i = i + 1;
// console.log(i);

// stream.render();

// for each item
streams.forEach(function(stream) {
stream.render();
});


}

// ------------------------------------------------
// SYMBOL
// ------------------------------------------------
function Symbol(x,y,speed,first) {
// properties
this.x = x;
this.y = y;
this.value;
this.speed = speed;
this.switchInterval = round(random(20,70)); // each symbol has different interval
this.first = first; // first property - is a first in the stream
// ------------------------------------------------
this.setToRandomSymbol = function() {
if (frameCount % this.switchInterval == 0) {
this.value = String.fromCharCode(
0x30A0 + round(random(0,96))
);
}
}
// ------------------------------------------------
// move characters - rain function
this.rain = function() {
if (this.y >= height) {
this.y = 0;

} else {
this.y += this.speed;
}
// the same as above (): this.y = (this.y >= height) ? 0 : this.y += this.y + speed;
}
}
// ------------------------------------------------
function Stream() {

this.symbols = [];
// each stream should know how many symbols it has
this.totalSymbols = round(random(5,30));
this.speed = random(12,20);

// creates symbols
this.generateSymbols = function(x,y) {

var first = round(random(0,4)) == 1; // true; // so, instead of setting always true, have equation false / true
// loop()

for (var i = 0; i <= this.totalSymbols; i++) {
symbol = new Symbol(x,y,this.speed, first);
symbol.setToRandomSymbol();
this.symbols.push(symbol); // push to symbol array
y -=symbolSize; // below each symbol
first = false;
}
}

this.render = function() {

this.symbols.forEach(function(symbol) {
// ------------------------------------------------
// this is called every round.. and
if (symbol.first) {
fill(180,255,180);
fill(50,120,60);

} else {
fill(0,255,70);
fill(50,255,130);
}

text(symbol.value, symbol.x, symbol.y);
symbol.rain();
symbol.setToRandomSymbol(); // changes symbol .. 60 frames / second


}
)
}

}

