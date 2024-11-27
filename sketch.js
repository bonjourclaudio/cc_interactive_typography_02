let randomTexts = ["the", "grid", "is", "alive", "typography", "creating", "experience"];

let rows, cols;
let size = 50;
let grid = [];

let xoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(width / size) + 1;
  rows = floor(height / size) + 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid.push(createVector(j * size, i * size));
    }
  }
}


function draw() {
  background("blue");

  textFont("Maax Mono");
  textAlign(CENTER, CENTER);
  textSize(24);


  let step = 4;

  for (let i = 0; i < rows; i += step) {
    for (let j = 0; j < cols; j += step) {

      let x = j * size;
      let y = i * size;

      let textNoise = noise(x * 0.01, y * 0.01, xoff);
      let index = floor(textNoise * randomTexts.length);

      let ix = ceil(map(mouseX, 0, width, 0, randomTexts[index].length));

      if (ix == randomTexts[index].length) {
        fill(255);
        text(randomTexts[index], dist(mouseX, mouseY, x, y), y);
      } else {
        noFill()
        stroke(255)
        strokeWeight(0.5)
        text(randomTexts[index].substring(0, ix), dist(mouseX, mouseY, x, y), y);
      }
    }
  }

  xoff += 0.02;
}
