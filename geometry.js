function setup() {
  createCanvas(250, 250, WEBGL);
}

function draw() {
  background(0, 0, 0, 0);

  normalMaterial(0);
  translate(0, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(90, 20);
  pop();

}