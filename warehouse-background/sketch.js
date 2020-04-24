//create an empty array called balls

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(128,128,128);
  fill(178,178,178);
  stroke(115,115,115);
  strokeWeight(6);
  rect(0,264,800,136); //floor

  fill(163,204,255); //windows
  strokeWeight(10);
  rect(50,25,300,75);
  rect(450,25,300,75);

  stroke(134,89,45); //right crate: 10 width planks
  strokeWeight(3);
  fill(220,160,102);
  rect(165,170,100,130);
  line(210,170,210,300); //verticle left
  line(220,170,220,300); //verticle right

  line(165,230,210,230); //hor mid top left
  line(220,230,265,230); //hor mid top right
  line(165,240,210,240); //hor mid bot left
  line(220,240,265,240); //hor mid bot right

  line(165,190,210,190); //hor top top left
  line(220,190,265,190); //hor top top right
  line(165,200,210,200); //hor top bot left
  line(220,200,265,200); //hor top bot right

  line(165,270,210,270); //hor bot top left
  line(220,270,265,270); //hor bot top right
  line(165,280,210,280); //hor bot bot left
  line(220,280,265,280); //hor bot bot right



  stroke(96,64,32); //left crate: 20 width planks
  strokeWeight(3);
  fill(220,160,102);
  rect(85,200,100,100);
  line(125,200,125,240); //verticle  left
  line(125,260,125,300);
  line(145,200,145,240); //right
  line(145,260,145,300);

  line(85,240,185,240); //horizontal
  line(85,260,185,260);


  fill(134,89,45); //ladder
  stroke(134,89,45);
  strokeWeight(2);
  ellipse(475,175,10,250); //sides
  ellipse(521,175,10,250);
  ellipse(498,280,70,5); //first rung
  ellipse(498,250,70,5); //second rung
  ellipse(498,220,70,5); //third rung
  ellipse(498,190,70,5); //fourth rung
  ellipse(498,160,70,5); //fifth rung
  ellipse(498,130,70,5); //sixth rung
  ellipse(498,100,70,5); //seventh rung
  ellipse(498,70,70,5); //eighth rung
}
