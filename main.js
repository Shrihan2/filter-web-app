noseX=0;
noseY=0;

function preload(){
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas=createCanvas(500,400);
    video=createCapture(VIDEO);
    video.size(500,400);
    video.hide();
    canvas.center();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
    }
}
function draw(){
    image(video,0,0,500,400);
    image(mustache,noseX,noseY+20,30,30);
    console.log("drawing")
}
function take_snapshot(){
    save("filter.png");
}
