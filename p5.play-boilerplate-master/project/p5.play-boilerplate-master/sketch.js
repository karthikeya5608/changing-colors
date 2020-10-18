
var rect1,rect2;

function setup() {
  createCanvas(1350,800);
  rect1 = createSprite(50,20,);
  rect2 = createSprite(400,200, 80, 50);
  rect2.shapeColor="white";
}

function draw() {
  rect1.y=World.mouseY;
  rect1.x=World.mouseX;
  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2&&rect1.x-rect2.x>rect1.width/-2+rect2.width/-2&&
    rect1.y-rect2.y<rect1.height/2+rect2.height/2&&rect1.y-rect2.yrect1.height/-2+rect2.height/-2)
  {
    rect1.shapeColor="white";
    rect2.shapeColor="grey";
  }
  else
  {
    rect1.shapeColor="grey";
    rect2.shapeColor="white";
  }
  background(0,0,0);  
  drawSprites();
}