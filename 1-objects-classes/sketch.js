//create a variable to hold one ball
let b;
let anotherBall;
let thirdBall;
let firstTree;
let secondTree;
let firstFace
let secondFace

function setup() {
  createCanvas(1000, 500);
  b = new Bird(0, 100,"red"); //make a new ball from the Ball class and call it b.
  anotherBall = new Bird(200,20,"green");
  thirdBall = new Bird(145,75,"yellow")
  firstTree = new Tree(20,55, "pink")
  secondTree = new Tree(250,100, "orange")
  firstFace = new Face(0,300, "purple",2)
  secondFace = new Face(0,200,"teal",5)
}


function draw(){
	background(220);
    b.drawBird(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBird(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBird();
    anotherBall.moveBird();
    thirdBall.drawBird();
    thirdBall.moveBird();
    firstTree.drawTree();
    firstTree.moveTree();
    secondTree.drawTree();
    secondTree.moveTree();
    firstFace.drawFace();
    firstFace.moveFace();
    secondFace.drawFace();
    secondFace.moveFace();

}


//ball class from which to create new balls with similar properties.
class Bird {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawBird(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,30,30);
	}
	moveBird(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}
}

class Tree{

  constructor(x,y,color){
    this.x = x;
    this.y = y;
    this.color = color;
  }
  drawTree(){  // draw a ball on the screen at x,y
        stroke(0);
        fill(this.color);
        rect(this.x,this.y,15,45,40,50);
  }
  moveTree(){ //update the location of the ball, so it moves across the screen
    this.x = this.x+2;
    this.y = this.y+.5;
  }

}

class Face{

  constructor(x,y,color,speed){
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = speed;
  }

  drawFace(){  // draw a ball on the screen at x,y
        stroke(0);
        fill(this.color);
        ellipse(this.x,this.y,100,100);
        line(this.x-10,this.y+30,this.x+10,this.y+30)
        fill("blue")
        ellipse(this.x-20,this.y,25.5,25.5)
        ellipse(this.x+20,this.y,25.5,25.5)

  }
  moveFace(){ //update the location of the ball, so it moves across the screen
    this.x = this.x+this.speed;
    this.y = this.y+.5;
  }
}
