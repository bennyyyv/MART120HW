// character cords
var characterX = 100;
var characterY = 100;
// key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// cords for shapes
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

// mouse click shape
var mouseShapeX;
var mouseShapeY;

/////////////////////////////////////////////////////

function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(120,45,78);
    stroke(0);
    fill(0);

// top border
rect(0,0,width,10);
// left border
rect(0,0,10,height);
// bottom border
rect(0, height-10,width, 10);
// right upper border
rect(width-10,0,10,height-50);
// exit message
textSize(16);
text("EXIT", width-50,height-50);

// objects
rect(rectX,rectY,10,50);
fill(150, 24, 120);
square(sqX,240,50);
square(250,sqY,50)

//character
fill(23,40,123);
circle(characterX,characterY,25);

// keys
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

 // speeds
 shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
 shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

 rectXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
 rectYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

 sqXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
 sqYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 1);

 // object movement

 rectX += rectXSpeed;
 rectY += rectYSpeed;

 sqX += sqXSpeed;
 sqY += sqYSpeed

 ///////////////////////

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

 ///////////////////////

 if(sqX > width)
 {
     sqX = 0;
 }
 if(sqX < 0)
 {
     sqX = width;
 }
 if(sqY > height)
 {
     sqY = 0;
 }
 if(sqY < 0)
 {
     sqY = height;
 }

 // you win
 if(characterX > width && characterY > width-50)
 {
     fill(0);
     stroke(5);
     textSize(26);
     text("You Win!", width/2-50, height/2-50);
 }

 // create the shape based on the mouse click
 fill(120,130,140);
 circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    }
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }
