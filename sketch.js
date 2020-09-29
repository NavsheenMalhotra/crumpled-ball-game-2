const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var box, box2, box3;
var paper;


function preload()  {
 
}

function setup() {
  
var canvas=	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.




box=new Box(1100, 783, 20, 200);
box2=new Box(800, 783, 20, 200);
box3=new Box(950, 868, 320, 20);

paper=new Paper(200, 300);

ground=new Ground();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    Engine.update(engine);
  box.display();
  box2.display();
  box3.display();


  paper.display();

  ground.display();
  

  drawSprites();
 
}
function keyPressed() {
  if(keyCode===UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:300, y:-300});
   
  }
  
  }





