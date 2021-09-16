var garden,rabbit;
var gardenImg,rabbitImg;
var apple,apple2;
var leaf,leaf2;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
    apple2   = loadImage("apple.png");
    leaf2   = loadImage("orangeLeaf.png");
}

function setup()
{  
  // creating the Canvas
  createCanvas(400,400);

 
  // creating garden as a sprite
  garden=createSprite(200,200);

  // Adding  the background
  garden.addImage(gardenImg);
  

  //creating rabbit
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

  
}



function draw() {
  background(0);
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  createLeaves()
  createApples()
  drawSprites();
}
function createApples()
{
  if(frameCount%80 === 0){
apple = createSprite(random(50,350),40,10,10)
apple.addImage("applefalling",apple2)
apple.scale =0.1
apple.velocityY = 3

  }
}
function createLeaves()
{
  if(frameCount%80 === 0){
leaf = createSprite(random(50,350),40,10,10)
leaf.addImage("leaffalling",leaf2)
leaf.scale =0.1
leaf.velocityY = 3
  }
}
