const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ferro;
var rubber;
var engine, world;
var hammer;
var stone;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(254, 234, 35);
    stone = new Stone(1000,72,50,50)
    ferro = new Ferro(99,42,160,60);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display(); 
    ferro.display();
}