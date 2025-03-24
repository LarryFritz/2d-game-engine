export class Vector2 {
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    x: number = 0;
    y: number = 0;

    public add(rhs: Vector2): Vector2 {
        return new Vector2(this.x + rhs.x, this.y + rhs.y);
    }

    public addScalar(value: number): Vector2 {
        return new Vector2(this.x + value, this.y + value);
    }

    public subtract(rhs: Vector2): Vector2 {
        return new Vector2(this.x - rhs.x, this.y - rhs.y);
    }

    public subtractScalar(value: number): Vector2 {
        return new Vector2(this.x - value, this.y - value);
    }

    public multiply(rhs: Vector2) {
        return new Vector2(this.x * rhs.x, this.y * rhs.y);
    }

    public multiplyScalar(value: number): Vector2 {
        return new Vector2(this.x * value, this.y * value);
    }

    public divide(rhs: Vector2) {
        return new Vector2(this.x / rhs.x, this.y / rhs.y);
    }

    public divideScalar(value: number): Vector2 {
        return new Vector2(this.x / value, this.y / value);
    }
}