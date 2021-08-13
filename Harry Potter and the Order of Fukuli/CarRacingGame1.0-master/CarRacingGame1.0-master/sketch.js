var gameState = 0;
var playerCount;
var players;
var distance = 0;
var database;

var player, game, form;

var ciel, harryImg, dracoImg;

var players, harry, draco;

function preload(){
  ciel = loadImage("download.png");
  harryImg = loadImage("harry.png");
  dracoImg = loadImage("draco.png");
}

function setup(){
  canvas = createCanvas(1340,600);;
  database = firebase.database();
  game = new Game();
  form = new Form();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  if(gameState === 0){
    form.display();
  }
}
