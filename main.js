noseX=0;
noseY=0;

function preload(){
clown_nose=loadImage('https://i.postimg.cc/15xWb2BH/R-removebg-preview.png');

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);

}
function draw(){
image(video,0 , 0, 300, 300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX, noseY, 20);
image(clown_nose,noseX-27,noseY+2,60,40);
}

function take_snapshot(){
  save('myFilterImage.png');
}
function modelloaded(){
  console.log('PoseNet is Initalized')
}

function gotPoses(results){
  if(results.length > 0){
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    console.log("nose x =" + noseX);
    console.log("nose y =" +noseY);
  }

}