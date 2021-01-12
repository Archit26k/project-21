var canvas;
var box1 , box2 , box3 , box4
var ball;

var music  

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    
   
     
    box1 = createSprite(100,590,180,20);
    box1.shapeColor = "blue";
    box1.debug = true

    box2 = createSprite(300,590,180,20);
    box2.shapeColor = rgb(255,128,0);
    box2.debug = true

    box3 = createSprite(500,590,180,20)
    box3.shapeColor = "purple"
    box3.debug = true;

    box4 = createSprite(700,590,180,20) 
    box4.shapeColor = rgb(0,100,0)
    box4.debug = true

    //create box sprite and giveyvelocity

  
   ball = createSprite(Math.round(random(50,750)),100,20,20)
   ball.shapeColor = 0;
   ball.velocityX = 5;
   ball.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges(ball)
    //add condition to check if box touching surface and make it box
   
    if (isTouching(ball,box1)) {
   
        ball.shapeColor = "blue"
        music.loop();
     }
      



if (isTouching(ball,box2)) {
    ball.velocityX = 0
    ball.velocityY = 0
    ball.shapeColor =rgb(255,128,0);
    music.stop()
}

  if (isTouching(ball,box3)) {
    ball.shapeColor ="purple"
  }

if (isTouching(ball,box4)) {
    ball.shapeColor = rgb(0,100,0)
}

   bounceOff(ball,box4)

   
    bounceOff(ball,box3)
     
    bounceOff(ball,box1)
   

   

    drawSprites()
}
