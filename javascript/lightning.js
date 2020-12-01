var startY= 0;
var startX = 240;
var endY = 0;
var endX = 500;


function setup() {
	createCanvas(500, 500);
	strokeWeight(5);
	background(0,0,0);
}


function draw() {
	stroke((int)(random(255))-254);
	
	while(endY<500){
		endY=startY+(int)(random(10));
		endX=startX+(int)(random(50)-25);
										 line(startX,startY,endX,endY);
	 startX=endX;
	 startY=endY;
										 }
	fill(64);
	stroke(0);
	ellipse(60,100,200,80);
	ellipse(222,30,200,80);
	ellipse(354,123,200,80);
	ellipse(500,75,200,80);
	
	fill(255,0,0);
	stroke(255,0,0);
	triangle(endX-20,endY,endX,endY-20,endX+20,endY);
	fill(255,105,0);
	triangle(endX-15,endY,endX,endY-15,endX+15,endY);
					 }
function mousePressed(){
	startY = 0;
	startX=250;
	endY=0;
	endX=250;
	clear();

}
