function bounceOff(movingRect,fixedRect) {
    // if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    //   && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    // true
    // }
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
&& fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      ball.velocityX = ball.velocityX*(1)
      ball.velocityY = ball.velocityY*(-1)
    }
  }

  
  function edges(p1) {
    if (p1.x > width) {
      p1.velocityX =  p1.velocityX*(-1)
    }

    if (p1.x < width-width) {
      p1.velocityX =  p1.velocityX*(-1)
    }

    if (p1.y > height) {
      p1.velocityY =  p1.velocityY*(-1)
    }

    if (p1.y < height - height) {
      p1.velocityY =  p1.velocityY*(-1)
    }

  }



  // to touch
  function isTouching(p1 , p2) {
   if (p1.x - p2.x < p2.width/2 + p1.width/2
      && p2.x - p1.x < p2.width/2 + p1.width/2 &&    
      p1.y - p2.y <p2.height/2 + p1.height/2
      && p2.y - p1.y < p2.height/2 +p1.height/2) {
    
        return true;
  }
  else {
   return false ;
  }
    
  }