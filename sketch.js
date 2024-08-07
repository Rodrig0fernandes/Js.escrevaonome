let player;

let obstacles = [];

let gameOver = false;

function setup() {

  createCanvas(800, 600);

  player = new Player();

  for (let i = 0; i < 10; i++) {

    obstacles.push(new Obstacle());

  }

}

function draw() {

  background(0);

  

  if (gameOver) {

    fill(255, 0, 0);

    textSize(50);

    textAlign(CENTER, CENTER);

    text('Game Over', width / 2, height / 2);

    return;

  }

  player.update();

  player.display();

  for (let obstacle of obstacles) {

    obstacle.update();

    obstacle.display();

    if (player.collidesWith(obstacle)) {

      gameOver = true;

    }

  }

}

function keyPressed() {

  if (keyCode === UP_ARROW) {

    player.move(0, -5);

  } else if (keyCode === DOWN_ARROW) {

    player.move(0, 5);

  } else if (keyCode === LEFT_ARROW) {

    player.move(-5, 0);

  } else if (keyCode === RIGHT_ARROW) {

    player.move(5, 0);

  }

}

class Player {

  constructor() {

    this.x = width / 2;

    this.y = height / 2;

    this.size = 20;

    this.speedX = 0;

    this.speedY = 0;

  }

  update() {

    this.x += this.speedX;

    this.y += this.speedY;

    // Impede o jogador de sair da tela

    this.x = constrain(this.x, 0, width);

    this.y = constrain(this.y, 0, height);

  }

  display() {

    fill(0, 0, 255);

    ellipse(this.x, this.y, this.size);

  }

  move(x, y) {

    this.speedX = x;

    this.speedY = y;

  }

  collidesWith(obstacle) {

    let d = dist(this.x, this.y, obstacle.x, obstacle.y);

    return d < (this.size / 2 + obstacle.size / 2);

  }

}

class Obstacle {

  constructor() {

    this.x = random(width);

    this.y = random(height);

    this.size = random(20, 50);

    this.speedX = random(-2, 2);

    this.speedY = random(-2, 2);

  }

  update() {

    this.x += this.speedX;

    this.y += this.speedY;

    

    if (this.x < 0 || this.x > width) {

      this.speedX *= -1;

    }

    if (this.y < 0 || this.y > height) {

      this.speedY *= -1;

    }

  }

  display() {

    fill(255, 0, 0);

    rect(this.x, this.y, this.size, this.size);

  }

}





