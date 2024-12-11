let digits = [];
let font, reflectionImg, spikeObj;

function preload() {
    font = loadFont('barlow_condensed.otf');
    reflectionImg = loadImage('./assets/scape.jpg')
    reflectionImg2 = loadImage('./assets/texture.gif')

    for (let i = 0; i < 10; i++) {
        digits[i] = loadModel(`./assets/${i}.obj`);
    }

    spikeObj = loadModel('./assets/spike.obj');
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
    push();

    // increase size if user is on either side
    let distanceFromCenter = abs(poster.posNormal.x - 0.5);
    let scaleFactor = 15 + distanceFromCenter * 20;
    scale(scaleFactor);

    shininess(200);
    specularMaterial(50);
    metalness(100);                     // -> not available through PosterControl
    imageLight(reflectionImg);          // -> not available through PosterControl
    // fill(255, 100); // make it transparentish

    push();

    // always face the viewer
    let targetAngle = map(poster.posNormal.x, 0, 1, -PI / 4, PI / 4);
    rotateY(targetAngle);
    rotateX(PI); // flip upside down

    // apply pulse effect
    let pulse = 1 + 0.1 * sin(frameCount * 0.1);
    scale(pulse);
    model(objModel);

    pop();
    pop()


    push()
    rotateZ(PI / 2)
    rotateX(PI / 3 * frameCount * 0.01)
    rotateY(PI / 3 * frameCount * 0.01)
    scale(40, 40, 20)
    shininess(200);
    specularMaterial(50);
    metalness(100);
    fill(255, 5);
    imageLight(reflectionImg2);
    model(spikeObj)
    pop()
}

/**
 * Adjusts the rendering properties when the window is scaled.
 */
function windowScaled() {
    if (_renderer.drawingContext instanceof WebGLRenderingContext) {
    }
}