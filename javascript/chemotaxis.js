var dots= [];
  
function setup(){
createCanvas(600,600);
background(0);
  for(var i=0;i<1000;i++){
    dots.push(new atom((int)(random(600)+25),(int)(random(550)+25),(int)(random(10)+1)));
  }
  }
   
function draw(){
  background(0);
for(var i=0;i<1000;i++){
 dots[i].show();
 dots[i].move();
 dots[i].avoid();
}
}
class atom{

 constructor(x,y,r){
  this.Xpos=x;
 this.Ypos=y;
 this.size=r; 
 this.col1= parseInt(random(255));
 this.col2= parseInt(random(255));
 this.col3= parseInt(random(255));
  
 }
show(){
   fill(this.col1,this.col2,this.col3);
   stroke(255);
   ellipse(this.Xpos,this.Ypos,this.size,this.size);
   this.col1++;
   this.col2++;
   this.col3++;
   if(this.col1>255){
   this.col1=0;
}
if(this.col2>255){
   this.col2=0;
}
if(this.col2>255){
   this.col2=0;
}

 }
move(){
   this.Xpos= this.Xpos+parseInt(random(8)-4);
   this.Ypos= this.Ypos+parseInt(random(8)-4);
   
   if(this.Xpos<15){
     this.Xpos+=25;
   }
   if(this.Ypos<15){
     this.Ypos+=25;
   }
   if(this.Xpos>585){
     this.Xpos-=25;
   }
   if(this.Ypos>585){
     this.Ypos-=25;
   }
   if(mouseIsPressed==true){
       if(mouseX<this.Xpos){
         this.Xpos-=5;
       }
     else if(mouseX>this.Xpos){
         this.Xpos+=5;
       }
    if(mouseY<this.Ypos){
         this.Ypos-=5;
       }
     else if(mouseY>this.Ypos){
         this.Ypos+=5;
       }
   }       
} 
avoid() {
   if(dist(this.Xpos, this.Ypos, mouseX, mouseY) < 40) {
     this.Xpos = this.Xpos - ((mouseX - this.Xpos)/2);
     this.Ypos = this.Ypos - ((mouseY - this.Ypos)/2);
   }
} 
  
  
}