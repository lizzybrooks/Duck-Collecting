let farmhouse;
let rowboat;
let truck;
let me;
let ducks;

function preload() {
farmhouse = loadImage('pictures/farmhouse.png')
rowboat = loadImage('pictures/rowboat.png')
truck = loadImage('pictures/truck.png')
}

function setup() {
  createCanvas(800,400);
  me = new Avatar(width/2,300,3)
  ducks = new Duck(780,98)
}

function draw() {
  background("lightblue");
  fill("green");
  rect(0,200,800,400);
  fill(104,185,225);
  ellipse(600,275,200,75);
  noStroke();
  fill("white");
  cloud(200,30)
  cloud(500,40)
  cloud(350,45)
  cloud(650,65)
  cloud(50,68)
  cloud(800,55)

  image(truck,400,185, truck.width/2.5, truck.height/2.5)
  image(rowboat,600,250, rowboat.width/3, rowboat.height/3)
  image(farmhouse,150,60, farmhouse.width / 1.2, farmhouse.height / 1.2)

  me.drawMe();
  me.moveMe();

  field(25,270)
  field(50,270)
  field(75,270)
  field(100,270)
  field(125,270)
  field(150,270)
  field(25,280)
  field(50,280)
  field(75,280)
  field(100,280)
  field(125,280)
  field(150,280)
  field(25,290)
  field(50,290)
  field(75,290)
  field(100,290)
  field(125,290)
  field(150,290)
  field(25,300)
  field(50,300)
  field(75,300)
  field(100,300)
  field(125,300)
  field(150,300)
  field(25,310)
  field(50,310)
  field(75,310)
  field(100,310)
  field(125,310)
  field(150,310)
  field(25,320)
  field(50,320)
  field(75,320)
  field(100,320)
  field(125,320)
  field(150,320)

 ducks.drawDuck();

}

class Avatar{

  constructor(x,y,speed){
    this.x = x
    this.y = y
    this.speed = speed
  }

  drawMe(){
    stroke("black");
    push()
    strokeWeight(3);
    line(this.x,this.y,this.x,this.y+20)
    line(this.x,this.y+20,this.x-10,this.y+30)
    line(this.x,this.y+20,this.x+5,this.y+25)
    line(this.x+5,this.y+25,this.x+2.5,this.y+30)
    line(this.x,this.y+7.5,this.x-5,this.y+12.5)
    line(this.x-5,this.y+12.5,this.x+5,this.y+17.5)
    pop()
    strokeWeight(1);
    fill("blue");
    ellipse(this.x,this.y,10,10)
  }

  moveMe(){
    if (keyIsDown(UP_ARROW)){
      this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)){
      this.y += this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)){
      this.x += this.speed;
    }

    if (keyIsDown(LEFT_ARROW)){
      this.x -= this.speed;
    }
  }
}

class Duck{

  constructor(x,y){
    this.x = x
    this.y = y
  }

  drawDuck(){
    fill(255,219,77)
    noStroke()
    ellipse(this.x,this.y,10,8)
  }

  moveDuck(){
  }

  collectDuck(){
    if (this.x >= me.x-15, this.x<= me.x+15, this.y > me.y-40, this.y < me.y+40){
      this.x = this.x-680;
      this.y = this.y-78;
    }
  }
}

function cloud(x,y){
  noStroke();
  fill("white");
  ellipse(x,y,40,20)
  ellipse(x-25,y+5,40,20)
  ellipse(x,y+10,40,20)
  ellipse(x+25,y+5,40,20)
}

function wheat(x,y){
  // x=100 y=300
  stroke(1)
  fill(219,153,0)
  rect(x,y,5,30)
  ellipse(x+3,y,7,13)
  ellipse(x+3,y+2,6,8)
  // ellipse(x+5,y+1,4,8)
}

function field(x,y){
  // x=100 y=300
  wheat(x,y)
  wheat(x+5.5,y)
  wheat(x-5.5,y)
  wheat(x-11,y)
  wheat(x+11,y)
  wheat(x+2,y+5)
  wheat(x+7.5,y+5)
  wheat(x+13,y+5)
  wheat(x-4.5,y+5)
  wheat(x-9,y+5)
}
