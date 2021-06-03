const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var Bg
var Snow=[];
//var mySnow = [];
/*var shiva;
var shivaImg;
var snowImg;
var snowman;
var snowmanImg;
var boy;
var boyImg;*/
var myEngine;
var myWorld;
var backgroundImg;

function preload() {
  backgroundImg = loadImage('snow1.jpg')
  /*shivaImg = loadImage('shiva.png')
  snowmanImg = loadImage('snowman.png')
  boyImg = loadImage('boy.png')*/
}

/*function setup() {
  createCanvas(1800,900);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  //shiva = createSprite(1000,850,50,50);
  //boy =  createSprite(800,850,50,50);
  //snowman =  createSprite(700,850,50,50);

  //shiva.addImage('shiva',shivaImg);
  //boy.addImage('boy',boyImg);
  //snowman.addImage('snowman',snowmanImg);
  }*/

  function setup() {
    createCanvas(1800,1000);
    myEngine = Engine.create();
    myWorld = myEngine.world;
    Engine.run(myEngine)
  }  

  function draw() {
    background(backgroundImg);

    Engine.update(myEngine)  

    drawSprites();

    if (frameCount%20===0){
      Snow.push(new snow(random(5,795),0,10))
    }

    for (var s=0;s<Snow.length;s++){
      Snow[s].display()
       }

  }
/*function draw() {
  background(backgroundImg);
  Engine.update(myEngine);

  drawSprites();

  if(frameCount%90===0){
    Snow.push(new snow(random(300,1500)),30,30)
    }

 for(var s=0; s < Snow.length; s = s+1){
  Snow[s].display();
 }
}*/