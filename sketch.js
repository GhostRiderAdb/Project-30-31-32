
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine,world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score = 0;


function preload(){
    polygon_img = loadImage("polygon.png");
    backgroundImg = loadImage("bg2.jpg");
    getBackgroundImg();
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(900,400);
    ground = new Ground();
    stand1 = new Stand(380,300,270,10);
    stand2 = new Stand(700,200,200,10);

    //level 1
    block1 = new Block(280,275,30,40);
    block2 = new Block(310,275,30,40);
    block3 = new Block(340,275,30,40);
    block4 = new Block(370,275,30,40);
    block5 = new Block(400,275,30,40);
    block6 = new Block(430,275,30,40);
    block7 = new Block(460,275,30,40);
    block8 = new Block(490,275,30,40);

    //level 2
    block9 = new Block(310,235,30,40);
    block10 = new Block(340,235,30,40);
    block11 = new Block(370,235,30,40);
    block12 = new Block(400,235,30,40);
    block13 = new Block(430,235,30,40);
    block14 = new Block(460,235,30,40);

    //level 3
    block15 = new Block(340,195,30,40);
    block16 = new Block(370,195,30,40);
    block17 = new Block(400,195,30,40);
    block18 = new Block(430,195,30,30);

    //level 4
    block19 = new Block(370,155,30,40);
    block20 = new Block(400,155,30,40);

    //level 5
    block21 = new Block(385,115,30,40);

    //set 2
    //level 1
    blocky1 = new Block(640,175,30,40);
    blocky2 = new Block(670,175,30,40);
    blocky3 = new Block(700,175,30,40);
    blocky4 = new Block(730,175,30,40);
    blocky5 = new Block(760,175,30,40);

    blocky6 = new Block(670,135,30,40);
    blocky7 = new Block(700,135,30,40);
    blocky8 = new Block(730,135,30,40);

    blocky9 = new Block(700,95,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world, ball);

    slingShot = new SlingShot(ball,{x:200,y:200})



}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(2);
    stroke("white");
    textSize(13);
    fill("red");
    text("Score :"+ score,width-300,50);


    
    strokeWeight(2);
    stroke(15);
    fill("red")

    stand1.display();
    stand2.display();

    stroke(15);
    fill("cyan");
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    block8.display();
    block8.score();

    stroke(15);
    fill("pink");
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();
    block13.display();
    block13.score();
    block14.display();
    block14.score();

    stroke(15);
    fill("turquoise")
    block15.display();
    block15.score();
    block16.display();
    block16.score();
    block17.display();
    block17.score();
    block18.display();
    block18.score();

    stroke(15);
    fill("orange")
    block19.display();
    block19.score();
    block20.display();
    block20.score();

    stroke(15);
    fill("gray")
    block21.display();
    block21.score();

    stroke(15);
    fill("cyan");
    blocky1.display();
    blocky1.score();
    blocky2.display();
    blocky2.score();
    blocky3.display();
    blocky3.score();
    blocky4.display();
    blocky4.score();
    blocky5.display();
    blocky5.score();

    stroke(15);
    fill("pink");
    blocky6.display();
    blocky6.score();
    blocky7.display();
    blocky7.score();
    blocky8.display();
    blocky8.score();

    stroke(15);
    fill("orange");
    blocky9.display();
    blocky9.score();
    
    fill("yellow")
    slingShot.display();

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20)

    
    
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.ball);
    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}