
var block1, block2, block3, block4;
var ball;
var sound;

function preload(){
sound=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    

    ball=createSprite(random(10,750),300,20,20);
    ball.shapeColor="white";
    ball.velocityX=3;
    ball.velocityY=3;

   
    block1=createSprite(100,580,180,30);
    block1.shapeColor="red";

    block2=createSprite(300,580,180,30);
    block2.shapeColor="green";

    block3=createSprite(500,580,180,30)
    block3.shapeColor="blue";

    block4=createSprite(700,580,180,30);
    block4.shapeColor="yellow";

    

}

function draw() {
    background(rgb(10,10,10))
   
    if(ball.x<0){
      sound.stop()
        ball.velocityX=3
    }else if(ball.x>800){
      sound.stop()
        ball.velocityX=-3
    }
   
    
  if(ball.isTouching(block4)){
    sound.play()
  
    ball.shapeColor="yellow";
    ball.bounceOff(block4);
    
  }
  
  else if(ball.isTouching(block3)){
    sound.play()

    ball.shapeColor="blue";
    bounceOff(ball,block3)
   
  }
    
  else if(ball.isTouching(block2)){
    sound.play()

    ball.shapeColor="green";
    bounceOff(ball,block2)
  
  }
  
  else if(ball.isTouching(block1)){
    sound.play()
  
    ball.shapeColor="red";
    ball.bounceOff(block1)
  }

  if (ball.y<0){
    sound.stop()
    ball.velocityY=3
  }

  
   
    drawSprites()
}
