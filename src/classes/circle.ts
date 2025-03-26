import { GameObject } from "./game-object";
import { GameState } from "./game-state";

export class Circle extends GameObject {
    constructor() {
       super() 
    }

    radius: number = 1;

    public override update(state: GameState) {
        super.update(state);
        
        const centerX = this.position.x;
        const centerY = this.position.y;
    
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, this.radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.fill();
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.stroke();
    }
}