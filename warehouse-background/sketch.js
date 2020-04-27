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
  stroke(115,115,115);
  strokeWeight(7);
  rect(50,25,300,75);
  rect(450,25,300,75);


  textSize(22);
  fill(0,0,0,40);
  noStroke();
  textFont('Impact');
  text('DUCK CITY SHIPPING CO.', 295, 20);

  fill(51,26,0); //small cylinder
  stroke(77,40,0);
  strokeWeight(2);
  ellipse(60,295,36,10); //bot ellipse
  noStroke();
  rect(42,245,36,50);
  stroke(77,40,0);
  strokeWeight(2);
  ellipse(60,245,36,10); //top ellipse
  line(42,245,42,295);
  line(78,245,78,295);

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

  fill(114,89,65); //platform
  stroke(96,64,32);
  strokeWeight(3);
  rect(535,110,20,190); //supports
  rect(750,110,20,190);
  rect(535,110,235,20); //top

  fill(51,26,0); //plat cylinder
  stroke(103,53,0,70);
  strokeWeight(3);
  ellipse(720,292,40,16); //bot ellipse
  noStroke();
  rect(700,160,40,132);
  stroke(103,53,0,70);
  strokeWeight(3);
  ellipse(720,160,40,16); //top ellipse
  line(700,160,700,292);
  line(740,160,740,292);

  fill(153,102,51); //plat crate
  stroke(103,53,0);
  strokeWeight(4);
  rect(580,220,90,80);
  line(600,220,600,300);
  line(610,220,610,300);
  line(650,220,650,300);
  line(640,220,640,300);

  fill(153,102,51); //far right crate
  stroke(103,53,0);
  strokeWeight(4);
  rect(285,230,50,70);
  line(285,242,335,242); //top plank
  line(285,250,335,250);
  line(285,270,335,270); //bot plank
  line(285,285,335,285);


}
