var hhand, shand, mhand;
var hangle, sangle, mangle;

function setup(){

  createCanvas(400,400);
  angleMode(DEGREES);



  

}
function draw(){
  background(0);
  translate(200,200);
  rotate(-90);
 
  hhand= hour();
  mhand= minute();
  shand= second();

  sangle= map(shand,0,60,0,360);
  mhand= map(mhand,0,60,0,360);
  hhand= map(hhand%12,0,12,0,360);

  push();
  rotate(sangle);
  stroke(255,0,0);
  strokeWeight(8);
  line(0,0,100,0);
  pop();

  push();
  rotate(mangle);
  stroke(0,255,0);
  strokeWeight(8);
  line(0,0,75,0);
  pop();
  

  push();
  rotate(hangle);
  stroke(0,0,255);
  strokeWeight(8);
  line(0,0,50,0);
  pop();
  noFill();
  strokeWeight(10);

  stroke(255,0,0);
  arc(0,0,300,300,0,sangle);

  stroke(0,255,0);
  arc(0,0,280,280,0,mangle);

  stroke(0,0,255);
  arc(0,0,260,260,0,hangle);

  



}