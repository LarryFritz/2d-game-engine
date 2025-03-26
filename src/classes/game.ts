import { handleKeyboardEvents } from "../functions/event-handlers/keyboard-events-handler";
import { GameState } from "./game-state";

export class Game {
    constructor() {
        this.canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
        this.ctx = this.canvas.getContext('2d')!;
        this.state  = new GameState();

        const rsObserver = new ResizeObserver(() => { 
            for(let gameObj of this.state.gameObjects) {
              gameObj.ctx.canvas.width = window.innerWidth;
              gameObj.ctx.canvas.height = window.innerHeight;
            }
        });
        rsObserver.observe(this.canvas);

        handleKeyboardEvents(this.state.keysDown);
    }

    public state: GameState;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    public render = () => { 
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.state.deltaTime = Date.now() - this.state.lastUpdateTime.getTime();
        
        for(let gameObj of this.state.gameObjects) {
          gameObj.update(this.state);
        }
      
        this.state.lastUpdateTime = new Date();
      
        requestAnimationFrame(this.render);
    }
}