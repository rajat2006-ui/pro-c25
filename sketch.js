
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var waste1;
var box1,box2,box3;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  //paper waste
  waste1=new Waste(200,650);

  ground1=new Ground();

  //dustbin image
  box1=new dustBin(750,615,220,200);

  //walls of dustbin
  box2=new Box(695,605,20,150);
  box3=new Box(805,605,20,150);

	Engine.run(engine);
}

function draw() {
  Engine.update(engine);	

  background("lightblue");

 
  //to display things
  waste1.display();
  ground1.display();
  box2.display();
  box3.display();
  drawSprites();
  
  
}

function keyPressed(){
  if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(waste1.body,waste1.body.position,{x:230,y:-195});
  }
}