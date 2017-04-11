function setup() {
  createCanvas(windowWidth, windowHeight/2);
  background(0);
  noLoop();
}

function draw() {
  for (var x = 0; x < windowWidth; x+=10) {
    fill(random(55,255),random(55,255),random(55,255));
    ellipse(x, windowHeight/4, 50, 50);
  }
}
