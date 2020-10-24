var car1,wall1;
var car2,wall2;
var wall3,car3
var car4,wall4;
var line1,line2,line3;
var s = Math.round(random(+10,+200));
var weight = random(+400,+1500);


function setup() {
  createCanvas(1600,1000);
  
  car1 = createSprite (200,100,20,20);
  wall1 =createSprite(1400,90,20,100);
  line1 = createSprite(0,180,10000,20);
  
  car2 = createSprite (200,300,20,20);
  wall2 =createSprite(1400,290,20,100);
  line2 = createSprite(0,380,10000,20);
  
  car3 = createSprite (200,500,20,20);
  wall3 =createSprite(1400,490,20,100);
  line3 = createSprite(0,580,10000,20);

  
  car4 = createSprite (200,700,20,20);
  wall4 =createSprite(1400,690,20,100);
}

function draw() {
  background(0);
  s = random(+10,+20);

 car1.velocityX =+2;
car2.velocityX = +3;

car3.velocityX =+6;
car4.velocityX = +7;

if(car1.isTouching(wall1)){
car1.velocityX = 0;
car1.shapeColor = "yellow";
wall1.shapeColor = "yellow";
}
if(car2.isTouching(wall2)){
  car2.velocityX = 0;
  car2.shapeColor = "lime";
  wall2.shapeColor = "lime";
  }
  if(car3.isTouching(wall3)){
    car3.velocityX = 0;
    car3.shapeColor = "darkgreen";
    wall3.shapeColor = "darkgreen";  
  }

    if(car4.isTouching(wall4)){
      car4.velocityX = 0;
      car4.shapeColor = "red";
      wall4.shapeColor = "red";
      }

drawSprites();
}