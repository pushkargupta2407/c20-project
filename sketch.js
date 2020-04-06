
var r = 0;
var g = 50;
var b=255;
var ball;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(500,500);

  ball = createSprite(200,200,20,20);
  ball.shapeColor = "yellow";
  
}


function draw(){
  r =  map(mouseX,0,500,0,255);
  g =  map(mouseY,0,500,0,255);
  //b = map(mouseX,0,500,0,255);

  background(r,g,b);
  fill(255);
  ellipse(mouseX,mouseY,20,20);
 

 /* ball.x = World.mouseX;
  ball.y = World.mouseY;
  
if(ball.x <200){
  background(0,50,255);
}
if(ball.x >200 && ball.x <350){
  Map(0,255,0); 
}

if(ball.x >350 && ball.x <500){
  backgroun(255,0,0);
}
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  drawSprites();*/
}