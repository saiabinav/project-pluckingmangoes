
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var stone,tree,ground,slingshot;
var mango1,mango2,mango3,mango4,mango5,mango6;

function preload()
{
	boy=loadImage("images/boy.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stone= new Stone(230,450,50,50)
	tree= new Tree(1000,580)
	ground=new Ground(650,600,1300,20)
    slingshot= new Slingshot(stone.body,{x:230,y:430})


	mango1=new Mango(1100,100,50,50)
	mango2=new Mango(1000,100,50,50)
	mango3=new Mango(980,150,50,50)
	mango4=new Mango(900,200,50,50)
	mango5=new Mango(1100,250,50,50)
	mango6=new Mango(950,300,50,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
image(boy,200,360,200,300)
  stone.display();
  tree.display();
  ground.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	
	}
	
	function mouseReleased(){
	   
		slingshot.fly()
	
	
	}

	function detectCollision(lstone,lmango){
		
		  mangoBodyPosition=lmango.body.position
		 stoneBodyPosition=lstone.body.position 
		  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
		  //console.log(distance) // console.log(lmango.r+lstone.r) 
		  if(distance<=lmango.r+lstone.r) { 
			  //console.log(distance);
			   Matter.Body.setStatic(lmango.body,false); } }



