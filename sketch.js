var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 1600, 400);
  car = createSprite(50,200,50,20);
  car.velocityX = 10;
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color(80,80,80)
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)


function draw() {
  background("black");  
  
  hasCollided();
  
    
    
  drawSprites();
  }
}
function hasCollided(lbullet,lwall)
{

  bulletRightEdge = lbullet.x + lbullet.width;
  wallleftEdge = lwall.x;
  if(bulletRightEdge = lbullet.x + lbullet.width);
  {
    return true
  }
  return false;

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);

    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }


    if(damage<10)
    {
      wall.shapeColor = color(0,255,0);
    }
  }
}