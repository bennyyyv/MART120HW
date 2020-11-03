//head stuff
var headX = 250;
var headY = 100;
var headDirection = Math.floor(Math.random() * 10) + 1;
//body stuff
var bodyX = 200;
var bodyY = 185;
var bodyDirection = Math.floor(Math.random() * 10) + 1;

var secondbodyX = 220;
var secondbodyY = 205;
var secondbodyDirection = Math.floor(Math.random() * 10) + 1;

var thirdbodyX = 240
var thirdbodyY = 225
var thirdbodyDirection = Math.floor(Math.random() * 10) + 1;
//eye stuff
var righteyeX = 200;
var righteyeY = 75;
var righteyeDirection = Math.floor(Math.random() * 10) + 1;

var lefteyeX = 285;
var lefteyeY = 75;
var lefteyeDirection = Math.floor(Math.random() * 10) + 1;
//text stuff
var size = 22;
var count = 0;
var sizeDirection = 2;

function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(209, 252, 255);
    text("hello", 10,80);

    // head
    fill(255, 221, 191);
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }

    // eyes
    stroke(29, 82, 0);
    strokeWeight(10);
    point(lefteyeX,lefteyeY);
    point(righteyeX, righteyeY);

    righteyeY += righteyeDirection;
    if(righteyeY <= 0 || righteyeY >= 500 )
    {
        righteyeDirection *= -1;
    }

    righteyeX += righteyeDirection;
    if(righteyeX <= 0 || righteyeX >= 500 )
    {
        righteyeDirection *= -1;
    }

    lefteyeY += lefteyeDirection;
    if(lefteyeY <= 0 || lefteyeY >= 500 )
    {
        lefteyeDirection *= -1;
    }

    lefteyeX += lefteyeDirection;
    if(lefteyeX <= 0 || lefteyeX >= 500 )
    {
        lefteyeDirection *= -1;
    }
    // nose
    stroke(0)
    point(245,90);

    // mouth
    stroke(0)
    fill(0)
    line(230, 140, 280, 140)

    line(280, 135, 280, 145)

    // body
    stroke(0)
    fill(10, 24, 120);
    rect(200,bodyY,100,150);
      bodyY += bodyDirection;
      if(bodyY <= 0 || bodyY >= 450 )
      {
          bodyDirection *= -1;
      }
    // decoration
    stroke(0)
    fill(255);
    rect(220,secondbodyY,60,110);
    secondbodyY += secondbodyDirection;
    if(secondbodyY <= 0 || secondbodyY >= 490 )
    {
        secondbodyDirection *= -1;
    }

    fill(10, 24, 120)
    rect(240,thirdbodyY,20,70);
    thirdbodyY += thirdbodyDirection;
    if(thirdbodyY <= 0 || thirdbodyY >= 530 )
    {
        thirdbodyDirection *= -1;
    }
    // right arm
    stroke(0)
    fill(10, 24, 120);
    rect(300,195,50,10);
    // left arm
    stroke(0)
    rect(150,195,50,10);
    // left leg
    stroke(0)
    rect(200,335,10,50);
    // right leg
    stroke(0)
    rect(290,335,10,50);

    // feet or something
    stroke(0)
    triangle(200, 400, 200, 390, 220, 400);

    triangle(290, 400, 290, 390, 310, 400);

    fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Ben Vanderbosch",270,500 );


}
