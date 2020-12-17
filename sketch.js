var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1=createSprite(200,200,50,80);
 gameObject1.shapeColor="red"; 

 gameObject2=createSprite(400,200,50,80);
 gameObject2.shapeColor="red";

 gameObject3=createSprite(600,200,50,80);
 gameObject3.shapeColor="red";
gameObject3.velocityY=2;
 gameObject4=createSprite(800,200,50,80);
 gameObject4.shapeColor="red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(gameObject1,movingRect)) {
    movingRect.shapeColor="blue";
    gameObject1.shapeColor="purple";
  }
  else {
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  bounceOff(movingRect,gameObject3);

  drawSprites();
}
