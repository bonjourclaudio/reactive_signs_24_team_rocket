let digits = [];
let font, reflectionImg, spikeObj;

function preload() {
    font = loadFont('barlow_condensed.otf');
    reflectionImg = loadImage('./assets/scape.jpg')
    reflectionImg2 = loadImage('./assets/texture.gif')

    for (let i = 0; i < 10; i++) {
        digits[i] = loadModel(`./assets/${i}.obj`);
    }

    //spikeObj = loadModel('./assets/spike.obj');
    spikeObj = loadModel('./assets/spikomaticorulo.obj');
}


function setup() {
  /*important!*/ createCanvas(poster.getWindowWidth(), poster.getWindowHeight(), WEBGL); // Don't remove this line. 
  /*important!*/ poster.setup(this, "/Poster_Templates/libraries/assets/models/movenet/model.json");  // Don't remove this line. 

    textFont(font)
    noStroke();
    let cam = createCamera();
    console.log(cam)

}

function draw() {
    background(0)

    drawNum(digits[poster.getCounter()]);

  /*important!*/ poster.posterTasks(); // do not remove this last line!  
}

function drawNum(objModel) {

    push()

    // texture & styling
    shininess(200);
    specularMaterial(50);
    metalness(100);
    imageLight(reflectionImg2);


    // flip model upside down
    rotateX(PI)

    // increase size if user is on either side
    let distanceFromCenter = abs(poster.posNormal.x - 0.5);
    let scaleFactor = 15 + distanceFromCenter * 20;
    scale(scaleFactor * 2);

    // rotate model to face viewer
    let targetAngle = map(poster.posNormal.x, 0, 1, -PI / 4, PI / 4);
    rotateY(targetAngle);

    // rotate model over itself for just under one second
    let time = millis() % 1000;
    let angle;
    if (time < 800) {
        angle = PI * (time / 1000) * 0.009; // speed for first 800ms
    } else {
        angle = PI * ((time - 800) / 200) * 0.8; // speed for last 200ms
    }
    rotateX(angle);

    // display model
    model(objModel);

    pop()


}

/**
 * Adjusts the rendering properties when the window is scaled.
 */
function windowScaled() {
    if (_renderer.drawingContext instanceof WebGLRenderingContext) {
    }
}