var x, y, z;

var triangle;

function preload(){

  triangle = loadImage("triangle.png");

}

function setup() {
  createCanvas(800,400);
  var title = createElement('h2');
  title.html('Hypotenuse Calculator');
  title.position(300,0);
 
  this.input1 = createInput("").attribute("placeholder","A"); 
  this.input2 = createInput("").attribute("placeholder","B");
  this.input1.position(50,90);
  this.input2.position(250,90);

  this.button = createButton("=");
  this.button.position(500,90);


  x = 0
  y = 0
  z = 0
}

function draw() {
  background("red");  

  image(triangle,500,150,220,200)

  this.button.mousePressed(()=>{
    
    x = this.input1.value();
    y = this.input2.value();
    z = Math.sqrt(x*x + y*y);
  
  
})

fill("Black")
textSize(30);
text("Hypotenuse or (C) is:\n"+z,50,200);
fill("Yellow")
text("By Shreshth😊",50,390)

}