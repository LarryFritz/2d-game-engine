import { GameObject } from "./game-object";

export class GameState {
    constructor() {
        this.lastUpdateTime = new Date();
        this.deltaTime = 0;
        this.gameObjects = [];
        this.keysDown = [];
    }

    lastUpdateTime: Date;
    deltaTime: number;
    gameObjects: GameObject[];
    keysDown: string[];
}