function setup() {
  
  createCanvas(480, 500);
  
}

function draw() {
  var they= "They";
  var can= "can be";
  var clr="colorful!";
background(0);
fill(255);
textSize(20);
text("This is a string",20,40);
fill(random(255),random(255),random(255));
text(they,40,100);
fill(random(255),random(255),random(255));
text(can,90,100);
fill(random(255),random(255),random(255));
text(clr,160,100);
textSize(random(35,40));
fill(255);
text("Or",40,150);
textSize(random(35,40));
text("any",90,150);
textSize(random(35,40));
text("size!",170,150);
}