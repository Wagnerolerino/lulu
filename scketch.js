let xBolinha = 100;
let yBolinha = 208;
let diametro = 15
let raio = diametro / 2

let velocidadeXBolinha = 10
let velocidadeYBolinha = 10

let xRaquete = 5
let yRaquete = 150
let comprimentoRaquete = 10;
let alturaRaquete = 90

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(" rgb(128,128,186)");
  
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  movimentaRaquete();
  rect(xRaquete, yRaquete, 10, 90)
 