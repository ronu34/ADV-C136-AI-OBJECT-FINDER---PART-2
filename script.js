status = "";

function preload() {}

function setup() {
    canvas = createCanvas(380,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
    obj_name = document.getElementById("obj_name").value;
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
}

function draw() {
    image(video,0,0,600,500);
}