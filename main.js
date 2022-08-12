stats = ''

function setup() {
    canvas = createCanvas(400, 280);
    canvas.position(710, 450);

    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function modelLoaded() {
    console.log('Model Loaded');
    stats = true;
}

function draw() {
    image(video, 0, 0, 380, 380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}
