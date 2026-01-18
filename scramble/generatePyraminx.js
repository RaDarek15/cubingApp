function generatePyraminx() {
    const moves = ["U","R", "B", "L"];
    const modifiers = ["", "'"];
    const cmoves = ["u","r", "b", "l"];

    const scramble = [];
    let lastMove = "";

    while (scramble.length < 8) {
        const move = moves[Math.floor(Math.random() * moves.length)];
        const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
        const fullMove = move + modifier;

        if (move === lastMove) continue;

        scramble.push(fullMove);

        lastMove = move;
    }
    for(let i = 0;i<4;i++){
        const decision=Math.floor(Math.random())
        if(decision == 1){
                const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
                const fullMove = cmoves[i] + modifier;
                scramble.push(fullMove);
        }
    }

    return scramble;
}
