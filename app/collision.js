var shipHealth = 1000;
var shipBox = document.getElementById("ship").getBoundingClientRect();
// every cycle, check & update status of each moving asteroid
var arrayOfMovingAsteroids = document.getElementsByClassName("moving");
  module.exports = function(){
    for (var i=0; i < arrayOfMovingAsteroids.length; i++){
      // get "bounding box" of current asteroid
      var asteroidBox = arrayOfMovingAsteroids[i].getBoundingClientRect();
      // detect if asteroid's bounding box overlaps with space ship's bounding box
      var collision = !(asteroidBox.right < shipBox.left ||
        asteroidBox.left > shipBox.right ||
        asteroidBox.bottom < (shipBox.top + 30) ||
        asteroidBox.top > (shipBox.bottom - 30));
    // move current asteroid 2px to the left (but remove it from the "moving" array if it's already offscreen)
    if (parseInt(arrayOfMovingAsteroids[i].style.right) < 3000) {
      arrayOfMovingAsteroids[i].style.right = parseInt(arrayOfMovingAsteroids[i].style.right) + 5 + 'px';
    } else {
      arrayOfMovingAsteroids[i].className = "";
    }

     if (collision) {
       shipHealth = (shipHealth - parseInt(arrayOfMovingAsteroids[i].style.height)); // ship loses number of health points relative to size of asteroid
       if (shipHealth >= 0) {
         document.getElementById("healthCounter").innerHTML = "SHIELDS: " + shipHealth;
       } else {
         document.getElementById("healthCounter").innerHTML = "GAME OVER";
         document.getElementById("ship").remove();  // ship disappears
       }
       var audio = new Audio('explosion.wav');  // load explosion sound (creative commons license: https://www.freesound.org/people/Veiler/sounds/264031/)
       audio.play();  // play explosion sound
       arrayOfMovingAsteroids[i].remove();  // asteroid disappears
     }
  }
}
