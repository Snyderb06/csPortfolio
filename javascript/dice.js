var first;
var dice2;
var third;
var sum;
function setup()
{
  createCanvas(350,400);
  sum=0;
  first= new Die(50,100);
  dice2= new Die(150,100);
  third= new Die(250,100);
  background(0);
    
}
function draw()
{
  background(0);
 fill(255);
 textSize(15);
 text("Try To Get The Score Within 495 to 505",width/2- textWidth("Try To Get The Score Within 495 to 505")/2,50);
first.show();
dice2.show();
third.show();
rect(width/2-25,320,50,25,100);
fill(0);
text("Roll",width/2-textWidth("ROLL")/2,335);
fill(255);
sum= first.getScore()+dice2.getScore()+third.getScore();
text(sum,width/2-textWidth(""+sum)/2,300);
if(sum>495 && sum<505){
  textSize(30);
  text("Winner",width/2-textWidth("Winner")/2,250);

}

}
function mousePressed()
{
  if(sum>495){
    setup();
  }
  if(mouseX>width/2-25 && mouseX<width/2+25&& mouseY>320 &&mouseY<345){
first.roll();
dice2.roll();
third.roll(); 
  }
}
class Die //models one single dice cube
{
    constructor(x, y) //constructor
    {
        this.x=x;
        this.y=y;
      this.score=0;
      this.rollNum=0;
    }
    roll()
    {
       this.rollNum= (int)(Math.random()*6+1);
       this.score+=this.rollNum;
       return this.rollNum;
    }
    show()
    {
      
        fill(255);
        rect(this.x,this.y,50,50,5);
        fill(50);
        if(this.rollNum==1){
          ellipse(this.x+25,this.y+25,10,10);
        }
         else if(this.rollNum==2){
          ellipse(this.x+15,this.y+15,10,10);
          ellipse(this.x+35,this.y+35,10,10);
         
        }
        else if(this.rollNum==3){
          ellipse(this.x+15,this.y+15,10,10);
          ellipse(this.x+35,this.y+35,10,10);
          ellipse(this.x+25,this.y+25,10,10);
        }
        else if(this.rollNum==4){
          ellipse(this.x+15,this.y+15,10,10);
          ellipse(this.x+35,this.y+35,10,10);
          ellipse(this.x+15,this.y+35,10,10);
          ellipse(this.x+35,this.y+15,10,10);
        }
         else if(this.rollNum==5){
          ellipse(this.x+15,this.y+15,10,10);
          ellipse(this.x+35,this.y+35,10,10);
          ellipse(this.x+15,this.y+35,10,10);
          ellipse(this.x+35,this.y+15,10,10);
          ellipse(this.x+25,this.y+25,10,10);
        }
        else if(this.rollNum==6){
          ellipse(this.x+15,this.y+10,10,10);
          ellipse(this.x+35,this.y+40,10,10);
          ellipse(this.x+15,this.y+40,10,10);
          ellipse(this.x+35,this.y+10,10,10);
          ellipse(this.x+15,this.y+25,10,10);
          ellipse(this.x+35,this.y+25,10,10);
        }
        fill(255);
       
    }
    getScore(){
      return this.score;
    }
}