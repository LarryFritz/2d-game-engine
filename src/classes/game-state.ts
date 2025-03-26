import { GameObject } from "./game-object";

export class GameState {
    constructor() {
        this.lastUpdateTime = new Date();
        this.gameObjects = [];
        this.keysDown = [];
    }

    lastUpdateTime: Date;
    gameObjects: GameObject[];
    keysDown: string[];
}