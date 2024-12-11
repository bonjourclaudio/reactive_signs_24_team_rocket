let font;
let digits = [];

function preload() {
    // load the font
    digits[0] = loadImage('./assets/3.png');
    digits[1] = loadImage('./assets/3.png');
    digits[2] = loadImage('./assets/3.png');
    digits[3] = loadImage('./assets/3.png');
    digits[4] = loadImage('./assets/3.png');
    digits[5] = loadImage('./assets/3.png');
    digits[6] = loadImage('./assets/3.png');
    digits[7] = loadImage('./assets/3.png');
    digits[8] = loadImage('./assets/3.png');
    digits[9] = loadImage('./assets/3.png');

    font = loadFont('barlow_condensed.otf');
}
function setup() {
  /*important!*/ createCanvas(poster.getWindowWidth(), poster.getWindowHeight()); // Don't remove this line. 
 /*important!*/ poster.setup(this, "/Poster_Templates/libraries/assets/models/movenet/model.json");  // Don't remove this line. 
    textFont("Maax Mono");
}

function draw() {
    background(0);
    fill(255);
/*important!*/ poster.posterTasks(); // do not remove this last line!  
    drawImgLetter(digits[poster.getCounter()]);
}

function windowScaled() { // this is a custom event called whenever the poster is scaled
    // textSize(10 * poster.vw);
}

function drawImgLetter(img) {


    let yOscillation = map(sin(frameCount * 0.05), -1, 1, 0.8, 1.1);
    let xOscillation = map(sin(frameCount * 0.05), -1, 1, 0.5, 1.5);

    let distanceFromCenter = abs(poster.posNormal.x - 0.5) * 2;
    let squeezeFactor = map(distanceFromCenter, 0, 1, 1, 0.1);
    let letterWidth = width * squeezeFactor * xOscillation;
    let letterHeight = height * yOscillation;

    let xPos = map(poster.posNormal.x, 0, 1, letterWidth / 2, width - letterWidth / 2);


    imageMode(CENTER);
    image(img, xPos, height / 2, letterWidth, letterHeight);
}
