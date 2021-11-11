lipsX=0;
lipsY=50;

function preload() {
  clown_lips = loadImage('https://i.postimg.cc/rpqYztMd/l1.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    lipsX = results[0].pose.nose.x;
    lipsY = results[0].pose.nose.y;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_lips, lipsX, lipsY, 60, 60);
}

function take_snapshot(){    
  save('myFilterImage.png');
}