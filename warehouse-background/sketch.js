//create an empty array called balls

let balls = [];
let squares = [];


function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(128,128,128);
  fill(178,178,178);
  stroke(115,115,115);
  strokeWeight(6);
  rect(0,264,800,136);

  fill(77,166,255);
  strokeWeight(10); //windows
  rect(50,25,300,75);
  rect(450,25,300,75);

  stroke(96,64,32);
  strokeWeight(3);
  fill(220,160,102);
  rect(85,200,100,100);
}
