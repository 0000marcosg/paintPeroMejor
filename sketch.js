
let slider;
let boton;

function setup() {
  createCanvas(400, 400);
  background(255);
  
  slider = createSlider(1, 15, 5, 1);
  slider.position(0, 410);
  slider.size(400, 10);
  boton = createButton('Guardar Imagen!');
  boton.mousePressed(guardarImagen);
  boton.position(0, 450);
}

function draw() {
  let anchoPincel = slider.value();
  noStroke()
  fill(0);
  if (mouseIsPressed){
  ellipse(mouseX, mouseY, anchoPincel);
  }
}

function guardarImagen(){
  save('imagen.jpg');
}