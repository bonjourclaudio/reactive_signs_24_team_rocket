let obj, img, font;
let digits = [];

function preload() {
    obj = loadModel('./assets/spike.obj');
    img = loadImage('./assets/img.gif');

    for (let i = 0; i < 10; i++) {
        digits[i] = loadImage('./assets/' + 3 + '.png'); // hardcode 3 for now
    }

    font = loadFont('barlow_condensed.otf');
}

function setup() {
  /*important!*/ createCanvas(poster.getWindowWidth(), poster.getWindowHeight(), WEBGL); // Don't remove this line. 
 /*important!*/ poster.setup(this, "/Poster_Templates/libraries/assets/models/movenet/model.json");  // Don't remove this line. 
    textFont(font);
}

function draw() {
    background(0);

    let targetX, targetY = 0;

    //let targetX = constrain(mouseX - width / 2, -width / 2 + 750, width / 2 - 750);
    //let targetY = constrain(mouseY - height / 2, -height / 2 + 300, height / 2 - 300);

    drawSpikes(targetX, targetY);
    drawImgLetter(digits[poster.getCounter()]);

    /*important!*/ poster.posterTasks(); // do not remove this last line!  
}

function windowScaled() { // this is a custom event called whenever the poster is scaled
    // textSize(10 * poster.vw);
    if (_renderer.drawingContext instanceof WebGLRenderingContext) {
    }
}

function drawSpikes(targetX, targetY) {
    scale(10);
    imageLight(img);
    specularMaterial(50);
    shininess(200);
    metalness(50);
    rotateX(frameCount * 0.001);
    rotateY(frameCount * 0.001);
    fill(255, 100);
    model(obj);
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
