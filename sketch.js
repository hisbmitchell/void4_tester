function setup() {
  
   
  canvas = createCanvas(640, 480);
  background('#e50000');
  canvas.id('p5canvas');
  
  var seriously = new Seriously();
   
   var src = seriously.source('#image0');
   var target = seriously.target('#p5canvas');
   
   seriously.go();
   
}

function draw() {
  
  
}

