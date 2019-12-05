

var timeleft = 6;
let snd1;
var startTime = 0;
var currentTime = 0;
setTimeout(nextChapter, 6000);

var stars = [];
let r, g, b;
var speed;
let input;
let analyzer;
let img;
let snd2;
let imgX = 0, imgY = 0;
let displayImage;

function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min, 2) + ':' + nf(sec, 2);
}

var ding;

function preload() {
 // ding = loadSound("ding.mp3");
  snd1 = loadSound("PORTALSeffect1.mp3");
  snd2 = loadSound("Warped.mp3");
   img = loadImage('Hole1.jpg');
   
}

function setup() {
  noCanvas();
  startTime = millis();

snd1.play();
  
  var params = getURLParams();
  console.log(params);
  if (params.minute) {
    var min = params.minute;
    timeleft = min * 60;
  }

  var timer = select('#timer');
  timer.html(convertSeconds(timeleft - currentTime));

  var interval = setInterval(timeIt, 1000);

  function timeIt() {
    currentTime = floor((millis() - startTime) / 1000);
    timer.html(convertSeconds(timeleft - currentTime));
    if (currentTime == timeleft) {
     // ding.play();
      clearInterval(interval);
      //counter = 0;
    }
  }

}
function draw() {
 // image(displayImage, 0, 0, 400, 400); 
 // let level = amplitude.getLevel();
 // console.log(level);
 // level = map(level, 0, 0.2, 0, 255);
 //   textSize(40);
  //  text(level, width/2-200, height/2);
  // fill(level);
  // ellipse(width/2, height/2, 200);
}

function nextChapter(){
  

  snd1.stop();
  snd2.play();
  displayImage = img;
  
  function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 200; i++) {
    stars[i] = new Star();
   
      mic = new p5.AudioIn();
     input = new p5.AudioIn();

  input.start();
  
  }
}



function draw() {
   speed = input.getLevel();
   let threshold = 0.1;
   if (speed > threshold) {
  speed = 100
  }
  background(0);
  image(img,imgX,imgY,windowWidth,windowHeight);
  
  
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
      r = random(255);
  g = random(100,200); 
  b = random(100);
  a = random(200,255);
  }
  
}
function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(  r = random(255),
    g = random(255),
    b = random(255));
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 2, 1, 0, height);

    this.pz = this.z;

   stroke (  r = random(255),
    g = random(255),
    b = random(255));
    line(px, py, sx, sy);

  }
}

  

  //setTimeout(nextNextChapter, 3000);
  
}