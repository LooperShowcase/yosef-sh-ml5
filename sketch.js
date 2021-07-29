let lolo;
let bgImg;
let pImg;
let oImg;
let obstacles = [];
let wordClassifier;

function preload() {
  bgImg = loadImage("backg.png");
  pImg = loadImage("player.gif");
  oImg = loadImage("obstacle.png");

  let options = { probabilityThreshold: 0.7 };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(1920, 1080);
  lolo = new Player();
  wordClassifier.classify(heardWord);
}

function heardWord(error, results) {
  if (results[0].label == "up") {
  }
}

function keyPressed() {
  if (key == " ") {
    lolo.jump();
    console.log("up");
  }
}

function draw() {
  background(bgImg);
  lolo.show();
  lolo.move();
  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }
  for (let obs of obstacles) {
    obs.show();
    obs.move();

    if (lolo.collided(obs) == true) {
      console.log("Game-Over");
      noLoop();
    }
  }
}
