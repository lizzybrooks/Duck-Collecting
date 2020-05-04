let me;

function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();
}

class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y-10,20,20);
        fill("black");
        push();
        noStroke();
        ellipse(this.x+5,this.y-13,5,5);
        pop();
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
        noStroke();
        fill(185,123,0);
        ellipse(this.x+15,this.y+30,20,10);
        fill(244,182,229);
        ellipse(this.x+15,this.y+28,15,5);
        fill(0);
        ellipse(this.x+15.5,this.y+27.5,5,3)
        rect(this.x-3,this.y+35,5,10)
        fill("yellow")
        rect(this.x-2.5,this.y+35.5,4,9)
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
	}  
