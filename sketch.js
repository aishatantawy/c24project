const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1, rubber2, rubber3;
var stone1;
var iron1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(650,500,30);
    rubber2 = new Rubber(600,500,30);
    rubber3 = new Rubber(700,500,30);
    stone1 = new Stone(1200,300,50);
    iron1 = new Iron(750,500,70);


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    stone1.display();
    iron1.display();

    
 
}