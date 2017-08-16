// MOVEMENT CONTROLS FOR SHIP


// declare & initialize movement variables

var x = {
   xPosition : 100,
   yPosition : 100,
   xSpeed : 1,
   ySpeed : 0,
   maxSpeed: 5,
   upPressed :  0,
   downPressed :  0,
   leftPressed :  0,
   rightPressed : 0
}


module.exports =  function shipMove(){
  window.onkeydown = keyDown;
  window.onkeyup = keyUp;
  function keyDown(playerKeyPress)
{
   x.keyPressed = playerKeyPress.which;
  if (x.keyPressed == 38)
    x.upPressed = 1;
  if (x.keyPressed == 40)
    x.downPressed = 1;
  if (x.keyPressed == 37)
    x.leftPressed = 1;
  if (x.keyPressed == 39)
    x.rightPressed = 1;
}

 function keyUp(playerKeyPress)
{
  if (x.keyPressed == 38)
    x.upPressed = 0;
  if (x.keyPressed == 40)
    x.downPressed = 0;
  if (x.keyPressed == 37)
    x.leftPressed = 0;
  if (x.keyPressed == 39)
    x.rightPressed = 0;
}

  function slowDownX()
{
  if (x.xSpeed > 0)
    x.xSpeed = x.xSpeed - 1;
  if (x.xSpeed < 0)
    x.xSpeed = x.xSpeed + 1;
}

 function slowDownY()
{
  if (x.ySpeed > 0)
    x.ySpeed = x.ySpeed - 1;
  if (x.ySpeed < 0)
    x.ySpeed = x.ySpeed + 1;
 }
 // SPACESHIP MOVEMENT

 // new position
 x.xPosition = x.xPosition + x.xSpeed;
 x.yPosition = x.yPosition + x.ySpeed;

 // actually change on-screen position by adjusting CSS
 document.getElementById('ship').style.left = x.xPosition;
 document.getElementById('ship').style.top = x.yPosition;

 // change speed when user presses keys
 if (x.upPressed == 1)
   x.ySpeed = Math.max(x.ySpeed - 1,-1*x.maxSpeed);
 if (x.downPressed == 1)
   x.ySpeed = Math.min(x.ySpeed + 1,1*x.maxSpeed)
 if (x.rightPressed == 1)
   x.xSpeed = Math.min(x.xSpeed + 1,1*x.maxSpeed);
 if (x.leftPressed == 1)
   x.xSpeed = Math.max(x.xSpeed - 1,-1*x.maxSpeed);

 // deceleration
 if (x.upPressed == 0 && x.downPressed == 0)
    slowDownY();
 if (x.leftPressed == 0 && x.rightPressed == 0)
    slowDownX();
  }
