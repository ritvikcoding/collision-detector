   var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "aqua"
  movingRect = createSprite(500, 200, 50, 80);
  movingRect.shapeColor = "yellow"
}

function draw() {
  background("pink");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x - fixedRect.x);
 console.log(movingRect.width/2 - fixedRect.width/2 )
    
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2 && 
     fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2 && 
     movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
    
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else {
    fixedRect.shapeColor = "aqua";
    movingRect.shapeColor = "yellow";
  }
  drawSprites();
  fill("black");
  text(mouseX+","+mouseY,mouseX,mouseY);
} 