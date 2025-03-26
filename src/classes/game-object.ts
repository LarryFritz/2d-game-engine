import { Vector2 } from "./vector2";

export class GameObject {
    constructor() {

    }

    readonly canvas: HTMLCanvasElement = document.querySelector<HTMLCanvasElement>('#canvas')!;
    ctx: CanvasRenderingContext2D = this.canvas.getContext('2d')!;

    inputHandler?: (keysDown: string[], obj: GameObject) => void;
    
    position: Vector2 = new Vector2();
    velocity: Vector2 = new Vector2();
    acceleration: Vector2 = new Vector2();

    friction: Vector2 = new Vector2(0, 0);

    fillStyle: string = 'black';
    strokeStyle: string = 'black';
    strokeWidth: number = 1;

    public update(time: number, keysDown: string[]) {
        this.ctx.lineWidth = this.strokeWidth;

        if(this.inputHandler) {
            this.inputHandler(keysDown, this);
        }

        this.velocity = this.velocity.add(this.acceleration.multiplyScalar(time));
        //this.velocity.x += this.acceleration.x * time;
        //this.velocity.y += this.acceleration.y * time;

        let frictionMultiplierX = this.friction.x > 1 ? 1 / this.friction.x : 1;
        let frictionMultiplierY = this.friction.y > 1 ? 1 / this.friction.y : 1;
        
        let frictionMultiplier = new Vector2(frictionMultiplierX, frictionMultiplierY);
        //this.velocity.x *= frictionMultiplier;
        //this.velocity.y *= frictionMultiplier;

        this.velocity = this.velocity.multiply(frictionMultiplier);
        
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

