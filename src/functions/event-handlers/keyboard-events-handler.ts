export function handleKeyboardEvents(keysDown: string[]) {
    const validKeys = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];

    document.addEventListener('keydown', function(event) {
        const keyCode = event.code; // Gets the physical key code

        if(validKeys.includes(keyCode) && !keysDown.includes(keyCode)) {
            keysDown.push(keyCode);
        }
    });

    document.addEventListener('keyup', function(event) {
        const keyCode = event.code; // Gets the physical key code

        keysDown.splice(0, keysDown.length, ...keysDown.filter(k => k !== keyCode));
    });
}