function setup() {
  var canvas=createCanvas(650,500);

}

function draw() {	
//background
background(102,0,204);
	fill(102,0,204);
rect(0,0,650,500);
fill(0,75,0);
noStroke();
rect(0,300,650,200)
//mountains
	fill(64);
	stroke(0);
	triangle(-50,350,50,200,150,350);
	triangle(75,350,175,200,275,350);
	triangle(200,350,300,200,400,350);
	triangle(325,350,425,200,525,350);
	triangle(450,350,550,200,650,350);
	triangle(575,350,675,200,775,350);
	//waterfall
	fill(0,0,255);
	ellipse(360,370,75,45);
	rect(350,290,25,70);
	//sky
	fill(192);
	ellipse(60,100,60,40);
	ellipse(222,30,60,40);
	ellipse(354,123,60,40);
	ellipse(500,75,60,40);
}