let farmhouse;

function preload() {
farmhouse = loadImage('pictures/farmhouse.png')
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background("lightblue");
  fill("green");
  rect(0,200,800,400);
  fill("blue");
  ellipse(600,275,200,75);
  noStroke();
  fill("white");
  cloud(200,30)
  cloud(500,40)
  cloud(350,45)
  cloud(650,65)
  cloud(50,68)
  cloud(800,55)
  //fill("red");
  //rect(150,110,200,170)

  image(farmhouse,150,100, farmhouse.width / 1.5, farmhouse.height / 1.5)
}

function cloud(x,y){
  noStroke();
  fill("white");
  ellipse(x,y,40,20)
  ellipse(x-25,y+5,40,20)
  ellipse(x,y+10,40,20)
  ellipse(x+25,y+5,40,20)
}
