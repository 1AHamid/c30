var a=21;
console.log(a); //21
//number

var b="aryan";
console.log(b); //aryan
//String

//string is any fixed value written in "" , for eg: "Hello5", "23","2+3"

var c=false;
console.log(c); //false
//Boolean : false/true

var d;
console.log(d);//undefined
//Undefined

var e = null;
console.log(e);//null
//Nullconsole.log(c);

//there are 5 data types: number, string, boolean, null, undefined
//the wo data structures are : 1.Variables  () 2.Arrays []

var f=[21,50,5,30]
console.log(f);//[21,50,5,30]
console.log(f.length);//4
console.log(f[1]);//50

var g =["aryan", 30,"coding",true,null]
console.log(g);//["aryan", 30,"coding",true,null]
console.log(g.length);//5
console.log(g[3]);//true


var h = [ [21,50,5,30], ["aryan", 30],["coding",true,null]  ]
console.log(h);//[ [21,50,5,30], ["aryan", 30],["coding",true,null]  ] //[[4],[2],[3]]
console.log(h.length);//3
console.log(h[1]);// ["aryan", 30],
console.log(h[2][1]);//true

//array push pop
console.log(f);
f.push("chocolate")
console.log(f);
f.push(30);
console.log(f);

f.pop();
console.log(f);
f.pop();
console.log(f);
f.pop();
console.log(f);
f.pop();
console.log(f);
f.pop();
console.log(f);


// var trajectory=[]
// var position =[x,y];
// t.push(p);
// t = [ [x1,y1], [x2,y2], [x3,y3], [x41y4]...]




const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
if(keyCode===32){
//slingshot.attach(bird.body)
}
}