var sprite1,sprite2;

function setup() {
  createCanvas(800,400);
  sprite1= createSprite(700, 200, 50, 50);
sprite2= createSprite(100,200,50,50);

sprite1.velocityX=-5;
sprite2.velocityX=+5;

}


function draw() {
  background(255,255,255); 
  sprite1.shapeColor="blue" ;
  sprite2.shapeColor="yellow";
  
  
 

if (sprite1.x-sprite2.x<sprite1.width/2+sprite2.width/2 &&
     sprite2.x-sprite1.x<sprite1.width/2+sprite2.width/2 ){
    sprite1.velocityX=+5;
    sprite2.velocityX=-5;
   }
  

  drawSprites();
}