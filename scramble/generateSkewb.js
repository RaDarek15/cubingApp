function generateSkewb() {
    const moves = ["U", "L", "R", "F", "B"];
    const modifiers = ["", "'"];

    const scramble = [];
    let lastMove = "";

    while (scramble.length < 9) {
        const move = moves[Math.floor(Math.random() * moves.length)];
        const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
        const fullMove = move + modifier;

        if (move === lastMove) continue;

        scramble.push(fullMove);

        lastMove = move;
    }

    return scramble;
}
