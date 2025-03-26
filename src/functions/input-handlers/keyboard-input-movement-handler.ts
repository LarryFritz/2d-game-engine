import { GameObject } from "../../classes/game-object";

export const keyboardInputMovementHandler = (keysDown: string[], obj: GameObject, acceleration: number) => {
    let newAccelerationX = 0;
    let newAccelerationY = 0;
  
    for(const keyCode of keysDown) {
      // Perform actions based on the pressed key
      switch(keyCode) {
        case 'ArrowUp':
          newAccelerationY += -1 * acceleration;
          break;
        case 'ArrowDown': 
          newAccelerationY += acceleration;
          break;
        case 'ArrowRight':
          newAccelerationX += acceleration;
          break;
        case 'ArrowLeft': 
          newAccelerationX += -1 * acceleration;
          break
      }
    }
  
    obj.acceleration.x = newAccelerationX;
    obj.acceleration.y = newAccelerationY;
}