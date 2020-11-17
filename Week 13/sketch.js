// character coordinates
var characterX = 100;
var characterY = 100;

// key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// coordinates  for shapes
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var rectX = 290;
var rectY = 330;
var rectXSpeed;
var rectYSpeed;

var sqX = 130;
var sqY = 240;
var sqXSpeed;
var sqYSpeed;

//declare the arrays
var shapeXs = [];
var shapeYs = [];
var shapeDiameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// mouse click shape
var mouseShapeX;
var mouseShapeY;

/////////////////////////////////////////////////////

function setup()
{
    createCanvas(500, 600);

//add values to the arrays
    for (var i = 0; i < 50; i++) {
            shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            shapeXs[i] = getRandomNumber(500);
            shapeYs[i] = getRandomNumber(600);
            shapeDiameters[i] = getRandomNumber(30);
    }

}

function draw()
{
    background(120,45,78);
    stroke(0);
    fill(0);

//random shapes
for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }

//createBorders
createBorders();

//createPlayer
createPlayer ();

// exit message
exitMessage();

// objects
rectangleOne();
squareTwo();
squareOne();

//object Movement
//I put the object movement with the objects because it seemed like it would be less work

// keys
keyMovement ();

// you win
youWin();

 // create the shape based on the mouse click
mouseShape();

}

////////////////////////////////////////////////////////

//Functions//
function exitMessage()
{
  textSize(16);
  text("EXIT", width-50,height-50);
}
function createBorders()
{
  // top border
  rect(0,0,width,10);
  // left border
  rect(0,0,10,height);
  // bottom border
  rect(0, height-10,width, 10);
  // right upper border
  rect(width-10,0,10,height-50);
}

function rectangleOne()
{
  rect(rectX,rectY,10,50);
  fill(150, 24, 120);
  rectXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  rectYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  rectX += rectXSpeed;
  rectY += rectYSpeed;
  if(rectX > width)
  {
      rectX = 0;
  }
  if(rectX < 0)
  {
      rectX = width;
  }
  if(rectY > height)
  {
      rectY = 0;
  }
  if(rectY < 0)
  {
      rectY = height;
  }

}
//no idea why this one isn't working
function squareOne()
{
  square(sqX,240,50);
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  sqX += sqXSpeed;
  if(sqX > width)
  {
      sqX = 0;
  }
  if(sqX < 0)
  {
      sqX = width;
  }
}

function squareTwo()
{
  square(250,sqY,50);
  sqYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 1);
  sqY += sqYSpeed
  if(sqY > height)
  {
      sqY = 0;
  }
  if(sqY < 0)
  {
      sqY = height;
  }
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function mouseShape()
{
  fill(120,130,140);
  circle(mouseShapeX, mouseShapeY, 25);
}

function keyMovement()
{
  if(keyIsDown(w))
  {
      characterY -= 10;
  }
  if(keyIsDown(s))
  {
      characterY += 10;
  }
  if(keyIsDown(a))
  {
      characterX -= 10;
  }
  if(keyIsDown(d))
  {
      characterX += 10;
  }

}

function createPlayer()
{
  fill(23,40,123);
  circle(characterX,characterY,25);
}

function youWin()
{
  if(characterX > width && characterY > width-50)
  {
      fill(0);
      stroke(5);
      textSize(26);
      text("You Win!", width/2-50, height/2-50);
  }


}
