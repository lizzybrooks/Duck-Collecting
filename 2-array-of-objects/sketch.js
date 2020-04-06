//create an empty array called balls

let balls = [];
let squares = [];


function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(220);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
  for (let i = 0; i < squares.length; i++) {
	    squares[i].drawsquare();
      squares[i].movesquare();
}
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    let  c = new Ball(100, 100,20,"blue", 3,2);
    balls.push(c);
    console.log(balls);
  }
   if (keyCode === RIGHT_ARROW) {
    let  c = new square(100, 100,20,"red", 2,5);
    squares.push(c);
    console.log(squares);
  }
}
// function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
//   let  b = new Ball(100, 100,20,"blue", 5,10);
//   balls.push(b);
//   console.log(balls);
// }
// let  c = new Ball(100, 100,20,"red", 2,5);
// Balls.push(c);
// console.log(Balls);
// }
// function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
//   let  c = new square(100, 100,20,"red", 2,5);
//   squares.push(c);
//   console.log(squares);
// }

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,size,color,speed,speed2){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.size=size;
        this.speed=speed;
        this.speed2=speed2;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,this.size,this.size);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.speed;
		this.y = this.y+this.speed2;
    if (this.x == 700){
      this.speed= -this.speed;
    }
    if (this.y == 350){
      this.speed2= -this.speed2;
    }
    if (this.x == 10){
      this.speed= -this.speed;
    }
    if (this.y == 0){
      this.speed2= -this.speed2;
    }
	}
}class square {

	constructor(x,y,size,color,speed,speed2){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.size=size;
        this.speed = speed;
        this.speed2 = speed2;
	}
	drawsquare(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    rect(this.x,this.y,this.size,this.size);
	}
	movesquare(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.speed;
		this.y = this.y+this.speed2;
  if (this.x == 750){
    this.speed= -this.speed;
  }
  if (this.y == 375){
    this.speed2= -this.speed2;
  }
  if (this.x == 0){
    this.speed= -this.speed;
  }
  if (this.y == 0){
    this.speed2= -this.speed2;
  }
  }
}
