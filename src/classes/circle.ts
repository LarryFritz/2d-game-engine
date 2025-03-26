import { GameObject } from "./game-object";

export class Circle extends GameObject {
    constructor() {
       super() 
    }

    radius: number = 1;

    public override update(time: number, keysDown: string[]) {
        super.update(time, keysDown);
        
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