var mario;
var blockback, obstacles;
var PLAY, END;
var Marios
var invisibleGround;



function preload(){
  Marios = loadImage("mario.png");
 blockbacks = loadImage("background.png");
}

function setup() {
    createCanvas(400,400);
    blockback = createSprite(200,200);

 blockback.addImage( blockbacks);

 mario = createSprite(200,200);
 mario.scale=0.04;
 mario.addImage("mariostill", Marios);

 

 
 //invisibleGround = createSprite(200,190,400,10);
 // invisibleGround.visible = false;
  blockback.velocityX=-4;
}

function draw() {
   background(0);
    
   if(blockback.x<0)
   {
     blockback.x = blockback.width/2;
   }
    
    
    drawSprites();
}