var r, g, b, fillColour;

function setup() {
    createCanvas(displayWidth,displayHeight,SVG);
}

function draw() {
    background(220);
    if (mouseIsPressed === true) {
     fill(randColor());   
    }
    ellipse(800, 800, r*2/g*b);

    if (mouseIsPressed === true) {
        fill(randColor());   
       }
       rectMode(CENTER);
       rect(800, 800, b*100/r);
}

function randColor(){
    r = Math.floor(random(255));
    g = Math.floor(random(255));
    b = Math.floor(random(255));
    
    fillColor = color(r, g, b);
    
    return fillColor;
  }

  function keyPressed() {
      print("Saved")
      save("mySVG.svg");
  }