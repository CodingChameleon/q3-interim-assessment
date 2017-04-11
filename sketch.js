
var x = 0;
var speed = 8;
var r;
var rules = [30, 75, 58, 20, 86, 75]

function setup() {
    createCanvas(600,400);
}

function draw(){
  background(0);
  shape();
  loading();
  go();
  idk();
  me();
  
  if(mouseY > 300){
     background(247, 231, 2);
  }else{
     background(0);
  }
}

function shape(){
  stroke(255);
  strokeWeight(4);
  fill(7, 198, 20);
  ellipse(200, 200, 100, 100);
}

function loading(){
    fill(247, 130, 4);
    rect(x, 20, 55, 55, 20);
}

function go(){
    x = x + speed;
}

function idk(){
    if(x>400 || x<0){
        x = 0;
    }
}
function me(){
    for( var t = 0; t < 600; t = t + 80){
        fill(154, 90, 188);
        triangle((t+1)*20,40, rules[t], rules[t], 90, 50); 
    }
}