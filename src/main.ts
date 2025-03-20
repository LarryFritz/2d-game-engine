import './style.css'
import { Circle } from './classes/circle.ts';
import { GameObject } from './classes/game-object.ts';
import { Square } from './classes/square.ts';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="canvas">
  </canvas>
`
let gameObjects: GameObject[] = []

let canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
let ctx = canvas.getContext('2d')!;

const rsObserver = new ResizeObserver(() => { 
  for(let gameObj of gameObjects) {
    gameObj.ctx.canvas.width = window.innerWidth;
    gameObj.ctx.canvas.height = window.innerHeight;
  }
});
rsObserver.observe(canvas);

let lastUpdateTime = new Date();

let circle = new Circle();
circle.velocity.x = 0.05;
circle.velocity.y = 0.1;
circle.radius = 20;
circle.fillStyle = 'white';
circle.strokeStyle = 'black';
circle.strokeWidth = 10;
gameObjects.push(circle);

let circle2 = new Circle();
circle2.position.x = 500
circle2.position.y = 500;
circle2.velocity.x = 0;
circle2.velocity.y = 0;
circle2.radius = 30;
circle2.fillStyle = 'yellow';
circle2.strokeStyle = 'red';
circle2.strokeWidth = 20;
circle2.friction = 1.05;
gameObjects.push(circle2);

let square = new Square();
square.position.x = 400;
square.position.y = 400;
square.velocity.x = 0.2;
square.velocity.y = 0.3;
square.width = 200;
square.height = 100
square.lineWidth = 10;
square.fillStyle = 'green';
square.strokeStyle = 'pink';

gameObjects.push(square);

const validKeys = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
let keysDown: string[] = [];

const ACCELERATION = 0.002;
document.addEventListener('keydown', function(event) {
  const keyCode = event.code; // Gets the physical key code

  if(validKeys.includes(keyCode) && !keysDown.includes(keyCode)) {
    keysDown.push(keyCode);
  }
});

document.addEventListener('keyup', function(event) {
  const keyCode = event.code; // Gets the physical key code

  keysDown = keysDown.filter(k => k !== keyCode);
});

gameLoop();

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let deltaTime = Date.now() - lastUpdateTime.getTime();

  handleKeysDown();
  
  for(let gameObj of gameObjects) {
    gameObj.update(deltaTime);
  }

  lastUpdateTime = new Date();

  requestAnimationFrame(gameLoop);
}

function handleKeysDown() {
  let newAccelerationX = 0;
  let newAccelerationY = 0;

  for(const keyCode of keysDown) {
    // Perform actions based on the pressed key
    switch(keyCode) {
      case 'ArrowUp':
        newAccelerationY += -1 * ACCELERATION;
        break;
      case 'ArrowDown': 
        newAccelerationY += ACCELERATION;
        break;
      case 'ArrowRight':
        newAccelerationX += ACCELERATION;
        break;
      case 'ArrowLeft': 
        newAccelerationX += -1 * ACCELERATION;
        break
    }
  }

  circle2.acceleration.x = newAccelerationX;
  circle2.acceleration.y = newAccelerationY;
}