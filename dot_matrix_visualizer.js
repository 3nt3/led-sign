// This is a p5.js sketch

let slider;

function setup() {
  createCanvas(400, 400);

  slider = createSlider(3, 15);
}

const N_LEDS = 400;

function draw() {
  background(0);

  const rWidth = N_LEDS/slider.value();

  const originX = 20;
  const originY = 20;

  fill(0xff);
  textSize(24);
  textFont("Kario 39C3")
  text(`W: ${Math.floor(rWidth)}, H: ${slider.value()}`, originX, originY+20);

  for (let x = 0; x < rWidth; x++) {
    for (let y = 0; y < slider.value(); y++) {
      circle(originX + x * 6, originY + 40 + y * 6, 5);
    }
  }
}
