let digit, spike, font, reflectionImg;

function preload() {
    font = loadFont('barlow_condensed.otf');
    reflectionImg = loadImage('./assets/scape.jpg')

    digit = loadModel("./assets/3.obj");
    spike = loadModel("./assets/spikes.obj");
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



    push()
    let targetAngle = map(poster.posNormal.x, 0, 1, PI / 4, -PI / 4);
    rotateY(targetAngle);

    push()
    drawNum(digit)
    drawSpike()
    pop()
    pop()


  /*important!*/ poster.posterTasks(); // do not remove this last line!  
}

function drawNum(objModel) {

    push()

    // texture & styling
    shininess(200);
    specularMaterial(50);
    metalness(100);
    imageLight(reflectionImg);


    // flip model upside down
    rotateX(PI)

    // increase size if user is on either side
    let distanceFromCenter = abs(poster.posNormal.x - 0.5);
    let scaleFactor = 15 + distanceFromCenter * 20;
    scale(scaleFactor * 2);

    /* rotate model to face viewer
    let targetAngle = map(poster.posNormal.x, 0, 1, PI / 4, -PI / 4);
    rotateY(targetAngle);
*/


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

function drawSpike() {


    push()

    let time = millis() % 1000;
    let scaleFactor = lerp(50, 20, time / 1000);
    scale(scaleFactor);


    // texture & styling
    shininess(200);
    specularMaterial(50);
    metalness(100);
    imageLight(reflectionImg);


    // flip model upside down
    rotateX(PI)

    // display model
    model(spike);

    pop()
}

/**
 * Adjusts the rendering properties when the window is scaled.
 */
function windowScaled() {
    if (_renderer.drawingContext instanceof WebGLRenderingContext) {
    }
}