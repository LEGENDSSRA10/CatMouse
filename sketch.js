var fixRec, movingRec;

function setup()
{

  //leftRect = createSprite(100, 300, 50, 50);

  topRec = createSprite(400, 100, 100, 50);
  topRec.shapeColor = "blue";
  topRec.debug = true;
  topRec.velocityY = 3;

  bottomRec = createSprite(400, 350, 50, 50);
  bottomRec.shapeColor = "blue";
  bottomRec.debug = true;
  bottomRec.velocityY = -3;

  createCanvas(800,400);
  fixRec = createSprite(400, 200, 100, 50);
  fixRec.shapeColor = "blue";
  fixRec.debug = true;

  movingRec = createSprite(400, 300, 50, 50);
  movingRec.shapeColor = "blue";
  movingRec.debug = true;

  rect1 = createSprite(100, 200, 50, 50);
  rect2 = createSprite(200, 200, 50, 50);
  rect3 = createSprite(300, 200, 50, 50);
}

function draw() 
{
  background(0); 

  bounceOff(topRec, bottomRec);
  
  movingRec.x = mouseX;
  movingRec.y = mouseY;

  var value = collide(movingRec, rect3);
  if(value === true)
  {
    rect3.shapeColor = "red";
    movingRec.shapeColor = "red";
  }

  else if(value === false)
  {
    rect3.shapeColor = "blue";
    movingRec.shapeColor = "blue";
  }
  
  drawSprites();
}
