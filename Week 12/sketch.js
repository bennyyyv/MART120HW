var x = 50;
    var y = 50;
    var diameter = 25;
    var mousex = 0;
    var mousey = 0;
    var s = 83;
    var w = 87;
    var a = 65;
    var d = 68;

    function setup()
    {
      createCanvas(800, 600);
    }

    function draw()
    {
      background(0);

      fill(24, 200, 29);
      circle(x, y, diameter);

      // call the function created
      controlCircle();

      ellipse(mousex, mousey, 15, 50);

      // concentric circle where x = 110 and y = 120
      ConcentricCircle(110, 120, 100, 50, 50, 120, 120, 120, 50, 120);
      // concentric circle where x = 210 and y = 220
      ConcentricCircle(210, 220, 100, 50, 50, 120, 120, 120, 50, 120);

    }

    /* This function controls all the variables of the circle */
    function controlCircle()
    {
         if (x >= 300)
      {
        x = 50;
      }

      if (y >= 300)
      {
        y = 50;
      }

      if (keyIsDown(s))
      {
        y += 10;
      }
      else if (keyIsDown(w))
      {
        y -= 10;
      }

      if (keyIsDown(d))
      {
        x += 10;
      }
      else if (keyIsDown(a))
      {
        x -= 10;
      }

        // we call the function here.
        changeDiameter();

    }

    // This function updates the size of the circle
    function changeDiameter()
    {
        if (diameter < 200)
        {
            diameter += 2;
        }
        else if (diameter >= 200)
        {
            diameter = 25;
        }

    }

    function mousePressed()
    {
      mousex = mouseX;
      mousey = mouseY;

    }

    // define ConcentricCircle function
    function ConcentricCircle(x,y, outer_diameter, inner_diameter, outer_red, outer_green,outer_blue, inner_red, inner_green, inner_blue)
{
        fill(outer_red,outer_green, outer_blue);
        circle(x,y,outer_diameter);
        fill(inner_red, inner_green, inner_blue);
        circle(x,y,inner_diameter);
}
