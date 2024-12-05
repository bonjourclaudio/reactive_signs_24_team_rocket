let font;
let img_0, img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9;

function preload() {
    // load the font
    font = loadFont('barlow_condensed.otf');
    img_2 = loadImage('./assets/SVG/2.svg');
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

    switch (poster.getCounter()) {
        case 0:
            drawImgLetter(img_2)
            break;
        case 1:
            drawImgLetter(img_2)
            break;
        case 2:
            drawImgLetter(img_2)
            break;
        case 3:
            drawImgLetter(img_2)
            break;
        case 4:
            drawImgLetter(img_2)
            break;
        case 5:
            drawImgLetter(img_2)
            break;
        case 6:
            drawImgLetter(img_2)
            break;
        case 7:
            drawImgLetter(img_2)
            break;
        case 8:
            drawImgLetter(img_2)
            break;
        case 9:
            drawImgLetter(img_2)
            break;
        default:
            drawImgLetter(img_2)
            break;
    }

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
    let height = map(osc, 0, 1, 0, width / 2)

    image(img, xPos, height, xMorph, height);
    pop()
}