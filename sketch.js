
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyIMG,boySprite, treeSprite,treeIMG;
var stone;

function preload()
{
	boyIMG=loadImage("boy.png")
	treeIMG=loadImage("tree.png")
}

function setup() {
	createCanvas(1400, 650);

	treeSprite=createSprite(1100, 320, 10,10);
	treeSprite.addImage(treeIMG)
	treeSprite.scale=0.5;

	boySprite=createSprite(300, 550, 10,10);
	boySprite.addImage(boyIMG)
	boySprite.scale=0.15;

	engine = Engine.create();
	world = engine.world;

	stone = new Stone(200,500);

	mangoes1 = new Mango(950,220);
	mangoes2 = new Mango(1090,300);
	mangoes3 = new Mango(1100,90);
	mangoes4 = new Mango(1250,190);
	mangoes5 = new Mango(1360,210);
	mangoes6 = new Mango(1000,70);

	ground = new Ground(700,645,1300,7);

	chain = new Chain(stone.body,{x:225,y:470});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  strokeWeight(4);

  drawSprites();

  stone.display();

  mangoes1.display();
  mangoes2.display();
  mangoes3.display();
  mangoes4.display();
  mangoes5.display();
  mangoes6.display();

  ground.display();

  chain.display();

  detectCollision(stone,mangoes1);
  detectCollision(stone,mangoes2);
  detectCollision(stone,mangoes3);
  detectCollision(stone,mangoes4);
  detectCollision(stone,mangoes5);
  detectCollision(stone,mangoes6);
 
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
    chain.fly();
}

function detectCollision(stone,mangoes)
{
	mangoesBodyPosition=mangoes.body.position
	stoneBodyPosition=stone.body.position

	var distance = mangoesBodyPosition.x- stoneBodyPosition.x
	if(distance<=60)
	{
		Matter.Body.setStatic(mangoes.body,false);
	}
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Body.setPosition(stone.body,{x:225 ,y:470})
		chain.attach(stone.body);
	}
}


