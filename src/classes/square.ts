import { GameObject } from "./game-object";
import { GameState } from "./game-state";

export class Square extends GameObject {
    constructor() {
       super() 
    }

    width: number = 1;
    height: number = 1;
    lineWidth: number = 0;

    public override update(state: GameState) {
        super.update(state);
        
        const centerX = this.position.x;
        const centerY = this.position.y;
    
        this.ctx.fillStyle = this.fillStyle;

        this.ctx.beginPath();
        this.ctx.fillRect(centerX, centerY, this.width, this.height);

        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.strokeRect(centerX, centerY, this.width, this.height);
    }
}