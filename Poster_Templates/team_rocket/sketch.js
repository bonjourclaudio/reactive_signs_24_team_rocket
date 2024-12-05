let font;
let digits = [];

function preload() {
    // load the font
    digits[0] = loadImage('./assets/2.svg');
    digits[1] = loadImage('./assets/2.svg');
    digits[2] = loadImage('./assets/2.svg');
    digits[3] = loadImage('./assets/2.svg');
    digits[4] = loadImage('./assets/2.svg');
    digits[5] = loadImage('./assets/2.svg');
    digits[6] = loadImage('./assets/2.svg');
    digits[7] = loadImage('./assets/2.svg');
    digits[8] = loadImage('./assets/2.svg');
    digits[9] = loadImage('./assets/2.svg');

    font = loadFont('barlow_condensed.otf');
}
function setup() {
  /*important!*/ createCanvas(poster.getWindowWidth(), poster.getWindowHeight()); // Don't remove this line. 
 /*important!*/ poster.setup(this, "/Poster_Templates/libraries/assets/models/movenet/model.json");  // Don't remove this line. 
    textFont("Maax Mono");
}

function draw() {
    background(0, 0, 0, 20);
    fill(255);
/*important!*/ poster.posterTasks(); // do not remove this last line!  
    drawImgLetter(digits[poster.getCounter()]);
}

function windowScaled() { // this is a custom event called whenever the poster is scaled
    // textSize(10 * poster.vw);
}

function drawImgLetter(img) {
    push()

    let osc = map(sin(frameCount * 0.1), -1, 1, 0, 1)

    let xPos = map(poster.posNormal.x, -1, 1, -width / 2, width / 2)
    let xMorph = map(poster.posNormal.x, -1, 1, -width, width)

    // morph shape based on osc
    let h = map(osc, 0, 1, img.height * 5, img.height * 6)

    image(img, xPos, height / 2 - h / 2, xMorph, h);
    pop()
}