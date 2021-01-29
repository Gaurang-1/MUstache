nose_x=0;
nose_y=0;

function preload() {

  }
  
  function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video,modal_loaded);
    poseNet.on('Pose',gotPoses)
  }

  function modal_loaded(){
    console.log("PoseNet is Initialized");
  }

  function gotPoses(results){
    if(results.length >0){
    console.log(results);
    console.log("Nose x ="+results[0].pose.nose.x);
    console.log("Nose y ="+results[0].pose.nose.y);
    }
  }
  function draw() {
    image(video, 180, 150, 300, 300);
  }
  
  function take_snapshot(){    
    save('myFilterImage.png');
  }