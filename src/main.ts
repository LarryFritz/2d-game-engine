import './style.css'
import { Circle } from './classes/circle.ts';
import { GameObject } from './classes/game-object.ts';
import { Square } from './classes/square.ts';
import { Vector2 } from './classes/vector2.ts';
import { keyboardInputMovementHandler } from './functions/input-handlers/keyboard-input-movement-handler.ts';
import { Game } from './classes/game.ts';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="canvas">
  </canvas>
`;

let game = new Game();

let circle = new Circle();
circle.position = new Vector2(Math.random() * 1000, Math.random() * 1000);
circle.velocity = new Vector2(Math.random(), Math.random())
circle.radius = 20;
circle.fillStyle = 'white';
circle.strokeStyle = 'black';
circle.strokeWidth = 10;
game.state.gameObjects.push(circle);

const MOVEMENT_ACCELERATION = 0.002;

let circle2 = new Circle();
circle2.position.x = 500
circle2.position.y = 500;
circle2.velocity.x = 0;
circle2.velocity.y = 0;
circle2.radius = 30;
circle2.fillStyle = 'yellow';
circle2.strokeStyle = 'red';
circle2.strokeWidth = 20;
circle2.friction = new Vector2(1.05, 1.05);
circle2.inputHandler = (keysDown: string[], obj: GameObject) => { 
  keyboardInputMovementHandler(keysDown, obj, MOVEMENT_ACCELERATION);
}
game.state.gameObjects.push(circle2);

let square = new Square();
square.position = new Vector2(Math.random() * 1000, Math.random() * 1000)
square.velocity = new Vector2(Math.random(), Math.random())
square.width = 200;
square.height = 100
square.lineWidth = 10;
square.fillStyle = 'green';
square.strokeStyle = 'pink';

game.state.gameObjects.push(square);

game.render();