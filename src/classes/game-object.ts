import { Vector2 } from "./vector2";

export class GameObject {
    constructor() {

    }

    readonly canvas: HTMLCanvasElement = document.querySelector<HTMLCanvasElement>('#canvas')!;
    ctx: CanvasRenderingContext2D = this.canvas.getContext('2d')!;
    
    position: Vector2 = new Vector2();
    velocity: Vector2 = new Vector2();
    acceleration: Vector2 = new Vector2();

    friction: number = 0;

    fillStyle: string = 'black';
    strokeStyle: string = 'black';
    strokeWidth: number = 1;

    public update(time: number) {
        this.ctx.lineWidth = this.strokeWidth;

        this.velocity = this.velocity.add(this.acceleration.multiplyScalar(time));
        //this.velocity.x += this.acceleration.x * time;
        //this.velocity.y += this.acceleration.y * time;

        let frictionMultiplier = this.friction > 1 ? 1 / this.friction : 1;
        //this.velocity.x *= frictionMultiplier;
        //this.velocity.y *= frictionMultiplier;

        this.velocity = this.velocity.multiplyScalar(frictionMultiplier);
        
        //this.position.x += this.velocity.x * time;
        //this.position.y += this.velocity.y * time; 
        this.position = this.position.add(this.velocity.multiplyScalar(time));

        if(this.position.x < 0 && this.velocity.x < 0) {
            this.velocity.x *= -1;
            this.position.x = 0;
        }

        if((this.position.x > this.canvas.width && this.velocity.x > 0)) {
            this.velocity.x *= -1;
            this.position.x = this.canvas.width;
        }
    
        if((this.position.y < 0 && this.velocity.y < 0)) {
            this.velocity.y *= -1;
            this.position.y = 0;
        }

        if((this.position.y > this.canvas.height && this.velocity.y > 0)) {
            this.velocity.y *= -1;
            this.position.y = this.canvas.height;
        }
    }
}

