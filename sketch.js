const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pendulum1, pendulum2, pendulum3, pendulum4;
var sling1, sling2, sling3, sling4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pexelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
    
    pendulum1 = new Pendulum(200, 300, blue);
    pendulum2 = new Pendulum(400, 300, blue);
    pendulum3 = new Pendulum(600, 300, blue);
    pendulum4 = new Pendulum(800, 300, blue);
    sling1 = new Sling(pendulum1.body,{x:200, y:80});
    sling2 = new Sling(pendulum2.body,{x:400, y:80});
    sling3 = new Sling(pendulum3.body,{x:600, y:80});
    sling4 = new Sling(pendulum4.body,{x:800, y:80});
}

function draw(){
    background("#00ffff");
    Engine.update(engine);

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    
    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
}

function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY});
}