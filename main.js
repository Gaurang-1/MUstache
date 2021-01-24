function preload() {

  }
  
  function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
  
  }

  function draw() {
    image(video, 180, 150, 300, 300);
  }
  
  function take_snapshot(){    
    save('myFilterImage.png');
  }